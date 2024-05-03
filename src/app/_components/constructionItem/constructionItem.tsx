import { StaticImageData } from 'next/image';
import styles from './styles.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface ConstructionItemProps {
  title: string;
  items: string[];
  img?: StaticImageData;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ConstructionItem = ({ title, items, img, setOpen }: ConstructionItemProps) => {
    const handleClick = () => {
        const element = document.getElementById('#form')
        element?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
      };

  return (
    <section className={styles.main}>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <ul className={styles.ul}>
          {items.map((item) => (
            <li key={item} className={styles.decription}>
              {item}
            </li>
          ))}
        </ul>
        <button className={styles.btn} onClick={() => {
            setOpen(false);
            handleClick();
        }}>
          Рассчитать
        </button>
      </div>
      <div className={styles.img}>
        <img {...img} alt={title} />
      </div>
    </section>
  );
};
