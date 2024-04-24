import {StaticImageData} from "next/image";

export type AccordionItemT = {
    title: string;
    slug: RentCategoryT;
}


export type RentCatalogAccordionT = {
    title: string;
    slug: MainCategoryT;
    items?: AccordionItemT[];
}

export type MainCategoryT =
    'samosval'
    | 'mini-pogruz'
    | 'ecscovator-pogruz'
    | 'gusenich-ecscovator'
    | 'kolesn-ecscovator'
    | 'frontalnye-pogruz'
    | 'avtokran'
    | 'kran-manipulator'
    | 'avtovashki'


export type RentCategoryT =
    'samosval_10-20'
    | 'samosval_20-26'
    | 'samosval_30-35'
    | 'poluprichep_30-35'
    | 'mini-pogruz_s450'
    | 'mini-pogruz_s630'
    | 'mini-pogruz_s770'
    | 'ecscovator-pogruz_3cx'
    | 'ecscovator-pogruz_4cx'
    | 'ecscovator-pogruz_5cx'
    | 'gusenich-ecscovator_85'
    | 'gusenich-ecscovator_205'
    | 'gusenich-ecscovator_245'
    | 'gusenich-ecscovator_260'
    | 'gusenich-ecscovator_330'
    | 'gusenich-ecscovator_360'
    | 'kolesn-ecscovator_160'
    | 'kolesn-ecscovator_175'
    | 'kolesn-ecscovator_200'
    | 'frontalnye-pogruz_422'
    | 'frontalnye-pogruz_455'
    | 'frontalnye-pogruz_467'
    | 'avtokran_25'
    | 'avtokran_30'
    | 'avtokran_50-80'
    | 'avtokran_100-250'
    | 'avtovashki_22'
    | 'avtovashki_28'
    | 'avtovashki_32'
    | 'avtovashki_45'

export type RentDataItem = {
    title: string,
    img: StaticImageData,
    price: string,
    mainCategory: MainCategoryT,
    category?: RentCategoryT,
    minTime: string;
    description: string[]
}