import styles from "@/app/_components/Cases/Modals/modals.module.scss";
import IMG1 from "@/assets/images/image 16.png";

export const Belart = () => {
    return (
        <section className={styles.main}>
            <div className={styles.info}>
                <span className={styles.title}>Вывоз грунта при строительстве ЖК «БелАрт»</span>
                <span className={styles.decription}>Вывоз грунта при строительстве ЖК «БелАрт»</span>
            </div>
            <div className={styles.img}>
                <img {...IMG1} alt='Парковка'/>
            </div>
        </section>
    )
}