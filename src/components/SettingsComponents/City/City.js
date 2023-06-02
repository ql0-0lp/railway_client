import React from 'react';
import s from './City.module.css'
import {useState} from "react";
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {createCity, deleteCity} from "../../../http/cityAPI";

const City = () => {

    const [addCity, setAddCity] = useState({
        city_name: '',
    })
    const editAddCity = (name, value) => {
        setAddCity({
            ...addCity,
            [name]: value,
        });
    }
    const cityInputs = [
        {title: 'city_name', value: addCity.city_name, name: 'city_name', type: 'text', onChange: editAddCity},
    ]
    const newCity = async (e) => {
        try {
            e.preventDefault()
            createCity(addCity.city_name).then(() =>
                setAddCity({
                    city_name: ''
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [removeCity, setRemoveCity] = useState({
        city_name: '',
    })
    const editRemoveCity = (name, value) => {
        setRemoveCity({
            ...removeCity,
            [name]: value,
        });
    }
    const rmCity = async (e) => {
        try {
            e.preventDefault()
            deleteCity(removeCity.city_name).then(() =>
                setRemoveCity({
                    city_name: ''
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
                    <form onSubmit={newCity}>
                        <Row>
                            {cityInputs.map((item) =>
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
                                <MiniBlueButton onClick={newCity}>Добавить</MiniBlueButton>
                            </Col>
                        </Row>
                    </form>
                </div>
                <div className={s.page_block}>
                    <h2>Удалить значения</h2>
                    <h3>Укажите id записи для удаления</h3>
                    <form onSubmit={rmCity}>
                        <Row>
                            <Col colWidth={'col_3'}>
                                <SettingsInput
                                    onChange={editRemoveCity}
                                    name={'city_name'}
                                    value={removeCity.city_name}
                                    type={'text'}
                                    title={'city_name'}
                                />
                            </Col>
                            <Col colWidth={'col_3'}>
                                <MiniBlueButton onClick={rmCity}>Удалить</MiniBlueButton>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default City;