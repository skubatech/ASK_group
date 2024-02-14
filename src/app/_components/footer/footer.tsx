'use client';
import styles from './footer.module.scss';

import Vk from '@/assets/icons/vk.svg';
import Telegram from '@/assets/icons/telegram.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Whatsapp from '@/assets/icons/wa.svg';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export const Footer = () => {
    const router = useRouter();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (window.location.pathname !== '/') {
            router.push(`/${e.currentTarget.hash}`, {scroll: false});
        }

        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <footer className={`${styles.footer} container`}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <a href='tel:+79817272909' className={styles.link}>
                        +7 (981) 727-29-09
                    </a>
                    <span className={styles.link}>
            Санкт-Петербург, Пулковское шоссе 30/4, офис 101Д
          </span>
                    <a href='mailto:zakaz@askspb.ru' className={styles.link}>
                        zakaz@askspb.ru
                    </a>
                    <a href='mailto:inform@askspb.ru' className={styles.link}>
                        inform@askspb.ru
                    </a>
                    <div className={styles.social}>
                        <a
                            href='https://telegram.org/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.link}
                        >
                            <Telegram/>
                        </a>
                        <a
                            href='https://web.whatsapp.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.link}
                        >
                            <Telegram/>
                        </a>
                        <a
                            href='https://vk.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.link}
                        >
                            <Vk/>
                        </a>
                        <a
                            href='https://instagram.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.link}
                        >
                            <Instagram/>
                        </a>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <Link className={styles.link} href={'/#services'} onClick={handleScroll}>Наши услуги</Link>
                    <Link className={styles.link} href={'/#about'} onClick={handleScroll}>О нас</Link>
                    <Link className={styles.link} href={'/#works'} onClick={handleScroll}>Наши работы</Link>
                    <Link className={styles.link} href={'/#contacts'} onClick={handleScroll}>Контакты</Link>
                </div>
            </div>
            <div className={styles.social}>
                <a
                    href='https://telegram.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.link}
                >
                    <Telegram/>
                </a>
                <a
                    href='https://web.whatsapp.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.link}
                >
                    <Whatsapp/>
                </a>
                <a
                    href='https://vk.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.link}
                >
                    <Vk/>
                </a>
                <a
                    href='https://instagram.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.link}
                >
                    <Instagram/>
                </a>
            </div>
            <span className={styles.text}>Все права защищены. ASK Group 2024</span>
        </footer>
    );
};
