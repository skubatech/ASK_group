import styles from './styles.module.scss'
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {useEffect, useRef, useState} from "react";
import {IMapState, IPlacemarkOptions} from "yandex-maps";
import {ListCarriers} from "@/app/_components/Map/ListCariiers/ListCarriers";
import {carriers, MapObject, polygon} from "@/app/_components/Map/ListCariiers/list.constants";
import useClickOutSide from "@/utils/hooks/useClickOutSide";

export const MapCarrier = () => {
    const [state, setState] = useState<IMapState>();
    const ref = useRef(null);
    const [isBalloonOpen, setIsBalloonOpen] = useState(false);
    const [balloonContent, setBalloonContent] = useState<MapObject>()
    useClickOutSide(ref, () => setIsBalloonOpen(false))
    const allObj = [...carriers, ...polygon];
    const mapState = {center: [59.9386, 30.3141], zoom: 9, controls: []};
    const onItemClick = (coords: number[] | undefined) => {
        setState({center: coords, zoom: 16});
    };

    useEffect(() => {
        console.log(state?.zoom, state?.center)
    }, [state?.zoom, state?.center]);
    const [polygons, setPoly] = useState(
        polygon.map((i) => ({
            id: i.id,
            data: {content: i.title},
            options: {selectOnClick: false},
            coords: i.coords
        }))
    );

    const [carrier, setCarr] = useState(
        carriers.map((i) => ({
            id: i.id,
            data: {content: i.title},
            options: {selectOnClick: false},
            coords: i.coords
        })),
    );

    const getPointData = (index: string) => {
        return {
            balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
            clusterCaption: "placemark <strong>" + index + "</strong>"
        };
    };

    const clickedItem = (data: any) => {
        onItemClick(data.coords);
    }

    const getPointOptions = (): IPlacemarkOptions => {
        return {
            preset: "islands#yellowDotIcon"
        };
    };

    const onBalloonClick = (id: string) => {
        const element = document.getElementById('map')
        element?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        const currObj = allObj.find((item) => item.id === id);
        if (currObj) {
            setBalloonContent(currObj);
            setState({center: currObj.coords, zoom: 18, margin: [30, 30]});
        }
        setIsBalloonOpen(true);
    }

    return (
        <section className={`${styles.root} container`}>
            <h2 className={styles.title}>Карта карьеров и полигонов</h2>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <ListCarriers itemClicked={onBalloonClick}/>
                </div>
                <div className={styles.item}>
                    {isBalloonOpen && <div className={styles.balloon} ref={ref}>
                        <span className={styles.name}>{balloonContent?.title}</span>
                        {balloonContent?.products && <div className={styles.pr_wrapper}>
                            <span className={styles.product}>Продукция</span>
                            {balloonContent?.products?.map((pr) => (
                                <>
                                    {pr.add && pr.add.length > 0 &&
                                        <span className={styles.productItem} key={pr.title}>
                                        <span>{pr.title}</span>
                                            {pr.add && pr.add.length > 0 &&
                                                <span style={{display: "flex", flexDirection: 'column'}}>
                                                    {pr.add.map((a) => (
                                                        <span key={a} style={{textAlign: 'end'}}>{a}</span>))}
                                                </span>
                                            }
                                        </span>
                                    }
                                    {!pr.add?.length &&
                                        <span className={styles.productItem2} key={pr.title}>
                                            <span>{pr.title}</span>
                                        </span>
                                    }
                                </>
                            ))}
                        </div>}
                    </div>
                    }
                    <div id='map'>
                        <YMaps>
                            <Map state={state} defaultState={mapState} width={'100%'} height={'100%'}
                                 className={styles.map}>
                                {polygons.map((items) => (
                                    <Placemark
                                        key={items.id}
                                        geometry={items.coords}
                                        properties={getPointData(items.id)}
                                        options={{preset: "islands#yellowCircleDotIcon", openBalloonOnClick: true}}
                                        onClick={() => onBalloonClick(items.id)}
                                    />
                                ))}
                                {carrier.map((items) => (
                                    <Placemark
                                        key={items.id}
                                        geometry={items.coords}
                                        properties={getPointData(items.id)}
                                        options={{preset: "islands#blueMountainCircleIcon"}}
                                        onClick={() => onBalloonClick(items.id)}
                                    />
                                ))}
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </section>
    )
}