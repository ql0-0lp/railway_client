import React, {useContext} from 'react';
import s from './RouteFilterBar.module.css'
import TitleWithFilterInput from "../../TicketComponents/TitleWithFilterInput/TitleWithFilterInput";
import SmallInput from "../../UI/SmallInput/SmallInput";
import {useState} from "react";
import {Context} from "../../../index";
import {fetchRoutes} from "../../../http/routeAPI";
import {observe} from "mobx";
import {observer} from "mobx-react-lite";

const RouteFilterBar = observer(() => {

    const {route} = useContext(Context)

    const handleChange = (name, value) => {
        route.setFilter({
            ...route.filter,
            [name]: value,
        });
    };

    const filterRoute = async () => {
        try {
            fetchRoutes('', route.filter.from, route.filter.to, route.filter.departureDate).then((data) => {
                console.log(data.rows)
                route.setRoutes(data.rows)
                }
            )
        } catch (e) {

        }
    }

    return (
        <div className={s.filter}>
            <h2>По выбранным параметрам</h2>
            <TitleWithFilterInput title={'Откуда'} name={'from'}>
                <SmallInput
                    name={'from'}
                    value={route.filter.from}
                    type={'text'}
                    onChange={handleChange}
                />
            </TitleWithFilterInput>
            <TitleWithFilterInput title={'Куда'} name={'to'}>
                <SmallInput
                    name={'to'}
                    value={route.filter.to}
                    type={'text'}
                    onChange={handleChange}
                />
            </TitleWithFilterInput>
            <TitleWithFilterInput title={'Дата отправления'} name={'departureDate'}>
                <SmallInput
                    name={'departureDate'}
                    value={route.filter.departureDate}
                    type={'date'}
                    onChange={handleChange}
                />
            </TitleWithFilterInput>
            {/*<button onClick={filterRoute}>Фильтр</button>*/}
            <h2>мы нашли следующие маршруты</h2>
        </div>
    );
});

export default RouteFilterBar;