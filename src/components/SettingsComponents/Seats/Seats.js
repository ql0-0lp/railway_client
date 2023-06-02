import React from 'react';
import s from './Seats.module.css'
import {useState} from "react";
import {createSeat, deleteSeat, updateSeat} from "../../../http/seatAPI";
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {deleteRoute} from "../../../http/routeAPI";

const Seats = () => {

    const [addSeats, setAddSeats] = useState({
        seat_id: '',
        seat_num: '',
        fk_van_id: '',
    })
    const editAddSeats = (name, value) => {
        setAddSeats({
            ...addSeats,
            [name]: value,
        });
    }
    const seatsInputs = [
        {title: 'seat_num', value: addSeats.seat_num, name: 'seat_num', type: 'text', onChange: editAddSeats},
        {title: 'fk_van_id', value: addSeats.fk_van_id, name: 'fk_van_id', type: 'text', onChange: editAddSeats},
    ]
    const newSeats = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('seat_num', addSeats.seat_num)
            formData.append('fk_van_id', addSeats.fk_van_id)
            createSeat(formData).then(() =>
                setAddSeats({
                    seat_id: '',
                    seat_num: '',
                    fk_van_id: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const rmSeat = async (e) => {
        try {
            e.preventDefault()
            await deleteSeat(addSeats.seat_id).then(() =>
                setAddSeats({
                    seat_id: '',
                    seat_num: '',
                    fk_van_id: ''
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [editSeats, setEditSeats] = useState({
        seat_id: '',
        seat_num: '',
        fk_van_id: '',
        is_seat_free: '',
    })
    const editEditSeats = (name, value) => {
        setEditSeats({
            ...editSeats,
            [name]: value,
        });
    }
    const editSeatsInputs = [
        {title: 'seat_id', value: editSeats.seat_id, name: 'seat_id', type: 'text', onChange: editEditSeats},
        {title: 'seat_num', value: editSeats.seat_num, name: 'seat_num', type: 'text', onChange: editEditSeats},
        {title: 'fk_van_id', value: editSeats.fk_van_id, name: 'fk_van_id', type: 'text', onChange: editEditSeats},
        {title: 'is_seat_free', value: editSeats.is_seat_free, name: 'is_seat_free', type: 'text', onChange: editEditSeats},
    ]
    const edSeats = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('seat_id', editSeats.seat_id)
            formData.append('seat_num', editSeats.seat_num)
            formData.append('fk_van_id', editSeats.fk_van_id)
            formData.append('is_seat_free', editSeats.is_seat_free)
            updateSeat(formData).then(() =>
                setEditSeats({
                    seat_id: '',
                    seat_num: '',
                    fk_van_id: '',
                    is_seat_free: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div>
            <div className={s.page}>
                <div className={s.page_block}>
                    <h2>Добавить значения</h2>
                    <h3>Укажите новые данные</h3>
                    <form onSubmit={newSeats}>
                        <Row>
                            {seatsInputs.map((item) =>
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
                                <MiniBlueButton onClick={newSeats}>Добавить</MiniBlueButton>
                            </Col>
                        </Row>
                    </form>
                </div>
                <div className={s.page_block}>
                <h2>Удалить значения</h2>
                <h3>Укажите id записи для удаления</h3>
                <form onSubmit={rmSeat}>
                    <Row>
                        <Col colWidth={'col_3'}>
                            <SettingsInput
                                onChange={editAddSeats}
                                name={'seat_id'}
                                value={addSeats.seat_id}
                                type={'text'}
                                title={'seat_id'}
                            />
                        </Col>
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={rmSeat}>Удалить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Изменить значения</h2>
                <h3>Укажите изменяемые данные</h3>
                <form onSubmit={edSeats}>
                    <Row>
                        {editSeatsInputs.map((item) =>
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
                            <MiniBlueButton onClick={edSeats}>Изменить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Seats;