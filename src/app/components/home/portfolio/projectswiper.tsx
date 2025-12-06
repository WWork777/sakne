"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

type Project = {
    title: string;
    slug: string;
    ScopeOfWork: string[];
    industry?: string;
    coverImage: string;
};

const Projectswiper = () => {
    const [projects, setProjects] = useState<Project[]>([]);  

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <Swiper
            loop
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            breakpoints={{
                320: { spaceBetween: 0 },
                640: { spaceBetween: 10 },
                768: { spaceBetween: 20 },
                1024: { spaceBetween: 20 },
                1920: { spaceBetween: 30 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            {projects.map((value,index)=>{
                
                return(
                    <SwiperSlide key={index}>
                        <div className="relative group flex flex-col gap-3 lg:gap-5">
                            {/* Обертка для изображения */}
                            <div className="relative aspect-[16/9] h-60 md:h-80 w-full overflow-hidden">
                            <div className="relative w-full h-full">
                                <Image
                                src={value.coverImage}
                                alt={value.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 767px) 100vw, (min-width: 768px) 100vw"
                                quality={100}
                                />
                            </div>
                            
                            {/* Hover-эффект с ссылкой */}
                            <Link
                                href={`/projects/${value.slug}`}
                                className="absolute inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                aria-label={`Посмотреть проект ${value.title}`}
                            >
                                <div className="p-5">
                                <svg width="65" height="64" viewBox="0 0 65 64" className="hover:scale-110 transition-transform">
                                    <rect x="0.333374" width="64" height="64" rx="32" fill="#C1FF72" />
                                    <path
                                    d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                                    stroke="#1F2A2E"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                                </div>
                            </Link>
                            </div>

                            {/* Описание проекта */}
                            <div className="flex flex-col gap-2 lg:gap-4">
                            <h3 className="text-xl font-medium hover:text-primary transition-colors">
                                {value.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {value.ScopeOfWork.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-sm md:text-base dark:text-white dark:hover:text-secondary hover:bg-primary border border-secondary/12 dark:border-white/12 rounded-full py-1 px-3 transition-all hover:shadow-md"
                                >
                                    {tag}
                                </span>
                                ))}
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default Projectswiper;
