'use client';
import styles from './exportCards.module.scss';

import snow from '@/assets/images/snow.png';
import ground from '@/assets/images/ground.png';
import {useState} from 'react';
import {Modal} from '../modal';
import {SnowModal} from "@/app/_components/exportCards/modals/snow/SnowModal";
import {GruntModal} from "@/app/_components/exportCards/modals/grunt/GruntModal";

export const ExportCards = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleClick1 = () => {
        setOpen1(true);
    }
    const handleClick2 = () => {
        setOpen2(true);
    }

    return (
        <section className={styles.cards}>
            <div className={styles.card}>
                <img {...snow} alt='Image' className={styles.img}/>
                <span className={styles.title}>Вывоз снега</span>
                <button className={styles.btn} onClick={handleClick1}>Заказать</button>
            </div>
            <div className={styles.card}>
                <img {...ground} alt='Image' className={styles.img}/>
                <span className={styles.title}>Вывоз грунта</span>
                <button className={styles.btn} onClick={handleClick2}>Заказать</button>
            </div>
            {open1 && <Modal setOpen={setOpen1}><SnowModal closeModal={() => setOpen1(false)}/></Modal>}
            {open2 && <Modal setOpen={setOpen2}><GruntModal closeModal={() => setOpen2(false)}/></Modal>}
        </section>
    );
};
