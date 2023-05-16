import React from 'react';
import {Link} from "react-router-dom";
import s from './Nav.module.css'

const Nav = ({menu}) => {
    return (
        <nav>
            <ul className={s.nav_menu}>
                {menu.map((item) =>
                    <li className={s.nav_menu_link}
                        key={item.to}>
                        <Link to={item.to}>{item.name}</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Nav;