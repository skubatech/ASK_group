'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import './swipper-bullet.scss';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { AboutCompany } from './_components/aboutCompany';
import { Footer } from './_components/footer';
import { Contacts } from './_components/contacts';
import { useState } from 'react';
import { Connection } from './_components/connection';
import { Guarantees } from './_components/guarantees';
import { bannerItems, clientItems } from './home.constants';

const Home = () => {
  const [currentIndexBanner, setCurrentIndexBanner] = useState(0);

  

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

  const bannerSetCurrentIndex = (swiper: SwiperClass) => {
    setCurrentIndexBanner(swiper.realIndex);
  }

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
        onSlideChange={bannerSetCurrentIndex}
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
            speed={4000}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            slidesPerView={'auto'}
            centeredSlides={true}
            modules={[Autoplay]}
          >
            {createSlideClient()}
          </Swiper>
        </div>
      </section>
      <Contacts />
      <Guarantees />
      <Connection />
      <Footer />
    </main>
  );
};

export default Home;
