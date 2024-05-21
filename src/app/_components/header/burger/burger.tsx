import styles from './burger.module.scss'
import {headerMenu} from "@/app/_components/header/header.constants";
import PhoneSvg from "@/assets/icons/phone.svg";
import cn from "classnames";
import Link from "next/link";
import {useRef} from "react";
import {useRouter} from "next/navigation";

export const Burger = () => {
    const burger = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const clickBtn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (e.currentTarget.href.includes('#')) {
            e.preventDefault();
        }
        if (window.location.pathname !== '/' &&
            !(window.location.pathname === '/wp-content/themes/default/' || window.location.pathname.includes('/wp-content/themes/default/#'))
        ) window.location.href = `https://asklogspb.ru/${e.currentTarget.hash}`;
        const href = e.currentTarget.href;
        const elem = document.getElementById(href.split('#')[1]);

        elem?.scrollIntoView({
            behavior: "smooth",
            block: 'center'
        });
        if (burger.current) burger.current.click();
    }

    return (
        <div className={styles.hamburgerMenu}>
            <input className={styles.menu__toggle} id='menu__toggle' type="checkbox" ref={burger}/>
            <label className={styles.menu__btn} htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className={styles.menu__box}>
                {headerMenu.map((item) => <li key={item.title}>
                    <Link className={styles.menu__item} href={item.url}
                          onClick={clickBtn}>{item.title}</Link></li>)}
                <a href="tel:+79817272909" className={cn(styles.phone, styles.menu__item)}><PhoneSvg/> +7 (981)
                    727-29-09</a>
                <li className={cn(styles.location, styles.menu__item)}>Санкт-Петербург, Пулковское шоссе 30/4, офис
                    101Д
                </li>

            </ul>

        </div>)
}