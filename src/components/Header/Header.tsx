import React from 'react'

import { refresh } from 'store/colorSlice'

import { useAppDispatch } from 'hooks/redux'

import { Button, HeaderStyled, Paragraph } from './Header.style'

export const Header = () => {
    const dispatch = useAppDispatch()

    const handleRefresh = () => {
        dispatch(refresh())
    }

    return (
        <HeaderStyled>
            <Paragraph>press space to refresh colors</Paragraph>
            <Button onClick={handleRefresh}>refresh</Button>
        </HeaderStyled>
    )
}
