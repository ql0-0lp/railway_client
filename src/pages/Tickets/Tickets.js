import React from 'react';
import PageTitle from "../../PageTitle/PageTitle";
import TicketsList from "../../components/TicketComponents/TicketsList/TicketsList";

const Tickets = () => {

    return (
        <main>
            <PageTitle title={'Мои билеты'}/>
            <TicketsList/>
        </main>
    );
};

export default Tickets;