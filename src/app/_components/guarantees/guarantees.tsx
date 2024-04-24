'use client';

import styles from './guarantees.module.scss';
import {ReactNode, useState} from 'react';

import Technique from '@/assets/icons/technique.svg';
import Materials from '@/assets/icons/materials.svg';
import Staff from '@/assets/icons/staff.svg';
import Docs from '@/assets/icons/docs.svg';
import technique from '@/assets/images/technique.webp';
import materials from '@/assets/images/materials.webp';
import staff from '@/assets/images/staff.webp';
import time from '@/assets/images/clocks.webp';

interface ContentItem {
    imgSrc: ReactNode;
    title: string;
    text: string;
}

export const Guarantees = () => {
    const [mainImage, setMainImage] = useState(technique);
    const [imgStyles, setImgStyles] = useState(styles.img);
    const contentItems: ContentItem[] = [
        {
            imgSrc: <span className={styles.icon}><Technique/></span>,
            title: 'спецтехника',
            text: 'В нашем автопарке более 50 единиц спецтехники, что позволяет нам полноценно решить задачу любой сложности и объема!',
        },
        {
            imgSrc: <span className={styles.icon}><Materials/></span>,
            title: 'материалы',
            text: 'ASK GROUP - ваш надежный поставщик нерудных материалов, который предоставляет самые выгодные цены',
        },
        {

            imgSrc: <span className={styles.icon}><Staff/></span>,
            title: 'квалифицированный персонал',
            text: 'ASK GROUP - это команда экспертов своего дела, которые помогают клиентам оперативно решать поставленные задачи',
        },
        {
            imgSrc: <span className={styles.icon}><Docs/></span>,
            title: 'работаем быстро и качественно',
            text: 'Наше профессиональное кредо - это пунктуальность и швейцарская точность, мы всегда работаем только на результат',
        },
    ];

    const onMouseEnterHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        setImgStyles(styles.animImg);
        const id = event.currentTarget.id;
        switch (id) {
            case 'спецтехника':
                setMainImage(technique);
                break;
            case 'материалы':
                setMainImage(materials);
                break;
            case 'квалифицированный персонал':
                setMainImage(staff);
                break;
            case 'работаем быстро и качественно':
                setMainImage(time);
                break;
            default:
                setMainImage(technique);
        }
    };

    const onMouseLeave = () => {
        setImgStyles(styles.img);
    }

    return (
        <section className={styles.guarantees}>
            <h2 className={styles.title}>
                ASK GROUP <span className={styles.accent}>гарантирует</span> высочайший сервис и качество в исполнении
                услуг:
            </h2>
            <div className={styles.content}>
                <div className={styles.items}>
                    {contentItems.slice(0, 2).map((item) => {
                        return (
                            <div
                                className={styles.item}
                                key={item.title}
                                id={item.title}
                                onMouseEnter={(id) => onMouseEnterHandler(id)}
                                onMouseLeave={onMouseLeave}
                            >
                                {item.imgSrc}
                                <div className={styles.description}>
                                    <span className={styles.title}>{item.title}</span>
                                    <span className={styles.text}>{item.text}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <img {...mainImage} alt='Guarantees' className={imgStyles}/>
                <div className={styles.items}>
                    {contentItems.slice(2, 4).map((item) => {
                        return (
                            <div
                                className={styles.item}
                                key={item.title}
                                id={item.title}
                                onMouseEnter={(id) => onMouseEnterHandler(id)}
                                onMouseLeave={onMouseLeave}
                            >
                                {item.imgSrc}
                                <div className={styles.description}>
                                    <span className={styles.title}>{item.title}</span>
                                    <span className={styles.text}>{item.text}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
