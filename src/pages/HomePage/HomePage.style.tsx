import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`
