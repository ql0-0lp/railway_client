import React from 'react';
import s from './UniversalInput.module.css'
import cn from "classnames";

const UniversalInput = ({className, onChange, value, name, type}) => {
    return (
        <input
            className={cn({ [s[`${className}`]]: className })}
            value={value}
            name={name}
            id={name}
            type={type}
            onChange={(e) => onChange(name, e.target.value)}
        />
    );
};

export default UniversalInput;