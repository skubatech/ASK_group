import {TNavItem} from "@/app/_components/header/navItem/navItem.types";

export const headerMenu: TNavItem[] = [
    {
        title: 'Нерудные материалы',
        url: 'https://asklogspb.ru/wp-content/themes/default/materials',
        child: [
            {
                title: 'Шебень',
                url: 'https://asklogspb.ru/wp-content/themes/default/materials/?product=sheben'
            },
            {
                title: 'Песок',
                url: 'https://asklogspb.ru/wp-content/themes/default/materials?product=pesok'
            },
            {
                title: 'Грунт',
                url: 'https://asklogspb.ru/wp-content/themes/default/materials/?product=grunt'
            },
            {
                title: 'Вторичные материалы',
                url: 'https://asklogspb.ru/wp-content/themes/default/materials/?product=secondary'
            },
        ]
    },
    {
        title: 'Вывоз и утилизация',
        url: 'https://asklogspb.ru/wp-content/themes/default/export'
    },
    {
        title: 'Аренда спецтехники', url: 'https://asklogspb.ru/wp-content/themes/default/rent', child: [
            {
                title: 'Самосвалы и полуприцепы',
                url: 'https://asklogspb.ru/wp-content/themes/default/rent/?mainParam=samosval',
            },
            {
                title: 'Мини погрузчики',
                url: 'https://asklogspb.ru/wp-content/themes/default/rent/?mainParam=mini-pogruz',
            },
            {
                title: 'Экскаваторы-погрузчики',
                url: 'https://asklogspb.ru/wp-content/themes/default/rent/?mainParam=ecscovator-pogruz',
            },
            {
                title: 'Гусеничные экскаваторы',
                url: 'https://asklogspb.ru/wp-content/themes/default/rent/?mainParam=gusenich-ecscovator',
            },
            {
                title: 'Колесные экскаваторы',
                url: 'https://asklogspb.ru/wp-content/themes/default/rent/?mainParam=kolesn-ecscovator',
            },
            {
                title: 'Фронтальные погрузчики',
                url: 'https://asklogspb.ru/wp-content/themes/default/rent/?mainParam=frontalnye-pogruz',
            },
            {
                title: 'Автокраны', url: 'https://asklogspb.ru/wp-content/themes/default/rent/?mainParam=avtokran',
            },
            {
                title: 'Краны манипуляторы',
                url: 'https://asklogspb.ru/wp-content/themes/default/rent/?mainParam=kran-manipulator',
            },
            {
                title: 'Автовышки', url: 'https://asklogspb.ru/wp-content/themes/default/rent/?mainParam=avtovashki',
            },
        ]
    },
    {
        title: 'Строительные работы',
        url: 'https://asklogspb.ru/wp-content/themes/default/construction-works',
    },
    {
        title: 'О компании',
        url: 'https://asklogspb.ru/wp-content/themes/default/#about',
    },
    {
        title: 'Наши работы',
        url: 'https://asklogspb.ru/wp-content/themes/default/#works',
    },
    {
        title: 'Контакты',
        url: 'https://asklogspb.ru/wp-content/themes/default/#contacts',
    },


]