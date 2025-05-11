import React from 'react';
//STYLES
import styles from './QuestionsCard.module.scss';
//COMPONENTS
import ButtonQuestions from "../../UI/ButtonQuestions/ButtonQuestions.jsx";

const QuestionsCard = ({question}) => {

    const [active, setActive] = React.useState(null);

    return (
        <article className={styles.card}>
            <div className={styles.card__header}>
                <h2 className={styles.card__name}>
                    {question.name}
                </h2>

                <ButtonQuestions
                    setActive={setActive}
                    active={active}
                    id={question.id}
                />
            </div>

            <p className={`${styles.card__description} ${active ? styles.active : ''}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, deleniti id ipsa laborum
                perspiciatis? Asperiores dolores fugit hic iste laudantium maxime obcaecati quae quasi quidem ullam
                unde, veniam voluptas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, deleniti id ipsa laborum
                perspiciatis? Asperiores dolores fugit hic iste laudantium maxime obcaecati quae quasi quidem ullam
                unde, veniam voluptas.
            </p>
        </article>
    );
};

export default QuestionsCard;