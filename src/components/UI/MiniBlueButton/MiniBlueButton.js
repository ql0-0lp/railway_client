import React from 'react';
import s from './MiniBlueButton.module.css'

const MiniBlueButton = ({children, onClick}) => {
    return (
        <button className={s.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default MiniBlueButton;