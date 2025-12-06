import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "О Компании",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Портфолио",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Новости",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Услуги",
    path: "/#services",
    newTab: false,
  },
  {
    id: 5,
    title: "IT-Аутсорс",
    path: "/#itOutSource",
    newTab: false,
  },
  {
    id: 6,
    title: "Контакты",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 7,
  //   title: "Реквизиты",
  //   path: "/documentation",
  //   newTab: false,
  // }
];


const footerData = {
    name: "Sakne",
    tagline: "Создадим ваш продукт вместе?",
    info: [
        {
            icon: "/images/footer/yandex2.svg",
            link: "pavel-sakne@yandex.ru",
            href: "mailto:pavel-sakne@yandex.ru"
        },
        {
            icon: "/images/footer/tg.svg",
            link: "Telegram",
            href: "https://t.me/Pavelvrl"
        },
        {
            icon: "/images/footer/wa.svg",
            link: "Whatsapp",
            href: "https://wa.me/79994316266"
        }
    ],
    links: [
        { name: "Главная", href: "/" },
        { name: "О Компании", href: "/about" },
        { name: "Портфолио", href: "/projects" },
        { name: "Новости", href: "/blog" },
        { name: "Услуги", href: "/#services" },
        { name: "IT-Аутсорс", href: "/#itOutSource" },
        { name: "Контакты", href: "/contact" },
    ],
    socialLinks: [
        { name: "VK", href: "https://vk.com/pavel_sakne" },
        { name: "Telegram", href: "https://t.me/Pavelvrl" },
        { name: "Whatsapp", href: "https://wa.me/79994316266" }
    ],
    copyright: "© Sakne copyright 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};