import React from 'react';
import s from './StepItem.module.css'

const StepItem = ({num, children}) => {
    return (
        <div className={s.step}>
            <div className={s.step_num}>
                <span>{num}</span>
            </div>
            <p>{children}</p>
        </div>
    );
};

export default StepItem;