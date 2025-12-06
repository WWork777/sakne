import Contact from "@/app/components/home/contact";
import ProjectList from "@/app/components/projects";
import Herobanner from "@/app/components/shared/hero-banner";
import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портфолио — наши работы по разработке сайтов",
  description:
    "Примеры наших проектов: корпоративные сайты, лендинги, интернет-магазины. Москва и область.",
  keywords: "портфолио веб-студии, примеры сайтов, разработка под ключ",
  alternates: {
    canonical: `https://sakne.ru/projects`,
  },
  openGraph: {
    title: `Портфолио — наши работы по разработке сайтов`,
    description: `Примеры наших проектов: корпоративные сайты, лендинги, интернет-магазины. Москва и область.`,
    url: `https://sakne.ru/projects`,
    images: [
      {
        url: `/images/logo/WhiteLogo.svg`,
        alt: `SAKNE`,
      },
    ],
  },
};

export default function Page() {
  const projects = getAllProjects();
  return (
    <main>
      <Herobanner
        bannerimage="/images/hero/hero.webp"
        heading="Проекты"
        desc="Демонстрация <span>креативности, стратегии и результатов</span> — изучите проекты, которые определяют нас."
      />
      <ProjectList />
      {/* <Contact contactdataNumber="01"/> */}
    </main>
  );
}
