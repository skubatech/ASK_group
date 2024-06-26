import Pesok1 from '@/assets/images/pesok_carrier.webp'
import Pesok2 from '@/assets/images/pesok_namv.webp';
import Pesok3 from '@/assets/images/pesok_seyn.webp'
import Pesok4 from '@/assets/images/any/kvarc-pesok.webp'

import Grav1 from '@/assets/images/any/sheben-grav-5-20.webp'
import Grav2 from '@/assets/images/any/sheben-grav-20-40.webp'
import Grav3 from '@/assets/images/any/sheben-grav-40-70.webp'
import Grav4 from '@/assets/images/shenen/grav_image4.webp'
import Grav5 from '@/assets/images/shenen/grav_image5.webp'
import Grav6 from '@/assets/images/shenen/grav_image6.webp'
import Grav7 from '@/assets/images/shenen/grav_image7.webp'

import Sheben1 from '@/assets/images/shenen/sh_image1.webp'
import Sheben2 from '@/assets/images/shenen/sh_image2.webp'
import Sheben3 from '@/assets/images/shenen/sh_image3.webp'
import Sheben4 from '@/assets/images/shenen/sh_image4.webp'
import Sheben5 from '@/assets/images/shenen/sh_image5.webp'

import Grunt4 from '@/assets/images/grunt/pesok_image4.webp'
import Shi1 from '@/assets/images/any/sheb-izcest-5-20.webp'
import Shi2 from '@/assets/images/any/sheb-izcest-20-40.webp'
import Shi3 from '@/assets/images/any/sheb-izcest-40-70.webp'


import Secondary1 from '@/assets/images/secondary/secondary_image1.webp';
import Secondary2 from '@/assets/images/secondary/secondary_image2.webp';
import Secondary3 from '@/assets/images/secondary/secondary_image3.webp';
import Secondary4 from '@/assets/images/secondary/secondary_image4.webp';

import ChenoZem from '@/assets/images/grunt/chernozem.webp'
import PlodorudGrunt from '@/assets/images/grunt/plodorodn_grunt.webp'
import Torf from '@/assets/images/grunt/torf.webp'

export const materialsTabs = [
    {
        title: 'Щебень',
        url: 'sheben',
        products: [
            {
                title: 'Щебень гранитный фракция 5-10',
                price: '1250',
                image: Sheben1,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М1200',
                    'Морозостойкость – F300',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'Бетонные смеси и в производстве ЖБИ, в строительстве (фундаментных и монтажных работ), тротуарная плитка и другие бетонные изделия'
            },
            {
                title: 'Щебень гранитный фракция 5-20',
                price: '1450',
                image: Sheben2,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М1200',
                    'Морозостойкость – F300',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'Наполнитель для бетона с высокой прочностью, в дорожном строительстве, в благоустройстве, при производстве асфальтобетонных смесей для автомобильных магистралей'
            },
            {
                title: 'Щебень гранитный фракция 20-40',
                price: '1150',
                image: Sheben3,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М1200',
                    'Морозостойкость – F300',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'В строительстве автомобильных, железных дорог, мостов, объектов инфраструктуры, в бетонные смеси для увеличения прочности. \n'
            },
            {
                title: 'Щебень гранитный фракция 40-70',
                price: '1090',
                image: Sheben4,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М1200',
                    'Морозостойкость – F300',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'Тяжелые железобетонные конструкции, монолитное строительство, при заливке фундаментов, устройство насыпей железнодорожного полотна, строительство автомагистралей'
            },
            {
                title: 'Щебень известняковый фракция 5-20',
                price: '700',
                image: Shi1,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М600',
                    'Морозостойкость – F60',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'В качестве заполнителя при производстве железобетонных конструкций и бетонных блоков как насыпь для сельских дорог, садовых или парковых дорожек, для облицовывания зданий.'
            },
            {
                title: 'Щебень известняковый фракция 20-40',
                price: '650',
                image: Shi2,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М600',
                    'Морозостойкость – F60',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'В строительных, дорожных, декоративных (для оформления территорий), благоустройство'
            },
            {
                title: 'Щебень известняковый фракция 40-70',
                price: '590',
                image: Shi3,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М600',
                    'Морозостойкость – F60',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'В дорожном строительстве: при создании дренажей под асфальт, насыпей для железнодорожных и трамвайных путей. Отличный материал для декора и ландшафтного дизайна.'
            },
            {
                title: 'Щебеночно-песчаная смесь',
                price: '525',
                image: Grav4,
                description: [
                    'Вид ЩПС от 0-40 мм и другие фракции'
                ],
                touse: 'Для устройства фундаментов при сооружении зданий, обустройства площадок и ландшафтных решений. Производство бетонных и асфальтобетонных смесей, применяется для железнодорожных насыпей. Уплотнения и выравнивания автодорог и тротуаров'
            },
            {
                title: 'Щебень гравийный фр. 5-20',
                price: '800',
                image: Grav1,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М800',
                    'Морозостойкость – F200',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'Ландшафтный декор, дизайнеры используют гравийный щебень 5–20 для украшения клумб, вазонов, садовых и парковых дорожек.'
            },
            {
                title: 'Щебень гравийный фр. 20-40',
                price: '710',
                image: Grav2,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М800',
                    'Морозостойкость – F200',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'При строительстве возведении фундамента, изготовлении бетона. Его используют при проведении ремонтных работ на дорогах, дренажных и планировочных работ.'
            },
            {
                title: 'Щебень гравийный фр. 40-70',
                price: '660',
                image: Grav3,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М800',
                    'Морозостойкость – F200',
                    'Противоморозные добавки (ПМД): без ПМД или до -20'
                ],
                touse: 'При устройстве дорог без асфальтового покрытия и строительных площадок. При формировании нижних слоёв для асфальтовых дорог. Щебень из гравия подходит для дорог с умеренным трафиком, а также в ландшафтном дизайне.'
            },
            {
                title: 'Песчано-гравийная смесь',
                price: '450',
                image: Grav5,
                description: [
                    'Природная, обогащенная, озерно-речной'
                ],
                touse: 'производство бетона и цемента, выравнивания рельефа строительной площадки, отсыпки оснований под закладку, закладки фундамента, благоустройства территорий, засыпки траншей, канав и котлованов.'
            },
            {
                title: 'Гранитный отсев (розовый)',
                price: '900',
                image: Sheben5,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М800',
                    'Морозостойкость – F200',
                ],
                touse: 'Изготовление бордюрного камня, железобетона, тротуарной плитки, используется в декоративных целях в ландшафтном дизайне.'
            },
            {
                title: 'Гранитный отсев (серый)',
                price: '900',
                image: Grav7,
                description: [
                    'Лещадность – II группа',
                    'Прочность – М800',
                    'Морозостойкость – F200',
                ],
                touse: 'Приготовления бетонных растворов, заливки фундаментов, подушки под плитку или автомобильную дорогу, выравнивания площадок'
            },

        ]
    },
    {
        title: 'Песок',
        url: 'pesok',
        products: [
            {
                title: 'Песок карьерный',
                price: '200',
                image: Pesok1,
                description: [
                    'Модуль крупности - 0,16-5,0 мм',
                    'Плотность 2-2,8 г/м3',
                    'Коэффициент фильтрации 5-11 м/сут'
                ],
                touse: 'В дорожных работах, в качестве подушки под основание покрытия. Также его используют для обратной засыпки на строительных объектах.'
            },
            {
                title: 'Песок намывной',
                price: '400',
                image: Pesok2,
                description: [
                    'Модуль крупности – 0,16 – 5,0 мм',
                    'Плотность – 1500-1600 кг/м³',
                    'Коэффициент фильтрации – 7-10 м/сут'
                ],
                touse: 'В цементных растворах для кладки блочных и кирпичных стен, оштукатуривании поверхностей готовых зданий, формирования подушки фундамент'
            },
            {
                title: 'Песок сеяный',
                price: '350',
                image: Pesok3,
                description: [
                    'Модуль крупности – 0,16 – 5,0 мм',
                    'Плотность – 1200-1600 т/м³',
                    'Коэффициент фильтрации – 5-7 м/сут'
                ],
                touse: 'Для замеса кладочных растворов и производства товарного бетона, изготовления штукатурных растворов и сухих гипсовых смесей, производстве тротуарных плиток и бордюров, в качестве дорожного полотна, посыпки дорог и тротуаров в гололед.'
            },
            {
                title: 'Кварцевый песок',
                price: '1650',
                image: Pesok4,
                description: [
                    'Модуль крупности: 0,3 – 10 мм',
                    'Температура плавления: 1000-1100 ̊С',
                    'Плотность:1,3-1,4 тонн/м³'
                ],
                touse: 'Стекло, фарфор, кварцевое стекло, стройматериалы'
            }
        ]
    },
    {
        title: 'Грунт',
        url: 'grunt',
        products: [
            {
                title: 'Плодородный грунт',
                price: '350',
                image: PlodorudGrunt,
                description: [
                    'Низинный торф - 70%',
                    'Плодородная почва - 30%',
                ],
                touse: 'Улучшение характеристик почвы, создания почвосмесей и удобрений, выращивания овощей в теплицах, создания клумб и различных композиций на участке'
            },
            {
                title: 'Торф',
                price: '200',
                image: Torf,
                description: [
                    '3-8 pH',
                    'Кислотность 3-8 pH',
                    'Зольность - 5-10%',
                    'Гуминовые кислоты - > 50%',
                ],
                touse: 'В энергетике как топливо для производства электроэнергии, тепла на электростанциях или непосредственно как источник тепла для промышленных, жилых и других целей, в садоводстве и сельском хозяйстве в качестве удобрения.'
            },
            {
                title: 'Чернозем',
                price: '350',
                image: ChenoZem,
                description: [
                    'Модуль крупности: 1,5 – 2,2 мм',
                    'Коэфф. фильтрации: 5-7',
                    'Комки глины – отсутствуют',
                    'Водопроницаемость -  высокая'
                ],
                touse: 'Для посадки овощных, зерновых, кормовых культур, ягодников и садов в целом.\n'
            },
            {
                title: 'Грунт для отсыпки',
                price: '50',
                image: Grunt4,
                description: [
                    'коэффициент фильтрации – 5-7 м/сут.',
                    'показатель крупности – 1,2 -1,6 мм',
                    'водопроницаемость',
                    'наличие глинистых и песчаных включений',
                ],
                touse: 'Выравнивание рельефа необходима перед озеленением, поднятие территории, отсыпка под фундамент, дорожное строительство, благоустройство территории.'
            },

        ]
    },
    {
        title: 'Вторичные материалы',
        url: 'secondary',
        products: [
            {
                title: 'Вторичный щебень',
                price: '400',
                image: Secondary1,
                description: [
                    'Фракции 5-20, 20-40, 40-70',
                    'Лещадность – III группа',
                    'Прочность – М1200',
                    'Морозостойкость – F300'
                ],
                touse: 'Для строительных работ, дорожного ремонта, производство бетона и бетонных изделий, а также отсыпки дорожек, зон отдыха, площадок.'
            },
            {
                title: 'Бой бетона',
                price: '100',
                image: Secondary2,
                description: [
                    'Фракции 0-100, 0-300, 0-500',
                ],
                touse: 'Засыпки ям, при производстве железобетонных и бетонных конструкций, засыпки водоемов, формирования канав и оврагов, засыпки болот.'
            },
            {
                title: 'Бой кирпича',
                price: '300',
                image: Secondary3,
                touse: 'В приготовлении бетонной смеси, декорации дорожек и тротуаров, для выравнивания дорог, в качестве ландшафтного декора.'
            },
            {
                title: 'Асфальтовая крошка',
                price: '540',
                image: Secondary4,
                touse: 'При строительстве дорог с невысокой транспортной нагрузкой, в обустройстве дачных поселков и при выполнении ремонтных работ дорожного полотна, ландшафтном дизайне.'
            },
        ]
    },
]