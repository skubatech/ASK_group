'use client'
import {RentDataItem} from "@/app/_components/rent-catalog/types";
import {FC, useEffect, useState, useTransition} from "react";
import styles from './styles.module.scss'
import cn from "classnames";
import {RentModal} from "@/app/_components/rent-catalog/_components/Modal/RentModal";
import {Modal} from "@/app/_components/modal";

type Props = {
    data: RentDataItem;
}
export const RentCard: FC<Props> = ({data}) => {
    const [state, toggle] = useTransition();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        return () => {
            toggle(() => {
            });
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = () => {
        setIsOpen(true)
    }
    return (
        <>
            <div className={cn(styles.root, {[styles.animation]: state})} onClick={openModal}>
                <img {...data.img} className={styles.img}/>
                <span className={styles.info}>
                <span className={styles.title}>{data.title}</span>
                 <span className={styles.price}>от {data.price}&nbsp;₽/час</span>
            </span>
            </div>
            {isOpen && <Modal setOpen={setIsOpen}><RentModal product={data} closeModal={closeModal}/></Modal>}
        </>

    )
}