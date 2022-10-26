import { CiCirclePlus, CiCircleRemove } from 'react-icons/ci'
import styled, { css } from 'styled-components'

import { ColorProps } from './Color.types'

export const ColorStyled = styled.div<ColorProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${(props) => props.color};
    width: 100%;
    height: 100vh;
    gap: 20px;

    @media (max-width: 900px) {
        width: 100vw;
        height: 100%;
        flex-direction: row;
    }
`

export const Button = styled.button<ColorProps>`
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    background: #ffffff44;
    color: ${(props) => props.textColor};
    padding: 8px 12px;
    border-radius: 8px;
`
export const CiCircleRemoveStyled = styled(CiCircleRemove)<{ color: string }>`
    display: none;
    width: 36px;
    height: 36px;
    color: ${(props) => props.color};
    background: #ffffff44;
    border-radius: 50%;
    cursor: pointer;

    ${ColorStyled}:hover & {
        display: block;
    }
`

export const CiCirclePlusStyled = styled(CiCirclePlus)<{
    color: string
    type: 'left' | 'right'
}>`
    display: none;
    position: absolute;
    width: 36px;
    height: 36px;
    color: ${(props) => props.color};
    background: #ffffff44;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;

    ${ColorStyled}:hover & {
        display: block;
    }

    @media (max-width: 900px) {
        ${(props) =>
            props.type === 'left'
                ? css`
                      top: -18px;
                  `
                : css`
                      bottom: -18px;
                  `};
    }

    @media (min-width: 901px) {
        ${(props) =>
            props.type === 'left'
                ? css`
                      left: -18px;
                  `
                : css`
                      right: -18px;
                  `};
    }
`
