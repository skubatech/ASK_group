import {Guarantees} from "@/app/_components/guarantees";
import {Connection} from "@/app/_components/connection";
import {MaterialsSwitcher} from "@/app/materials/materialsSwitcher/MaterialsSwitcher";
import styles from "./page.module.scss";
import {Metadata} from "next";
import {Advent_Pro} from "next/font/google";
import cn from "classnames";


export const metadata: Metadata = {
    title: "Нерудные материалы - ASK GROUP",
    description: "Нерудные матералы | ASK GROUP",
};

const adventPro = Advent_Pro({subsets: ["cyrillic"], weight: '400'});
export default function Materials() {
    return (
        <section className={`${styles.wrapper} container`}>
            <h2 className={cn(styles.title, adventPro.className)}>Нерудные материалы</h2>
            <MaterialsSwitcher/>
            <Guarantees/>
            <Connection/>
        </section>
    )
}