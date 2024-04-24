import styles from "./navItem.module.scss";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import {FC, useEffect, useRef, useState} from "react";
import {TNavItem} from './navItem.types'
import useClickOutSide from "@/utils/hooks/useClickOutSide";
import cn from "classnames";
import useOnOverOutside from "@/utils/hooks/useOverOutside";
import Link from "next/link";
import {useRouter} from "next/navigation";

type Props = {
    item: TNavItem;
    isActiveTab?: boolean;
    onActive?: () => void;
}
export const NavItem: FC<Props> = ({item, isActiveTab, onActive}) => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    useClickOutSide(ref2, () => setIsActive(false));
    useOnOverOutside(ref, () => setIsActive(false))

    useEffect(() => {
        setIsActive(false);
    }, [isActiveTab])

    const mouseEnter = () => {
        setIsActive(true);
    }

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (e.currentTarget.href.includes('#')) {
            e.preventDefault();
        }
        if (window.location.pathname !== '/') router.push(`/${e.currentTarget.hash}`, {scroll: true});
        const href = e.currentTarget.href;
        const elem = document.getElementById(href.split('#')[1]);

        elem?.scrollIntoView({
            behavior: "smooth",
            block: 'center',
        });
    };


    return (
        <div className={styles.navItem}
             ref={ref}>
            <Link href={item.url} className={styles.title} onMouseOver={mouseEnter} onClick={handleScroll}>
                <span>{item.title}</span>
                {item.child && <ArrowDown/>}
            </Link>
            {
                item.child &&
                <ul className={cn(styles.childList, {[styles.active]: isActive})} ref={ref2}>
                    {item.child.map((child) =>
                        <Link href={child.url} key={child.title} className={styles.childItem}>{child.title}</Link>
                    )}
                </ul>
            }
        </div>
    )
}