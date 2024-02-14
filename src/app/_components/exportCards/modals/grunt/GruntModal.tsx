import styles from "../export.module.scss";
import {FC} from "react";
import ground from "@/assets/images/ground.png";

type Props = {
    closeModal: () => void
}
export const GruntModal: FC<Props> = ({closeModal}) => {
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
                        <span className={styles.title}>Вывоз и утилизация грунта с погрузкой</span>
                        <span className={styles.price}>от 450.00 ₽</span>
                        <span className={styles.description}>
                                    <span className={styles.des_title}>Описание</span>
                                    <span className={styles.row}>Наши специалисты обладают опытом работы с грунтом и знают все нюансы его утилизации. Мы используем современное оборудование и технологии, чтобы эффективно и безопасно осуществлять вывоз и утилизацию грунта.</span>
                        </span>
                    </section>
                    <span onClick={onClick}>
                        <span className={styles.btn}>Заказать сейчас</span>
                    </span>
                </div>
                <div className={styles.img}>
                    <img {...ground} alt='Image' className={styles.img}/>
                </div>
            </section>
        </section>
    )
}
