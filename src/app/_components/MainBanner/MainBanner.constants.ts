import sandSupply from "@/assets/images/sandSupply.webp";
import exportGround from "@/assets/images/exportGround.webp";
import exportRubble from "@/assets/images/exportRubble.webp";
import excavator from "@/assets/images/excavator.webp";
import backhoeLoader from "@/assets/images/backhoeLoader.webp";
import crane from "@/assets/images/crane.webp";
import excavation from "@/assets/images/excavation.webp";
import soilUtilization from "@/assets/images/soilUtilization.webp";
import {StaticImageData} from "next/image";

interface SliderItemsType {
    imgSrc: StaticImageData;
    title: string;
    text: string;
    path: string;
}

export const bannerItems: SliderItemsType[] = [
    {
        imgSrc: exportGround,
        title: 'Вывоз и утилизация грунта',
        text: 'от 200 руб/м',
        path: '/export'
    },
    {
        imgSrc: soilUtilization,
        title: 'Приемка и утилизация грунта',
        text: 'от 70 руб/м',
        path: '/export'
    },
    {
        imgSrc: sandSupply,
        title: 'Поставка песка',
        text: 'от 300 руб/м',
        path: '/construction-works'
    },
    // {
    //     imgSrc: exportSnow,
    //     title: 'Вывоз снега',
    //     text: 'от 250 руб/м',
    //     path: '/export'
    // },

    {
        imgSrc: exportRubble,
        title: 'Поставка щебня',
        text: 'от 800 руб/м',
        path: '/construction-works'
    },
    {
        imgSrc: excavation,
        title: 'Разработка котлованов',
        text: '',
        path: '/construction-works'
    },
    {
        imgSrc: excavator,
        title: 'Аренда экскаватора',
        text: 'от 2000 руб',
        path: '/rent/?mainParam=gusenich-ecscovator'
    },
    {
        imgSrc: backhoeLoader,
        title: 'Аренда экскаватора- погрузчика',
        text: 'от 2500 руб',
        path: '/rent?mainParam=ecscovator-pogruz'
    },
    {
        imgSrc: crane,
        title: 'Аренда автокрана',
        text: 'от 2300 руб',
        path: '/rent/?mainParam=avtokran'
    },
];