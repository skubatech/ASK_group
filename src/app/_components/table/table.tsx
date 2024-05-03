import { tableItems } from './constants';
import styles from './styles.module.scss';

export const Table = () => {
  return (
    <table className={styles.table}>
      <tbody>
        {tableItems.map((item) => (
          <tr key={item.title}>
            <td>{item.title}</td>
            <td id={styles.items}>
                <ul className={styles.ul}>
                    {
                        item.items.map((currentItem) => (
                            <li key={currentItem}>{currentItem}</li>
                        ))
                    }
                </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
