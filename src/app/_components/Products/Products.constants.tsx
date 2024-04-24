import NeRud from '@/assets/images/nerud.webp'
import Develop from '@/assets/images/develop.webp'
import Utilization from '@/assets/images/utilization.webp'
import Rent from '@/assets/images/rent.webp'
import {TProductType} from "@/app/_components/Products/ProductCard/ProductCard.types";

export const products: TProductType[] = [
    {
        title: 'Нерудные материалы',
        image: <img {...NeRud} alt='Нерудные материалы'/>,
        url: '/materials'
    },
    {
        title: 'Вывоз и утилизация',
        image: <img {...Utilization} alt='Вывоз и утилизация'/>,
        url: '/export'
    },
    {
        title: 'Аренда спецтехники',
        image: <img {...Rent} alt='Аренда спецтехники'/>,
        url: '/rent'
    },
    {
        title: 'Строительные работы',
        image: <img {...Develop} alt='Строительные работы'/>,
        url: '/construction-works'
    },
]