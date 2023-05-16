import React, {useState, useEffect, useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import s from './FilterSelect.module.css'

const FilterSelect = observer(({city_name, onChange, name, placeholder}) => {

    const {city} = useContext(Context)

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(city.cities);

    useEffect(() => {
        const results = city.cities?.filter(option =>
            option.city_name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredOptions(results);
    }, [searchTerm, city.cities]);

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleOptionClick = (option) => {
        onChange(name, option.city_name);
        setIsOpen(false);
    };

    return (
        <div className={s.select}>
            <div className={s.select_search}>
                <label>{placeholder}</label>
                <input
                    className={s.select_search}
                    type="text"
                    placeholder={city_name ? city_name : ""}
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setTimeout(() => setIsOpen(false), 300)}
                />
            </div>
            <div
                className={isOpen ? [s.select_control, s.open].join(' ') : s.select_control}
                onClick={toggleOptions}
            >
                <div className={s.select_options}>
                    {
                        filteredOptions ?
                            filteredOptions?.map(option => (
                                <div
                                    className={s.select_option}
                                    key={option.city_name}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option.city_name}
                                </div>
                            ))
                            :
                            <div className={s.select_option}>
                                Ничего не найдено!
                            </div>
                    }
                </div>
            </div>
        </div>
    );
})

export default FilterSelect;