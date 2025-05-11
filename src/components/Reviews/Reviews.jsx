import React from 'react';
//STYLES
import styles from './Reviews.module.scss'
//COMPONENTS
import ButtonReviewsAdd from "@UI/Reviews/ButtonReviewsAdd/ButtonReviewsAdd.jsx";
import ButtonArrowReview from "@UI/Reviews/ButtonArrowReview/ButtonArrowReview.jsx";
import ReviewCard from "../ReviewCard/ReviewCard.jsx";


const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <div className={styles.container}>
                <div className={styles.reviews__content}>

                    <h1 className={styles.reviews__title}>
                        Отзывы наших покупателей
                    </h1>

                    <div className={styles.reviews__container}>

                        <div className={styles.reviews__list}>
                           <ReviewCard/>
                            <ReviewCard/>
                            <ButtonArrowReview/>
                        </div>

                        <ButtonReviewsAdd />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;