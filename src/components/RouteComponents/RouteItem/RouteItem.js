import React, {useEffect, useState} from 'react';
import s from './RouteItem.module.css'
import MiniLogo from "../../UI/MiniLogo/MiniLogo";
import {useNavigate} from "react-router-dom";
import {ROUTES_ROUTE} from "../../../consts";

const RouteItem = ({route}) => {

    const navigate = useNavigate()

    const [dateOfDeparture, setDateOfDeparture] = useState('')
    const [dateOfArrival, setDateOfArrival] = useState('')

    useEffect(() => {
        setDateOfDeparture(setDateTime(route.date_of_departure))
        setDateOfArrival(setDateTime(route.date_of_arrival))
    }, [])

    const setDateTime = (data) => {
        let date = new Date(data)
        console.log(date.getDate())
        const result = ("0" + date.getDate()).slice(-2) + "." + ("0"+(date.getMonth()+1)).slice(-2) + "." +
            date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
        return result
    }

    return (
        <div className={s.route}>
            <div className={s.route_header}>
                <MiniLogo/>
            </div>
            <div className={s.route_content}>
                <div>
                    <div>
                        <span>Дата отправления</span>
                        <p>{dateOfDeparture}</p>
                    </div>
                    <div>
                        <span>Станция отправления</span>
                        <p>{route.departure_station}</p>
                    </div>
                    <div>
                        <span>Город отправления</span>
                        <p>{route.departure_city}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <span>Дата прибытия</span>
                        <p>{dateOfArrival}</p>
                    </div>
                    <div>
                        <span>Станция прибытия</span>
                        <p>{route.arrival_station}</p>
                    </div>
                    <div>
                        <span>Город прибытия</span>
                        <p>{route.arrival_city}</p>
                    </div>
                </div>
            </div>
            <div className={s.route_button}>
                <button type="button" onClick={() => navigate(ROUTES_ROUTE + '/' + route.route_id)}>Перейти к деталям оформления</button>
            </div>
        </div>
    );
};

export default RouteItem;