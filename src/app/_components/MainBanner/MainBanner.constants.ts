import exportSnow from "@/assets/images/exportSnow.png";
import sandSupply from "@/assets/images/sandSupply.png";
import exportGround from "@/assets/images/exportGround.png";
import exportRubble from "@/assets/images/exportRubble.png";
import excavator from "@/assets/images/excavator.png";
import backhoeLoader from "@/assets/images/backhoeLoader.png";
import crane from "@/assets/images/crane.png";
import excavation from "@/assets/images/excavation.png";
import soilUtilization from "@/assets/images/soilUtilization.png";
import {StaticImageData} from "next/image";

interface SliderItemsType {
    imgSrc: StaticImageData;
    title: string;
    text: string;
    path: string;
}

export const bannerItems: SliderItemsType[] = [
    {
        imgSrc: exportSnow,
        title: 'Вывоз снега',
        text: 'от 250 руб/м',
        path: '/export'
    },
    {
        imgSrc: sandSupply,
        title: 'Поставка песка',
        text: 'от 300 руб/м',
        path: '/delivery'
    },
    {
        imgSrc: exportGround,
        title: 'Вывоз и утилизация грунта',
        text: 'от 200 руб/м',
        path: '/export'
    },
    {
        imgSrc: exportRubble,
        title: 'Поставка щебня',
        text: 'от 800 руб/м',
        path: '/delivery'
    },
    {
        imgSrc: excavator,
        title: 'Аренда экскаватора',
        text: 'от 2300 руб',
        path: '/'
    },
    {
        imgSrc: backhoeLoader,
        title: 'Аренда экскаватора-погрузчика',
        text: 'от 2300 руб',
        path: '/'
    },
    {
        imgSrc: crane,
        title: 'Аренда автокрана',
        text: 'от 2300 руб',
        path: '/'
    },
    {
        imgSrc: excavation,
        title: 'Разработка котлованов',
        text: '',
        path: '/'
    },
    {
        imgSrc: soilUtilization,
        title: 'Приемка и утилизация грунта',
        text: 'от 70 руб/м',
        path: '/export'
    },
];