import {
  ReactNode,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import styles from './modal.module.scss';

interface ModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal = ({ setOpen, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
        document.body.style.overflow = 'unset'
    };
  }, []);

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.background} onClick={() => setOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>{children}</div>
      </div>
    </div>
  );
};