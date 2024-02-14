import Pesok1 from '@/assets/images/pesok_carrier.png'
import Pesok2 from '@/assets/images/pesok_namv.png';
import Pesok3 from '@/assets/images/pesok_seyn.png'
import Pesok4 from '@/assets/images/pesok_seyn.png'

import Sheben1 from '@/assets/images/shenen/sheben-2-1-570x360-1.jpg'
import Sheben12 from '@/assets/images/shenen/sheben-2-1-570x360-1.jpg'
import Sheben2 from '@/assets/images/shenen/920b3096b7d0b30fe1a575104bfe9370.jpg';
import Sheben3 from '@/assets/images/shenen/8f6234857cb26231f02e77ea4da2345e.jpg'
import Sheben4 from '@/assets/images/shenen/0d771bed8580da3eadee492f7f9d572e-1.jpg'
import Sheben5 from '@/assets/images/shenen/1890030620_w640_h640_schebenochno-peschanaya.jpg'
import Sheben6 from '@/assets/images/shenen/bulyzhnik-karernyj.jpg.webp'
import Sheben7 from '@/assets/images/shenen/bf1f9f2315a1145328e2df278f945fd2.jpg'
import Sheben8 from '@/assets/images/shenen/co32i-min.jpg'
import Sheben9 from '@/assets/images/shenen/nn7xgf0nlv1jdljzva3q6iw9a8znzmqf.jpg'
import Sheben10 from '@/assets/images/shenen/scheben-40-70-1200x700-1.jpg'
import Sheben11 from '@/assets/images/shenen/scheben-frakciya-5-20.jpg'

export const materialsTabs = [
    {
        title: 'Щебень',
        url: 'sheben',
        products: [
            {
                title: 'Бетонный щебень',
                price: '800',
                image: Sheben1,
                description: []
            },
            {
                title: 'Булыжники',
                price: '800',
                image: Sheben2,
                description: []
            },
            {
                title: 'Гравий фракция 20-40',
                price: '800',
                image: Sheben3,
                description: []
            },
            {
                title: 'Гравий франция 40-70',
                price: '800',
                image: Sheben4,
                description: []
            },
            {
                title: 'Гравий франция 5-20',
                price: '800',
                image: Sheben5,
                description: []
            },
            {
                title: 'Щебеночно-песчаная смесь фракция 0-40 мм',
                price: '800',
                image: Sheben6,
                description: []
            },
            {
                title: 'Щебеночно-песчаная смесь фракция 0-70 мм',
                price: '800',
                image: Sheben7,
                description: []
            },
            {
                title: 'Щебень гравийный фракция 20-40',
                price: '800',
                image: Sheben8,
                description: []
            },
            {
                title: 'Щебень гравийный фракция 40-70',
                price: '800',
                image: Sheben9,
                description: []
            },
            {
                title: 'Щебень гравийный фракция 5-20',
                price: '800',
                image: Sheben10,
                description: []
            },
            {
                title: 'Щебень гранитный отсев 0-5 (розовый)',
                price: '800',
                image: Sheben11,
                description: []
            },
            {
                title: 'Щебень гранитный фракции 40-70',
                price: '800',
                image: Sheben12,
                description: []
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
                    'Модуль крупности – 0,16 – 5,0 мм',
                    'Плотность – 1500-1600 кг/м3',
                    'Коэффициент фильтрации – 7-10 м/сут'
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
                    'Плотность – 1500-1600 кг/м3',
                    'Коэффициент фильтрации – 7-10 м/сут'
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
            }
        ]
    },
    {
        title: 'Гравий',
        url: 'gravi',
        products: []
    },
    {
        title: 'Грунт',
        url: 'grunt',
        products: []
    },
]