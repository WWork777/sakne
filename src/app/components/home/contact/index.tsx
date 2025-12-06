"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  contactdataNumber: string;
}

const Contact = ({ contactdataNumber }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [contactData, setContactData] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.statsFactData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  const baseUrl =
    "https://api.telegram.org/bot7119013148:AAHieSVT1tGme0sQtbir3vIUx9r-eYbbDkY/";
  const sendMessage = async (text: string) => {
    const encodedText = encodeURIComponent(text);
    const url = `${baseUrl}sendMessage?chat_id=-4661328493&text=${encodedText}`;
    await fetch(url);
  };

  const reset = () => {
    formData.name = "";
    formData.email = "";
    formData.message = "";
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);

    const message = `Заявка с Сайта \nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    await sendMessage(message);
    setLoader(false);
    setSubmitted(true);
    reset();
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="py-20 md:py-40 dark:bg-darkblack" id="contact">
      <div className="container">
        <div className="flex flex-col gap-8 md:gap-20">
          <div className="flex flex-col gap-14 xl:gap-24">
            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
              <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">
                  {contactdataNumber ? contactdataNumber : 10}
                </span>
                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                <p className="section-bedge py-1.5 px-4 rounded-full">
                  Наши контакты
                </p>
              </div>
              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-5 ">
                  <h2 className="max-w-3xl">Ваш идеальный сайт ↓</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex xl:flex-row xl:gap-48 justify-between">
            <div className="max-w-md flex flex-col gap-9 md:gap-16">
              <div className="flex flex-col gap-5 md:gap-8">
                <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                  Давайте создадим потрясающее вместе! Расскажите о вашем
                  проекте.
                </p>
                <div>
                  <ul className="flex flex-col gap-3">
                    {contactData?.keypoint?.map((value: any, index: any) => {
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
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-5">
                {contactData?.managerProfile?.image && (
                  <Image
                    src={contactData?.managerProfile?.image}
                    alt="image"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p>{contactData?.managerProfile?.name}</p>
                  <span className="text-base text-secondary/70 dark:text-white/70">
                    {contactData?.managerProfile?.position}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5 md:gap-8">
              <button
                type="submit"
                className="group relative flex justify-center items-center w-1/2 bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out cursor-pointer"
              >
                <span className="py-4 px-2 text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
                  Отправить сообщение
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
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              </button>

              <button
                type="submit"
                className="group relative flex justify-center items-center  w-1/2 bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out cursor-pointer"
              >
                <span className="py-4 px-2 text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
                  Отправить сообщение
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
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              </button>

              <button
                type="submit"
                className="group relative flex justify-center items-center  w-1/2 bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out cursor-pointer"
              >
                <span className="py-4 px-2 text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
                  Отправить сообщение
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
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
