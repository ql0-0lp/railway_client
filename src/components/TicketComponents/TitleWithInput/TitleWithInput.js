import React from 'react';
import s from './TitleWithInput.module.css'
import cn from "classnames";

const TitleWithInput = ({className, name, title, children}) => {
    return (
        <div className={s.block}>
            <label className={cn({ [s[`${className}`]]: className })} htmlFor={name}>{title}</label>
            {children}
        </div>
    );
};

export default TitleWithInput;