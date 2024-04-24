'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import styles from "@/app/_components/Cases/cases.module.scss";
import ParkingImg from "@/assets/images/parking.webp";
import IMG1 from "@/assets/images/image 16.webp";
import IMG2 from "@/assets/images/image 17.webp";
import IMG3 from "@/assets/images/image 18.webp";
import {Modal} from "@/app/_components/modal";
import {Shtraf} from "@/app/_components/Cases/Modals/shtraf/shtraf";
import {Belart} from "@/app/_components/Cases/Modals/belart/belart";
import {Astrid} from "@/app/_components/Cases/Modals/astrid/astrid";
import {Itmo} from "@/app/_components/Cases/Modals/itmo";
import {useState} from "react";

export const CasesSlider = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    return (
        <>
            <Swiper
                slidesPerView={1}
                className={styles.swiper}
                modules={[Pagination]}
                loop={true}
                pagination={{
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                    renderBullet: (index, className) => {
                        return (
                            `<span class="${className} ${styles.bullet}"><i></i><b></b></span>`
                        );
                    },
                }}
            >
                <SwiperSlide className={styles.slider} onClick={() => setOpen1(true)}>
                    <div className={styles.a}>
                        <img {...ParkingImg} alt='Парковка'/>
                        <span className={styles.title}>Штраф-стоянка</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slider} onClick={() => setOpen2(true)}>
                    <div className={styles.b}>
                        <img {...IMG1} alt='Парковка'/>
                        <span className={styles.title}>Вывоз грунта при строительстве ЖК «БелАрт»</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slider} onClick={() => setOpen3(true)}>
                    <div className={styles.c}>
                        <img {...IMG3} alt='Парковка'/>
                        <span
                            className={styles.title}>Самовывоз грунта и долгосрочное сотрудничество с&nbsp;ЖК «Астрид»</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slider} onClick={() => setOpen4(true)}>
                    <div className={styles.d}>
                        <img {...IMG2} alt='Парковка'/>
                        <span className={styles.title}>Вывоз грунта идолгосрочное сотрудничество при строительстве «ИТМО Хай Парк»</span>
                    </div>
                </SwiperSlide>
                <div className='swiper-pagination'></div>
            </Swiper>
            {open1 && <Modal setOpen={setOpen1}><Shtraf/></Modal>}
            {open2 && <Modal setOpen={setOpen2}><Belart/></Modal>}
            {open3 && <Modal setOpen={setOpen3}><Astrid/></Modal>}
            {open4 && <Modal setOpen={setOpen4}><Itmo/></Modal>}
        </>

    )
}