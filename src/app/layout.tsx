import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.scss";
import {Footer} from "./_components/footer";
import {Header} from "@/app/_components/header/header";
import cn from "classnames";
import styles from './page.module.scss'
import {Bounce, ToastContainer} from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Продажа неружных материалов в Санкт-Петербурге и Ленобласти | ASK GROUP",
    description: "Продажа неружных материалов в Санкт-Петербурге и Ленобласти | ASK GROUP",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="ru">
        <head>
            <script src="//code.jivosite.com/widget/Q74wysvLKo" async></script>
        </head>
        <body className={cn(montserrat.className, styles.main)}>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}/>
        </html>
    );
}
