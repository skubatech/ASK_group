import styles from './contacts.module.scss';

import Vk from '../../../assets/icons/vk.svg';
import Telegram from '../../../assets/icons/telegram.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import Phone from '../../../assets/icons/whitePhone.svg';
import Messenger from '../../../assets/icons/messenger.svg';

export const Contacts = () => {
  return (
    <section className={`${styles.contacts} container`}>
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <span className={styles.link}>
            Санкт-Петербург, Пулковское шоссе 30/4, офис 101Д
          </span>
          <a href='tel:+79003213232' className={styles.link}>
            +7 (900)-321-32-32
          </a>
          <a href='mailto:email@mail.ru' className={styles.link}>
            email@mail.ru
          </a>
          <div className={styles.social}>
            <a
              href='https://telegram.org/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Telegram />
            </a>
            <a
              href='https://instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Instagram />
            </a>
            <a
              href='https://vk.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Vk />
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.text}>Закажите удобным для Вас способом</span>
          <a className={styles.item} href='tel:+79003213232'>
            <span className={styles.text}>Рассчитать заказ в звонке</span>
            <Phone />
          </a>
          <a className={styles.item} href='https://api.whatsapp.com/'>
            <span className={styles.text}>Рассчитать заказ в мессенджере</span>
            <Messenger />
          </a>
        </div>
      </div>
    </section>
  );
};
