import styles from './contacts.module.scss';
import Phone from '@/assets/icons/whitePhone.svg';
import Messenger from '@/assets/icons/messenger.svg';
import WhatsAppWhite from '@/assets/icons/waWhite.svg';
import TelegramWhite from '@/assets/icons/telegramWhite.svg';
import {useState} from 'react';
import Form from '../form/form';

export const Contacts = () => {
    const [openForm, setOpenForm] = useState(false);

    const visibleForm = () => {
        setOpenForm((prev) => !prev);
    };

    return (
        <section className={`${styles.contacts} container`} id='contacts'>
            <h2 className={styles.title}>Контакты</h2>
            <div className={styles.wrapper}>
                <div className={styles.content}>
          <span className={styles.link}>
            Санкт-Петербург, Пулковское шоссе 30/4, офис 101Д
          </span>
                    <a href='tel:+79817272909' className={styles.link}>
                        +7 (981) 727-29-09
                    </a>
                    <a href='mailto:zakaz@askspb.ru' className={styles.link}>
                        zakaz@askspb.ru
                    </a>
                    <a href='mailto:inform@askspb.ru' className={styles.link}>
                        inform@askspb.ru
                    </a>
                </div>
                <div className={styles.card}>
                    {!openForm ? (
                        <>
              <span className={styles.title}>
                Закажите удобным для Вас способом
              </span>
                            <div className={styles.links}>
                                <a className={styles.item} href='tel:+79817272909'>
                                    <span className={styles.text}>Позвонить</span>
                                    <span className={styles.icon}><Phone/></span>
                                </a>
                                <div className={styles.itemWrap}>
                                    <a
                                        className={`${styles.item} ${styles.itemRow}`}
                                        href='https://wa.me/79817272909'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span className={styles.text}>WhatsApp</span>
                                        <span className={styles.icon}><WhatsAppWhite/></span>
                                    </a>
                                    <a
                                        className={`${styles.item} ${styles.itemRow}`}
                                        href='https://t.me/+79817272909'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span className={styles.text}>Telegram</span>
                                        <span className={styles.icon}><TelegramWhite/></span>
                                    </a>
                                </div>
                                <div className={styles.item} onClick={visibleForm}>
                                    <span className={styles.text}>Оставить заяку на сайте</span>
                                    <span className={styles.icon}><Messenger/></span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <Form onClick={visibleForm}/>
                    )}
                </div>
            </div>
        </section>
    );
};
