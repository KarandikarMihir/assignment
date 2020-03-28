import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import closeIcon from './close.svg'

const Container = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`

const CloseIcon = styled.img.attrs({ src: closeIcon })`
    width: 15px;
    cursor: pointer;
`

const Header = ({ title, onClose }) => {
    return (
        <Container>
            <p className="bold">{title}</p>
            <CloseIcon onClick={onClose} alt="Close" />
        </Container>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Header