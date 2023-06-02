import React, {useEffect} from 'react';
import s from './RoutesList.module.css'
import {useContext} from "react";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import RouteItem from "../RouteItem/RouteItem";
import {fetchRoutes} from "../../../http/routeAPI";

const RoutesList = observer(({route}) => {

    return (
        <div className={s.block}>
            {route.routes.map((route) =>
                <RouteItem key={route.route_id} route={route}/>
            )}
        </div>
    );
});

export default RoutesList;