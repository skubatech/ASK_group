import {Connection} from "../_components/connection";
import {Guarantees} from "../_components/guarantees";

import styles from './styles.module.scss';
import {Metadata} from "next";
import {RentCatalog} from "@/app/_components/rent-catalog/RentCatalog";

export const metadata: Metadata = {
    title: "Аренда спецтехники - ASK GROUP",
    description: "Аренда спецтехники | ASK GROUP",
};

export default function Rent() {
    return (
        <section className={`${styles.wrapper} container`}>
            <h2 className={styles.title}>Аренда спецтехники</h2>
            <RentCatalog/>
            <Guarantees/>
            <Connection/>
        </section>
    )
}