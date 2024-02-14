import styles from '../modals.module.scss'
import IMG2 from "@/assets/images/image 17.png";

export const Astrid = () => {
    return (
        <section className={styles.main}>
            <div className={styles.info}>
                <span className={styles.title}>Вывоз грунта и долгосрочное сотрудничествос ЖК «Астрид»</span>
                <span className={styles.decription}>Вывоз грунта и долгосрочное сотрудничествос ЖК «Астрид»</span>
            </div>
            <div className={styles.img}>
                <img {...IMG2} alt='Парковка'/>
            </div>
        </section>
    );
}