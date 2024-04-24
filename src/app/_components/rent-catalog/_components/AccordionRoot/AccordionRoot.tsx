import Anchor from "@/assets/icons/arrow-down.svg";
import {AccordionItem} from "@/app/_components/rent-catalog/_components/AccordionItem/AccordionItem";
import {MainCategoryT, RentCatalogAccordionT} from "@/app/_components/rent-catalog/types";
import {FC, useState} from "react";
import cn from "classnames";
import styles from './styles.module.scss'
import {useRouter} from "next/navigation";

type Props = {
    root: RentCatalogAccordionT,
    active: boolean;
}
export const AccordionRoot: FC<Props> = ({root, active = false}) => {
    const [isActive, setIsActive] = useState(active);
    const router = useRouter();
    const handleClick = (param: MainCategoryT) => {
        router.push(`?mainParam=${param}`, {scroll: false})
        setIsActive(prev => !prev)
    }

    return (
        <>
            <div className={cn(styles.root_title, {[styles.activeRoot]: isActive, [styles.active]: active})}
                 onClick={() => handleClick(root.slug)}>
                <span>{root.title}</span>
                {root.items && <Anchor/>}
            </div>
            {root.items && <span className={cn(styles.items, {[styles.activeItems]: isActive})}>
                         {root.items.map((item) => (
                             <AccordionItem {...item} key={item.title}/>
                         ))}
                    </span>}
        </>

    )
}