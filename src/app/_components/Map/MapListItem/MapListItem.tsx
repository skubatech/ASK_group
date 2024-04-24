import styles from './styles.module.scss'
import {FC} from "react";

type Props = {
    data: any,
    itemClicked: (id: any) => void
}
export const MapListItem: FC<Props> = ({data, itemClicked}) => {
    return (
        <div className={styles.root} onClick={() => itemClicked(data.id)}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                <span className={styles.title}>{data.title}</span>
                <span className={styles.addres}>{data.address}</span>
            </div>
            {data.doc && <a href={data.doc} className={styles.link} target={"_blank"}>документы</a>}
        </div>
    )
}