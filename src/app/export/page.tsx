import {Connection} from "../_components/connection";
import {ExportCards} from "../_components/exportCards";
import {Guarantees} from "../_components/guarantees";

import styles from './styles.module.scss';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Вывоз и утилизация - ASK GROUP",
    description: "Нерудные матералы | ASK GROUP",
};

export default function Export() {
    return (
        <section className={`${styles.wrapper} container`}>
            <h2 className={styles.title}>Вывоз и утилизация</h2>
            <ExportCards/>
            <Guarantees/>
            <Connection/>
        </section>
    )
}