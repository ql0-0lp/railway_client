import React, {useContext, useEffect, useState} from 'react';
import s from './Index.module.css'
import bg from '../../statics/bg_index_filter.jpg'
import FilterSelect from "../../components/UI/FilterSelect/FilterSelect";
import {fetchCities} from "../../http/cityAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Index = observer(() => {

    const {city} = useContext(Context)

    useEffect(() => {
        fetchCities().then((data) => city.setCities(data))
    }, [])

    const [filter, setFilter] = useState([
        {from: null},
        {to: null},
        {departureDate: null},
        {arrivalDate: null}
    ])

    const handleChange = (name, value) => {
        setFilter({
            ...filter,
            [name]: value,
        });
    };

    const submitFilter = (e) => {
        try {
            e.preventDefault()
        } catch (e) {

        }
    }

    return (
        <main className={s.main}>

            <section style={{backgroundImage: `url(${bg})`}}
                     className={s.section_filter}>
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

                            type="text"
                            onFocus={() => document.querySelector('#select_date').type = 'date'}
                            onBlur={() => document.querySelector('#select_date').type = 'text'}
                        />
                    </div>
                    <button className={s.filter_form_btn} type="submit">Найти</button>
                </form>
            </section>

        </main>
    );
});

export default Index;