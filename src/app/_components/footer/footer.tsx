import styles from './footer.module.scss';

import Vk from '../../../assets/icons/vk.svg';
import Telegram from '../../../assets/icons/telegram.svg';
import Instagram from '../../../assets/icons/instagram.svg';

export const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <a href='tel:+79003213232' className={styles.link}>
            +7 (900)-321-32-32
          </a>
          <span className={styles.link}>
            Санкт-Петербург, Пулковское шоссе 30/4, офис 101Д
          </span>
          <a href='mailto:email@mail.ru' className={styles.link}>
            email@mail.ru
          </a>
          <div className={styles.social}>
            <a
              href='https://vk.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Vk />
            </a>
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
          </div>
        </div>
        <div className={styles.rightContent}>
          <span className={styles.link}>О компании</span>
          <span className={styles.link}>Наши услуги</span>
          <span className={styles.link}>Карта карьеров</span>
          <span className={styles.link}>О компании</span>
          <span className={styles.link}>Контакты</span>
        </div>
      </div>
      <span className={styles.text}>Все права защищены. ASK Group 2023</span>
    </footer>
  );
};
