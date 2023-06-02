import React, {useEffect} from 'react';
import s from './SettingsNav.module.css'
import {Link, useLocation} from "react-router-dom";
import {SETTINGS_ROUTE, USER_ROUTE} from "../../../consts";

const SettingsNav = ({menu}) => {

    const {pathname} = useLocation()

    return (
        <div className={s.block}>
            <ul className={s.menu}>
                <h2>Таблицы</h2>
                {menu.map(({to, name}) =>
                    <li className={pathname === USER_ROUTE + SETTINGS_ROUTE + to ? s.active : undefined} key={to}>
                        <Link to={USER_ROUTE + SETTINGS_ROUTE + to}>{name}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SettingsNav;