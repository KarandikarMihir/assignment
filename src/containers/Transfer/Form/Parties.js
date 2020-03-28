import React from 'react'
import styled from 'styled-components'
import arrowIcon from './arrow.svg'

const PartiesWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
    @media (max-width: 600px)  { flex-direction: column; }
`

const Party = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
`

const Parties = ({ parties }) => {
    const { from, to } = parties
    return (
        <PartiesWrapper>
            <Party>
                <img className="mr-4" src={from.icon} alt="arrow" />
                <p className="bold">{from.label}</p>
            </Party>
            <img className="mx-4" src={arrowIcon} alt="arrow" />
            <Party>
                <img className="mr-4" src={to.icon} alt="arrow" />
                <p className="bold">{to.label}</p>
            </Party>
        </PartiesWrapper>
    )
}

export default Parties