import styles from "@/app/_components/Cases/Modals/modals.module.scss";
import ParkingImg from "@/assets/images/parking.webp";

export const Shtraf = () => {
    return (
        <section className={styles.main}>
            <div className={styles.info}>
                <span className={styles.title}>Штраф-стоянка</span>
                <span className={styles.decription}>Строительство штраф-стоянки площадью 38 000 м2</span>
            </div>
            <div className={styles.img}>
                <img {...ParkingImg} alt='Парковка'/>
            </div>
        </section>
    )
}