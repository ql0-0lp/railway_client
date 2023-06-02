import React from 'react';
import s from './TrainModel.module.css'
import {useState} from "react";
import {createSeat} from "../../../http/seatAPI";
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {createTrain} from "../../../http/trainAPI";
import {createTrainModel, deleteTrainModel, updateTrainModel} from "../../../http/trainModelAPI";
import {deleteRoute} from "../../../http/routeAPI";

const TrainModel = () => {

    const [addTrainModel, setAddTrainModel] = useState({
        train_model_id: '',
        train_model_name: '',
        max_van: ''
    })
    const editAddTrainModel = (name, value) => {
        setAddTrainModel({
            ...addTrainModel,
            [name]: value,
        });
    }
    const trainModelInputs = [
        {title: 'train_model_name', value: addTrainModel.train_model_name, name: 'train_model_name', type: 'text', onChange: editAddTrainModel},
        {title: 'max_van', value: addTrainModel.max_van, name: 'max_van', type: 'text', onChange: editAddTrainModel},
    ]
    const newTrainModel = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('train_model_name', addTrainModel.train_model_name)
            formData.append('max_van', addTrainModel.max_van)
            await createTrainModel(formData).then(() =>
                setAddTrainModel({
                    train_model_id: '',
                    train_model_name: '',
                    max_van: ''
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const rmTrainModel = async (e) => {
        try {
            e.preventDefault()
            await deleteTrainModel(addTrainModel.train_model_id).then(() =>
                setAddTrainModel({
                    train_model_id: '',
                    train_model_name: '',
                    max_van: ''
                })
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [editTrainModel, setEditTrainModel] = useState({
        train_model_id: '',
        train_model_name: '',
        max_van: ''
    })
    const editEditTrainModel = (name, value) => {
        setEditTrainModel({
            ...editTrainModel,
            [name]: value,
        });
    }
    const editTrainModelInputs = [
        {title: 'train_model_id', value: editTrainModel.train_model_id, name: 'train_model_id', type: 'text', onChange: editEditTrainModel},
        {title: 'train_model_name', value: editTrainModel.train_model_name, name: 'train_model_name', type: 'text', onChange: editEditTrainModel},
        {title: 'max_van', value: editTrainModel.max_van, name: 'max_van', type: 'text', onChange: editEditTrainModel},
    ]
    const edTrainModel = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('train_model_id', editTrainModel.train_model_id)
            formData.append('train_model_name', editTrainModel.train_model_name)
            formData.append('max_van', editTrainModel.max_van)
            await updateTrainModel(formData).then(() =>
                setEditTrainModel({
                    train_model_id: '',
                    train_model_name: '',
                    max_van: ''
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
                    <form onSubmit={newTrainModel}>
                        <Row>
                            {trainModelInputs.map((item) =>
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
                                <MiniBlueButton onClick={newTrainModel}>Добавить</MiniBlueButton>
                            </Col>
                        </Row>
                    </form>
                </div>
                <div className={s.page_block}>
                <h2>Удалить значения</h2>
                <h3>Укажите id записи для удаления</h3>
                <form onSubmit={rmTrainModel}>
                    <Row>
                        <Col colWidth={'col_3'}>
                            <SettingsInput
                                onChange={editAddTrainModel}
                                name={'train_model_id'}
                                value={addTrainModel.train_model_id}
                                type={'text'}
                                title={'train_model_id'}
                            />
                        </Col>
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={rmTrainModel}>Удалить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.page_block}>
                <h2>Изменить значения</h2>
                <h3>Укажите изменяемые данные</h3>
                <form onSubmit={edTrainModel}>
                    <Row>
                        {editTrainModelInputs.map((item) =>
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
                            <MiniBlueButton onClick={edTrainModel}>Изменить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            </div>
        </div>
    );
};

export default TrainModel;