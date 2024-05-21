import {RentCatalogAccordionT, RentDataItem} from "@/app/_components/rent-catalog/types";
import SHACMAN42Img from '@/assets/images/rent-catalog/1.webp'
import SHACMAN64Img from '@/assets/images/rent-catalog/2.webp'
import SHACMAN84Img from '@/assets/images/rent-catalog/3.webp'
import ScaniaP440 from '@/assets/images/rent-catalog/4.webp'
import BobcatS450 from '@/assets/images/rent-catalog/5.webp'
import BobcatS630 from '@/assets/images/rent-catalog/6.webp'
import BobcatS770 from '@/assets/images/rent-catalog/7.webp'
import JCB3CX from '@/assets/images/rent-catalog/8.webp'
import JCB4CX from '@/assets/images/rent-catalog/9.webp'
import JCB5CXECO from '@/assets/images/rent-catalog/10.webp'
import JCB85Z2 from '@/assets/images/rent-catalog/11.webp'
import JCBJS205 from '@/assets/images/rent-catalog/12.webp'
import LovolFR245E2 from '@/assets/images/rent-catalog/13.webp'
import JCBJS260 from '@/assets/images/rent-catalog/14.webp'
import JCBJS330 from '@/assets/images/rent-catalog/15.webp'
import JCBJS360D from '@/assets/images/rent-catalog/16.webp'
import JCBJS160W from '@/assets/images/rent-catalog/17.webp'
import JCBJS175W from '@/assets/images/rent-catalog/18.webp'
import JCBJS200W from '@/assets/images/rent-catalog/19.webp'
import JCB422 from '@/assets/images/rent-catalog/20.webp'
import JCB455 from '@/assets/images/rent-catalog/21.webp'
import JCB467 from '@/assets/images/rent-catalog/22.webp'
import KC557131 from '@/assets/images/rent-catalog/23.webp'
import XCMGQY25L4S from '@/assets/images/rent-catalog/24.webp'
import ZoomlionZMC251C from '@/assets/images/rent-catalog/25.webp'
import KC557291B from '@/assets/images/rent-catalog/26.webp'
import XCMGXCT30S from '@/assets/images/rent-catalog/27.webp'
import ZoomlionZTC300V from '@/assets/images/rent-catalog/28.webp'
import KC657135 from '@/assets/images/rent-catalog/29.webp'
import XCMGXCT55S from '@/assets/images/rent-catalog/30.webp'
import XCMGQY70KS from '@/assets/images/rent-catalog/31.webp'
import ZOOMLIONZTC from '@/assets/images/rent-catalog/32.webp'
import ZOOMLIONZTC1000V from '@/assets/images/rent-catalog/32.webp'
import XCMGRT150 from '@/assets/images/rent-catalog/33.webp'
import ZOOMLIONZTC2000V from '@/assets/images/rent-catalog/34.webp'
import ZOOMLIONZTC2000V2 from '@/assets/images/rent-catalog/35.webp'
import Kamaz from '@/assets/images/rent-catalog/37.webp'
import FAWTigerV from '@/assets/images/rent-catalog/38.webp'
import Axor1824 from '@/assets/images/rent-catalog/39.webp'
import TadanoAT195SG from '@/assets/images/rent-catalog/40.webp'
import HansinHS2750v1 from '@/assets/images/rent-catalog/36.webp'
import HansinHS2750 from '@/assets/images/rent-catalog/42.webp'
import DAEWOONOVUS from '@/assets/images/rent-catalog/41.webp'

export const accordionsData: RentCatalogAccordionT[] = [
    {
        title: 'Самосвалы и полуприцепы',
        slug: 'samosval',
        items: [
            {
                title: 'Самосвалы 10м³-20м³',
                slug: 'samosval_10-20',
            },
            {
                title: 'Самосвалы 20м³-26м³',
                slug: 'samosval_20-26',
            },
            {
                title: 'Самосвалы 30м³-35м³',
                slug: 'samosval_30-35',
            },
            {
                title: 'Полуприцепы 30м³-35м³',
                slug: 'poluprichep_30-35',
            },
        ]
    },
    {
        title: 'Мини погрузчики',
        slug: 'mini-pogruz',
        items: [
            {
                title: 'S450',
                slug: 'mini-pogruz_s450',
            },
            {
                title: 'S630',
                slug: 'mini-pogruz_s630',
            },
            {
                title: 'S770',
                slug: 'mini-pogruz_s770',
            }
        ]
    },
    {
        title: 'Экскаваторы-погрузчики',
        slug: 'ecscovator-pogruz',
        items: [
            {
                title: '3CX',
                slug: 'ecscovator-pogruz_3cx',
            },
            {
                title: '4CX',
                slug: 'ecscovator-pogruz_4cx',
            },
            {
                title: '5CX',
                slug: 'ecscovator-pogruz_5cx',
            }
        ]
    },
    {
        title: 'Гусеничные экскаваторы',
        slug: 'gusenich-ecscovator',
        items: [
            {
                title: '85',
                slug: 'gusenich-ecscovator_85',
            },
            {
                title: '205',
                slug: 'gusenich-ecscovator_205',
            },
            {
                title: '245',
                slug: 'gusenich-ecscovator_245',
            },
            {
                title: '260',
                slug: 'gusenich-ecscovator_260',
            },
            {
                title: '330',
                slug: 'gusenich-ecscovator_330',
            },
            {
                title: '360',
                slug: 'gusenich-ecscovator_360',
            }
        ]
    },
    {
        title: 'Колесные экскаваторы',
        slug: 'kolesn-ecscovator',
        items: [
            {
                title: '160',
                slug: 'kolesn-ecscovator_160',
            },
            {
                title: '175',
                slug: 'kolesn-ecscovator_175',
            },
            {
                title: '200',
                slug: 'kolesn-ecscovator_200',
            }
        ]
    },
    {
        title: 'Фронтальные погрузчики',
        slug: 'frontalnye-pogruz',
        items: [
            {
                title: '422',
                slug: 'frontalnye-pogruz_422',
            },
            {
                title: '455',
                slug: 'frontalnye-pogruz_455',
            },
            {
                title: '467',
                slug: 'frontalnye-pogruz_467',
            }
        ]
    },
    {
        title: 'Автокраны',
        slug: 'avtokran',
        items: [
            {
                title: 'от 25м',
                slug: 'avtokran_25',
            },
            {
                title: 'от 30м',
                slug: 'avtokran_30',
            },
            {
                title: 'от 50-80м',
                slug: 'avtokran_50-80',
            },
            {
                title: 'от 100-250м',
                slug: 'avtokran_100-250',
            }
        ]
    },
    {
        title: 'Краны манипуляторы',
        slug: 'kran-manipulator',
    },
    {
        title: 'Автовышки',
        slug: 'avtovashki',
        items: [
            {
                title: 'от 22м',
                slug: 'avtovashki_22',
            },
            {
                title: 'от 28м',
                slug: 'avtovashki_28',
            },
            {
                title: 'от 32м',
                slug: 'avtovashki_32',
            },
            {
                title: 'от 45м',
                slug: 'avtovashki_45',
            }
        ]
    },
]


export const RentData: RentDataItem[] = [
    {
        title: 'SHACMAN 4×2',
        img: SHACMAN42Img,
        price: '2000',
        mainCategory: 'samosval',
        category: 'samosval_10-20',
        minTime: 'Миним. рабочее время 12 ч. (11+1)',
        description: [
            'Модель — L-3000',
            'Объём кузова: 10-20 м³',
            'Грузоподъемность: 18 т'
        ]
    },
    {
        title: 'SHACMAN 6×4',
        img: SHACMAN64Img,
        price: '2400',
        mainCategory: 'samosval',
        category: 'samosval_20-26',
        minTime: 'Миним. рабочее время 12 ч. (11+1)',
        description: [
            'Модель — X-3000',
            'Объём кузова: 20-26 м³',
            'Грузоподъемность: 32,1 т'
        ]
    },
    {
        title: 'SHACMAN 8×4',
        img: SHACMAN84Img,
        price: '2600',
        mainCategory: 'samosval',
        category: 'samosval_30-35',
        minTime: 'Миним. рабочее время 12 ч. (11+1)',
        description: [
            'Модель — X-3000',
            'Объём кузова: 35 м³',
            'Грузоподъемность: 41 т'
        ]
    },
    {
        title: 'Полуприцеп Scania P440',
        img: ScaniaP440,
        price: '2600',
        mainCategory: 'samosval',
        category: 'poluprichep_30-35',
        minTime: 'Миним. рабочее время 12 ч. (11+1)',
        description: [
            'Объём кузова: 30-35 м³',
            'Грузоподъемность: 41 т'
        ]
    },
    {
        title: 'Bobcat S450',
        img: BobcatS450,
        price: '1700',
        mainCategory: 'mini-pogruz',
        category: 'mini-pogruz_s450',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Грузоподъемность: 0,608 т',
            'Объём ковша: 0,93 м³',
            'Высота подъема ковшевого оборудования: 2,8 м'
        ]
    },
    {
        title: 'Bobcat S630',
        img: BobcatS630,
        price: '1800',
        mainCategory: 'mini-pogruz',
        category: 'mini-pogruz_s630',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Грузоподъемность: 1,04 т',
            'Объём ковша: 0,91 м³',
            'Высота подъема ковшевого оборудования: 3,07 м'
        ]
    },
    {
        title: 'Bobcat S770',
        img: BobcatS770,
        price: '1900',
        mainCategory: 'mini-pogruz',
        category: 'mini-pogruz_s770',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Грузоподъемность: 1,57 т',
            'Объём ковша: 0,93 м³',
            'Высота подъема ковшевого оборудования: 3,35 м'
        ]
    },
    {
        title: 'JCB 3CX',
        img: JCB3CX,
        price: '2500',
        mainCategory: 'ecscovator-pogruz',
        category: 'ecscovator-pogruz_3cx',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Грузоподъемность: 3,49 т',
            'Объем ковша передний/задний: 1,2/0,3 м³',
            'Глубина копания: 4,24 м'
        ]
    },
    {
        title: 'JCB 4CX',
        img: JCB4CX,
        price: '2750',
        mainCategory: 'ecscovator-pogruz',
        category: 'ecscovator-pogruz_4cx',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Грузоподъемность: 4,64 т',
            'Объем ковша передний/задний: 1,1/0,3 м³',
            'Глубина копания: 4,67 м',
            'С гидромолотом'
        ]
    },
    {
        title: 'JCB 5CX ECO',
        img: JCB5CXECO,
        price: '3000',
        mainCategory: 'ecscovator-pogruz',
        category: 'ecscovator-pogruz_5cx',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Грузоподъемность: 4,38 т',
            'Объем ковша передний/задний: 1,3/0,9 м³',
            'Глубина копания: 6,51 м',
        ]
    },
    {
        title: 'JCB 85Z-2',
        img: JCB85Z2,
        price: '2200',
        mainCategory: 'gusenich-ecscovator',
        category: 'gusenich-ecscovator_85',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 8,3 т',
            'Максимальная высота выгрузки: 5,02 м',
            'Максимальная глубина копания: 3,68 м',
        ]
    },
    {
        title: 'JCB JS205',
        img: JCBJS205,
        price: '2800',
        mainCategory: 'gusenich-ecscovator',
        category: 'gusenich-ecscovator_205',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 13,8 т',
            'Объем ковша: 0,85 м³',
        ]
    },
    {
        title: 'Lovol FR245E2',
        img: LovolFR245E2,
        price: '2800',
        mainCategory: 'gusenich-ecscovator',
        category: 'gusenich-ecscovator_245',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 23 т',
            'Объем ковша: 1,2 м³',
        ]
    },
    {
        title: 'JCB JS260',
        img: JCBJS260,
        price: '3000',
        mainCategory: 'gusenich-ecscovator',
        category: 'gusenich-ecscovator_260',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 26 т',
            'Объем ковша: 1,46 м³',
        ]
    },
    {
        title: 'JCB JS330',
        img: JCBJS330,
        price: '3400',
        mainCategory: 'gusenich-ecscovator',
        category: 'gusenich-ecscovator_330',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 31,7 т',
            'Объем ковша: 1,8 м³',
        ]
    },
    {
        title: 'Lovol FR360D',
        img: JCBJS360D,
        price: '3600',
        mainCategory: 'gusenich-ecscovator',
        category: 'gusenich-ecscovator_360',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 35,8 т',
            'Объем ковша: 1,7 м³',
        ]
    },
    {
        title: 'JCB JS 160W',
        img: JCBJS160W,
        price: '3100',
        mainCategory: 'kolesn-ecscovator',
        category: 'kolesn-ecscovator_160',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 17,32 т',
            'Объем ковша: 0,9 м³',
            'Максимальная глубина копания: 6,4 м'
        ]
    },
    {
        title: 'JCB JS 175W',
        img: JCBJS175W,
        price: '3100',
        mainCategory: 'kolesn-ecscovator',
        category: 'kolesn-ecscovator_175',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 17,52 т',
            'Объем ковша: 0,9 м³',
            'Максимальная глубина копания: 6,4 м'
        ]
    },
    {
        title: 'JCB JS 200W',
        img: JCBJS200W,
        price: '3300',
        mainCategory: 'kolesn-ecscovator',
        category: 'kolesn-ecscovator_200',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 22,81 т',
            'Объем ковша: 1,19 м³',
            'Максимальная глубина копания: 6,4 м'
        ]
    },
    {
        title: 'JCB 422',
        img: JCB422,
        price: '3000',
        mainCategory: 'frontalnye-pogruz',
        category: 'frontalnye-pogruz_422',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 11,9 т',
            'Объем ковша: 1,7 м³',
            'Грузоподъемность: 3,3 т'
        ]
    },
    {
        title: 'JCB 455',
        img: JCB455,
        price: '3400',
        mainCategory: 'frontalnye-pogruz',
        category: 'frontalnye-pogruz_455',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 17,88 т',
            'Объем ковша: 3,1 м³',
            'Грузоподъемность: 5,5 т'
        ]
    },
    {
        title: 'JCB 467',
        img: JCB467,
        price: '3600',
        mainCategory: 'frontalnye-pogruz',
        category: 'frontalnye-pogruz_467',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Эксплуатационная масса: 23,8 т',
            'Объем ковша: 4 м³',
            'Грузоподъемность: 7,7 т'
        ]
    },
    {
        title: 'ГАЛИЧАНИН КС-55713-1',
        img: KC557131,
        price: '2250',
        mainCategory: 'avtokran',
        category: 'avtokran_25',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 21,7 м',
            'Грузоподъемность: 25 тонн',
            'С гуськом: 30,7 м'
        ]
    },
    {
        title: 'XCMG QY25 L4 S',
        img: XCMGQY25L4S,
        price: '2250',
        mainCategory: 'avtokran',
        category: 'avtokran_25',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 39,5 м',
            'Грузоподъемность: 25 тонн',
            'С гуськом: 47,8 м'
        ]
    },
    {
        title: 'ZOOMLION ZМС-25-1С',
        img: ZoomlionZMC251C,
        price: '2250',
        mainCategory: 'avtokran',
        category: 'avtokran_25',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 32,5 м',
            'Грузоподъемность: 25 тонн',
            'С гуськом: 40,5 м'
        ]
    },
    {
        title: 'ГАЛИЧАНИН КС-55729-1В',
        img: KC557291B,
        price: '3700',
        mainCategory: 'avtokran',
        category: 'avtokran_30',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 30,7 м',
            'Грузоподъемность: 32 тонн',
        ]
    },
    {
        title: 'XCMG XCT30 S',
        img: XCMGXCT30S,
        price: '3700',
        mainCategory: 'avtokran',
        category: 'avtokran_30',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 42 м',
            'Грузоподъемность: 30 тонн',
            'С гуськом: 51 м'
        ]
    },
    {
        title: 'ZOOMLION ZTC300V',
        img: ZoomlionZTC300V,
        price: '3700',
        mainCategory: 'avtokran',
        category: 'avtokran_30',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 42,1 м',
            'Грузоподъемность: 30 тонн',
            'С гуськом: 50 м'
        ]
    },
    {
        title: 'ГАЛИЧАНИН КС-65713-5',
        img: KC657135,
        price: '5500',
        mainCategory: 'avtokran',
        category: 'avtokran_50-80',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 34,1 м',
            'Грузоподъемность: 50 тонн',
            'С гуськом: 49,2 м'
        ]
    },
    {
        title: 'XCMG XCT55S',
        img: XCMGXCT55S,
        price: '5500',
        mainCategory: 'avtokran',
        category: 'avtokran_50-80',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 44 м',
            'Грузоподъемность: 55 тонн',
            'С гуськом: 59,8 м'
        ]
    },
    {
        title: 'XCMG QY70KS',
        img: XCMGQY70KS,
        price: '8900',
        mainCategory: 'avtokran',
        category: 'avtokran_50-80',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 44,5 м',
            'Грузоподъемность: 70 тонн',
            'С гуськом: 60,3 м'
        ]
    },
    {
        title: 'ZOOMLION ZTC800',
        img: ZOOMLIONZTC,
        price: '9100',
        mainCategory: 'avtokran',
        category: 'avtokran_50-80',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 49,8 м',
            'Грузоподъемность: 80 тонн',
            'С гуськом: 74 м',
        ]
    },
    {
        title: 'ZOOMLION ZTC1000V',
        img: ZOOMLIONZTC1000V,
        price: '8700',
        mainCategory: 'avtokran',
        category: 'avtokran_100-250',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 64,5 м',
            'Грузоподъемность: 100 тонн',
            'С гуськом: 82,5 м'
        ]
    },
    {
        title: 'XCMG RT150',
        img: XCMGRT150,
        price: '11000',
        mainCategory: 'avtokran',
        category: 'avtokran_100-250',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Грузоподъемность: 150 т',
            'Длина стрелы: 60 м',
            'Длина стрелы с гуськом: 82 м'
        ]
    },
    {
        title: 'ZOOMLION ZTC2000V',
        img: ZOOMLIONZTC2000V,
        price: '12500',
        mainCategory: 'avtokran',
        category: 'avtokran_100-250',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 48,8 м',
            'Грузоподъемность: 200 тонн',
            'С гуськом: 67,9 м'
        ]
    },
    {
        title: 'LIEBHERR LTM 1250',
        img: ZOOMLIONZTC2000V2,
        price: '14750',
        mainCategory: 'avtokran',
        category: 'avtokran_100-250',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Длина стрелы: 72 м',
            'Грузоподъемность: 250 тонн',
            'С гуськом: 118 м'
        ]
    },
    {
        title: 'Камаз',
        img: Kamaz,
        price: '2600',
        mainCategory: 'kran-manipulator',
        minTime: 'Миним. рабочее время 5 ч. (4+1)',
        description: [
            'Миним. рабочее время 5 ч. (4+1)',
            'Грузоподъемность борта: 8 тонн',
            'Грузоподъемность стрелы: 6,2 тонн',
            'Размеры борта: 6×2,4',
            'Вылет стрелы: 6,3 м'
        ]
    },
    {
        title: 'FAW Tiger V',
        img: FAWTigerV,
        price: '2800',
        mainCategory: 'kran-manipulator',
        minTime: 'Миним. рабочее время 5 ч. (4+1)',
        description: [
            'Грузоподъемность борта: 10 тонн',
            'Грузоподъемность стрелы: 7 тонн',
            'Размеры борта: 7,1×2,45',
            'Вылет стрелы: 19 м'
        ]
    },
    {
        title: 'Mercedes-Benz Axor 1824',
        img: Axor1824,
        price: '2700',
        mainCategory: 'kran-manipulator',
        minTime: 'Миним. рабочее время 5 ч. (4+1)',
        description: [
            'Грузоподъемность борта: 10 тонн',
            'Грузоподъемность стрелы: 4 тонн',
            'Размеры борта: 6×2,35',
            'Вылет стрелы: 7 м'
        ]
    },
    {
        title: 'Tadano AT-195 SG',
        img: TadanoAT195SG,
        price: '2000',
        mainCategory: 'avtovashki',
        category: 'avtovashki_22',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Высота подъема: 22 метра',
            'Грузоподъёмность платформы: 200 кг',
            'Вылет стрелы: 13 м',
            'Длина гуська: 6 м'
        ]
    },
    {
        title: 'Hansin HS 2750',
        img: HansinHS2750v1,
        price: '2500',
        mainCategory: 'avtovashki',
        category: 'avtovashki_28',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Высота подъема: 28 метра',
            'Грузоподъёмность платформы: 250 кг',
            'Вылет стрелы: 18 м',
            'Угол поворота: 360˚'
        ]
    },
    {
        title: 'Hansin HS 3570',
        img: HansinHS2750,
        price: '2750',
        mainCategory: 'avtovashki',
        category: 'avtovashki_32',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Высота подъема: 32 метра',
            'Грузоподъёмность платформы: 300 кг',
            'Вылет стрелы: 17 м',
            'Угол поворота: 360˚'
        ]
    },
    {
        title: 'DAEWOO NOVUS',
        img: DAEWOONOVUS,
        price: '3500',
        mainCategory: 'avtovashki',
        category: 'avtovashki_45',
        minTime: 'Миним. рабочее время 8 ч. (7+1)',
        description: [
            'Высота подъема: 45 метра',
            'Грузоподъёмность платформы: 400 кг',
            'Вылет стрелы: 24 м',
            'Угол поворота: 360˚'
        ]
    }
]