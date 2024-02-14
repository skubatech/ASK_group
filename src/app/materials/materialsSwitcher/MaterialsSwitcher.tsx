'use client';
import {materialsTabs} from "@/app/materials/materials.constants";
import styles from './materilasSwicher.module.scss'
import {useEffect, useState} from "react";
import {ProductCard} from "@/app/_components/productCard/productCard";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import cn from "classnames";
import {useBreakpointIndex} from "@/utils/hooks/useBreakpointIndex";
import {BREAKPOINTS_INDEXES} from "@theme/constants/breakpoints";

export const MaterialsSwitcher = () => {
    const params = useSearchParams();
    const breakpoint = useBreakpointIndex();
    const isMobile = breakpoint === BREAKPOINTS_INDEXES.xs;
    const [maxItems, setMaxItems] = useState(12);
    const [product, setProduct] = useState(materialsTabs[0]);

    useEffect(() => {
        const param = params.get('product');
        if (param) {
            setProduct(materialsTabs.find((pr) => (pr.url === param)) || materialsTabs[0])
        }
    }, [params])

    useEffect(() => {
        setMaxItems(isMobile ? 4 : 16);
    }, [isMobile]);

    return (
        <section className={styles.wrapper}>
            <section className={styles.switcher}>
                {materialsTabs.map((tab) => (
                    <Link key={tab.title} className={cn(styles.tab, {[styles.active]: product.url === tab.url})}
                          href={{pathname: '/materials', query: {product: tab.url}}}>{tab.title}</Link>
                ))}
            </section>
            <section className={styles.catalog}>
                {product?.products.slice(0, maxItems).map((product) =>
                    <ProductCard key={product.title} product={product}/>)}
            </section>
            {product.products.length > maxItems &&
                <section className={styles.more}>
                    <span className={styles.moreBtn}
                          onClick={() => setMaxItems(product.products.length)}>Показать еще</span>
                </section>}
        </section>

    )
}