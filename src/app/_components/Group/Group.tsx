'use client';
import styles from './group.module.scss'
import {GroupCard} from "@/app/_components/Group/GroupCard/GroupCard";
import {backCardsContent} from "@/app/_components/Group/Group.constants";
import cn from "classnames";

export const Group = () => {
    return (
        <section className={styles.group}>
            <h2 className={cn(styles.title)}>ASK GROUP это:</h2>
            <div className={styles.grid}>
                <div className={styles.row}>
                    <GroupCard
                        className={styles.card1}
                        titleClassName={cn(styles.title1)}
                        spinnerClassName={styles.sp1}
                        {...backCardsContent[0]}/>
                    <GroupCard
                        className={styles.card2}
                        {...backCardsContent[1]}/>
                </div>
                <div className={styles.row}>
                    <GroupCard
                        className={styles.card3}
                        titleClassName={cn(styles.title3)}
                        {...backCardsContent[2]}/>
                    <GroupCard
                        className={styles.card4}
                        titleClassName={cn(styles.title4)}
                        spinnerClassName={styles.sp3}
                        {...backCardsContent[3]}/>
                </div>
                <div className={styles.row}>
                    <GroupCard
                        className={styles.card5}
                        spinnerClassName={styles.sp4}
                        {...backCardsContent[4]}/>
                    <GroupCard
                        className={styles.card6}
                        spinnerClassName={styles.sp5}
                        {...backCardsContent[5]}/>
                </div>
            </div>

        </section>
    )
}