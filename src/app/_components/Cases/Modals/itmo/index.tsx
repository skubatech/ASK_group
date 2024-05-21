import styles from "@/app/_components/Cases/Modals/modals.module.scss";
import IMG3 from "@/assets/images/image 17.webp";

export const Itmo = () => {
    return (
        <section className={styles.main}>
            <div className={styles.info}>
                <span className={styles.title}>Вывоз грунта и долгосрочное сотрудничество при строительстве «ИТМО Хай Парка»</span>
                {/*<span className={styles.decription}>Вывоз грунта и долгосрочное сотрудничество при строительстве «ИТМО Хай Парк»</span>*/}
            </div>
            <div className={styles.img}>
                <img {...IMG3} alt='Парковка'/>
            </div>
        </section>
    )
}