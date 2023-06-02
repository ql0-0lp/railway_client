import React, {useState} from 'react';
import s from './Route.module.css'
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {createRoute, deleteRoute, updateRoute} from "../../../http/routeAPI";
import {deleteTicket} from "../../../http/ticketAPI";

const Route = () => {

    const [addRoute, setAddRoute] = useState({
        route_id: '',
        date_of_departure: '',
        date_of_arrival: '',
        fk_departure_station: '',
        fk_arrival_station: '',
        fk_train_id: ''
    })
    const editAddRoute = (name, value) => {
        setAddRoute({
            ...addRoute,
            [name]: value,
        });
    }
    const routeInputs = [
        {title: 'date_of_departure', value: addRoute.date_of_departure, name: 'date_of_departure', type: 'text', onChange: editAddRoute},
        {title: 'date_of_arrival', value: addRoute.date_of_arrival, name: 'date_of_arrival', type: 'text', onChange: editAddRoute},
        {title: 'fk_departure_station', value: addRoute.fk_departure_station, name: 'fk_departure_station', type: 'text', onChange: editAddRoute},
        {title: 'fk_arrival_station', value: addRoute.fk_arrival_station, name: 'fk_arrival_station', type: 'text', onChange: editAddRoute},
        {title: 'fk_train_id', value: addRoute.fk_train_id, name: 'fk_train_id', type: 'text', onChange: editAddRoute},
    ]
    const newRoute = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('date_of_departure', addRoute.date_of_departure)
            formData.append('date_of_arrival', addRoute.date_of_arrival)
            formData.append('fk_departure_station', addRoute.fk_departure_station)
            formData.append('fk_arrival_station', addRoute.fk_arrival_station)
            formData.append('fk_train_id', addRoute.fk_train_id)
            createRoute(formData).then(() =>
                setAddRoute({
                    rout_id: '',
                    date_of_departure: '',
                    date_of_arrival: '',
                    fk_departure_station: '',
                    fk_arrival_station: '',
                    fk_train_id: ''
                })
            )
        } catch (e) {
            
        }
    }

    const rmRoute = async (e) => {
        try {
            e.preventDefault()
            await deleteRoute(addRoute.route_id).then(() =>
                setAddRoute({
                    route_id: '',
                    date_of_departure: '',
                    date_of_arrival: '',
                    fk_departure_station: '',
                    fk_arrival_station: '',
                    fk_train_id: ''
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [editRoute, setEditRoute] = useState({
        route_id: '',
        date_of_departure: '',
        date_of_arrival: '',
        fk_departure_station: '',
        fk_arrival_station: '',
        fk_train_id: ''
    })
    const editEditRoute = (name, value) => {
        setEditRoute({
            ...editRoute,
            [name]: value,
        });
    }
    const editRouteInputs = [
        {title: 'route_id', value: editRoute.route_id, name: 'route_id', type: 'text', onChange: editEditRoute},
        {title: 'date_of_departure', value: editRoute.date_of_departure, name: 'date_of_departure', type: 'text', onChange: editEditRoute},
        {title: 'date_of_arrival', value: editRoute.date_of_arrival, name: 'date_of_arrival', type: 'text', onChange: editEditRoute},
        {title: 'fk_departure_station', value: editRoute.fk_departure_station, name: 'fk_departure_station', type: 'text', onChange: editEditRoute},
        {title: 'fk_arrival_station', value: editRoute.fk_arrival_station, name: 'fk_arrival_station', type: 'text', onChange: editEditRoute},
        {title: 'fk_train_id', value: editRoute.fk_train_id, name: 'fk_train_id', type: 'text', onChange: editEditRoute},
    ]
    const edRoute = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('route_id', editRoute.route_id)
            formData.append('date_of_departure', editRoute.date_of_departure)
            formData.append('date_of_arrival', editRoute.date_of_arrival)
            formData.append('fk_departure_station', editRoute.fk_departure_station)
            formData.append('fk_arrival_station', editRoute.fk_arrival_station)
            formData.append('fk_train_id', editRoute.fk_train_id)
            updateRoute(formData).then(() =>
                setEditRoute({
                    route_id: '',
                    date_of_departure: '',
                    date_of_arrival: '',
                    fk_departure_station: '',
                    fk_arrival_station: '',
                    fk_train_id: ''
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
                <form onSubmit={newRoute}>
                    <Row>
                        {routeInputs.map((item) =>
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
                            <MiniBlueButton onClick={newRoute}>Добавить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Удалить значения</h2>
                <h3>Укажите id записи для удаления</h3>
                <form onSubmit={rmRoute}>
                    <Row>
                        <Col colWidth={'col_3'}>
                            <SettingsInput
                                onChange={editAddRoute}
                                name={'route_id'}
                                value={addRoute.route_id}
                                type={'text'}
                                title={'route_id'}
                            />
                        </Col>
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={rmRoute}>Удалить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Изменить значения</h2>
                <h3>Укажите изменяемые данные</h3>
                <form onSubmit={edRoute}>
                    <Row>
                        {editRouteInputs.map((item) =>
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
                            <MiniBlueButton onClick={edRoute}>Изменить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    );
};

export default Route;