import React from 'react';
import s from './BlueButton.module.css'

const BlueButton = ({children, onClick, type}) => {
    return (
        <button type={type} onClick={onClick} className={s.button}>
            {children}
        </button>
    );
};

export default BlueButton;