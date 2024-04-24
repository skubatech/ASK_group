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
        element?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        closeModal();
    }

    const Description = () => {
        return (
            product.description.map((d: string) => (
                <span key={d} className={styles.row}>{d}</span>))
        )
    }

    return (
        <section>
            <section className={styles.main}>
                <div className={styles.content}>
                    <span className={styles.breadcrumbs}>{parent} {'>'} {product.title} </span>
                    <section className={styles.info}>
                        <span className={styles.title}>{product.title}</span>
                        <span className={styles.price}>от {product.price} ₽/м³</span>
                        <span className={styles.description}>
                            {product.description && (
                                <>
                                    <span className={styles.des_title}>Описание</span>
                                    <Description/>
                                </>
                            )}
                        </span>
                        {product.touse && <span className={styles.description}>
                                <>
                                    <span className={styles.des_title}>Применение</span>
                                    <span className={styles.row}>{product.touse}</span>
                                </>
                        </span>}

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