"use client";

import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function HeroSection() {
  return (
    <ParallaxProvider>
      <Parallax speed={-25}>
        <section className="relative flex items-end text-white bg-black h-full min-h-screen">
          {/* Background Image Container with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/hero3.webp"
              alt="Веб студия Сакнэ Sakne"
              fill
              priority
              quality={100}
              className="object-cover"
            />
            {/* Gradient Overlay - более плавное затемнение */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
            {/* Дополнительное равномерное затемнение */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container text-left">
            <div className="flex flex-col gap-6 Xxl:pb-20 pb-10">
              <div className="flex items-start gap-2 md:gap-6">
                <div className="w-11 h-11 flex-shrink-0">
                  <Image
                    src={"/images/Icon/primary-leaf.svg"}
                    alt="icon"
                    width={44}
                    height={44}
                    className="animate-spin"
                  />
                </div>
                <p className="text-white/70 max-w-md">
                  Мы создаем передовые{" "}
                  <span className="text-primary">IT-Продукты </span>
                  <br /> нацеленные на{" "}
                  <span className="text-primary">ПРОДАЖИ</span>
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4">
                <h1 className="large-heading">Sakne</h1>
                <Link
                  href="https://t.me/Pavelvrl"
                  className="group flex items-center gap-2 transition-transform hover:scale-105 pb-3.5"
                >
                  <div className="bg-primary rounded-full p-1.5 pl-8 pr-2 flex items-center">
                    <span className="text-black font-medium mr-2">
                      Узнать стоимость
                    </span>
                    <Image
                      src="/images/Icon/arrow-icon.svg"
                      alt="Узнать стоимость"
                      height={52}
                      width={52}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
}

export default HeroSection;
