import styled from 'styled-components'

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    width: 100vw;
    background: #00000024;
    padding: 4px 12px;
    z-index: 9999;

    @media (max-width: 900px) {
        background: none;
    }
`

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #eee;

    @media (max-width: 900px) {
        display: none;
    }
`

export const Button = styled.button`
    border: none;
    background: #eeeeee24;
    border-radius: 4px;
    padding: 4px 8px;
    color: #eee;
    font-size: 16px;
    font-weight: 500;

    @media (min-width: 901px) {
        display: none;
    }
`
