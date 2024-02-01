import styles from './footer.module.scss';
import Image from 'next/image';

import Vk from '@/assets/icons/vk.svg?url';
import Telegram from '@/assets/icons/telegram.svg?url';
import Instagram from '@/assets/icons/instagram.svg?url';
import Whatsapp from '@/assets/icons/wa.svg?url';

export const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <a href='tel:+79817272909' className={styles.link}>
            +7 (981) 727-29-09
          </a>
          <span className={styles.link}>
            Санкт-Петербург, Пулковское шоссе 30/4, офис 101Д
          </span>
          <a href='mailto:zakaz@askspb.ru' className={styles.link}>
            zakaz@askspb.ru
          </a>
          <a href='mailto:inform@askspb.ru' className={styles.link}>
            inform@askspb.ru
          </a>
          <div className={styles.social}>
            <a
              href='https://telegram.org/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Image src={Telegram} alt='Icon' className={styles.icon} />
            </a>
            <a
              href='https://web.whatsapp.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Image src={Whatsapp} alt='Icon' className={styles.icon} />
            </a>
            <a
              href='https://vk.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Image src={Vk} alt='Icon' className={styles.icon} />
            </a>
            <a
              href='https://instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              <Image src={Instagram} alt='Icon' className={styles.icon} />
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
      <div className={styles.social}>
        <a
          href='https://telegram.org/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.link}
        >
          <Image src={Telegram} alt='Icon' className={styles.icon} />
        </a>
        <a
          href='https://web.whatsapp.com/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.link}
        >
          <Image src={Whatsapp} alt='Icon' className={styles.icon} />
        </a>
        <a
          href='https://vk.com/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.link}
        >
          <Image src={Vk} alt='Icon' className={styles.icon} />
        </a>
        <a
          href='https://instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.link}
        >
          <Image src={Instagram} alt='Icon' className={styles.icon} />
        </a>
      </div>
      <span className={styles.text}>Все права защищены. ASK Group 2024</span>
    </footer>
  );
};
