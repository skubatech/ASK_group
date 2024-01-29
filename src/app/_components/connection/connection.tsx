import styles from './connection.module.scss';

import Phone from '@/assets/icons/whitePhone.svg';
import Messenger from '@/assets/icons/messenger.svg';

export const Connection = () => {
  return (
    <section className={styles.connection}>
      <span className={styles.text}>
        Оставляйте заявку прямо сейчас и получите скидку 5% на любую услугу!
      </span>
      <div className={styles.itemsWrap}>
        <a href='tel:+79817272909' className={styles.item}>
          Рассчитать заказ в звонке
          <Phone />
        </a>
        <a
          href='https://api.whatsapp.com/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.item}
        >
          Рассчитать заказ в мессенджере
          <Messenger />
        </a>
      </div>
    </section>
  );
};
