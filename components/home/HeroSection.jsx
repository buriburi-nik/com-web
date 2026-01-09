'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const heroBannerImages = [
    {
        src: '/HomePage/decor.jpg',
        alt: 'Modern Property 1',
    },
    {
        src: '/HomePage/decor.jpg',
        alt: 'Modern Property 2',
    },
    {
        src: '/HomePage/decor.jpg',
        alt: 'Modern Property 3',
    },
];

export default function HeroSection() {
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                loop={true}
                speed={950}
                slidesPerView={1}
                allowTouchMove={false}
                className="absolute inset-0 w-full h-full z-0"
                aria-label="Main hero images slider"
            >
                {heroBannerImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-screen">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="100vw"
                                className="object-cover object-center w-full h-full"
                                priority={idx === 0}
                            />
                            <span className="sr-only">{img.alt}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="absolute inset-0 z-20 flex flex-col gap-4 items-center justify-center text-center text-white px-4 py-20 md:py-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[79px] font-semibold leading-tight">
                    Find Your Properties
                </h1>
                <p className="max-w-[800px] text-base sm:text-lg md:text-xl lg:text-[23px] font-normal px-2">
                    Discover your dream home from hundreds of properties. One platform. Browse today.
                </p>
                <div className="flex gap-4 flex-wrap justify-center mt-4">
                    <Button className="bg-white text-[#4D4E58] hover:bg-gray-100">
                        Get In Touch
                    </Button>
                </div>
            </div>
        </section>
    );
}
