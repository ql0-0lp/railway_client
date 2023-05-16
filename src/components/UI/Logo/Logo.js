import React from 'react';
import TrainSVG from "../../svg/TrainSVG";
import s from './Logo.module.css'

const Logo = () => {
    return (
        <div className={s.logo_block}>
            <TrainSVG/>
            <h3>Railway</h3>
        </div>
    );
};

export default Logo;