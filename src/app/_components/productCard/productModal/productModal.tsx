import styles from './productModal.module.scss'
import {FC} from "react";
import {useSearchParams} from "next/navigation";
import {mapRoutes} from "@/app/_components/productCard/productModal/productModal.hooks";

type Props = {
    product: any,
    closeModal: () => void
}
export const ProductModal: FC<Props> = ({product, closeModal}) => {
    const params = useSearchParams();
    const parent = mapRoutes[params.get('product') || 'sheben']

    const onClick = () => {
        const element = document.getElementById('#form')
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        closeModal();
    }

    return (
        <section>
            <section className={styles.main}>
                <div className={styles.content}>
                    <span className={styles.breadcrumbs}>{parent} {'>'} {product.title} </span>
                    <section className={styles.info}>
                        <span className={styles.title}>{product.title}</span>
                        <span className={styles.price}>от {product.price}.00 ₽</span>
                        <span className={styles.description}>
                          <span className={styles.des_title}>Описание</span>
                            {product.description.map((d: string) => (<span key={d} className={styles.row}>{d}</span>))}
                    </span>
                    </section>
                    <span onClick={onClick}>
                        <span className={styles.btn}>Заказать сейчас</span>
                    </span>
                </div>
                <div className={styles.img}>
                    <img {...product.image}/>
                </div>
            </section>
        </section>
    )
}