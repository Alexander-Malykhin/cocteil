import React from 'react';
//STYLES
import styles from './Invitation.module.scss'
import InputForm from "../../UI/InputForm/InputForm.jsx";

const Invitation = () => {

    const [form, setForm] = React.useState({
        name: "",
        phone: "",
        email: "",
    })

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(form);
    }


    return (
        <section className={styles.invitation}>
            <div className={styles.container}>
                <div className={styles.invitation__content}>
                    <h1 className={styles.invitation__title}>
                        Приглашаем к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров
                    </h1>

                    <form
                        className={styles.invitation__form}
                        onSubmit={onSubmitForm}
                    >
                        <InputForm
                            name="name"
                            placeholder={'Ваше имя'}
                            form={form}
                            setForm={setForm}
                        />
                        <InputForm
                            name="phone"
                            placeholder={'Номер телефона'}
                            form={form}
                            setForm={setForm}
                        />
                        <InputForm
                            name="email"
                            placeholder={'Электронная почта'}
                            form={form}
                            setForm={setForm}
                        />

                        <button
                            type="submit"
                            className={styles.button}
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Invitation;