import {FC} from "react";
import {useRouter} from "next/navigation";
import {AccordionItemT} from '../../types'
import styles from './styles.module.scss'

export const AccordionItem: FC<AccordionItemT> = ({title, slug}) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`?secondParam=${slug}`, {scroll: false});
    }
    return <span onClick={onClick} className={styles.root}>{title}</span>
}