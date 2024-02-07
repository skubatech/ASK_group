'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';

import './swipper-bullet.scss';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import {AboutCompany} from './_components/aboutCompany';
import {Contacts} from './_components/contacts';
import {useEffect, useState} from 'react';
import {bannerItems, clientItems} from './home.constants';
import {useRouter} from 'next/navigation';
import {Group} from "@/app/_components/Group/Group";
import {Cases} from "@/app/_components/Cases/Cases";
import {Products} from "@/app/_components/Products/Products";
import {ClientsBanner} from "@/app/_components/ClientsBanner/ClientsBanner";
import {MainBanner} from "@/app/_components/MainBanner/MainBanner";


const Home = () => {

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className={styles.main}>
            <MainBanner/>
            <Products/>
            <Group/>
            <AboutCompany/>
            <ClientsBanner/>
            <Cases/>
            <Contacts/>
        </main>
  );
};

export default Home;
