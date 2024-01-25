'use client';

import Image, { StaticImageData } from 'next/image';
import styles from './page.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import exportSnow from '../assets/images/exportSnow.png';
import sandSupply from '../assets/images/sandSupply.png';
import exportGround from '../assets/images/exportGround.png';
import principles from '../assets/images/principles.png';
import mouseSquare from '../assets/icons/mouseSquare.svg';

import './swipper-bullet.scss';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

interface SliderItemsType {
  imgSrc: StaticImageData;
  title: string;
  text: string;
}

const Home = () => {
  const bannerItems: SliderItemsType[] = [
    {
      imgSrc: exportSnow,
      title: 'Вывоз снега',
      text: 'от 300 руб/м',
    },
    {
      imgSrc: sandSupply,
      title: 'Поставка песка',
      text: 'от 600 руб/м',
    },
    {
      imgSrc: exportGround,
      title: 'Вывоз и утилизация грунта',
      text: 'от 300 руб/м',
    },
  ];

  const statisticItem = [
    {
      number: '750',
      text: 'Грунта вывезено и утилизировано',
    },
    {
      number: '600',
      text: 'Поставлено песка по СПБ и ЛО',
    },
    {
      number: '550',
      text: 'Поставлено щебня',
    },
    {
      number: '50',
      text: 'Крупных строительных объектов реализовано',
    },
  ];

  const createSlideBanner = () => {
    return bannerItems.map((item) => {
      return (
        <SwiperSlide key={item.title}>
          <section className={styles.slider}>
            <div className={styles.description}>
              <h2 className={styles.title}>{item.title}</h2>
              <span className={styles.text}>{item.text}</span>
              <button className={styles.btn}>Заказать сейчас</button>
            </div>
            <Image src={item.imgSrc} alt='Export' className={styles.img} />
          </section>
        </SwiperSlide>
      );
    });
  };

  const createStatisticItem = () => {
    return statisticItem.map((item) => {
      return (
        <div className={styles.item} key={item.number}>
          <span className={styles.number}>
            {item.number} <span className={styles.num}>тыс. м</span>
          </span>
          <span className={styles.text}>{item.text}</span>
        </div>
      );
    });
  };

  return (
    <main className={styles.main}>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Pagination]}
        loop={true}
        pagination={{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: (index, className) => {
            return (
              '<span class="' +
              className +
              '">' +
              '<i></i>' +
              '<b></b>' +
              '</span>'
            );
          },
        }}
      >
        {createSlideBanner()}
        <div className='swiper-pagination'></div>
      </Swiper>
      <section className={styles.about}>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <h2 className={styles.title}>О компании</h2>
            <span className={styles.text}>
              ASK GROUP — ваш надежный партнер по доставке нерудных материалов,
              аренды современной спецтехники и выполнении строительных работ!
              Наш автопарк состоит более, чем из 50 новейших машин, которые
              обеспечивают эффективность и надежность в каждом проекте.
              Благодаря применению современной техники и профессионализму наших
              работников мы гарантируем высокое качество услуг и оперативность в
              выполнении каждого этапа работы.
            </span>
            <div className={styles.principles}>
              <h3 className={styles.title}>Наши принципы</h3>
              <div className={styles.principle}>
                <span className={styles.item}>Четкие сроки поставки</span>
                <Image priority src={mouseSquare} alt='Icon' />
              </div>
              <div>
                <span className={styles.item}>Квалифицированный персонал</span>
              </div>
              <div>
                <span className={styles.item}>
                  Полная документальная отчётность
                </span>
              </div>
            </div>
          </div>
          <div className={styles.imgWrap}>
            <Image src={principles} alt='principles' />
          </div>
        </div>
        <div className={styles.statistics}>{createStatisticItem()}</div>
      </section>
    </main>
  );
};

export default Home;
