'use client';
import styles from './exportCards.module.scss';
import ground from '@/assets/images/ground.webp';
import musor from '@/assets/images/musor.webp';
import {useState} from 'react';
import {Modal} from '../modal';
import {SnowModal} from "@/app/_components/exportCards/modals/snow/SnowModal";
import {GruntModal} from "@/app/_components/exportCards/modals/grunt/GruntModal";
import {MusorModal} from "@/app/_components/exportCards/modals/musor/MusorModal";

export const ExportCards = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleClick = () => {
        const element = document.getElementById('#form')
        element?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    const handleClick2 = () => {
        setOpen2(true);
    }

    const handleClick3 = () => {
        setOpen3(true);
    }

    return (
        <section className={styles.cards}>
            {/*<div className={styles.card}>*/}
            {/*    <img {...snow} alt='Image' className={styles.img}/>*/}
            {/*    <span className={styles.title}>Вывоз снега</span>*/}
            {/*    <button className={styles.btn} onClick={handleClick1}>Заказать</button>*/}
            {/*</div>*/}
            <div className={styles.card}>
                <img {...ground} alt='Image' className={styles.img}/>
                <span className={styles.title}>Вывоз грунта</span>
                <button className={styles.btn} onClick={handleClick2}>Заказать</button>
            </div>
            <div className={styles.card}>
                <img {...musor} alt='Image' className={styles.img}/>
                <span className={styles.title}>Вывоз мусора</span>
                <button className={styles.btn} onClick={handleClick3}>Заказать</button>
            </div>
            {open1 && <Modal setOpen={setOpen1}><SnowModal closeModal={() => setOpen1(false)}/></Modal>}
            {open2 && <Modal setOpen={setOpen2}><GruntModal closeModal={() => setOpen2(false)}/></Modal>}
            {open3 && <Modal setOpen={setOpen3}><MusorModal closeModal={() => setOpen3(false)}/></Modal>}
        </section>
    );
};
