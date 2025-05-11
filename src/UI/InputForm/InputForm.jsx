import React from 'react';
//STYLES
import styles from './InputForm.module.scss'

const InputForm = ({name, placeholder, form, setForm}) => {
    return (
        <label className={styles.row}>
            <input
                type="text"
                name={name}
                className={styles.input}
                value={form[name] || ''}
                placeholder={placeholder}
                onChange={e => setForm({...form, [e.target.name]: e.target.value})}
            />

            <p className={styles.error}>
                1111
            </p>
        </label>
    );
};

export default InputForm;