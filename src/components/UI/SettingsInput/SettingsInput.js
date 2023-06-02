import React from 'react';
import s from './SettingsInput.module.css'

const SettingsInput = ({name, title, value, onChange, type}) => {
    return (
        <div className={s.block}>
            <label htmlFor={name}>{title}</label>
            <input
                name={name}
                id={name}
                type={type}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
            />
        </div>
    );
};

export default SettingsInput;