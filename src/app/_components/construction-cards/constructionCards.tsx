'use client';
import styles from './constructionCards.module.scss';

import {Modal} from '../modal';
import {useState} from 'react';
import {tableItems} from '../table/constants';
import {ConstructionItem} from '../constructionItem/constructionItem';
import {ConstructionCardsItems, constructionCardsItems} from '@/app/_components/construction-cards/constants';

interface ShowModal {
    isOpen: boolean;
    item: ConstructionCardsItems | null;
};

export const ConstructionCards = () => {
    const [showModal, setShowModal] = useState<ShowModal>({
        isOpen: false,
        item: null
    });

    const handleClick = (item: ConstructionCardsItems) => {
        setShowModal({
            isOpen: true,
            item
        });
    };

    return (
        <section className={styles.cards}>
            {constructionCardsItems.map((item) => (
                <div className={styles.card} onClick={() => handleClick(item)} key={item.id}>
                    <img {...item.imgSrc} alt='Image' className={styles.img}/>
                    <span className={styles.title}>{item.title}</span>
                    <button className={styles.btn} onClick={() => handleClick(item)}>
                        Рассчитать
                    </button>
                </div>
            ))}
            {showModal.isOpen && (
                <Modal setOpen={() => setShowModal(prev => ({...prev, isOpen: !prev.isOpen}))}>
                    <ConstructionItem
                        title={showModal.item?.title ?? ''}
                        img={showModal.item?.imgSrc}
                        items={tableItems[showModal.item?.id ?? 0].items}
                        setOpen={() => setShowModal(prev => ({...prev, isOpen: !prev.isOpen}))}
                    />
                </Modal>
            )}
        </section>
    );
};
