import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Select from 'react-select'
import config from './config'
import Parties from './Parties'
import CurrencyInput from './CurrencyInput'

const NUMBER_REGEX = /^\d+$/

const Container = styled.div`
    padding: 20px;
`

const Button = styled.button`
    border: 0;
    padding: 15px;
    width: 100%;
    background-color: #3366ff;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
`

const Footnote = styled.p`
    color: #CCCCCC;
    margin-top: 15px;
`

const Form = ({ submit }) => {
    const { parties, currencies } = config
    const [selectedCurrency, selectCurrency] = useState(currencies[0])
    const [amount, setAmount] = useState(0)

    const onAmountChange = (e) => {
        if (e.target.value === '' || NUMBER_REGEX.test(e.target.value)) {
            setAmount(e.target.value)
        }
    }

    const onSubmit = () => {
        submit({
            amount,
            currency: selectedCurrency.value
        })
    }

    return (
        <Container>
            <Parties parties={parties} />
            <Select
                className="mb-8"
                options={currencies}
                value={selectedCurrency}
                onChange={selectCurrency}
            />
            <CurrencyInput currency={selectedCurrency} value={amount} onChange={onAmountChange} />
            <Button className="mt-8" onClick={onSubmit}>{'Transfer to Binance'}</Button>
            <Footnote>{'Fee: 0'}</Footnote>
        </Container>
    )
}

Form.propTypes = {
    submit: PropTypes.func.isRequired
}

export default Form