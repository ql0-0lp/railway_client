import React from 'react';
import s from './Header.module.css'
import Nav from "../Nav/Nav";
import Logo from "../UI/Logo/Logo"
import {CITIES_ROUTE, INDEX_ROUTE, LOGIN_ROUTE, ROUTES_ROUTE, TICKETS_ROUTE, TRAINS_ROUTE} from "../../consts";

const Header = () => {

    const menu = [
        {to: INDEX_ROUTE, name: <Logo/>},
        {to: TICKETS_ROUTE, name: 'Купить билет'},
        {to: CITIES_ROUTE, name: 'Города'},
        {to: ROUTES_ROUTE, name: 'Маршруты сегодня'},
        {to: LOGIN_ROUTE, name: 'Войти / Зарегестрироваться'},
    ]

    return (
        <header className={s.header}>
            <Nav menu={menu}/>
        </header>
    );
};

export default Header;