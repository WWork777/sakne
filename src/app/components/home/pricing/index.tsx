"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Logoslider from "./Logoslider";
import InfiniteLogoSlider from "react-infinite-logo-slider";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function Pricing() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pricingData, setPricingData] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [itOutSource, setItOutSource] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // ваш существующий код загрузки данных
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPricingData(data?.pricingData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setItOutSource(data?.itOutSource);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-lightgray dark:bg-secondary py-20 md:py-40 relative">
      <div className="flex flex-col gap-24">
        <div className="container">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-14 xl:gap-24">
              <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                  <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">
                    01
                  </span>
                  <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                  <p className="section-bedge py-1.5 px-4 rounded-full">
                    Стоимость
                  </p>
                </div>
                <div className="flex flex-col gap-11">
                  <div className="flex flex-col gap-5 ">
                    <h2 className="max-w-3xl">
                      NEXT.JS - Продукт нового поколения
                    </h2>
                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                      Мы смогли оптимизировать разработку, чтобы сохранить для
                      вас доступную цену и предоставить: Молниеносную скорость,
                      Идеальное SEO, Уникальный ручной дизайн.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {pricingData?.data?.map((value: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-lightgray/10 p-3 sm:p-5 xl:p-12 flex flex-col gap-10"
                    >
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4">
                          <p className="font-medium">{value?.planName}</p>

                          {value?.tag && (
                            <div className="flex items-center gap-2 bg-secondary w-fit py-1 px-3 rounded-full">
                              <Icon
                                icon="fluent:fire-20-regular"
                                width="20"
                                height="20"
                                style={{ color: "#fff" }}
                              />
                              <span className="text-white text-base">
                                {value?.tag}
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            {value.cancelPrice && (
                              <h3 className="text-secondary/40 dark:text-white/40">
                                <del>{value.cancelPrice}</del>
                              </h3>
                            )}
                            <h3>{value.planPrice}</h3>
                            {/* <span className="text-base text-secondary/70 dark:text-white/70">/month</span> */}
                          </div>
                        </div>
                        <p className="text-base text-secondary/70 dark:text-white/70">
                          {value.planDescp}
                        </p>
                      </div>
                      <div className="pt-10 border-t border-secondary/12 dark:border-white/12">
                        <p className="text-base pb-5">Что включено:</p>
                        <div>
                          <ul className="flex flex-col gap-3">
                            {value?.planIncludes?.map(
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              (value: any, index: any) => {
                                return (
                                  <li
                                    key={index}
                                    className="flex items-center gap-1.5 sm:gap-4"
                                  >
                                    <div className="bg-primary w-fit p-1 sm:p-1.5 rounded-full flex-shrink-0">
                                      <Image
                                        src={"/images/Icon/right-check.svg"}
                                        alt="right-icon"
                                        width={20}
                                        height={20}
                                      />
                                    </div>
                                    <span className="flex-1">{value}</span>
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <Link
                          href="https://t.me/Pavelvrl"
                          className="group relative flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out"
                        >
                          <span className="py-4 px-2 text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
                            Заказать
                          </span>
                          <div className="absolute top-0.5 right-0.5 transition-all duration-300 ease-in-out group-hover:left-0">
                            <svg
                              className="flex items-center transition-transform duration-300 ease-in-out group-hover:rotate-45"
                              width="58"
                              height="58"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_1_873)">
                                <rect
                                  x="3"
                                  y="2"
                                  width="52"
                                  height="52"
                                  rx="26"
                                  fill="white"
                                />
                                <path
                                  d="M24 23H34M34 23V33M34 23L24 33"
                                  stroke="#1F2A2E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_1_873"
                                  x="0"
                                  y="0"
                                  width="58"
                                  height="58"
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  />
                                  <feOffset dy="1" />
                                  <feGaussianBlur stdDeviation="1.5" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_1_873"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_873"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div
                className="flex flex-col xl:flex xl:flex-row items-start gap-8"
                id="itOutSource"
              >
                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl"></div>
                <div className="flex flex-col gap-11">
                  <div className="flex flex-col gap-5 ">
                    <h2 className="max-w-3xl">IT - Аутсорсинг</h2>
                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                      Оптимизируйте работу вашего сайта с профессиональным
                      IT-аутсорсингом. Сфокусируйтесь на бизнесе, а технические
                      задачи доверьте нам. Экономия времени и ресурсов без
                      потери качества.
                    </p>
                  </div>
                </div>
              </div>
              {itOutSource?.data && itOutSource.data.length > 0 && (
                <div className="slider-container">
                  <Slider {...sliderSettings}>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {itOutSource?.data?.map((value: any, index: any) => (
                      <div key={index} className="px-2 h-full">
                        {" "}
                        {/* Добавьте h-full */}
                        <div className="bg-white dark:bg-lightgray/10 p-3 sm:p-5 xl:p-8 flex flex-col justify-between min-h-[680px] h-full">
                          {" "}
                          {/* Изменения здесь */}
                          {/* Основной контент с автоматическим растягиванием */}
                          <div className="flex flex-col gap-10 flex-grow">
                            {" "}
                            {/* Добавлен flex-grow */}
                            {/* Первая секция */}
                            <div className="flex flex-col gap-5">
                              <div className="flex items-center gap-4">
                                <p className="font-medium">{value?.planName}</p>
                                {value?.tag && (
                                  <div className="flex items-center gap-2 bg-secondary w-fit py-1 px-3 rounded-full">
                                    <Icon
                                      icon="fluent:fire-20-regular"
                                      width="20"
                                      height="20"
                                      style={{ color: "#fff" }}
                                    />
                                    <span className="text-white text-base">
                                      {value?.tag}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div>
                                <div className="flex text-left items-center gap-3">
                                  {value.cancelPrice && (
                                    <h3 className="text-secondary/40 dark:text-white/40">
                                      <del>{value.cancelPrice}</del>
                                    </h3>
                                  )}
                                  <h3>{value.planPrice}</h3>
                                </div>
                              </div>
                              <p className="text-base text-secondary/70 dark:text-white/70">
                                {value.planDescp}
                              </p>
                            </div>
                            {/* Вторая секция */}
                            <div className="pt-10 border-t border-secondary/12 dark:border-white/12">
                              <p className="text-base pb-5">Что включено:</p>
                              <p className="text-base pb-5">
                                {value?.planIncludesTitle}
                              </p>
                              <div>
                                <ul className="flex flex-col gap-3">
                                  {value?.planIncludes?.map(
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    (value: any, index: any) => (
                                      <li
                                        key={index}
                                        className="flex items-center gap-1.5 sm:gap-4"
                                      >
                                        <div className="bg-primary w-fit p-1 sm:p-1.5 rounded-full flex-shrink-0">
                                          <Image
                                            src={"/images/Icon/right-check.svg"}
                                            alt="right-icon"
                                            width={20}
                                            height={20}
                                          />
                                        </div>
                                        <span className="flex-1">{value}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* Кнопка - всегда внизу */}
                          <div>
                            <Link
                              href="https://t.me/Pavelvrl"
                              className="group relative flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out"
                            >
                              <span className="py-4 px-2 text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
                                Заказать
                              </span>
                              <div className="absolute top-0.5 right-0.5 transition-all duration-300 ease-in-out group-hover:left-0">
                                <svg
                                  className="flex items-center transition-transform duration-300 ease-in-out group-hover:rotate-45"
                                  width="58"
                                  height="58"
                                  viewBox="0 0 58 58"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {/* SVG остается без изменений */}
                                </svg>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-secondary dark:text-white text-center">
                Более чем 200 клиентов и партнеров
              </p>
              <InfiniteLogoSlider
                duration={20}
                pauseOnHover={true}
                blurBorders={false}
              >
                {(pricingData?.partnerLogo || []).map(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (items: any, index: any) => (
                    <Logoslider key={index} logo={items} />
                  )
                )}
              </InfiniteLogoSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
