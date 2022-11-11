import React from 'react'

import { Button, HeaderStyled, Paragraph } from './Header.style'

export const Header = () => {
    return (
        <HeaderStyled>
            <Paragraph>press space to refresh colors</Paragraph>
            <Button>refresh</Button>
        </HeaderStyled>
    )
}
