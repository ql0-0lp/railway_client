import React from 'react';
import s from './Header.module.css'
import Nav from "../Nav/Nav";
import Logo from "../UI/Logo/Logo"
import {
    CITIES_ROUTE,
    INDEX_ROUTE,
    LOGIN_ROUTE,
    ROUTES_ROUTE,
    ROUTES_TODAY_ROUTE,
    TICKETS_ROUTE,
    TRAINS_ROUTE
} from "../../consts";

const Header = () => {

    const menu = [
        {to: INDEX_ROUTE, name: <Logo/>},
        {to: ROUTES_ROUTE, name: 'Все маршруты'},
        {to: ROUTES_TODAY_ROUTE, name: 'Маршруты сегодня'},
    ]

    return (
        <header className={s.header}>
            <Nav menu={menu}/>
        </header>
    );
};

export default Header;