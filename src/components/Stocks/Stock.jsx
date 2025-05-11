import React, {useEffect, useRef} from 'react';
//STYLES
import styles from './Stock.module.scss'
import Card from "../Card/Card.jsx";

const Stock = () => {

    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;

        const handleWheel = (e) => {
            if (e.deltaY === 0) return;

            e.preventDefault();

            list.scrollBy({
                left: e.deltaY * 0.9,
                behavior: 'smooth'
            });
        };

        list.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            list.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <section className={styles.stock}>
            <div className={styles.container}>
                <div className={styles.stock__content}>
                    <h1 className={styles.stock__title}>
                        Успей купить!
                    </h1>

                    <div className={styles.stock__slider}>
                        <div className={styles.stock__list} ref={listRef}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stock;