import React, { useState } from 'react';

const CustomInput = (props) => {

    // Largely going to mirror cards in construction

    return (
        <div className='CustomInputContainer'>

            {/* Needs to provide a flex with a Label above it and an Input Below it */}
            <div style={{marginBottom: "0.25rem"}}>{props.label}</div>
            {/* Needs to hook to a useState */}
                <input className='CleanForm' name={props.name} value={props.input || props.override} onChange={props.change} type="text"></input>
        </div>
    )
}

export default CustomInput