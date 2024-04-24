'use client';
import styles from './constructionCards.module.scss';
import otsapka from '@/assets/images/construction/otsapka.webp';
import razrabotka from '@/assets/images/construction/razrabotka.webp';
import stroitelstvo from '@/assets/images/construction/stroitelstvo.webp';
import ukladka from '@/assets/images/construction/ukladka.webp';

export const ConstructionCards = () => {
    const handleClick = () => {
        const element = document.getElementById('#form')
        element?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }

    return (
        <section className={styles.cards}>
            <div className={styles.card}>
                <img {...otsapka} alt='Image' className={styles.img}/>
                <span className={styles.title}>Отсыпка<br/>участков</span>
                <button className={styles.btn} onClick={handleClick}>Рассчитать</button>
            </div>
            <div className={styles.card}>
                <img {...razrabotka} alt='Image' className={styles.img}/>
                <span className={styles.title}>Разработка<br/>котлованов</span>
                <button className={styles.btn} onClick={handleClick}>Рассчитать</button>
            </div>
            <div className={styles.card}>
                <img {...stroitelstvo} alt='Image' className={styles.img}/>
                <span className={styles.title}>Строительство<br/>дорог&nbsp;и площадок</span>
                <button className={styles.btn} onClick={handleClick}>Рассчитать</button>
            </div>
            <div className={styles.card}>
                <img {...ukladka} alt='Image' className={styles.img}/>
                <span className={styles.title}>Укладка<br/>дорожных плит</span>
                <button className={styles.btn} onClick={handleClick}>Рассчитать</button>
            </div>
        </section>
    );
};
