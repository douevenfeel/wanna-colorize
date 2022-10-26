import chroma from 'chroma-js'
import React, { useEffect } from 'react'

import { Color } from 'components/Color'

import { refresh } from 'store/colorSlice'

import { useAppDispatch, useAppSelector } from 'hooks/redux'

import { Page } from './HomePage.style'

export const HomePage = () => {
    const { colors, count } = useAppSelector((store) => store.color)
    const dispatch = useAppDispatch()
    useEffect(() => {
        count === 0 && dispatch(refresh())
    }, [count, dispatch])

    return (
        <Page>
            {colors.map((color, index) => (
                <Color
                    key={color}
                    color={color}
                    textColor={
                        chroma(color).luminance() >= 0.5 ? '#222' : '#eee'
                    }
                    isFirst={index === 0}
                    isLast={index === count - 1}
                />
            ))}
        </Page>
    )
}
