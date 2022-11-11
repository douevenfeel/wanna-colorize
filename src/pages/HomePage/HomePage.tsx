import chroma from 'chroma-js'
import React, { useEffect } from 'react'

import { Color } from 'components/Color'

import { refresh, reset } from 'store/colorSlice'

import { useAppDispatch, useAppSelector } from 'hooks/redux'

import { Page } from './HomePage.style'

export const HomePage = () => {
    const { colors, count } = useAppSelector((store) => store.color)
    const dispatch = useAppDispatch()
    useEffect(() => {
        count === 0 && dispatch(reset())
    }, [count, dispatch])

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.code === 'Space' && dispatch(refresh())
    }

    return (
        <Page onKeyUp={handleKeyPress} tabIndex={-1}>
            {colors.map((color, index) => (
                <Color
                    key={`${color}${index}`}
                    color={color.color}
                    textColor={
                        chroma(color.color).luminance() >= 0.5 ? '#222' : '#eee'
                    }
                    isFirst={index === 0}
                    isLast={index === count - 1}
                    isLocked={color.isLocked}
                />
            ))}
        </Page>
    )
}
