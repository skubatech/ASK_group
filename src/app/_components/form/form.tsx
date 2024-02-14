import React, {ChangeEvent, MouseEvent, useState} from 'react';
import styles from './form.module.scss';
import cn from 'classnames';

import Arrow from '@/assets/icons/arrow.svg';
import axios from "axios";
import {Bounce, toast} from "react-toastify";

interface FormInterface {
    phone: string;
    phoneText: string;
    message: string;
}

interface FormProps {
    onClick: () => void;
}

const Form = ({onClick}: FormProps) => {
    const [form, setForm] = useState<FormInterface>({
        phone: '',
        phoneText: '',
        message: '',
    });

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === 'phone') {
            const phoneValue = e.target.value.replace(/\D/g, '')
                .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

            if (phoneValue) {
                if (!phoneValue[1]) {
                    setForm({
                        ...form,
                        phone: '+'
                    });

                    return;
                }

                if (!phoneValue[2]) {
                    setForm({
                        ...form,
                        phone: `+${phoneValue[1]}`
                    });

                    return;
                }

                setForm({
                    ...form,
                    phone: `+${phoneValue[1]} (${phoneValue[2]}`
                        + (phoneValue[3] ? `) ${phoneValue[3]}` : '')
                        + (phoneValue[4] ? `-${phoneValue[4]}` : '')
                        + (phoneValue[5] ? `-${phoneValue[5]}` : ''),
                    phoneText: `+${phoneValue[0]}`
                });
            }
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await axios.post('https://asklogspb.ru/wp-content/themes/ask/mail.php', {
                ...form
            })
            toast.success('Форма успешно отправлена!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } catch (e) {
            toast.error('Ошибка отправки', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

        setForm({
            phone: '',
            phoneText: '',
            message: '',
        });
    };

    return (
        <>
            <form className={styles.form}>
                <button className={styles.arrow} onClick={onClick}>
                    <span className={styles.icon}><Arrow/></span>
                </button>
                <label hidden htmlFor='phone'>
                    Ваш телефон:
                </label>
                <input
                    type='phone'
                    id='phone'
                    name='phone'
                    value={form.phone}
                    onChange={onChange}
                    className={styles.input}
                    placeholder='Ваш телефон:'
                />
                <label hidden htmlFor='message'>
                    Текст сообщения:
                </label>
                <textarea
                    id='message'
                    name='message'
                    value={form.message}
                    onChange={onChange}
                    className={cn(styles.input, styles.text)}
                    placeholder='Текст сообщения:'
                />
                <button type='submit' onClick={handleSubmit} className={styles.btn}>
                    Отправить
                </button>
            </form>
        </>

    );
};

export default Form;
