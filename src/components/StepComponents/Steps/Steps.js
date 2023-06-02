import React, {useContext} from 'react';
import s from './Steps.module.css'
import Container from "../../Col/Container/Container";
import StepItem from "../StepItem/StepItem";
import {Context} from "../../../index";

const Steps = () => {

    const {step} = useContext(Context)

    return (
        <section className={s.steps_section}>
            <Container>
                <div className={s.steps_list}>
                    {step.steps.map((step) =>
                        <StepItem key={step.id} num={step.id}>{step.text}</StepItem>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Steps;