import {Dispatch, ReactNode, SetStateAction, useEffect,} from 'react';
import styles from './modal.module.scss';
import Cross from '@/assets/icons/cross.svg'

interface ModalProps {
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}

export const Modal = ({setOpen, children}: ModalProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset'
        };
    }, []);

    const handleSetOpen = () => {
        setOpen(false);
    }

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.background} onClick={handleSetOpen}/>
            <div className={styles.centered}>
                <span className={styles.cross} onClick={handleSetOpen}><Cross/></span>
                <div className={styles.modal}>{children}</div>
            </div>
        </div>
    );
};
