import React from 'react';
import s from "./Routes.module.css";
import PageTitle from "../../PageTitle/PageTitle";
import Row from "../../components/Col/Row/Row";
import Col from "../../components/Col/Col/Col";
import RoutesList from "../../components/RouteComponents/RoutesList/RoutesList";
import {useLocation} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../../index";
import {useEffect} from "react";
import {fetchRoutes, fetchRoutesToday} from "../../http/routeAPI";
import {observer} from "mobx-react-lite";
import {ROUTES_ROUTE} from "../../consts";

const Routes = observer(() => {

    const {pathname} = useLocation()
    const {route} = useContext(Context)

    useEffect(() => {
        if (pathname === ROUTES_ROUTE)
            fetchRoutes().then((data) => route.setRoutes(data.rows))
        else
            fetchRoutesToday().then((data) => route.setRoutes(data.rows))
    }, [pathname])

    return (
        <main className={s.route}>
            <PageTitle title={'Выбрать маршрут'}/>
            <Row style={{justifyContent: "center"}}>
                <Col colWidth={'col_8'}>
                    <RoutesList route={route}/>
                </Col>
            </Row>
        </main>
    );
});

export default Routes;