import React from 'react';
import s from './TitleWithFilterInput.module.css'

const TitleWithFilterInput = ({name, title, children}) => {
    return (
        <div className={s.block}>
            <label className={s.filter_title} htmlFor={name}>{title}</label>
            {children}
        </div>
    );
};

export default TitleWithFilterInput;