import React from 'react';
import s from './MiniLogo.module.css'
import TrainSVG from "../../svg/TrainSVG";

const MiniLogo = () => {
    return (
        <div className={s.logo_block}>
            <TrainSVG/>
            <h3>Railway</h3>
        </div>
    );
};

export default MiniLogo;