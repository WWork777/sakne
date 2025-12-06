import { Metadata } from "next";
import Aboutus from "./components/home/about-us";
import Contact from "./components/home/contact";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Portfolio from "./components/home/portfolio";
import Pricing from "./components/home/pricing";
import Resources from "./components/home/resources";
import Services from "./components/home/services";
import StatsFacts from "./components/home/stats-facts";
import Team from "./components/home/team";
import Testimonial from "./components/home/testimonial";
import OutsourcingCalculator from "./components/home/Calculator";
import PaymentBanner from "./components/home/payment/PaymentBanner";

export const metadata: Metadata = {
  title: "Веб-студия Sakne: разработка и продвижение сайтов в Москве",
  description:
    "Профессиональная разработка сайтов, SEO-продвижение и настройка Яндекс.Директ от Павла Сакнэ. Полный цикл услуг для бизнеса на сайте sakne.ru",

  keywords:
    "веб-студия Москва, разработка сайтов, SEO-продвижение, Яндекс.Директ",
  alternates: {
    canonical: `https://sakne.ru`,
  },
  openGraph: {
    title: `Веб-студия Sakne: разработка и продвижение сайтов в Москве`,
    description: `Профессиональная разработка сайтов, SEO-продвижение и настройка Яндекс.Директ от Павла Сакнэ. Полный цикл услуг для бизнеса на сайте sakne.ru`,
    url: `https://sakne.ru`,
    images: [
      {
        url: `/images/logo/WhiteLogo.svg`,
        alt: `SAKNE`,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <Pricing />
      <PaymentBanner />
      <OutsourcingCalculator />
      <StatsFacts />

      <Portfolio />
      <Services />
      <Aboutus />
      <Testimonial />
      <Team teamdataNumber="09" />

      <Faq />
      <Resources />
      {/* <Contact contactdataNumber="10" /> */}
    </>
  );
}
