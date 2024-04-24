'use client';
import styles from './header.module.scss'
import LogoSvg from '@/assets/icons/logo.svg'
import {headerMenu} from "@/app/_components/header/header.constants";
import {NavItem} from "@/app/_components/header/navItem/navItem";
import {useState} from "react";
import PhoneSvg from '@/assets/icons/phone.svg'
import {useBreakpointIndex} from "@/utils/hooks/useBreakpointIndex";
import {BREAKPOINTS_INDEXES} from "@theme/constants/breakpoints";
import {Burger} from "@/app/_components/header/burger/burger";
import cn from "classnames";

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState<string>();
    const breakpoint = useBreakpointIndex();
    const isMobile = breakpoint === BREAKPOINTS_INDEXES.xs || breakpoint === BREAKPOINTS_INDEXES.sm;

    const isActiveTab = (slug: string) => {
        return activeMenu === slug;
    }

    return (
        <header className={styles.header}>
            <span className={styles.mainRow}>
                <a href='https://asklogspb.ru/' className={styles.logo}><LogoSvg/></a>
                {!isMobile && <span className={styles.desc}>
                    <span className={styles.location}>Санкт-Петербург, Пулковское шоссе 30/4, офис 101Д</span>
                    <a href="tel:+79817272909" className={styles.phone}> <PhoneSvg/> +7 (981) 727-29-09</a>
                </span>
                }
                {isMobile && <Burger/>}

            </span>
            {!isMobile &&
                <nav className={cn(styles.navigation, styles.sdesc)}>
                    {headerMenu.map((item) =>
                        <NavItem
                            item={item}
                            key={item.title}
                            isActiveTab={isActiveTab(item.title)}
                            onActive={() => setActiveMenu(item.title)}
                        />
                    )}
                </nav>
            }
        </header>
    )
}