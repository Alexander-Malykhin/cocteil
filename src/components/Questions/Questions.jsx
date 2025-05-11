import React from 'react';
//STYLES
import styles from './Questions.module.scss'
import QuestionsCard from "../QuestionsCard/QuestionsCard.jsx";
//SETTINGS
import {QuestionsArray} from "./QuestionsArray.js";

const Questions = () => {


    return (
        <section className={styles.questions}>
            <div className={styles.container}>
                <div className={styles.questions__content}>
                    <h1 className={styles.questions__title}>
                        Часто задаваемые вопросы
                    </h1>

                    <div className={styles.questions__list}>
                        {
                            QuestionsArray.map((question) => (
                                <QuestionsCard
                                    key={question.id}
                                    question={question}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;