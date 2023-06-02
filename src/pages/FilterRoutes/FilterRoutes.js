import React, {useContext, useEffect} from 'react';
import s from './FilterRoutes.module.css'
import PageTitle from "../../PageTitle/PageTitle";
import Row from "../../components/Col/Row/Row";
import Col from "../../components/Col/Col/Col";
import RoutesList from "../../components/RouteComponents/RoutesList/RoutesList";
import RouteFilterBar from "../../components/RouteComponents/RouteFilterBar/RouteFilterBar";
import {useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {fetchRoutes} from "../../http/routeAPI";
import {Context} from "../../index";

const FilterRoutes = observer(() => {

    const {route} = useContext(Context)

    useEffect(() => {
        fetchRoutes('', route.filter.from, route.filter.to, route.filter.departureDate).then((data) =>
            route.setRoutes(data.rows)
        )
    }, [])

    return (
        <main className={s.route}>
            <PageTitle title={'Выбрать маршрут'}/>
            <Row>
               <Col colWidth={'col_3'}>
                    <RouteFilterBar/>
               </Col>
                <Col colWidth={'col_8'}>
                    <RoutesList route={route}/>
                </Col>
            </Row>
        </main>
    );
});

export default FilterRoutes;