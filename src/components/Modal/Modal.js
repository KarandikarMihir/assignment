import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(235, 239, 242, 0.5);
`

const Wrapper = styled.div`
    background-color: white;
    @media (max-width: 600px)  { width: 100%; height: 100%; }
    @media (min-width: 601px) {
        box-shadow: 1px 3px 8px rgba(0,0,0,0.2);
        width: 33%;
    }
`

const Modal = ({ title, onClose, children }) => {
    return (
        <Container>
            <Wrapper>
                <Header title={title} onClose={onClose} />
                {children}
            </Wrapper>
        </Container>
    )
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal