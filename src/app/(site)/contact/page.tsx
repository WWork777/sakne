import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

export const metadata: Metadata = {
  title: "Контакты Sakne — заказать сайт",
  description:
    "Закажите разработку или продвижение сайта в Москве. Телефон, email, форма связи.",
  keywords: "контакты веб-студии, заказать сайт, SEO-продвижение",
  alternates: {
    canonical: `https://sakne.ru/contact`,
  },
  openGraph: {
    title: `Контакты Sakne — заказать сайт`,
    description: `Закажите разработку или продвижение сайта в Москве. Телефон, email, форма связи.`,
    url: `https://sakne.ru/contact`,
    images: [
      {
        url: `/images/logo/WhiteLogo.svg`,
        alt: `SAKNE`,
      },
    ],
  },
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/hero/hero.webp"
        heading="Контакты"
        desc="Готовы начать <span>что-то грандиозное?</span> Свяжитесь с нами, мы будем рады услышать ваше мнение."
      />
      <div className="dark:bg-darkblack">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-24 py-10 md:py-20 xl:py-40">
          <div className="text-center">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/images/footer/tg.svg"
                alt="Telegram"
                width={24}
                height={24}
              />
              <Link
                href="https://t.me/Pavelvrl"
                className="font-bold text-base sm:text-lg md:text-xl lg:text-1xl text-secondary/70 dark:text-white hover-underline pb-1 "
              >
                Telegram
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/images/footer/yandex2.svg"
                alt="Yandex"
                width={24}
                height={24}
              />
              <Link
                href="mailto:pavel-sakne@yandex.ru"
                className="font-bold text-base sm:text-lg md:text-xl lg:text-1xl text-secondary/70 dark:text-white hover-underline pb-1"
              >
                pavel-sakne@yandex.ru
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/images/footer/wa.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              <Link
                href="https://wa.me/79994316266"
                className="font-bold text-base sm:text-lg md:text-xl lg:text-1xl text-secondary/70 dark:text-white hover-underline pb-1"
              >
                WhatsApp
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/images/footer/phone.svg"
                alt="Phone"
                width={24}
                height={24}
              />
              <Link
                href="tel:+79994316266"
                className="font-bold text-base sm:text-lg md:text-xl lg:text-1xl text-secondary/70 dark:text-white hover-underline pb-1"
              >
                Телефон
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Contact contactdataNumber="01"/> */}
    </main>
  );
}
