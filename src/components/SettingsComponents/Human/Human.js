import React, {useState} from 'react';
import s from './Human.module.css'
import SettingsInput from "../../UI/SettingsInput/SettingsInput";
import Row from "../../Col/Row/Row";
import Col from "../../Col/Col/Col";
import MiniBlueButton from "../../UI/MiniBlueButton/MiniBlueButton";
import {adminUpdateHuman, deleteHuman, registration, updateHuman} from "../../../http/userAPI";

const Human = () => {

    const [human, setHuman] = useState({
        name: '',
        lastname: '',
        patronymic: '',
        document: '',
        dateOfBirth: '',
        tel: '',
        email: '',
        login: '',
        password: ''
    })
    const humanHandleChange = (name, value) => {
        setHuman({
            ...human,
            [name]: value,
        });
    };
    const createHuman = [
        {title: 'name', value: human.name, name: 'name', type: 'text', onChange: humanHandleChange},
        {title: 'lastname', value: human.lastname, name: 'lastname', type: 'text', onChange: humanHandleChange},
        {title: 'patronymic', value: human.patronymic, name: 'patronymic', type: 'text', onChange: humanHandleChange},
        {title: 'document', value: human.document, name: 'document', type: 'text', onChange: humanHandleChange},
        {title: 'date of birth', value: human.dateOfBirth, name: 'dateOfBirth', type: 'text', onChange: humanHandleChange},
        {title: 'tel', value: human.tel, name: 'tel', type: 'text', onChange: humanHandleChange},
        {title: 'email', value: human.email, name: 'email', type: 'text', onChange: humanHandleChange},
        {title: 'login', value: human.login, name: 'login', type: 'text', onChange: humanHandleChange},
        {title: 'password', value: human.password, name: 'password', type: 'password', onChange: humanHandleChange},
    ]
    const regHuman = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('user_name', human.name)
            formData.append('user_last_name', human.lastname)
            formData.append('user_patronymic', human.patronymic)
            formData.append('user_document', human.document)
            formData.append('user_date_of_birth', human.dateOfBirth)
            formData.append('user_tel', human.tel)
            formData.append('user_email', human.email)
            formData.append('user_login', human.login)
            formData.append('user_password', human.password)
            registration(formData).then(() => {
                setHuman({
                    name: '',
                    lastname: '',
                    patronymic: '',
                    document: '',
                    dateOfBirth: '',
                    tel: '',
                    email: '',
                    login: '',
                    password: ''
                })
            })
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [editHumanForm, setEditHumanForm] = useState({
        id: '',
        name: '',
        lastname: '',
        patronymic: '',
        document: '',
        dateOfBirth: '',
        tel: '',
        email: '',
        password: ''
    })
    const editHumanHandleChange = (name, value) => {
        setEditHumanForm({
            ...editHumanForm,
            [name]: value,
        });
    };
    const editHuman = [
        {title: 'name', value: editHumanForm.name, name: 'name', type: 'text', onChange: editHumanHandleChange},
        {title: 'lastname', value: editHumanForm.lastname, name: 'lastname', type: 'text', onChange: editHumanHandleChange},
        {title: 'patronymic', value: editHumanForm.patronymic, name: 'patronymic', type: 'text', onChange: editHumanHandleChange},
        {title: 'document', value: editHumanForm.document, name: 'document', type: 'text', onChange: editHumanHandleChange},
        {title: 'date of birth', value: editHumanForm.dateOfBirth, name: 'dateOfBirth', type: 'text', onChange: editHumanHandleChange},
        {title: 'tel', value: editHumanForm.tel, name: 'tel', type: 'text', onChange: editHumanHandleChange},
        {title: 'email', value: editHumanForm.email, name: 'email', type: 'text', onChange: editHumanHandleChange},
        {title: 'password', value: editHumanForm.password, name: 'password', type: 'password', onChange: editHumanHandleChange},
        {title: 'id', value: editHumanForm.id, name: 'id', type: 'id', onChange: editHumanHandleChange},
    ]
    const edHuman = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('user_id', editHumanForm.id)
            formData.append('user_name', editHumanForm.name)
            formData.append('user_last_name', editHumanForm.lastname)
            formData.append('user_patronymic', editHumanForm.patronymic)
            formData.append('user_document', editHumanForm.document)
            formData.append('user_date_of_birth', editHumanForm.dateOfBirth)
            formData.append('user_tel', editHumanForm.tel)
            formData.append('user_email', editHumanForm.email)
            formData.append('user_login', editHumanForm.login)
            formData.append('user_password', editHumanForm.password)
            adminUpdateHuman(formData).then((data) => {
                setEditHumanForm({
                    id: '',
                    name: '',
                    lastname: '',
                    patronymic: '',
                    document: '',
                    dateOfBirth: '',
                    tel: '',
                    email: '',
                    password: ''
                })
            })
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const [del, setDel] = useState({id: ''})
    const editDel = (name, value) => {
        setDel({
            ...del,
            [name]: value,
        });
    };
    const rmHuman = async (e) => {
        try {
            e.preventDefault()
            deleteHuman(del.id).then(() =>
                setDel({id: ''})
            )
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className={s.human}>
            <div className={s.human_block}>
                <h2>Добавить значения</h2>
                <h3>Укажите новые данные</h3>
                <form onSubmit={regHuman}>
                    <Row>
                        {createHuman.map((item) =>
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
                            <MiniBlueButton onClick={regHuman}>Добавить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.human_block}>
                <h2>Удалить значения</h2>
                <h3>Укажите id записи для удаления</h3>
                <form onSubmit={rmHuman}>
                    <Row>
                        <Col colWidth={'col_3'}>
                            <SettingsInput
                                onChange={editDel}
                                name={'id'}
                                value={del.id}
                                type={'text'}
                                title={'id'}
                            />
                        </Col>
                        <Col colWidth={'col_3'}>
                            <MiniBlueButton onClick={rmHuman}>Удалить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
            <div className={s.human_block}>
                <h2>Изменить значения</h2>
                <h3>Укажите изменяемые данные <span>(логин изменить нельзя)</span></h3>
                <form onSubmit={edHuman}>
                    <Row>
                        {editHuman.map((item) =>
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
                            <MiniBlueButton onClick={edHuman}>Изменить</MiniBlueButton>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    );
};

export default Human;