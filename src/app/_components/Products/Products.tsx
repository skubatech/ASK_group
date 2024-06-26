'use client';
import {products} from "@/app/_components/Products/Products.constants";
import {ProductCard} from "@/app/_components/Products/ProductCard/ProductCard";
import styles from './Products.module.scss'
import cn from "classnames";

export const Products = () => {
    return (
        <div className={cn('container', styles.main)} id="services">
            {
                products.map((product) => <ProductCard key={product.title} {...product}/>)
            }
        </div>
    )
}