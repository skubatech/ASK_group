import styles from "@/app/_components/Cases/Modals/modals.module.scss";
import ParkingImg from "@/assets/images/parking.jpeg";

export const Shtraf = () => {
    return (
        <section className={styles.main}>
            <div className={styles.info}>
                <span className={styles.title}>Штраф-стоянка</span>
                <span className={styles.decription}>Выполение уборочно погрузочных работ</span>
            </div>
            <div className={styles.img}>
                <img {...ParkingImg} alt='Парковка'/>
            </div>
        </section>
    )
}