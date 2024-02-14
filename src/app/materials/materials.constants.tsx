import Pesok1 from '@/assets/images/pesok_carrier.png'
import Pesok2 from '@/assets/images/pesok_namv.png';
import Pesok3 from '@/assets/images/pesok_seyn.png'
import Pesok4 from '@/assets/images/pesok_seyn.png'
import DetskiPesok from '@/assets/images/pesok/detskij-pesok.png'
import Pesch_Grav from '@/assets/images/pesok/pesch-grav.jpeg'
import Melki_pesok from '@/assets/images/pesok/pesok-melkiy.jpg'
import Rechnoy from '@/assets/images/pesok/rechnoy.jpeg'
import Sheb_Pesok from '@/assets/images/pesok/sheb_pesk.jpeg'
import Stroit_pesok from '@/assets/images/pesok/stroitelny_pesok.jpg'
import Suspes from '@/assets/images/pesok/suspec.jpeg'

import Sheben1 from '@/assets/images/shenen/sheben-2-1-570x360-1.jpg'
import Sheben12 from '@/assets/images/shenen/sheben-2-1-570x360-1.jpg'
import Sheben6 from '@/assets/images/shenen/bulyzhnik-karernyj.jpg.webp'
import Sheben8 from '@/assets/images/shenen/co32i-min.jpg'
import Sheben10 from '@/assets/images/shenen/scheben-40-70-1200x700-1.jpg'
import Sheben11 from '@/assets/images/shenen/scheben-frakciya-5-20.jpg'

import Gravi_5_20 from '@/assets/images/shenen/gravi_5_20.jpeg'
import RechGalc from '@/assets/images/shenen/rech_galc.jpeg'
import Valun from '@/assets/images/shenen/valun.jpeg'
import ChenoZem from '@/assets/images/grunt/chernozem.jpeg'
import Garcovka from '@/assets/images/grunt/garcovka.jpeg'
import Lesnaya from '@/assets/images/grunt/lesnay_z.jpeg'
import Peskogrunt from '@/assets/images/grunt/peskogrunt.jpeg'
import PlodorudGrunt from '@/assets/images/grunt/plodorodn_grunt.jpeg'
import PochvGrunt from '@/assets/images/grunt/pochv_grunt.jpeg'
import PolevayZ from '@/assets/images/grunt/polevay_z.jpeg'
import Rastiteln_grunt from '@/assets/images/grunt/rastiteln_grunt.jpeg'
import Torf from '@/assets/images/grunt/torf.jpeg'
import TorfGrunt from '@/assets/images/grunt/torf_grunt.jpeg'

export const materialsTabs = [
    {
        title: 'Щебень',
        url: 'sheben',
        products: [
            {
                title: 'Бетонный щебень',
                price: '800',
                image: Sheben1,
            },
            {
                title: 'Булыжники',
                price: '800',
                image: Sheben6,
            },
            {
                title: 'Валуны',
                price: '5,500',
                image: Valun,
            },
            {
                title: 'Гравий фракция 20-40',
                price: '800',
                image: Sheben12,
            },
            {
                title: 'Гравий франция 40-70',
                price: '800',
                image: Sheben10,
            },
            {
                title: 'Гравий франция 5-20',
                price: '800',
                image: Gravi_5_20,
            },
            {
                title: 'Речная галька',
                price: '17,400',
                image: RechGalc,
            },
            {
                title: 'Щебеночно-песчаная смесь фракция 0-40 мм',
                price: '800',
                image: Sheben6,
            },
            {
                title: 'Щебеночно-песчаная смесь фракция 0-70 мм',
                price: '800',
                image: Sheben8,
            },
            {
                title: 'Щебень гравийный фракция 5-20',
                price: '1,250',
                image: Sheben10,
            },
            {
                title: 'Щебень гравийный фракция 20-40',
                price: '800',
                image: Sheben11,
            },
            {
                title: 'Щебень гравийный фракция 40-70',
                price: '800',
                image: Sheben11,
            },
            {
                title: 'Щебень гранитный отсев 0-5 (розовый)',
                price: '800',
                image: Sheben11,
            },
            {
                title: 'Щебень гранитный фракции 40-70',
                price: '800',
                image: Sheben12,
            },

        ]
    },
    {
        title: 'Песок',
        url: 'pesok',
        products: [
            {
                title: 'Песок карьерный',
                price: '270',
                image: Pesok1,
                description: [
                    'Модуль крупности - 0,16-5,0 мм',
                    'Плотность 2-2,8 г/м3',
                    'Коэффициент фильтрации 5-11 м/сут'
                ]
            },
            {
                title: 'Песок намывной',
                price: '400',
                image: Pesok2,
                description: [
                    'Модуль крупности – 0,16 – 5,0 мм',
                    'Плотность – 1500-1600 кг/м3',
                    'Коэффициент фильтрации – 7-10 м/сут'
                ]
            },
            {
                title: 'Песок сеянный',
                price: '300',
                image: Pesok3,
                description: [
                    'Модуль крупности – 0,16 – 5,0 мм',
                    'Плотность – 1200-1600 т/м3',
                    'Коэффициент фильтрации – 5-7 м/сут'
                ]
            },
            {
                title: 'Песок морской',
                price: '600',
                image: Pesok4,
                description: [
                    'Модуль крупности – 0,16 – 5,0 мм',
                    'Плотность – 1500-1600 кг/м3',
                    'Коэффициент фильтрации – 7-10 м/сут'
                ]
            },
            {
                title: 'Песок для детских песочниц и площадок',
                price: '600',
                image: DetskiPesok,
                description: [
                    'Пeсoк карьеpный нaмывнoй',
                    'просеянный',
                    'Фракция 1,3-1,5 мм'
                ]
            },
            {
                title: 'Песчано-гравийная смесь',
                price: '350',
                image: Pesch_Grav,
                description: [
                    'Фракция песка: 0,16 – 5,0 мм',
                    'Фракция гравия – 5-70 мм',
                    'Фракция валунов – 70 – 150 мм'
                ]
            },
            {
                title: 'Песок кварцевый',
                price: '3000',
                image: Melki_pesok,
                description: [
                    'Модуль крупности – 0,1-5 мм',
                    'Плотность: 1,5-1,7 г/м3',
                    'Коэффициент фильтрации: 0,1-2 м'
                ]
            },
            {
                title: 'Песок речной',
                price: '340',
                image: Rechnoy,
                description: [
                    'Модуль крупности – 0,16 – 5,0 мм',
                    'Плотность – 1,45-1,5 т/м3',
                    'Коэффициент фильтрации – 5-7 м/сут'
                ]
            },
            {
                title: 'Щебеночно-песчаная смесь',
                price: '900',
                image: Sheb_Pesok,
            },
            {
                title: 'Песок для строительных работ',
                price: '250',
                image: Stroit_pesok,
            },
            {
                title: 'Супесь',
                price: '250',
                image: Suspes,
                description: [
                    'Модуль крупности - 0,2-0,6 мм',
                    'Коэффициент фильтрации - 0,5 м/сут'
                ]
            }
        ]
    },
    {
        title: 'Гравий',
        url: 'gravi',
        products: [
            {
                title: 'Булыжники',
                price: '650',
                image: Sheben6,
            },
            {
                title: 'Валуны',
                price: '5500',
                image: Valun,
            },
            {
                title: 'Гравий фракция 20-40',
                price: '1250',
                image: Sheben1,
            },
            {
                title: 'Гравий фракция 40-70',
                price: '1200',
                image: Sheben10,
            },
            {
                title: 'Гравий фракция 5-20',
                price: '1300',
                image: Gravi_5_20,
            },
            {
                title: 'Речная галька',
                price: '17400',
                image: RechGalc,
            },
        ]
    },
    {
        title: 'Грунт',
        url: 'grunt',
        products: [
            {
                title: 'Гарцовка',
                price: '120',
                image: Garcovka,
                description: [
                    'Известь негашеная - 15%',
                    'Песок сеяный Мк 0.8-1.2 мм - 85%'
                ]
            },
            {
                title: 'Чернозем',
                price: '500',
                image: ChenoZem,
                description: [
                    'Модуль крупности: 1,5 – 2,2 мм',
                    'Коэфф. фильтрации: 5-7',
                    'Комки глины – отсутствуют',
                    'Водопроницаемость -  высокая'
                ]
            },
            {
                title: 'Лесная земля',
                price: '500',
                image: Lesnaya,
            },
            {
                title: 'Пескогрунт',
                price: '50',
                image: Peskogrunt,
                description: [
                    'Грунт – 50%',
                    'Песок – 50%',
                ]
            },
            {
                title: 'Плодородный грунт',
                price: '500',
                image: PlodorudGrunt,
                description: [
                    'Низинный торф - 70%',
                    'Плодородная почва - 30%',
                ]
            },
            {
                title: 'Торф',
                price: '500',
                image: Torf,
                description: [
                    '3-8 pH',
                    'Кислотность3-8 pH',
                    'Зольность - 5-10%',
                    'Гуминовые кислоты - > 50%',
                ]
            },
            {
                title: 'Растительный грунт',
                price: '350',
                image: Rastiteln_grunt,
                description: [
                    'Плодородная почва - 70%',
                    'Низинный торф - 20%',
                    'Песок - 10%',
                ]
            },
            {
                title: 'Почвогрунт',
                price: '1300',
                image: PochvGrunt,
                description: [
                    'Низинный торф – 35%',
                    'Чернозем – 50%',
                    'Биогумус - 10%',
                    'Речной песок – 5%',
                ]
            },
            {
                title: 'Полевая земля',
                price: '500',
                image: PolevayZ,
                description: [
                    'торф',
                    'песок',
                    'верхний слой почвы',
                ]
            },
            {
                title: 'Торфогрунт',
                price: '500',
                image: TorfGrunt,
                description: [
                    'Чернозем',
                    'Песок',
                    'Минералы (калий, фосфор, известь, азот)',
                ]
            },
        ]
    },
]