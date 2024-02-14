'use client';
import styles from './connection.module.scss';

import Phone from '@/assets/icons/whitePhone.svg';
import Messenger from '@/assets/icons/messenger.svg';
import WhatsAppWhite from '@/assets/icons/waWhite.svg';
import TelegramWhite from '@/assets/icons/telegramWhite.svg';
import Form from "@/app/_components/form/form";
import {useState} from "react";

export const Connection = () => {
    const [openForm, setOpenForm] = useState(false);

    const visibleForm = () => {
        setOpenForm((prev) => !prev);
    };
    return (
        <section className={styles.connection}>
      <span className={styles.text}>
        Оставляйте заявку прямо сейчас и получите скидку 5% на любую услугу!
      </span>
            {!openForm ? (
                <>
                    <div className={styles.itemsWrap}>
                        <a href='tel:+79817272909' className={styles.item}>
                            Позвонить
                            <span className={styles.icon}><Phone/></span>
                        </a>
                        <div className={styles.rowWrap}>
                            <a
                                className={`${styles.item} ${styles.itemRow}`}
                                href='https://web.whatsapp.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                WhatsApp
                                <span className={styles.icon}><WhatsAppWhite/></span>
                            </a>
                            <a
                                className={`${styles.item} ${styles.itemRow}`}
                                href='https://telegram.org/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Telegram
                                <span className={styles.icon}><TelegramWhite/></span>
                            </a>
                        </div>
                        <div className={styles.item} onClick={visibleForm} id='#form'>
                            Оставить заяку на сайте
                            <span className={styles.icon}><Messenger/></span>
                        </div>
                    </div>
                </>
            ) : (
                <Form onClick={visibleForm}/>
            )}
        </section>
    );
};
