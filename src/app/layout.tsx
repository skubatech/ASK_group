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
import {StickyTab} from "@/app/_components/StickyTab/StickyTab";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Продажа нерудных материалов в Санкт-Петербурге и Ленобласти | ASK GROUP",
    description: "Продажа нерудных материалов в Санкт-Петербурге и Ленобласти. ASK GROUP предлагает широкий ассортимент качественных строительных материалов и аренде спецтехники.",
    keywords: 'нерудные материалы, Санкт-Петербург, Ленобласть, ASK GROUP, строительные материалы, аренда спецтехники, вывоз и утилизация, строительные работы, песок, грунт',
    openGraph: {
        title: 'Продажа нерудных материалов в Санкт-Петербурге и Ленобласти | ASK GROUP',
        description: 'Продажа нерудных материалов в Санкт-Петербурге и Ленобласти. ASK GROUP предлагает широкий ассортимент качественных строительных материалов и аренде спецтехники.',
        images: {
            url: 'https://asklogspb.ru/wp-content/themes/default/_next/static/media/personal.b494f59e.webp'
        }
    }
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    const ym = () => {
        return (
            "<!-- Yandex.Metrika counter -->\
<script type=\"text/javascript\" >\
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\
   m[i].l=1*new Date();\
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\
   (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\
\
   ym(96772505, \"init\", {\
        clickmap:true,\
        trackLinks:true,\
        accurateTrackBounce:true,\
        webvisor:true\
   });\
</script>\
<noscript><div><img src=\"https://mc.yandex.ru/watch/96772505\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript>\
<!-- /Yandex.Metrika counter -->"
        );
    };

    return (
        <html lang="ru">
        <head>
            <script src="//code.jivo.ru/widget/UaPjQEUSPN" async></script>
            <meta property="og:title"
                  content="ASK GROUP | Продажа нерудных материалов в Санкт-Петербурге и Ленобласти"/>
            <meta property="og:type"/>
            <meta name="yandex-verification" content="d078acd4952b2ff8"/>
            <meta property="og:image" content="og_logo.webp"/>
        </head>
        <body className={cn(montserrat.className, styles.main)}>
        <div dangerouslySetInnerHTML={{__html: ym()}}></div>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        <StickyTab/>
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
