import {
    IoAddCircleOutline,
    IoCloseCircleOutline,
    IoCopyOutline,
    IoLockClosedOutline,
    IoLockOpenOutline
} from 'react-icons/io5'
import styled, { css } from 'styled-components'

export const ColorStyled = styled.div<{ color: string }>`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    background: ${(props) => props.color};
    width: 100%;
    height: 100vh;
    gap: 20px;
    padding: 60px 8px;

    @media (max-width: 900px) {
        width: 100vw;
        height: 100%;
        padding: 24px;
        gap: 12px;
        justify-content: center;
    }
`

export const Button = styled.button<{ color: string; textColor: string }>`
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    color: ${(props) => props.textColor};
    padding: 4px 8px;
    border-radius: 8px;

    @media (max-width: 900px) {
        font-size: 18px;
    }

    &:hover {
        background: #ffffff44;
    }
`
export const IoCloseCircleOutlineStyled = styled(IoCloseCircleOutline)<{
    color: string
}>`
    display: none;
    width: 36px;
    height: 36px;
    color: ${(props) => props.color};
    border-radius: 50%;
    cursor: pointer;

    ${ColorStyled}:hover & {
        display: block;
    }

    &:hover {
        background: #ffffff44;
    }

    @media (max-width: 900px) {
        width: 28px;
        height: 28px;
    }
`

export const IoAddCircleOutlineStyled = styled(IoAddCircleOutline)<{
    color: string
    type: 'left' | 'right'
}>`
    display: none;
    position: absolute;
    width: 36px;
    height: 36px;
    color: ${(props) => props.color};
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;

    ${ColorStyled}:hover & {
        display: block;
    }

    &:hover {
        background: #ffffff44;
    }

    @media (max-width: 900px) {
        width: 28px;
        height: 28px;

        ${(props) =>
            props.type === 'left'
                ? css`
                      top: -14px;
                      left: calc(50vw - 14px);
                  `
                : css`
                      bottom: -14px;
                      left: calc(50vw - 14px);
                  `};
    }

    @media (min-width: 901px) {
        ${(props) =>
            props.type === 'left'
                ? css`
                      left: -18px;
                      top: calc(50vh - 18px);
                  `
                : css`
                      right: -18px;
                      top: calc(50vh - 18px);
                  `};
    }
`

export const IoLockClosedOutlineStyled = styled(IoLockClosedOutline)<{
    color: string
}>`
    display: none;
    width: 36px;
    height: 36px;
    color: ${(props) => props.color};
    cursor: pointer;
    border-radius: 20%;
    padding: 1px 0;

    ${ColorStyled}:hover & {
        display: block;
    }

    &:hover {
        background: #ffffff44;
    }

    @media (max-width: 900px) {
        width: 28px;
        height: 28px;
    }
`

export const IoLockOpenOutlineStyled = styled(IoLockOpenOutline)<{
    color: string
}>`
    display: none;
    width: 36px;
    height: 36px;
    color: ${(props) => props.color};
    cursor: pointer;
    border-radius: 20%;
    padding: 1px 0;

    ${ColorStyled}:hover & {
        display: block;
    }

    &:hover {
        background: #ffffff44;
    }

    @media (max-width: 900px) {
        width: 28px;
        height: 28px;
    }
`

export const IoCopyOutlineStyled = styled(IoCopyOutline)<{ color: string }>`
    display: none;
    width: 36px;
    height: 36px;
    color: ${(props) => props.color};
    cursor: pointer;
    border-radius: 20%;

    ${ColorStyled}:hover & {
        display: block;
    }

    &:hover {
        background: #ffffff44;
    }

    @media (max-width: 900px) {
        width: 28px;
        height: 28px;
    }
`
