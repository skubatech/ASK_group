import rusal from "@/assets/images/rusalLogo.webp";
import itmo from "@/assets/images/itmoLogo.webp";
import fosagro from "@/assets/images/fosagroLogo.webp";
import lsr from "@/assets/images/lsrLogo.webp";
import rr from "@/assets/images/rrLogo.webp";
import {StaticImageData} from "next/image";

interface clientItemsType {
    imgSrc: StaticImageData;
    text: string;
}

export const clientItems: clientItemsType[] = [
    {
        imgSrc: rusal,
        text: 'АО «РУСАЛ»',
    },
    {
        imgSrc: itmo,
        text: 'АО «ИТМО ХАЙПАРК»',
    },
    {
        imgSrc: fosagro,
        text: 'АО «АПАТИТ» ФОСАРГО',
    },
    {
        imgSrc: lsr,
        text: 'ЛСР',
    },
    {
        imgSrc: rr,
        text: 'АО «МегаМейд»',
    },
];