import styles from './styles.module.scss'
import {carriers, polygon} from "@/app/_components/Map/ListCariiers/list.constants";
import {FC, useState} from "react";
import cn from "classnames";
import {MapListItem} from "@/app/_components/Map/MapListItem/MapListItem";

type Props = {
    type: 'poly' | 'carrier',
    setType: (type: 'poly' | 'carrier') => void,
    itemClicked: (id: any) => void
}
export const ListCarriers: FC<Props> = ({itemClicked, type, setType}) => {

    // const [type, setType] = useState<'poly' | 'carrier'>('carrier');
    return (
        <div className={styles.root}>
            <div className={styles.tabs}>
                <div className={cn(styles.btn, {[styles.active]: type === 'carrier'})}
                     onClick={() => setType('carrier')}>Карьеры добычи
                </div>
                <div className={cn(styles.btn, {[styles.active]: type === 'poly'})}
                     onClick={() => setType('poly')}>Полигоны
                </div>
            </div>
            <div style={{overflow: 'hidden', borderRadius: '20px'}}>
                <section className={styles.list}>
                    {type === 'carrier' && carriers.map((car) => (
                        <MapListItem itemClicked={itemClicked} data={car} key={car.title}/>))}
                    {type === 'poly' && polygon.map((car) => (
                        <MapListItem itemClicked={itemClicked} data={car} key={car.title}/>))}
                </section>
            </div>
        </div>
    )
}