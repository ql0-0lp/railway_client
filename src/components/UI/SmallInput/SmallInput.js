import React, {useState} from 'react';
import s from './SmallInput.module.css'

const SmallInput = ({onChange, value, name, type}) => {

    const [dateType, setDateType] = useState(false)

    return (
        <input
            disabled
            className={s.input}
            name={name}
            id={name}
            type={type === 'date' && dateType ? 'date' : 'text'}
            onFocus={() => setDateType(true)}
            onBlur={() => setDateType(false)}
            onChange={(e) => onChange(name, e.target.value)}
            value={value}
        />
    );
};

export default SmallInput;