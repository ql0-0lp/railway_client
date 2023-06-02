import React from 'react';
import s from './Index.module.css'
import Steps from "../../components/StepComponents/Steps/Steps";
import IndexFilter from "../../components/IndexFilter/IndexFilter";

const Index = () => {

    return (
        <main className={s.main}>
            <IndexFilter/>
            <Steps/>
        </main>
    );
};

export default Index;