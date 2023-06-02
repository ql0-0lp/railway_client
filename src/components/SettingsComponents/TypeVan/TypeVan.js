import React from 'react';
import s from './TypeVan.module.css'
import {useState} from "react";
import {createSeat} from "../../../http/seatAPI";
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {createTrain} from "../../../http/trainAPI";
import {createTrainModel, deleteTrainModel} from "../../../http/trainModelAPI";
import {createTypeVan, deleteTypeVan, updateTypeVan} from "../../../http/typeVanAPI";

const TypeVan = () => {

    const [addTypeVan, setAddTypeVan] = useState({
        type_van_name: '',
        seat_count: '',
    })
    const editAddTypeVan = (name, value) => {
        setAddTypeVan({
            ...addTypeVan,
            [name]: value,
        });
    }
    const typeVanInputs = [
        {title: 'type_van_name', value: addTypeVan.type_van_name, name: 'type_van_name', type: 'text', onChange: editAddTypeVan},
        {title: 'seat_count', value: addTypeVan.seat_count, name: 'seat_count', type: 'text', onChange: editAddTypeVan},
    ]
    const newTypeVan = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('type_van_name', addTypeVan.type_van_name)
            formData.append('seat_count', addTypeVan.seat_count)
            await createTypeVan(formData).then(() =>
                setAddTypeVan({
                    type_van_name: '',
                    seat_count: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [editTypeVan, setEditTypeVan] = useState({
        type_van_name: '',
        seat_count: '',
    })
    const editEditTypeVan = (name, value) => {
        setEditTypeVan({
            ...editTypeVan,
            [name]: value,
        });
    }
    const editTypeVanInputs = [
        {title: 'type_van_name', value: editTypeVan.type_van_name, name: 'type_van_name', type: 'text', onChange: editEditTypeVan},
        {title: 'seat_count', value: editTypeVan.seat_count, name: 'seat_count', type: 'text', onChange: editEditTypeVan},
    ]
    const edTypeVan = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('type_van_name', editTypeVan.type_van_name)
            formData.append('seat_count', editTypeVan.seat_count)
            await updateTypeVan(formData).then(() =>
                setEditTypeVan({
                    type_van_name: '',
                    seat_count: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [delTypeVan, setDelTypeVan] = useState({
        type_van_name: '',
    })
    const editDelTypeVan = (name, value) => {
        setDelTypeVan({
            ...delTypeVan,
            [name]: value,
        });
    }
    const rmTypeVan = async (e) => {
        try {
            e.preventDefault()
            await deleteTypeVan(delTypeVan.type_van_name).then(() =>
                setDelTypeVan({
                    type_van_name: '',
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
                    <form onSubmit={newTypeVan}>
                        <Row>
                            {typeVanInputs.map((item) =>
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
                                <MiniBlueButton onClick={newTypeVan}>Добавить</MiniBlueButton>
                            </Col>
                        </Row>
                    </form>
                </div>
                <div className={s.page_block}>
                <h2>Удалить значения</h2>
                <h3>Укажите id записи для удаления</h3>
                <form onSubmit={rmTypeVan}>
                    <Row>
                        <Col colWidth={'col_3'}>
                            <SettingsInput
                                onChange={editDelTypeVan}
                                name={'type_van_name'}
                                value={delTypeVan.type_van_name}
                                type={'text'}
                                title={'type_van_name'}
                            />
                        </Col>
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={rmTypeVan}>Удалить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Изменить значения</h2>
                <h3>Укажите изменяемые данные</h3>
                <form onSubmit={edTypeVan}>
                    <Row>
                        {editTypeVanInputs.map((item) =>
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
                            <MiniBlueButton onClick={edTypeVan}>Изменить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            </div>
        </div>
    );
};

export default TypeVan;