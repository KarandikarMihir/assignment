import React from 'react'
import qs from 'query-string'
import useVisibility from '../../hooks/useVisibility'
import Modal from '../../components/Modal'
import Form from './Form'

const URL = 'https://wazirx-transfers-d7ta793lwrm1.runkit.sh/transfers'

const submit = (body) => {
    return fetch(URL, {
        method: 'post',
        body: qs.stringify(body),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }).then(() => alert('Amount transfered!'))
    .catch(() => alert('Something went wrong, please try again'))
}

const Transfer = () => {
    const { isVisible, show, hide } = useVisibility(true)
    return (
        <>
            <button onClick={show}>{'Click Here'}</button>
            {isVisible && (
                <Modal title="Transer to Binance" onClose={hide}>
                    <Form submit={submit} />
                </Modal>
            )}
        </>
    )
}

export default Transfer