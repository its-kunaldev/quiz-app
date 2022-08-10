import React from 'react'

import './InputText.css';

const InputText = props => {
    return (
        <div className={`${props.className} text-area`}>
            <label htmlFor="name">{props.name}</label>
            <input type={props.type} max='15' required />
        </div>
    )
};

export default InputText;