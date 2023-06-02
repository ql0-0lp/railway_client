import React from 'react';
import s from './Train.module.css'
import {useState} from "react";
import {createSeat, deleteSeat} from "../../../http/seatAPI";
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {createTrain, deleteTrain, updateTrain} from "../../../http/trainAPI";

const Train = () => {

    const [addTrain, setAddTrain] = useState({
        train_id: '',
        fk_train_model: '',
    })
    const editAddTrain = (name, value) => {
        setAddTrain({
            ...addTrain,
            [name]: value,
        });
    }
    const trainInputs = [
        {title: 'fk_train_model', value: addTrain.fk_train_model, name: 'fk_train_model', type: 'text', onChange: editAddTrain},
    ]
    const newTrain = async (e) => {
        try {
            e.preventDefault()
            createTrain(addTrain.fk_train_model).then(() =>
                setAddTrain({
                    train_id: '',
                    fk_train_model: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const rmTrain = async (e) => {
        try {
            e.preventDefault()
            await deleteTrain(addTrain.train_id).then(() =>
                setAddTrain({
                    train_id: '',
                    fk_train_model: '',
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [editTrain, setEditTrain] = useState({
        train_id: '',
        fk_train_model: '',
    })
    const editEditTrain = (name, value) => {
        setEditTrain({
            ...editTrain,
            [name]: value,
        });
    }
    const editTrainInputs = [
        {title: 'train_id', value: editTrain.train_id, name: 'train_id', type: 'text', onChange: editEditTrain},
        {title: 'fk_train_model', value: editTrain.fk_train_model, name: 'fk_train_model', type: 'text', onChange: editEditTrain},
    ]
    const edTrain = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('train_id', editTrain.train_id)
            formData.append('fk_train_model', editTrain.fk_train_model)
            updateTrain(formData).then(() =>
                setEditTrain({
                    train_id: '',
                    fk_train_model: '',
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
                    <form onSubmit={newTrain}>
                        <Row>
                            {trainInputs.map((item) =>
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
                                <MiniBlueButton onClick={newTrain}>Добавить</MiniBlueButton>
                            </Col>
                        </Row>
                    </form>
                </div>
                <div className={s.page_block}>
                <h2>Удалить значения</h2>
                <h3>Укажите id записи для удаления</h3>
                <form onSubmit={rmTrain}>
                    <Row>
                        <Col colWidth={'col_3'}>
                            <SettingsInput
                                onChange={editAddTrain}
                                name={'train_id'}
                                value={addTrain.train_id}
                                type={'text'}
                                title={'train_id'}
                            />
                        </Col>
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={rmTrain}>Удалить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Изменить значения</h2>
                <h3>Укажите изменяемые данные</h3>
                <form onSubmit={edTrain}>
                    <Row>
                        {editTrainInputs.map((item) =>
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
                            <MiniBlueButton onClick={edTrain}>Изменить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Train;