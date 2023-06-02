import React from 'react';
import s from './RailwayStation.module.css'
import {useState} from "react";
import {createSeat} from "../../../http/seatAPI";
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {createCity} from "../../../http/cityAPI";
import {createRailwayStation, deleteRailwayStation, updateRailwayStation} from "../../../http/railwayStationAPI";
import {deleteRoute} from "../../../http/routeAPI";

const RailwayStation = () => {

    const [addRailwayStation, setAddRailwayStation] = useState({
        railway_station_id: '',
        railway_station_name: '',
        fk_city_name: '',
    })
    const editAddRailwayStation = (name, value) => {
        setAddRailwayStation({
            ...addRailwayStation,
            [name]: value,
        });
    }
    const railwayStationInputs = [
        {title: 'railway_station_name', value: addRailwayStation.railway_station_name, name: 'railway_station_name', type: 'text', onChange: editAddRailwayStation},
        {title: 'fk_city_name', value: addRailwayStation.fk_city_name, name: 'fk_city_name', type: 'text', onChange: editAddRailwayStation},
    ]
    const newRailwayStation = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('railway_station_name', addRailwayStation.railway_station_name)
            formData.append('fk_city_name', addRailwayStation.fk_city_name)
            createRailwayStation(formData).then(() =>
                setAddRailwayStation({
                    railway_station_id: '',
                    railway_station_name: '',
                    fk_city_name: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const rmRailwayStation = async (e) => {
        try {
            e.preventDefault()
            await deleteRailwayStation(addRailwayStation.railway_station_id).then(() =>
                setAddRailwayStation({
                    railway_station_id: '',
                    railway_station_name: '',
                    fk_city_name: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [editRailwayStation, setEditRailwayStation] = useState({
        railway_station_id: '',
        railway_station_name: '',
    })
    const editEditRailwayStation = (name, value) => {
        setEditRailwayStation({
            ...editRailwayStation,
            [name]: value,
        });
    }
    const editRailwayStationInputs = [
        {title: 'railway_station_id', value: editRailwayStation.railway_station_id, name: 'railway_station_id', type: 'text', onChange: editEditRailwayStation},
        {title: 'railway_station_name', value: editRailwayStation.railway_station_name, name: 'railway_station_name', type: 'text', onChange: editEditRailwayStation},
    ]
    const edRailwayStation = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('railway_station_id', editRailwayStation.railway_station_id)
            formData.append('railway_station_name', editRailwayStation.railway_station_name)
            updateRailwayStation(formData).then(() =>
                setEditRailwayStation({
                    railway_station_id: '',
                    railway_station_name: '',
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
                    <form onSubmit={newRailwayStation}>
                        <Row>
                            {railwayStationInputs.map((item) =>
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
                                <MiniBlueButton onClick={newRailwayStation}>Добавить</MiniBlueButton>
                            </Col>
                        </Row>
                    </form>
                </div>
                <div className={s.page_block}>
                <h2>Удалить значения</h2>
                <h3>Укажите id записи для удаления</h3>
                <form onSubmit={rmRailwayStation}>
                    <Row>
                        <Col colWidth={'col_3'}>
                            <SettingsInput
                                onChange={editAddRailwayStation}
                                name={'railway_station_id'}
                                value={addRailwayStation.railway_station_id}
                                type={'text'}
                                title={'railway_station_id'}
                            />
                        </Col>
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={rmRailwayStation}>Удалить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Изменить значения</h2>
                <h3>Укажите изменяемые данные</h3>
                <form onSubmit={edRailwayStation}>
                    <Row>
                        {editRailwayStationInputs.map((item) =>
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
                            <MiniBlueButton onClick={edRailwayStation}>Изменить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            </div>
        </div>
    );
};

export default RailwayStation;