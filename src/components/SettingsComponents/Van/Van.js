import React from 'react';
import s from './Van.module.css'
import {useState} from "react";
import {createSeat} from "../../../http/seatAPI";
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {createVan, deleteVan, updateVan} from "../../../http/vanAPI";
import {deleteTrain} from "../../../http/trainAPI";

const Van = () => {

    const [addVan, setAddVan] = useState({
        van_id: '',
        van_name: '',
        fk_type_van: '',
        fk_train_id: '',
    })
    const editAddVan = (name, value) => {
        setAddVan({
            ...addVan,
            [name]: value,
        });
    }
    const vansInputs = [
        {title: 'van_name', value: addVan.van_name, name: 'van_name', type: 'text', onChange: editAddVan},
        {title: 'fk_type_van', value: addVan.fk_type_van, name: 'fk_type_van', type: 'text', onChange: editAddVan},
        {title: 'fk_train_id', value: addVan.fk_train_id, name: 'fk_train_id', type: 'text', onChange: editAddVan},
    ]
    const newVan = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('van_name', addVan.van_name)
            formData.append('fk_type_van', addVan.fk_type_van)
            formData.append('fk_train_id', addVan.fk_train_id)
            createVan(formData).then(() =>
                setAddVan({
                    van_id: '',
                    van_name: '',
                    fk_type_van: '',
                    fk_train_id: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const rmVan = async (e) => {
        try {
            e.preventDefault()
            await deleteVan(addVan.van_id).then(() =>
                setAddVan({
                    van_id: '',
                    van_name: '',
                    fk_type_van: '',
                    fk_train_id: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [editVan, setEditVan] = useState({
        van_id: '',
        van_name: '',
        fk_type_van: '',
        fk_train_id: '',
    })
    const editEditVan = (name, value) => {
        setEditVan({
            ...editVan,
            [name]: value,
        });
    }
    const editVanInputs = [
        {title: 'van_id', value: editVan.van_id, name: 'van_id', type: 'text', onChange: editEditVan},
        {title: 'van_name', value: editVan.van_name, name: 'van_name', type: 'text', onChange: editEditVan},
        {title: 'fk_type_van', value: editVan.fk_type_van, name: 'fk_type_van', type: 'text', onChange: editEditVan},
        {title: 'fk_train_id', value: editVan.fk_train_id, name: 'fk_train_id', type: 'text', onChange: editEditVan},
    ]
    const edVan = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('van_id', editVan.van_id)
            formData.append('van_name', editVan.van_name)
            formData.append('fk_type_van', editVan.fk_type_van)
            formData.append('fk_train_id', editVan.fk_train_id)
            updateVan(formData).then(() =>
                setEditVan({
                    van_id: '',
                    van_name: '',
                    fk_type_van: '',
                    fk_train_id: '',
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
                    <form onSubmit={newVan}>
                        <Row>
                            {vansInputs.map((item) =>
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
                                <MiniBlueButton onClick={newVan}>Добавить</MiniBlueButton>
                            </Col>
                        </Row>
                    </form>
                </div>
                <div className={s.page_block}>
                <h2>Удалить значения</h2>
                <h3>Укажите id записи для удаления</h3>
                <form onSubmit={rmVan}>
                    <Row>
                        <Col colWidth={'col_3'}>
                            <SettingsInput
                                onChange={editAddVan}
                                name={'van_id'}
                                value={addVan.van_id}
                                type={'text'}
                                title={'van_id'}
                            />
                        </Col>
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={rmVan}>Удалить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Изменить значения</h2>
                <h3>Укажите изменяемые данные</h3>
                <form onSubmit={edVan}>
                    <Row>
                        {editVanInputs.map((item) =>
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
                            <MiniBlueButton onClick={edVan}>Изменить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Van;