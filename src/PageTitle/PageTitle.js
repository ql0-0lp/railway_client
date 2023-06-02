import React from 'react';
import s from './PageTitle.module.css'

const PageTitle = ({SVG, title}) => {
    return (
        <div className={s.block}>
            {/*<SVG/>*/}
            <h1>{title}</h1>
        </div>
    );
};

export default PageTitle;