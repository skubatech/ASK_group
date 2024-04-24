'use client';
import styles from './StickyTab.module.scss'
import {Advent_Pro} from "next/font/google";
import {useState} from "react";
import Phone from "@/assets/icons/phone.svg";
import WhatsAppWhite from "@/assets/icons/waWhite.svg";
import TelegramWhite from "@/assets/icons/telegram.svg";
import cn from "classnames";

const adventPro = Advent_Pro({subsets: ["cyrillic"], weight: '400'});
export const StickyTab = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(prev => !prev);
    }
    return (
        <aside className={cn(styles.main, {[styles.active]: open})} onClick={handleOpen}>
            {open ? <section className={styles.links}>
                    <a href='tel:+79817272909' className={styles.item}>
                        <span className={styles.icon}><Phone/></span>
                    </a>
                    <a
                        className={`${styles.item} ${styles.itemRow}`}
                        href='https://web.whatsapp.com/79817272909'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span className={styles.icon}><WhatsAppWhite/></span>
                    </a>
                    <a
                        className={`${styles.item} ${styles.itemRow}`}
                        href='https://t.me/+79817272909'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span className={styles.icon}><TelegramWhite/></span>
                    </a>
                </section>
                : <span>свяжитесь с нами</span>}

        </aside>
    )
}