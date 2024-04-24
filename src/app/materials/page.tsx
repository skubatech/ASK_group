import {Guarantees} from "@/app/_components/guarantees";
import {Connection} from "@/app/_components/connection";
import {MaterialsSwitcher} from "@/app/materials/materialsSwitcher/MaterialsSwitcher";
import styles from "./page.module.scss";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Нерудные материалы - ASK GROUP",
    description: "Нерудные матералы | ASK GROUP",
};

export default function Materials() {

    return (
        <section className={`${styles.wrapper} container`}>
            <h2 className={styles.title}>Нерудные материалы</h2>
            <MaterialsSwitcher/>
            <Guarantees/>
            <Connection/>
        </section>
    )
}