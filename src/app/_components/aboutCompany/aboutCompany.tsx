import styles from './aboutCompany.module.scss';
import {StaticImageData} from 'next/image';
import MouseSquare from '@/assets/icons/mouseSquare.svg';
import Number750 from '@/assets/icons/750.svg';
import Number600 from '@/assets/icons/600.svg';
import Number550 from '@/assets/icons/550.svg';
import Number50 from '@/assets/icons/50.svg';
import {useState} from "react";
import postavki from '@/assets/images/postavki.webp'
import personal from '@/assets/images/personal.webp'
import documents from '@/assets/images/documents.webp'
import cn from "classnames";
import {Advent_Pro} from "next/font/google";

const adventPro = Advent_Pro({subsets: ["cyrillic"], weight: '400'});
export const AboutCompany = () => {
    const [currImage, setCurrImage] = useState(postavki);
    const changeImage = (img: StaticImageData) => {
        setCurrImage(img);
    }

    return (
        <section className={`${styles.about} container`}>
            <div className={styles.wrapper}>
                <div className={styles.description}>
                    <h2 className={cn(styles.title)}>О компании</h2>
                    <span className={styles.text}>
            ASK GROUP — ваш надежный партнер по доставке нерудных материалов,
            аренды современной спецтехники и выполнении строительных работ! Наш
            автопарк состоит более, чем из 50 новейших единиц, которые
            обеспечивают эффективность и надежность в каждом проекте. Благодаря
            применению современной техники и профессионализму наших сотрудников
            мы гарантируем высокое качество услуг и оперативность в выполнении
            каждого этапа работы.
          </span>
                    <div className={styles.principles}>
                        <h3 className={cn(styles.title)}>Наши принципы</h3>
                        <div className={styles.principle} onMouseEnter={() => changeImage(postavki)}>
                            <span className={styles.item}>Точные и своевременные сроки поставки</span>
                            <MouseSquare/>
                        </div>
                        <div className={styles.principle} onMouseEnter={() => changeImage(personal)}>
                            <span className={styles.item}>Квалифицированный персонал</span>
                            <MouseSquare/>
                        </div>
                        <div className={styles.principle} onMouseEnter={() => changeImage(documents)}>
                            <span className={styles.item}>Полная документальная отчётность</span>
                            <MouseSquare/>
                        </div>
                    </div>
                </div>
                <div className={styles.imgWrap}>
                    <img {...currImage} alt='principles' className={styles.img}/>
                </div>
            </div>
            <div className={styles.statistics}>
                <div className={styles.item}>
                    <Number750/>
                    <span className={styles.text}>Грунта вывезено и утилизировано</span>
                </div>
                <div className={styles.item}>

                    <Number600/>
                    <span className={cn(styles.text, styles.num600)}>Поставлено песка по СПБ и ЛО</span>
                </div>
                <div className={styles.item}>
                    <Number550/>
                    <span className={styles.text}>Поставлено щебня</span>
                </div>
                <div className={styles.item}>
                    <span id={styles.num50}>
                           <Number50/>
                    </span>
                    <span className={styles.text} id={styles.num50}>
                    Крупных строительных объектов реализовано
          </span>
                </div>
            </div>
        </section>
    );
};
