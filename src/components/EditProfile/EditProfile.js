import React, {useState} from 'react';
import s from './EditProfile.module.css'
import Container from "../Col/Container/Container";
import Col from "../Col/Col/Col";
import TitleWithInput from "../TicketComponents/TitleWithInput/TitleWithInput";
import UniversalInput from "../UI/UniversalInput/UniversalInput";
import Row from "../Col/Row/Row";
import BlueButton from "../UI/BlueButton/BlueButton";
import {checkAdmin, registration, updateHuman} from "../../http/userAPI";

const EditProfile = () => {

    const [profile, setProfile] = useState({
        name: '',
        lastname: '',
        patronymic: '',
        document: '',
        dateOfBirth: '',
        tel: '',
        email: '',
        login: '',
        password: '',

    })

    const handleChange = (name, value) => {
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const update = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('user_name', profile.name)
            formData.append('user_last_name', profile.lastname)
            formData.append('user_patronymic', profile.patronymic)
            formData.append('user_document', profile.document)
            formData.append('user_date_of_birth', profile.dateOfBirth)
            formData.append('user_tel', profile.tel)
            formData.append('user_email', profile.email)
            formData.append('user_login', profile.login)
            formData.append('user_password', profile.password)
            updateHuman(formData).then((data) => {
                setProfile({
                    name: '',
                    lastname: '',
                    patronymic: '',
                    document: '',
                    dateOfBirth: '',
                    tel: '',
                    email: '',
                    login: '',
                    password: '',
                })
            })
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <section className={s.edit_profile}>
            <Container>
                <form onSubmit={update}>
                    <Row>
                        <Col colWidth={'col_6'}>
                            <TitleWithInput title={'Ваше имя'} className={'big_label'} name={'name'}>
                                <UniversalInput
                                    className={'big_input'}
                                    type={'text'}
                                    name={'name'}
                                    value={profile.name}
                                    onChange={handleChange}
                                />
                            </TitleWithInput>
                            <TitleWithInput title={'Ваша фамилия'} className={'big_label'} name={'lastname'}>
                                <UniversalInput
                                    className={'big_input'}
                                    type={'text'}
                                    name={'lastname'}
                                    value={profile.lastname}
                                    onChange={handleChange}
                                />
                            </TitleWithInput>
                            <TitleWithInput title={'Ваше отчество'} className={'big_label'} name={'patronymic'}>
                                <UniversalInput
                                    className={'big_input'}
                                    type={'text'}
                                    name={'patronymic'}
                                    value={profile.patronymic}
                                    onChange={handleChange}
                                />
                            </TitleWithInput>
                            <TitleWithInput title={'Серия и номер паспорта(без пробела)'} className={'big_label'} name={'document'}>
                                <UniversalInput
                                    className={'big_input'}
                                    type={'text'}
                                    name={'document'}
                                    value={profile.document}
                                    onChange={handleChange}
                                />
                            </TitleWithInput>
                            <TitleWithInput title={'Дата рождения (в формате дд.мм.гггг)'} className={'big_label'} name={'dateOfBirth'}>
                                <UniversalInput
                                    className={'big_input'}
                                    type={'text'}
                                    name={'dateOfBirth'}
                                    value={profile.dateOfBirth}
                                    onChange={handleChange}
                                />
                            </TitleWithInput>
                        </Col>
                        <Col colWidth={'col_6'}>
                            <TitleWithInput title={'Номер телефона'} className={'big_label'} name={'tel'}>
                                <UniversalInput
                                    className={'big_input'}
                                    type={'tel'}
                                    name={'tel'}
                                    value={profile.tel}
                                    onChange={handleChange}
                                />
                            </TitleWithInput>
                            <TitleWithInput title={'Электронная почта'} className={'big_label'} name={'email'}>
                                <UniversalInput
                                    className={'big_input'}
                                    type={'email'}
                                    name={'email'}
                                    value={profile.email}
                                    onChange={handleChange}
                                />
                            </TitleWithInput>
                            <TitleWithInput title={'Логин'} className={'big_label'} name={'login'}>
                                <UniversalInput
                                    className={'big_input'}
                                    type={'text'}
                                    name={'login'}
                                    value={profile.login}
                                    onChange={handleChange}
                                />
                            </TitleWithInput>
                            <TitleWithInput title={'Пароль'} className={'big_label'} name={'password'}>
                                <UniversalInput
                                    type={'password'}
                                    className={'big_input'}
                                    name={'password'}
                                    value={profile.password}
                                    onChange={handleChange}
                                />
                            </TitleWithInput>
                            <BlueButton type={'submit'} onClick={update}>Изменить</BlueButton>
                        </Col>
                    </Row>
                </form>
            </Container>
        </section>
    );
};

export default EditProfile;