import styles from './aboutCompany.module.scss';
import Image from 'next/image';

import principles from '../../../assets/images/principles.png';
import MouseSquare from '../../../assets/icons/mouseSquare.svg';
import Number750 from '../../../assets/icons/750.svg';
import Number600 from '../../../assets/icons/600.svg';
import Number550 from '../../../assets/icons/550.svg';
import Number50 from '../../../assets/icons/50.svg';

export const AboutCompany = () => {
  return (
    <section className={`${styles.about} container`}>
      <div className={styles.wrapper}>
        <div className={styles.description}>
          <h2 className={styles.title}>О компании</h2>
          <span className={styles.text}>
            ASK GROUP — ваш надежный партнер по доставке нерудных материалов,
            аренды современной спецтехники и выполнении строительных работ! Наш
            автопарк состоит более, чем из 50 новейших машин, которые
            обеспечивают эффективность и надежность в каждом проекте. Благодаря
            применению современной техники и профессионализму наших работников
            мы гарантируем высокое качество услуг и оперативность в выполнении
            каждого этапа работы.
          </span>
          <div className={styles.principles}>
            <h3 className={styles.title}>Наши принципы</h3>
            <div className={styles.principle}>
              <span className={styles.item}>Четкие сроки поставки</span>
              <MouseSquare className={styles.img}/>
            </div>
            <div className={styles.principle}>
              <span className={styles.item}>Квалифицированный персонал</span>
              <MouseSquare />
            </div>
            <div className={styles.principle}>
              <span className={styles.item}>
                Полная документальная отчётность
              </span>
              <MouseSquare />
            </div>
          </div>
        </div>
        <div className={styles.imgWrap}>
          <Image src={principles} alt='principles' />
        </div>
      </div>
      <div className={styles.statistics}>
        <div className={styles.item}>
          <Number750 />
          <span className={styles.text}>Грунта вывезено и утилизировано</span>
        </div>
        <div className={styles.item}>
          <Number600 />
          <span className={styles.text}>Поставлено песка по СПБ и ЛО</span>
        </div>
        <div className={styles.item}>
          <Number550 />
          <span className={styles.text}>Поставлено щебня</span>
        </div>
        <div className={styles.item}>
          <Number50 />
          <span className={styles.text}>Крупных строительных объектов реализовано</span>
        </div>
      </div>
    </section>
  );
};
