'use client';
import {RentCatalogAccordionT} from "@/app/_components/rent-catalog/types";
import {FC} from "react";
import styles from './accordion.module.scss'
import {AccordionRoot} from "@/app/_components/rent-catalog/_components/AccordionRoot/AccordionRoot";
import {useSearchParams} from "next/navigation";
import {useBreakpointIndex} from "@/utils/hooks/useBreakpointIndex";
import {BREAKPOINTS_INDEXES} from "@theme/constants/breakpoints";

type Props = {
    data: RentCatalogAccordionT[]
}
export const Accordion: FC<Props> = ({data}) => {
    const params = useSearchParams();
    const breakpoint = useBreakpointIndex();
    const isMobile = breakpoint === BREAKPOINTS_INDEXES.xs || breakpoint === BREAKPOINTS_INDEXES.sm;
    return (
        <div className={styles.root}>
            {data.map((root) => (
                <AccordionRoot
                    root={root}
                    key={root.title}
                    active={root.slug === params.get('mainParam') || root.items?.some((item) => item.slug === params.get('secondParam')) || false}/>
            ))}
        </div>
    )
}