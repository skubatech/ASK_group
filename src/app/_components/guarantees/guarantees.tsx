import Image from 'next/image';
import styles from './guarantees.module.scss';
import { ReactNode, useState } from 'react';

import Technique from '@/assets/icons/technique.svg?url';
import Materials from '@/assets/icons/materials.svg?url';
import Staff from '@/assets/icons/staff.svg?url';
import Docs from '@/assets/icons/docs.svg?url';
import technique from '@/assets/images/technique.png';
import materials from '@/assets/images/materials.png';
import staff from '@/assets/images/staff.png';
import time from '@/assets/images/clocks.png';

interface ContentItem {
  imgSrc: ReactNode;
  title: string;
  text: string;
}

export const Guarantees = () => {
  const [mainImage, setMainImage] = useState(technique);
  const contentItems: ContentItem[] = [
    {
      imgSrc: <Image src={Technique} className={styles.icon}/>,
      title: 'спецтехника',
      text: 'В нашем автопарке более 50 единиц спецтехники, что позволяет нам полноценно решить задачу любой сложности и объема!',
    },
    {
      imgSrc: <Image src={Materials} className={styles.icon} />,
      title: 'материалы',
      text: 'ASK GROUP - ваш надежный поставщик нерудных материалов. Мы предоставляем лучшие материалы по самым низким ценам!',
    },
    {
      imgSrc: <Image src={Staff} className={styles.icon} id={styles.staff}/>,
      title: 'квалифицированный персонал',
      text: 'В нашей команде работают только профессионалы своего дела. Сотрудники ASK GROUP любят свою работу и делают ее по высшему разряду!',
    },
    {
      imgSrc: <Image src={Docs} className={styles.icon} id={styles.docs}/>,
      title: 'работаем быстро и качественно',
      text: 'Мы придерживаемся принципа пунктуальности и обеспечиваем качественное выполнение наших задач в установленные сроки и объемы. Мы работаем на результат!',
    },
  ];

  const onMouseEnterHandler = (event: React.MouseEvent<HTMLDivElement>) => {
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

  return (
    <section className={`${styles.guarantees} container`}>
      <h2 className={styles.title}>
        ASK GROUP <span className={styles.accent}>гарантирует</span> высочайший сервис и качество в исполнении услуг:
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
        <Image src={mainImage} alt='Guarantees' className={styles.img} />
        <div className={styles.items}>
          {contentItems.slice(2, 4).map((item) => {
            return (
              <div
                className={styles.item}
                key={item.title}
                id={item.title}
                onMouseEnter={(id) => onMouseEnterHandler(id)}
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
