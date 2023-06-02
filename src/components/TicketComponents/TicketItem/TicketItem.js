import React, {useEffect, useState} from 'react';
import s from './TicketItem.module.css'
import MiniLogo from "../../UI/MiniLogo/MiniLogo";
import TrashSVG from "../../svg/TrashSVG";
import {observer} from "mobx-react-lite";
import {deleteTicket, fetchTickets} from "../../../http/ticketAPI";

const TicketItem = observer(({ticket, reload}) => {

    const [from, setFrom] = useState()
    const [to, setTo] = useState()

    useEffect(() => {
        setFrom(setDateTime(ticket.date_of_departure))
        setTo(setDateTime(ticket.date_of_arrival))
    }, [])

    const setDateTime = (data) => {
        let date = new Date(data)
        console.log(date.getDate())
        const result = ("0" + date.getDate()).slice(-2) + "." + ("0"+(date.getMonth()+1)).slice(-2) + "." +
            date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
        return result
    }

    const delTicket = () => {
        deleteTicket(ticket.ticket_id).then(() => reload())
    }

    return (
        <div className={s.ticket}>
            <div className={s.ticket_content}>
                <div className={s.ticket_header}>
                    <h2>Билет на поезд</h2>
                    <MiniLogo/>
                </div>
                <div className={s.ticket_info}>
                    <div className={s.info_about_user}>
                        <span>Пассижир</span>
                        <p>{ticket.user_last_name} {ticket.user_name} {ticket.user_patronymic}</p>
                        <div className={s.train_info}>
                            <div>
                                <div>
                                    <span>Данные документа</span>
                                    <p>{ticket.user_document}</p>
                                </div>
                                <div>
                                    <span>Номер места</span>
                                    <p>{ticket.seat_num}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Тип вагона</span>
                                    <p>{ticket.van_type}</p>
                                </div>
                                <div>
                                    <span>Номер поезда</span>
                                    <p>{ticket.fk_train_id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.info_about_route}>
                        <div className={s.train_info}>
                            <div>
                                <div>
                                    <span>Дата отправления</span>
                                    <p>{from}</p>
                                </div>
                                <div>
                                    <span>Станция отправления</span>
                                    <p>{ticket.departure_station}</p>
                                </div>
                                <div>
                                    <span>Город отправления</span>
                                    <p>{ticket.departure_city}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>Дата прибытия</span>
                                    <p>{to}</p>
                                </div>
                                <div>
                                    <span>Станция прибытия</span>
                                    <p>{ticket.arrival_station}</p>
                                </div>
                                <div>
                                    <span>Город прибытия</span>
                                    <p>{ticket.arrival_city}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.ticket_remove}>
                <button onClick={() => delTicket()}><TrashSVG/></button>
            </div>
        </div>
    );
});

export default TicketItem;