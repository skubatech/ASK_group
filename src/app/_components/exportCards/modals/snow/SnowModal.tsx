import styles from "../export.module.scss";
import {FC} from "react";
import snow from "@/assets/images/snow.png";

type Props = {
    closeModal: () => void
}
export const SnowModal: FC<Props> = ({closeModal}) => {
    const onClick = () => {
        const element = document.getElementById('#form')
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        closeModal();
    }

    return (
        <section>
            <section className={styles.main}>
                <div className={styles.content}>
                    <section className={styles.info}>
                        <span className={styles.title}>Вывоз снега</span>
                        <span className={styles.price}>от 450.00 ₽</span>
                        <span className={styles.description}>
                                    <span className={styles.des_title}>Описание</span>
                                    <span className={styles.row}>Наша команда специалистов готова выполнять работы по вывозу снега различных объемов с различных территорий. Мы эффективно и безопасно осуществляем вывоз снега с дорог, парковок, дворов и других объектов.</span>

                        </span>
                    </section>
                    <span onClick={onClick}>
                        <span className={styles.btn}>Заказать сейчас</span>
                    </span>
                </div>
                <div className={styles.img}>
                    <img {...snow} alt='Image' className={styles.img}/>
                </div>
            </section>
        </section>
    )
}