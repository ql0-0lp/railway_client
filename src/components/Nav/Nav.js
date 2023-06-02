import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import s from './Nav.module.css'
import TitleWithInput from "../TicketComponents/TitleWithInput/TitleWithInput";
import UniversalInput from "../UI/UniversalInput/UniversalInput";
import {check, checkAdmin, login, registration} from "../../http/userAPI";
import {Context} from "../../index";
import {USER_ROUTE} from "../../consts";
import {observer} from "mobx-react-lite";

const Nav = observer(({menu}) => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [authMenu, setAuthMenu] = useState(false)
    const [authType, setAuthType] = useState(true)

    const [auth, setAuth] = useState({
        login: '',
        password: ''
    })

    const authHandleChange = (name, value) => {
        setAuth({
            ...auth,
            [name]: value,
        });
    };

    const [reg, setReg] = useState({
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

    const regHandleChange = (name, value) => {
        setReg({
            ...reg,
            [name]: value,
        });
    };

    const regHuman = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('user_name', reg.name)
            formData.append('user_last_name', reg.lastname)
            formData.append('user_patronymic', reg.patronymic)
            formData.append('user_document', reg.document)
            formData.append('user_date_of_birth', reg.dateOfBirth)
            formData.append('user_tel', reg.tel)
            formData.append('user_email', reg.email)
            formData.append('user_login', reg.login)
            formData.append('user_password', reg.password)
            registration(formData).then((data) => {
                if (data) {
                    check().then((data) => {
                        user.setUserId(data.user_id)
                        if (data) {
                            checkAdmin().then((role) => user.setIsAdmin(role))
                            user.setIsAuth(true)
                        }
                    })
                }
            })
            setAuthMenu(false)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const authHuman = async (e) => {
        try {
            e.preventDefault()
            const formData = new FormData()
            formData.append('user_login', auth.login)
            formData.append('user_password', auth.password)
            login(formData).then((data) => {
                if (data) {
                    check().then((data) => {
                        user.setUserId(data.user_id)
                        if (data) {
                            checkAdmin().then((role) => user.setIsAdmin(role))
                            user.setIsAuth(true)
                        }
                    })
                }
            })
            setAuthMenu(false)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <nav>
            <ul className={s.nav_menu}>
                {menu.map((item) =>
                    <li className={s.nav_menu_link}
                        key={item.to}>
                        <Link to={item.to}>{item.name}</Link>
                    </li>
                )}
                <li className={s.nav_menu_link}>
                    {user.isAuth ?
                        <button
                            onClick={() => navigate(USER_ROUTE)}
                        >
                            Настройки аккаунта
                        </button>
                        :
                        <button
                            onClick={() => setAuthMenu(true)}
                        >
                            Войти / Зарегестрироваться
                        </button>
                    }
                    {authMenu &&
                        <div>
                            <div onClick={() => setAuthMenu(false)} className={s.background}/>
                            <div className={s.auth_block}>
                                <div className={s.auth_block_nav}>
                                    <button onClick={() => setAuthType(true)}>Вход</button>
                                    <button onClick={() => setAuthType(false)}>Регистрация</button>
                                </div>
                                <div className={s.auth_block_form}>
                                    {authType ?
                                        <form onSubmit={authHuman} className={s.auth_form}>
                                            <h3>Для входа введите данные</h3>
                                            <TitleWithInput title={'Логин:'} name={'login'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'login'}
                                                    onChange={authHandleChange}
                                                    type={'text'}
                                                    value={auth.login}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <TitleWithInput title={'Пароль:'} name={'password'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'password'}
                                                    onChange={authHandleChange}
                                                    type={'password'}
                                                    value={auth.password}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <button type="submit" onClick={authHuman}>Войти</button>
                                        </form>
                                        :
                                        <form onSubmit={regHuman} className={s.auth_form}>
                                            <h3>Для регистрации введите данные</h3>
                                            <TitleWithInput title={'Имя:'} name={'name'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'name'}
                                                    onChange={regHandleChange}
                                                    type={'text'}
                                                    value={reg.name}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <TitleWithInput title={'Фамилия:'} name={'lastname'} className={'small_label'}>
                                                <UniversalInput
                                                    name={'lastname'}
                                                    onChange={regHandleChange}
                                                    type={'text'}
                                                    value={reg.lastname}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <TitleWithInput title={'Отчество:'} name={'patronymic'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'patronymic'}
                                                    onChange={regHandleChange}
                                                    type={'text'}
                                                    value={reg.patronymic}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <TitleWithInput title={'Серия и номер паспорта (без пробелов):'}
                                                            name={'document'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'document'}
                                                    onChange={regHandleChange}
                                                    type={'text'}
                                                    value={reg.document}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <TitleWithInput title={'Дата рождения (в формате дд.мм.гггг):'}
                                                            name={'dateOfBirth'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'dateOfBirth'}
                                                    onChange={regHandleChange}
                                                    type={'text'}
                                                    value={reg.dateOfBirth}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <TitleWithInput title={'Номер телефона:'}
                                                            name={'tel'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'tel'}
                                                    onChange={regHandleChange}
                                                    type={'text'}
                                                    value={reg.tel}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <TitleWithInput title={'Электронная почта:'}
                                                            name={'email'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'email'}
                                                    onChange={regHandleChange}
                                                    type={'text'}
                                                    value={reg.email}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <TitleWithInput title={'Логин:'} name={'login'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'login'}
                                                    onChange={regHandleChange}
                                                    type={'text'}
                                                    value={reg.login}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <TitleWithInput title={'Пароль:'} name={'password'} className={'small_label' }>
                                                <UniversalInput
                                                    name={'password'}
                                                    onChange={regHandleChange}
                                                    type={'password'}
                                                    value={reg.password}
                                                    className={'small_input'}
                                                />
                                            </TitleWithInput>
                                            <button type="submit" onClick={regHuman}>Зарегестрироваться</button>
                                        </form>
                                    }
                                </div>
                            </div>
                        </div>
                    }

                </li>
            </ul>
        </nav>
    );
});

export default Nav;