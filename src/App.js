import React from 'react'
import styled from 'styled-components'
import Transfer from './containers/Transfer'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const App = () => (
    <Container>
        <Transfer />
    </Container>
)

export default App