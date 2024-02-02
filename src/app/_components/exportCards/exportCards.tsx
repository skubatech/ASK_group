import Image from 'next/image';
import styles from './exportCards.module.scss';

import snow from '@/assets/images/snow.png';
import ground from '@/assets/images/ground.png';

export const ExportCards = () => {
  return (
    <section className={`${styles.cards} container`}>
      <div className={styles.card}>
        <Image src={snow} alt='Image' className={styles.img} />
        <span className={styles.title}>Вывоз снега</span>
        <button className={styles.btn}>Заказать</button>
      </div>
      <div className={styles.card}>
        <Image src={ground} alt='Image' className={styles.img} />
        <span className={styles.title}>Вывоз грунта</span>
        <button className={styles.btn}>Заказать</button>
      </div>
    </section>
  );
};
