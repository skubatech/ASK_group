'use client';

import Image, { StaticImageData } from 'next/image';
import styles from './page.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import exportSnow from '../assets/images/exportSnow.png';
import sandSupply from '../assets/images/sandSupply.png';
import exportGround from '../assets/images/exportGround.png';

import rusal from '../assets/images/rusalLogo.png';
import itmo from '../assets/images/itmoLogo.png';
import mvd from '../assets/images/mvdLogo.png';
import almas from '../assets/images/almasLogo.png';
import fosagro from '../assets/images/fosagroLogo.png';
import lsr from '../assets/images/lsrLogo.png';
import rr from '../assets/images/rrLogo.png';

import './swipper-bullet.scss';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { AboutCompany } from './_components/aboutCompany';
import { Footer } from './_components/footer';
import { Contacts } from './_components/contacts';
import { useState } from 'react';

interface SliderItemsType {
  imgSrc: StaticImageData;
  title: string;
  text: string;
}

interface clientItemsType {
  imgSrc: StaticImageData;
  text: string;
}

const Home = () => {
  const [currentIndexBanner, setCurrentIndexBanner] = useState(0);

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

  const clientItems: clientItemsType[] = [
    {
      imgSrc: rusal,
      text: 'АО «РУСАЛ»',
    },
    {
      imgSrc: itmo,
      text: 'АО «ИТМО ХАЙПАРК»',
    },
    {
      imgSrc: mvd,
      text: 'Главное управление МВД России по СПб и Лен. области',
    },
    {
      imgSrc: almas,
      text: 'КОНЦЕРН ВКО «АЛМАЗ-АНТЕЙ»',
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

  const createSlideBanner = () => {
    return bannerItems.map((item, i) => {
      return (
        <SwiperSlide key={item.title}>
          <section className={styles.slider}>
            <div className={styles.description}>
              <h2 className={styles.title}>{item.title}</h2>
              <span className={styles.text}>{item.text}</span>
              <button className={styles.btn}>Заказать сейчас</button>
            </div>
            <Image src={item.imgSrc} alt='Banner' className={`${styles.img} ${ i > 0 ? styles.banner : '' }`}/>
          </section>
        </SwiperSlide>
      );
    });
  };

  const createSlideClient = () => {
    return clientItems.map((item, i) => {
      return (
        <SwiperSlide key={item.text}>
          <div className={styles.partner}>
            <Image src={item.imgSrc} alt='Logo' className={styles.img} />
            <span className={`${styles.name} ${ i === 2 ? styles.mvd : '' }`}>
              {item.text}
            </span>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <main className={styles.main}>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        modules={[Autoplay, Pagination]}
        loop={true}
        onSlideChange={(swiper) => setCurrentIndexBanner(swiper.realIndex)}
        pagination={{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: (index, className) => {
            return (
              `<span class="${className}"><i></i><b></b></span>`
            );
          },
        }}
      >
        {createSlideBanner()}
        <div className='swiper-pagination'></div>
      </Swiper>
      <AboutCompany />
      <section className={`${styles.partners} container`}>
        <h2 className={styles.title}>Наши партнеры</h2>
        <div className='swiperPartner'>
          <Swiper
            spaceBetween={40}
            speed={5000}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            slidesPerView={'auto'}
            modules={[Autoplay]}
          >
            {createSlideClient()}
          </Swiper>
        </div>
      </section>
      <Contacts />
      <Footer />
    </main>
  );
};

export default Home;
