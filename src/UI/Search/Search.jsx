import React from 'react';
import styles from './search.module.css'
//IMAGES
import search from '../../assets/search.png'

const Search = () => {
    return (
        <div className={styles.search}>
            <img
                src={search}
                alt="search"
                className={styles.search__image}
            />
            <input
                placeholder={'Поиск'}
                type="text"
                className={styles.search__input}
            />
        </div>
    );
};

export default Search;