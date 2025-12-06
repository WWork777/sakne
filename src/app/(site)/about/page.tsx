import AboutusDetail from "@/app/components/about/aboutus-detail";
import AboutusFullimg from "@/app/components/about/aboutus-fullimg";
import AboutusStats from "@/app/components/about/aboutus-stats";
import Contact from "@/app/components/home/contact";
import Team from "@/app/components/home/team";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О студии Sakne — создание и продвижение сайтов",
  description:
    "Веб-студия Sakne: команда экспертов по разработке, SEO и контекстной рекламе. Работаем с 2015 года.",
  keywords: "о компании Sakne, веб-разработка, SEO-студия Москва",
  alternates: {
    canonical: `https://sakne.ru/about`,
  },
  openGraph: {
    title: `О студии Sakne — создание и продвижение сайтов`,
    description: `Веб-студия Sakne: команда экспертов по разработке, SEO и контекстной рекламе. Работаем с 2015 года.`,
    url: `https://sakne.ru/about`,
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
        heading="О нас"
        desc="Digital под ключ: от дизайна до стабильного потока клиентов. Создаём, продвигаем и автоматизируем — наши продукты продают 24/7."
      />
      <AboutusDetail />
      <AboutusStats />
      {/* <AboutusFullimg//> */}

      <Team teamdataNumber="01" />
      {/* <Contact contactdataNumber="02"/> */}
    </main>
  );
}
