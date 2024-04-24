'use client';

import styles from './cases.module.scss'
import ParkingImg from '@/assets/images/parking.webp'
import IMG1 from '@/assets/images/image 16.webp'
import IMG2 from '@/assets/images/image 17.webp'
import IMG3 from '@/assets/images/image 18.webp'
import {useBreakpointIndex} from "@/utils/hooks/useBreakpointIndex";
import {BREAKPOINTS_INDEXES} from "@theme/constants/breakpoints";
import {CasesSlider} from "@/app/_components/Cases/CasesSlider/CasesSlider";
import cn from "classnames";
import {Advent_Pro} from "next/font/google";
import {Modal} from "@/app/_components/modal";
import {useState} from "react";
import {Astrid} from "@/app/_components/Cases/Modals/astrid/astrid";
import {Belart} from "@/app/_components/Cases/Modals/belart/belart";
import {Shtraf} from "@/app/_components/Cases/Modals/shtraf/shtraf";
import {Itmo} from "@/app/_components/Cases/Modals/itmo";

const adventPro = Advent_Pro({subsets: ["cyrillic"], weight: '400'});
export const Cases = () => {
    const breakpoint = useBreakpointIndex();
    const isMobile = breakpoint === BREAKPOINTS_INDEXES.xs;
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    return (
        <section className={cn('container', styles.main)} id='works'>
            <h2 className={styles.h_title}>Наши работы</h2>
            {!isMobile && <section className={styles.casesGrid}>
                <div className={styles.a} onClick={() => setOpen1(true)}>
                    <img {...ParkingImg} alt='Парковка'/>
                    <span className={styles.title}>Штраф-стоянка</span>
                </div>
                <div className={styles.b} onClick={() => setOpen2(true)}>
                    <img {...IMG1} alt='Парковка'/>
                    <span className={styles.title}>Вывоз грунта при строительстве ЖК «БелАрт»</span>
                </div>
                <div className={styles.c} onClick={() => setOpen3(true)}>
                    <img {...IMG3} alt='Парковка'/>
                    <span className={styles.title}>Самовывоз грунта и долгосрочное сотрудничество с ЖК «Астрид»</span>
                </div>
                <div className={styles.d} onClick={() => setOpen4(true)}>
                    <img {...IMG2} alt='Парковка'/>
                    <span className={styles.title}>Вывоз грунта и долгосрочное сотрудничество при строительстве «ИТМО Хай Парк»</span>
                </div>
            </section>
            }
            {isMobile && <CasesSlider/>}
            {open1 && <Modal setOpen={setOpen1}><Shtraf/></Modal>}
            {open2 && <Modal setOpen={setOpen2}><Belart/></Modal>}
            {open3 && <Modal setOpen={setOpen3}><Astrid/></Modal>}
            {open4 && <Modal setOpen={setOpen4}><Itmo/></Modal>}
        </section>
    )
}