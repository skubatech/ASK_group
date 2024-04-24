import styles from "../export.module.scss";
import {FC} from "react";
import musor from '@/assets/images/musor.webp';

type Props = {
    closeModal: () => void
}
export const MusorModal: FC<Props> = ({closeModal}) => {
    const onClick = () => {
        const element = document.getElementById('#form')
        element?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        closeModal();
    }

    return (
        <section>
            <section className={styles.main}>
                <div className={styles.content}>
                    <section className={styles.info}>
                        <span className={styles.title}>Вывоз мусора</span>
                        <span className={styles.price}>от 600 ₽/м³</span>
                        <span className={styles.description}>
                                    <span className={styles.des_title}>Описание</span>
                                    <span className={styles.row}>Команда специалистов осуществляет вывоз строительного мусора с применением современного оборудования. Гарантируем безопасность и эффективность процесса утилизации, учитывая все необходимые нормы и требования.</span>
                        </span>
                    </section>
                    <span onClick={onClick}>
                        <span className={styles.btn}>Заказать сейчас</span>
                    </span>
                </div>
                <div className={styles.img}>
                    <img {...musor} alt='Image' className={styles.img}/>
                </div>
            </section>
        </section>
    )
}
