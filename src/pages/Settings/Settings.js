import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import s from './Settings.module.css'
import PageTitle from "../../PageTitle/PageTitle";
import SettingsRoute from "../../components/SettingsRoute";
import SettingsNav from "../../components/SettingsComponents/SettingsNav/SettingsNav";
import {
    CITIES_ROUTE,
    HUMAN_ROUTE, RAILWAY_STATION_ROUTE,
    ROUTES_ROUTE,
    SEATS_ROUTE, SETTINGS_ROUTE,
    TICKETS_ROUTE, TRAIN_MODEL_ROUTE,
    TRAINS_ROUTE, TYPE_VAN_ROUTE, USER_ROUTE,
    VAN_ROUTE
} from "../../consts";
import {useLocation} from "react-router-dom";

const Settings = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (pathname === USER_ROUTE + SETTINGS_ROUTE || pathname === USER_ROUTE + SETTINGS_ROUTE + '/')
            navigate(USER_ROUTE + SETTINGS_ROUTE + HUMAN_ROUTE)
    }, [])

    const menu = [
        {to: HUMAN_ROUTE, name: 'human'},
        {to: TICKETS_ROUTE, name: 'ticket'},
        {to: ROUTES_ROUTE, name: 'route'},
        {to: SEATS_ROUTE, name: 'seats'},
        {to: TRAINS_ROUTE, name: 'train'},
        {to: VAN_ROUTE, name: 'van'},
        {to: CITIES_ROUTE, name: 'cities'},
        {to: RAILWAY_STATION_ROUTE, name: 'railway station'},
        {to: TRAIN_MODEL_ROUTE, name: 'train model'},
        {to: TYPE_VAN_ROUTE, name: 'type van'},
    ]

    return (
        <main>
            <PageTitle title={'Настройки'}/>
            <section className={s.settings}>
                <div className={s.settings_nav}>
                    <SettingsNav menu={menu}/>
                </div>
                <div className={s.settings_content}>
                    <SettingsRoute/>
                </div>
            </section>
        </main>
    );
};

export default Settings;