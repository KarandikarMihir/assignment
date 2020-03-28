import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    display: flex;
`

const Input = styled.input.attrs({ className: 'bold', type: 'text' })`
    padding: 5px;
    width: 100%;
    border: 0;
`

const Meta = styled.div`
    width: 25%;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    padding: 5px;
    p {
        font-size: 12px;
        color: #cccccc;
        text-align: right;
        text-transform: uppercase;
    }
`

const CurrencyInput = ({ currency, value, onChange }) => {
    return (
        <Container>
            <Meta>
                <p>{'Amount'}</p>
                <p className="bold">{currency.value}</p>
            </Meta>
            <Input value={value} onChange={onChange} />
        </Container>
    )
}

export default CurrencyInput