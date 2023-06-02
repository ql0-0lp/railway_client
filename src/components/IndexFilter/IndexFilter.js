import React from 'react';
import s from './IndexFilter.module.css'
import bg from "../../statics/bg_index_filter.jpg";
import FilterSelect from "../UI/FilterSelect/FilterSelect";
import {Link, useNavigate} from "react-router-dom";
import {ROUTES_FILTER_ROUTE, ROUTES_ROUTE, TICKETS_ROUTE, USER_ROUTE} from "../../consts";
import ArrowRightSVG from "../svg/ArrowRightSVG";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {fetchCities} from "../../http/cityAPI";

const IndexFilter = () => {

    const {user} = useContext(Context)
    const {city} = useContext(Context)
    const {route} = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        fetchCities().then((data) => city.setCities(data))
    }, [])

    const [filter, setFilter] = useState({
        from: '',
        to: '',
        departureDate: ''
    })

    const handleChange = (name, value) => {
        setFilter({
            ...filter,
            [name]: value,
        });
    };

    const submitFilter = (e) => {
        try {
            e.preventDefault()
            console.log(filter.departureDate)
            route.setFilter(filter)
            navigate(ROUTES_FILTER_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <section style={{backgroundImage: `url(${bg})`}}
                 className={s.section_filter}>
            <div className={s.container}>
                <h1>Планируй свою поездку с нами</h1>
            </div>
            <form onSubmit={submitFilter} className={s.filter_form}>
                <FilterSelect
                    city_name={filter.from}
                    name={'from'}
                    placeholder={'Откуда:'}
                    onChange={handleChange}/>
                <FilterSelect
                    city_name={filter.to}
                    name={'to'}
                    placeholder={'Куда:'}
                    onChange={handleChange}/>
                <div className={s.section_date_input}>
                    <label>Дата:</label>
                    <input
                        id="select_date"
                        value={filter.departureDate}
                        name={'departureDate'}
                        onChange={(e) => handleChange('departureDate', e.target.value)}
                        type="text"
                        onFocus={() => document.querySelector('#select_date').type = 'date'}
                        onBlur={() => document.querySelector('#select_date').type = 'text'}
                    />
                </div>
                <button className={s.filter_form_btn} type="submit">Найти</button>
            </form>
            <div className={s.container}>
                <button
                    className={s.my_tickets_button}
                    onClick={() => user.isAuth ?
                        navigate(USER_ROUTE + TICKETS_ROUTE)
                        :
                        alert('Пользователь не авторизован')}
                >
                    Мои билеты
                    <ArrowRightSVG/>
                </button>
            </div>
        </section>
    );
};

export default IndexFilter;