'use client';

import styles from './page.module.scss';

import './swipper-bullet.scss';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import {AboutCompany} from './_components/aboutCompany';
import {Contacts} from './_components/contacts';
import {Products} from "@/app/_components/Products/Products";
import {Group} from "@/app/_components/Group/Group";
import {Cases} from "@/app/_components/Cases/Cases";
import {ClientsBanner} from "@/app/_components/ClientsBanner/ClientsBanner";
import {MainBanner} from "@/app/_components/MainBanner/MainBanner";
import {Guarantees} from "@/app/_components/guarantees";
import {Connection} from "@/app/_components/connection";

const Home = () => {
    return (
        <main className={styles.main}>
            <MainBanner/>
            <Products/>
            <Group/>
            <AboutCompany/>
            <ClientsBanner/>
            <Cases/>
            <Guarantees/>
            <Connection/>
            <Contacts/>
        </main>
    );
}

export default Home;
