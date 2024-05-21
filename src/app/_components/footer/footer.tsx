'use client';
import styles from './footer.module.scss';
import Telegram from '@/assets/icons/telegram.svg';
import Whatsapp from '@/assets/icons/wa.svg';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {pageLinks} from './footer.constants';

export const Footer = () => {
    const router = useRouter();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (e.currentTarget.href.includes('#')) {
            e.preventDefault();
        }
        if (window.location.pathname !== '/' &&
            !(window.location.pathname === '/wp-content/themes/default/' || window.location.pathname.includes('/wp-content/themes/default/#'))
        ) window.location.href = `https://asklogspb.ru/${e.currentTarget.hash}`;
        const href = e.currentTarget.href;
        const elem = document.getElementById(href.split('#')[1]);

        elem?.scrollIntoView({
            behavior: "smooth",
            block: 'center',
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
                            href='https://t.me/+79817272909'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.link}
                        >
                            <Telegram/>
                        </a>
                        <a
                            href='https://wa.me/79817272909'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={styles.link}
                        >
                            <Whatsapp/>
                        </a>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    {
                        pageLinks.map((item) => (
                            <Link
                                className={styles.link}
                                href={item.path}
                                onClick={handleScroll}
                                key={item.text}
                            >
                                {item.text}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className={styles.social}>
                <a
                    href='https://t.me/+79817272909'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.link}
                >
                    <Telegram/>
                </a>
                <a
                    href='https://wa.me/79817272909'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.link}
                >
                    <Whatsapp/>
                </a>
            </div>
            <span className={styles.text}>Все права защищены. ASK Group 2024</span>
        </footer>
    );
};
