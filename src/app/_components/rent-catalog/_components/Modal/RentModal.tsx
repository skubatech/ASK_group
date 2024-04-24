import {useSearchParams} from "next/navigation";
import styles from "@/app/_components/productCard/productModal/productModal.module.scss";
import {FC} from "react";
import {RentDataItem} from "@/app/_components/rent-catalog/types";
import {mapCategory} from "@/app/_components/rent-catalog/_components/Modal/mapMainCategory";

type Props = {
    product: RentDataItem,
    closeModal: () => void
}
export const RentModal: FC<Props> = ({product, closeModal}) => {
    const params = useSearchParams();
    const parent = mapCategory[product.mainCategory];

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
                        <span className={styles.price}>от {product.price} ₽/час</span>
                        <span className={styles.row}>{product.minTime}</span>
                        <span className={styles.description}>
                            {product.description && (
                                <>
                                    <span className={styles.des_title}>Описание</span>
                                    <Description/>
                                </>
                            )}
                        </span>

                    </section>
                    <span onClick={onClick}>
                        <span className={styles.btn}>Заказать сейчас</span>
                    </span>
                </div>
                <div className={styles.img}>
                    <img {...product.img}/>
                </div>
            </section>
        </section>
    )
}