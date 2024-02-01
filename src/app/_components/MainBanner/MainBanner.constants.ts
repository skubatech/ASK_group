import exportSnow from "@/assets/images/exportSnow.png";
import sandSupply from "@/assets/images/sandSupply.png";
import exportGround from "@/assets/images/exportGround.png";
import {StaticImageData} from "next/image";

interface SliderItemsType {
    imgSrc: StaticImageData;
    title: string;
    text: string;
}

export const bannerItems: SliderItemsType[] = [
    {
        imgSrc: exportSnow,
        title: 'Вывоз снега',
        text: 'от 300 руб/м',
    },
    {
        imgSrc: sandSupply,
        title: 'Поставка песка',
        text: 'от 600 руб/м',
    },
    {
        imgSrc: exportGround,
        title: 'Вывоз и утилизация грунта',
        text: 'от 300 руб/м',
    },
];