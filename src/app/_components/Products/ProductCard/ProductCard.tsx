import styles from './ProductCard.module.scss'
import {FC, ReactNode} from "react";
import Link from "next/link";

type Props = {
    title: string;
    image: ReactNode,
    url: string;
}
export const ProductCard: FC<Props> = ({title, image, url}) => {
    return (
        <Link href={url} className={styles.card}>
            <span>{image}</span>
            <span className={styles.title}>{title}</span>
            <span className={styles.btn}>Заказать</span>
        </Link>
    )
}