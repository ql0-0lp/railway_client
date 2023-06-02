import React, {useContext, useEffect, useState} from 'react';
import s from './RouteDetails.module.css'
import PageTitle from "../../PageTitle/PageTitle";
import Container from "../../components/Col/Container/Container";
import Row from "../../components/Col/Row/Row";
import BlueButton from "../../components/UI/BlueButton/BlueButton";
import {fetchRoutes} from "../../http/routeAPI";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {fetchVans} from "../../http/vanAPI";
import {fetchSeats} from "../../http/seatAPI";
import {createTicket} from "../../http/ticketAPI";
import {ROUTES_ROUTE} from "../../consts";
import {Context} from "../../index";

const RouteDetails = observer(() => {

    const {id} = useParams()
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [route, setRoute] = useState({})
    const [dateOfDeparture, setDateOfDeparture] = useState('')
    const [dateOfArrival, setDateOfArrival] = useState('')

    const [vans, setVans] = useState([])
    const [seats, setSeats] = useState([])

    const [ticket, setTicket] = useState({
        fk_seat_id: '',
        fk_van_id: ''
    })
    const handleChange = (name, value) => {
        setTicket({
            ...ticket,
            [name]: value,
        });
    };

    useEffect(() => {
        fetchRoutes(id).then((data) => {
            setRoute(data.rows[0])
            setDateOfDeparture(setDateTime(data.rows[0].date_of_departure))
            setDateOfArrival(setDateTime(data.rows[0].date_of_arrival))

            fetchVans(data.rows[0].fk_train_id).then((data) => {
                setVans(data)
                handleChange('fk_van_id', data[0].van_id)
            })
        })
    }, [])

    useEffect(() => {
        if (ticket.fk_van_id)
            fetchSeats(ticket.fk_van_id).then((data) => {
                setSeats(data)
                handleChange('fk_seat_id', data[0].seat_id)
            })
    }, [ticket.fk_van_id])

    const setDateTime = (data) => {
        let date = new Date(data)
        console.log(date.getDate())
        return ("0" + date.getDate()).slice(-2) + "." + ("0"+(date.getMonth()+1)).slice(-2) + "." +
            date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    }

    const addTicket = () => {
        try {
            const formData = new FormData()
            formData.append('fk_user_id', user.userId)
            formData.append('fk_route_id', id)
            formData.append('fk_seat_id', ticket.fk_seat_id)
            formData.append('fk_van_id', ticket.fk_van_id)
            createTicket(formData).then(() => navigate(ROUTES_ROUTE))
        } catch (e) {

        }
    }

    return (
        <main>
            <PageTitle title={'Детали маршрута'}/>
            <section className={s.route_details}>
                <Container>
                    <Row>
                        <div className={s.part_of_details}>
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
                        </div>
                        <div className={[s.part_of_details, s.border].join(' ')}>
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
                        <div className={s.part_of_details}>
                            <div>
                                <select
                                    value={ticket.fk_van_id}
                                    onChange={(e) =>
                                            handleChange('fk_van_id', e.target.value)} name="" id="">
                                    {vans?.map((van) =>
                                        <option key={van.van_id} value={van.van_id}>{van.van_name} ({van.fk_type_van})</option>
                                    )}
                                </select>
                                <select
                                    value={ticket.fk_seat_id}
                                    onChange={(e) => handleChange('fk_seat_id', e.target.value)} name="" id="">
                                    {seats?.map((seat) =>
                                        <option key={seat.seat_id} value={seat.seat_id}>{seat.seat_num}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </Row>
                    <BlueButton onClick={() => addTicket()}>Оформить</BlueButton>
                </Container>
            </section>
        </main>
    );
});

export default RouteDetails;