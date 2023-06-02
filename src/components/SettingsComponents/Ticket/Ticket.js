import React, {useState} from 'react';
import s from './Ticket.module.css'
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {createTicket, deleteTicket, updateTicket} from "../../../http/ticketAPI";

const Human = () => {

    const [addTick, setAddTick] = useState({
        ticket_id: '',
        fk_user_id: '',
        fk_route_id: '',
        fk_seat_id: '',
        fk_van_id: '',
    })
    const editAddTicket = (name, value) => {
        setAddTick({
            ...addTick,
            [name]: value,
        });
    };
    const addTicket = [
        {title: 'fk_user_id', value: addTick.fk_user_id, name: 'fk_user_id', type: 'text', onChange: editAddTicket},
        {title: 'fk_route_id', value: addTick.fk_route_id, name: 'fk_route_id', type: 'text', onChange: editAddTicket},
        {title: 'fk_seat_id', value: addTick.fk_seat_id, name: 'fk_seat_id', type: 'text', onChange: editAddTicket},
        {title: 'fk_van_id', value: addTick.fk_van_id, name: 'fk_van_id', type: 'text', onChange: editAddTicket},
    ]
    const newTicket = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('fk_user_id', addTick.fk_user_id)
            formData.append('fk_route_id', addTick.fk_route_id)
            formData.append('fk_seat_id', addTick.fk_seat_id)
            formData.append('fk_van_id', addTick.fk_van_id)
            createTicket(formData).then(() =>
                setAddTick({
                    ticket_id: '',
                    fk_user_id: '',
                    fk_route_id: '',
                    fk_seat_id: '',
                    fk_van_id: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const rmTicket = async (e) => {
        try {
            await deleteTicket(addTicket.ticket_id).then(() =>
                setAddTick({
                    ticket_id: '',
                    fk_user_id: '',
                    fk_route_id: '',
                    fk_seat_id: '',
                    fk_van_id: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [editTick, setEditTick] = useState({
        ticket_id: '',
        fk_user_id: '',
        fk_route_id: '',
        fk_seat_id: '',
        fk_van_id: '',
    })
    const editEditTicket = (name, value) => {
        setEditTick({
            ...editTick,
            [name]: value,
        });
    };
    const addEditTicket = [
        {title: 'ticket_id', value: editTick.ticket_id, name: 'ticket_id', type: 'text', onChange: editEditTicket},
        {title: 'fk_user_id', value: editTick.fk_user_id, name: 'fk_user_id', type: 'text', onChange: editEditTicket},
        {title: 'fk_route_id', value: editTick.fk_route_id, name: 'fk_route_id', type: 'text', onChange: editEditTicket},
        {title: 'fk_seat_id', value: editTick.fk_seat_id, name: 'fk_seat_id', type: 'text', onChange: editEditTicket},
        {title: 'fk_van_id', value: editTick.fk_van_id, name: 'fk_van_id', type: 'text', onChange: editEditTicket},
    ]
    const edTicket = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('ticket_id', editTick.ticket_id)
            formData.append('fk_user_id', editTick.fk_user_id)
            formData.append('fk_route_id', editTick.fk_route_id)
            formData.append('fk_seat_id', editTick.fk_seat_id)
            formData.append('fk_van_id', editTick.fk_van_id)
            await updateTicket(formData).then(() =>
                setEditTick({
                    ticket_id: '',
                    fk_user_id: '',
                    fk_route_id: '',
                    fk_seat_id: '',
                    fk_van_id: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className={s.page}>
            <div className={s.page_block}>
                <h2>Добавить значения</h2>
                <h3>Укажите новые данные</h3>
                <form onSubmit={newTicket}>
                    <Row>
                        {addTicket.map((item) =>
                            <Col colWidth={'col_3'}>
                                <SettingsInput
                                    key={item.title}
                                    onChange={item.onChange}
                                    name={item.name}
                                    value={item.value}
                                    type={item.type}
                                    title={item.title}
                                />
                            </Col>
                        )}
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={newTicket}>Добавить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Удалить значения</h2>
                <h3>Укажите id записи для удаления</h3>
                <form onSubmit={rmTicket}>
                    <Row>
                        <Col colWidth={'col_3'}>
                            <SettingsInput
                                onChange={editTick}
                                name={'id'}
                                value={addTicket.ticket_id}
                                type={'text'}
                                title={'id'}
                            />
                        </Col>
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={rmTicket}>Удалить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Изменить значения</h2>
                <h3>Укажите изменяемые данные <span>(логин изменить нельзя)</span></h3>
                <form onSubmit={edTicket}>
                    <Row>
                        {addEditTicket.map((item) =>
                            <Col colWidth={'col_3'}>
                                <SettingsInput
                                    key={item.title}
                                    onChange={item.onChange}
                                    name={item.name}
                                    value={item.value}
                                    type={item.type}
                                    title={item.title}
                                />
                            </Col>
                        )}
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={edTicket}>Изменить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    );
};

export default Human;