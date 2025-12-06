import BlogList from "@/app/components/blog/blog-list";
import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог Sakne — SEO и веб-разработка",
  description:
    "Полезные статьи по SEO, веб-дизайну и продвижению сайтов. Читайте в блоге Sakne.",
  keywords: "блог о SEO, продвижение сайтов, веб-разработка",
  alternates: {
    canonical: `https://sakne.ru/blog`,
  },
  openGraph: {
    title: `Блог Sakne — SEO и веб-разработка`,
    description: `Полезные статьи по SEO, веб-дизайну и продвижению сайтов. Читайте в блоге Sakne.`,
    url: `https://sakne.ru/blog`,
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
        heading="Блог"
        desc="Хотите начать <span>что-то удивительное?</span> Свяжитесь с нами — мы будем рады пообщаться с вами!"
      />
      <BlogList />
      {/* <Contact contactdataNumber="01"/> */}
    </main>
  );
}
