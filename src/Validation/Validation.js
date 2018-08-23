import React from 'react';

const validationMessage = (length) => {
    let message = null;

    if (length < 5) {
        message = 'Text too short';
    } else if (length > 10) {
        message = 'Text too long';
    }

    if (message) {
        return <div>{message}</div>;
    }

    return null;
}

const validation = (props) => {
    let message = validationMessage(props.length);

    return (
        <div>{message}</div>
    )
}

export default validation;