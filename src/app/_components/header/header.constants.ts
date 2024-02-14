import {TNavItem} from "@/app/_components/header/navItem/navItem.types";

export const headerMenu: TNavItem[] = [
    {
        title: 'Нерудные материалы',
        url: '/materials',
        child: [
            {
                title: 'Песок',
                url: '/materials?product=pesok'
            },
            {
                title: 'Шебень',
                url: '/materials/?product=sheben'
            },
            {
                title: 'Керамзит',
                url: '/materials/?product=gravi'
            },
            {
                title: 'Грунт',
                url: '/materials/?product=grunt'
            },
        ]
    },
    {
        title: 'Вывоз и утилизация',
        url: '/export'
    },
    {
        title: 'Аренда спецтехники', url: 'rent', child: [
            {
                title: 'Самосвалы', url: '',
            },
            {
                title: 'Эксковаторы-погрузчики', url: '',
            },
            {
                title: 'Колесные эксковаторы', url: '',
            },
            {
                title: 'Гусеничные', url: '',
            },
            {
                title: 'Мини погрузчики', url: '',
            },
            {
                title: 'Краны манипуляторы', url: '',
            },
            {
                title: 'Автокраны', url: '',
            },
            {
                title: 'Бульдозеры', url: '',
            },
            {
                title: 'Асфаольтоукладчики', url: '',
            },
        ]
    },
    {
        title: 'Строительные работы',
        url: '',
    },
    {
        title: 'О компании',
        url: '',
    },
    {
        title: 'Наши работы',
        url: '',
    },
    {
        title: 'Контакты',
        url: '',
    },


]