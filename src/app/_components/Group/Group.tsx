'use client';
import styles from './group.module.scss'
import {GroupCard} from "@/app/_components/Group/GroupCard/GroupCard";
import {backCardsContent} from "@/app/_components/Group/Group.constants";
import {Advent_Pro} from "next/font/google";
import cn from "classnames";

const adventPro = Advent_Pro({subsets: ["cyrillic"], weight: '400'});
export const Group = () => {
    return (
        <section className={styles.group} id='about'>
            <h1 className={cn(styles.title, adventPro.className)}>ASK GROUP это:</h1>
            <div className={styles.grid}>
                <div className={styles.row}>
                    <GroupCard
                        className={styles.card1}
                        titleClassName={cn(styles.title1, adventPro.className)}
                        spinnerClassName={styles.sp1}
                        {...backCardsContent[0]}/>
                    <GroupCard
                        className={styles.card2}
                        titleClassName={adventPro.className}
                        spinnerClassName={styles.sp2}
                        {...backCardsContent[1]}/>
                </div>
                <div className={styles.row}>
                    <GroupCard
                        className={styles.card3}
                        titleClassName={cn(styles.title3, adventPro.className)}
                        {...backCardsContent[2]}/>
                    <GroupCard
                        className={styles.card4}
                        titleClassName={cn(styles.title4, adventPro.className)}
                        spinnerClassName={styles.sp3}
                        {...backCardsContent[3]}/>
                </div>
                <div className={styles.row}>
                    <GroupCard
                        className={styles.card5}
                        titleClassName={adventPro.className}
                        spinnerClassName={styles.sp4}
                        {...backCardsContent[4]}/>
                    <GroupCard
                        className={styles.card6}
                        titleClassName={adventPro.className}
                        spinnerClassName={styles.sp5}
                        {...backCardsContent[5]}/>
                </div>
            </div>
        </section>
    )
}