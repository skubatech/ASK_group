import { Connection } from '../_components/connection';
import { Guarantees } from '../_components/guarantees';

import styles from './styles.module.scss';
import { Metadata } from 'next';
import { ConstructionCards } from '@/app/_components/construction-cards';
import { Table } from '../_components/table/table';
import { constructionCardsItems } from '../_components/construction-cards/constants';

export const metadata: Metadata = {
  title: 'Строительные работы - ASK GROUP',
  description: 'Строительные работы | ASK GROUP',
};

export default function Construction() {
  return (
    <section className={`${styles.wrapper} container`}>
      <h2 className={styles.title}>Строительные работы</h2>
      <ConstructionCards />
      {/* <Table /> */}
      <Guarantees />
      <Connection />
    </section>
  );
}
