import React, {useContext, useEffect} from 'react';
import s from './TicketsList.module.css'
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import TicketItem from "../TicketItem/TicketItem";
import Container from "../../Col/Container/Container";
import {fetchTickets} from "../../../http/ticketAPI";

const TicketsList = observer(() => {

    const {ticket} = useContext(Context)
    const {user} = useContext(Context)

    useEffect(() => {
      reload()
    }, [user])

    const reload = () => {
        fetchTickets(user.userId).then((data) => ticket.setTickets(data.rows))
    }

    return (
        <section className={s.tickets}>
            <Container>
                <div className={s.block}>
                    {ticket.tickets.map((ticket) =>
                        <TicketItem key={ticket.ticket_id} reload={reload} ticket={ticket}/>
                    )}
                </div>
            </Container>
        </section>
    );
});

export default TicketsList;