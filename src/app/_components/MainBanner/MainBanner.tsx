'use client';
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from '@/app/page.module.scss';
import Image from 'next/image';
import {useState} from 'react';
import {bannerItems} from '@/app/_components/MainBanner/MainBanner.constants';
import {useRouter} from 'next/navigation';
import cn from 'classnames';

export const MainBanner = () => {
    const router = useRouter();
    const [currentIndexBanner, setCurrentIndexBanner] = useState(0);
    const bannerLinkTo = (path: string) => {
        router.push(path);
    };

    const createSlideBanner = () => {
        return bannerItems.map((item, i) => {
            return (
                <SwiperSlide key={item.title} onClick={() => bannerLinkTo(item.path)}>
                    <section className={styles.slider}>
                        <div className={styles.description}>
                            <h2
                                className={styles.title}
                                id={i === 2 || i===5 || i===8 ? styles.bannerTitle : undefined}
                            >
                                {item.title}
                            </h2>
                            {
                                item.text && 
                                    <span className={styles.text}>{item.text} 
                                        {
                                            item.text.includes('/м') && <span className={styles.textIndex}>3</span> 
                                        }
                                    </span> 
                            }
                            <button className={styles.btn}>Заказать сейчас</button>
                        </div>
                        <div className={styles.imgWrap}>
                            <Image
                                src={item.imgSrc}
                                alt='Banner'
                                className={cn(
                                    styles.img, 
                                    {
                                        [styles.banner1]: i===0,
                                        [styles.banner2]: i===1 || i===3 || i===6,
                                        [styles.banner3]: i===2,
                                        [styles.banner5]: i===4,
                                        [styles.banner6]: i===5,
                                        [styles.banner8]: i===7,
                                        [styles.banner9]: i===8,
                                    }
                                )}
                            />
                        </div>
                    </section>
                </SwiperSlide>
            );
        });
    };

    return (
        <Swiper
            slidesPerView={1}
            autoplay={{delay: 3500}}
            modules={[Autoplay, Pagination]}
            loop={true}
            spaceBetween={30}
            onSlideChange={(swiper) => setCurrentIndexBanner(swiper.realIndex)}
            pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                dynamicBullets: true,
                renderBullet: (index, className) => {
                    return `<span class="${className}"><i></i><b></b></span>`;
                },
            }}
        >
            {createSlideBanner()}
            <div className='swiper-pagination'></div>
        </Swiper>
    );
};
