import React from 'react';

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        color: 'black',
        cursor: 'pointer'
    };

    return (
        <div onClick={props.click} style={style}>{props.char}</div>
    );
};

export default Char;