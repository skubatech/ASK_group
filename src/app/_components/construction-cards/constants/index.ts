import otsapka from '@/assets/images/construction/otsapka.webp';
import razrabotka from '@/assets/images/construction/razrabotka.webp';
import stroitelstvo from '@/assets/images/construction/stroitelstvo.webp';
import ukladka from '@/assets/images/construction/ukladka.webp';
import { StaticImageData } from 'next/image';

export interface ConstructionCardsItems {
    id: number;
    title: string;
    imgSrc: StaticImageData
}

export const constructionCardsItems: ConstructionCardsItems[] = [
    {
        id: 0,
        title: `Отсыпка\nучастков`,
        imgSrc: otsapka
    },
    {
        id: 1,
        title: `Разработка\nкотлованов`,
        imgSrc: razrabotka
    },
    {
        id: 2,
        title: `Строительство\nдорог и площадок`,
        imgSrc: stroitelstvo
    },
    {
        id: 3,
        title: `Строительство\nангаров под ключ`,
        imgSrc: ukladka
    }
]