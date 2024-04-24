import styles from '../modals.module.scss'
import IMG2 from "@/assets/images/image 18.webp";

export const Astrid = () => {
    return (
        <section className={styles.main}>
            <div className={styles.info}>
                <span className={styles.title}>Вывоз грунта и долгосрочное сотрудничество с ЖК «Астрид»</span>
            </div>
            <div className={styles.img}>
                <img {...IMG2} alt='Парковка'/>
            </div>
        </section>
    );
}