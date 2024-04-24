'use client';
import styles from './rentCatalog.module.scss'
import {Accordion} from "@/app/_components/rent-catalog/_components/Accordion/Accordion";
import {accordionsData, RentData} from "@/app/_components/rent-catalog/RentCatalog.constants";
import {RentCard} from "@/app/_components/rent-catalog/_components/RentCard/RentCard";
import {useEffect, useRef, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import cn from "classnames";
import useClickOutSide from "@/utils/hooks/useClickOutSide";
import {BREAKPOINTS_INDEXES} from "@theme/constants/breakpoints";
import {useBreakpointIndex} from "@/utils/hooks/useBreakpointIndex";
import {RentDataItem} from "@/app/_components/rent-catalog/types";


export const RentCatalog = () => {
    const params = useSearchParams();
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [data, setData] = useState<RentDataItem[]>([]);
    const ref = useRef(null);
    const breakpoint = useBreakpointIndex();
    const isMobile = breakpoint === BREAKPOINTS_INDEXES.xs;
    const [maxItems, setMaxItems] = useState(6);
    const [countItems, setCountItem] = useState(RentData.length)
    const router = useRouter()
    useClickOutSide(ref, () => setIsCategoryOpen(false));

    useEffect(() => {
        setMaxItems(isMobile ? 4 : 6);
    }, [isMobile, params]);

    useEffect(() => {
        setData(RentData.slice(0, maxItems))
        setCountItem(RentData.length)
        const mainParam = params.get('mainParam');
        const secondParam = params.get('secondParam');
        if (secondParam) {
            const dataFilter = RentData.filter((pr) => (
                pr.category === secondParam
            ));
            setCountItem(dataFilter.length);
            setData(dataFilter.slice(0, maxItems) || []);
            setIsCategoryOpen(true);
        } else if (mainParam) {
            const dataFilter = RentData.filter((pr) => (
                pr.mainCategory === mainParam
            ));
            setCountItem(dataFilter.length);
            setData(dataFilter.slice(0, maxItems) || []);
            setIsCategoryOpen(true);
        }
        if (data.length === 0) router.push('/rent')
    }, [params, maxItems, data.length, router])

    const handleClick = () => {
        setIsCategoryOpen(prevState => !prevState)
    }

    const handleMore = () => {
        const mainParam = params.get('mainParam');
        const secondParam = params.get('secondParam');
        if (secondParam) {
            const dataFilter = RentData.filter((pr) => (
                pr.mainCategory === secondParam
            ));
            setCountItem(dataFilter.length);
            setMaxItems(dataFilter.length)
        } else if (mainParam) {
            const dataFilter = RentData.filter((pr) => (
                pr.mainCategory === mainParam
            ));
            setCountItem(dataFilter.length);
            setMaxItems(dataFilter.length)
        } else {
            setMaxItems(RentData.length)
        }
    }

    return (
        <div className={styles.root} ref={ref}>
            <div className={cn({[styles.cat_open]: isCategoryOpen}, styles.category)}>
                {!isCategoryOpen &&
                    <div onClick={handleClick} className={styles.fake}></div>}
                <Accordion data={accordionsData}/>
            </div>
            <div>
                <div className={styles.grid}>
                    {data.map((card, index) => (
                        <RentCard data={card} key={card.title + index}/>
                    ))}
                </div>
                {data.length > 0 && (countItems > maxItems) &&
                    <div className={styles.btn_wrap}>
                        <div className={styles.btn} onClick={handleMore}>Показать еще</div>
                    </div>
                }
            </div>
        </div>
    )
}