import {ChangeEvent, MouseEvent, useState} from 'react';
import styles from './form.module.scss';
import cn from 'classnames';
import Image from 'next/image';

import Arrow from '@/assets/icons/arrow.svg';

interface FormInterface {
    phone: string;
    phoneText: string;
    text: string;
}

interface FormProps {
    onClick: () => void;
}

const Form = ({onClick}: FormProps) => {
    const [form, setForm] = useState<FormInterface>({
        phone: '',
        phoneText: '',
        text: '',
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

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log({phone: form.phoneText, text: form.text});

        setForm({
            phone: '',
            phoneText: '',
            text: '',
        });
    };

    return (
        <form className={styles.form}>
            <button className={styles.arrow} onClick={onClick}>
                <Image src={Arrow} alt='Icon' className={styles.icon}/>
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
            <label hidden htmlFor='text'>
                Текст сообщения:
            </label>
            <textarea
                id='text'
                name='text'
                value={form.text}
                onChange={onChange}
                className={cn(styles.input, styles.text)}
                placeholder='Текст сообщения:'
            />
            <button type='submit' onClick={handleSubmit} className={styles.btn}>
                Отправить
            </button>
        </form>
    );
};

export default Form;
