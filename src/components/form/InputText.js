import React from 'react'

import './InputText.css';

const InputText = props => {
    return (
        <div className={`${props.className} text-area`}>
            <label htmlFor="name">Your Name</label>
            <input type="text" required />
        </div>
    )
};

export default InputText;