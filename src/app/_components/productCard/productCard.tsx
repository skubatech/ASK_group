import styles from './productCard.module.scss'
import {FC, useState} from "react";
import {useBreakpointIndex} from "@/utils/hooks/useBreakpointIndex";
import {BREAKPOINTS_INDEXES} from "@theme/constants/breakpoints";
import {Modal} from "@/app/_components/modal";
import {ProductModal} from "@/app/_components/productCard/productModal/productModal";

type Props = {
    product: any
}
export const ProductCard: FC<Props> = ({product}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    }

    const breakpoint = useBreakpointIndex();
    const isMobile = breakpoint === BREAKPOINTS_INDEXES.xs;
    return (
        <>
            <div className={styles.card} onClick={handleClick}>
                <img {...product.image} className={styles.img}/>
                <span className={styles.text}>
                <span className={styles.title}>
                    {product.title}
                </span>
                <span className={styles.price}>
                    от {product.price}{!isMobile && '.00'} ₽
                </span>
            </span>
            </div>
            {open &&
                <Modal setOpen={setOpen}><ProductModal product={product} closeModal={() => setOpen(false)}/></Modal>}
        </>

    )
}