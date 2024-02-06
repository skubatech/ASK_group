import styles from './ProductCard.module.scss'
import {FC, ReactNode} from "react";

type Props = {
    title: string;
    image: ReactNode,
    url: string;
}
export const ProductCard: FC<Props> = ({title, image, url}) => {
    return (
        <div className={styles.card}>
            <span>{image}</span>
            <span className={styles.title}>{title}</span>
            <span className={styles.btn}>Заказать</span>
        </div>
    )
}