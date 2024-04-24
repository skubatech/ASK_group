import {TNavItem} from "@/app/_components/header/navItem/navItem.types";

export const headerMenu: TNavItem[] = [
    {
        title: 'Нерудные материалы',
        url: '/materials',
        child: [
            {
                title: 'Шебень',
                url: '/materials/?product=sheben'
            },
            {
                title: 'Песок',
                url: '/materials?product=pesok'
            },
            {
                title: 'Грунт',
                url: '/materials/?product=grunt'
            },
            {
                title: 'Вторичные материалы',
                url: '/materials/?product=secondary'
            },
        ]
    },
    {
        title: 'Вывоз и утилизация',
        url: '/export'
    },
    {
        title: 'Аренда спецтехники', url: '/rent', child: [
            {
                title: 'Самосвалы и полуприцепы', url: '/rent/?mainParam=samosval',
            },
            {
                title: 'Мини погрузчики', url: '/rent/?mainParam=mini-pogruz',
            },
            {
                title: 'Экскаваторы-погрузчики', url: '/rent/?mainParam=ecscovator-pogruz',
            },
            {
                title: 'Гусеничные экскаваторы', url: '/rent/?mainParam=gusenich-ecscovator',
            },
            {
                title: 'Колесные экскаваторы', url: '/rent/?mainParam=kolesn-ecscovator',
            },
            {
                title: 'Фронтальные погрузчики', url: '/rent/?mainParam=frontalnye-pogruz',
            },
            {
                title: 'Автокраны', url: '/rent/?mainParam=avtokran',
            },
            {
                title: 'Краны манипуляторы', url: '/rent/?mainParam=kran-manipulator',
            },
            {
                title: 'Автовышки', url: '/rent/?mainParam=avtovashki',
            },
        ]
    },
    {
        title: 'Строительные работы',
        url: '/construction-works',
    },
    {
        title: 'О компании',
        url: 'https://asklogspb.ru/#about',
    },
    {
        title: 'Наши работы',
        url: 'https://asklogspb.ru/#works',
    },
    {
        title: 'Контакты',
        url: 'https://asklogspb.ru/#contacts',
    },


]