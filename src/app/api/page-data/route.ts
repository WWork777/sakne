import { NextResponse } from "next/server";

const avatarList = [
  {
    image: "/images/avatar/ilumastorelogo.svg",
    title: "Sarah Johnson",
  },
  {
    image: "/images/avatar/arhitek.svg",
    title: "Olivia Miller",
  },
  {
    image: "/images/avatar/tvoy3d.svg",
    title: "Sophia Roberts",
  },
  {
    image: "/images/avatar/alyakina.jpg",
    title: "Isabella Clark",
  },
  {
    image: "/images/avatar/pribor.ico",
    title: "Isabella Clark",
  },
  {
    image: "/images/avatar/aval42.png",
    title: "Isabella Clark",
  },
];

const statsFactData = {
  number: "03",
  name: "О Компании",
  heading: "Полное сопровождение бизнеса в digital",
  description:
    "Digital под ключ: от дизайна до стабильного потока клиентов. Создаём, продвигаем и автоматизируем — наши продукты продают 24/7.",
  scoreData: [
    {
      number: 200,
      numberValue: "",
      scoreDescp: "Бизнесов запустили наши сайты",
    },
    {
      number: 3,
      scoreDescp: "Лет, официального опыта работы",
    },
    {
      number: 10,
      numberValue: "млн",
      scoreDescp: "Прибыли принесли клиентам наши продукты за прошлый год",
    },
  ],
};

const servicesData = {
  number: "05",
  name: "Направления",
  heading: "Чем мы занимаемся?",
  description:
    "Окунитесь в мир нашего творчества: создаём инновационные дизайны и делаем цифровой опыт по-настоящему впечатляющим",
  data: [
    {
      id: 1,
      image: "/images/home/services/design.webp",
      heading: "Дизайн",
      descp:
        "Захватывающий дизайн, который удерживает внимание и повышает конверсию. Продуманная структура, адаптивность и стиль — каждый продукт станет отражением бизнеса.",
    },
    {
      id: 2,
      image: "/images/home/services/develop.webp",
      heading: "Разработка сайтов",
      descp:
        "Сайты с чистым кодом, быстрой загрузкой и идеальной работой на всех устройствах. Надёжная техническая основа для роста бизнеса.",
    },
    {
      id: 3,
      image: "/images/home/services/tg.webp",
      heading: "TG-боты",
      descp:
        "Автоматизируем продажи, обратную связь и поддержку клиентов. Боты для рассылок, оплат и аналитики — экономия времени и увеличение прибыли.",
    },
    {
      id: 4,
      image: "/images/home/services/seo.webp",
      heading: "SEO",
      descp:
        "Выводим сайты в ТОП-10 поисковиков. Комплексное продвижение: от семантики до технической оптимизации — стабильный поток клиентов.",
    },
    {
      id: 5,
      image: "/images/home/services/ads.webp",
      heading: "Реклама",
      descp:
        "Точечные настройки таргета и контекста. Привлекаем только платежеспособных клиентов с полной аналитикой.",
    },
  ],
};

const testimonialData = {
  data_1: {
    preTitle: "Реальные истории",
    title:
      "Качественный дизайн и продуманная структура - именно то, что нужно нашему бизнесу",
    author: "Дмитрий",
    company: "Твой3д",
  },
  data_2: {
    preTitle: "Реальные истории",
    title:
      "SEO-оптимизация приносит продажи ежедневно! Сайт стал основным каналом прибыли. Результат превзошел все ожидания!",
    author: "Алена",
    company: "IlumaStore",
  },
  data_3: {
    preTitle: "Реальные истории",
    title:
      "Уникальный сайт для бухгалтерского аутсорсинга. SEO-продвижение вывело нас в ТОП!",
    author: "Елена",
    company: "Аваль",
  },
};

const teamData = {
  number: "08",
  data: [
    {
      image: "/images/home/team/sakne1.png",
      name: "Pavel Sakne",
      position: "CEO",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
    {
      image: "/images/home/team/nastya.png",
      name: "Anastasia Sakne",
      position: "Designer",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
    {
      image: "/images/home/team/sasha.png",
      name: "Alexander ",
      position: "Lead Developer",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
    {
      image: "/images/home/team/denis.png",
      name: "Evgeniy Parshikov",
      position: "Developer",
      socialLinks: [
        {
          icon: "/images/socialIcon/twitter.svg",
          link: "https://twitter.com",
        },
        {
          icon: "/images/socialIcon/Be.svg",
          link: "https://www.behance.net/",
        },
        {
          icon: "/images/socialIcon/linkedin.svg",
          link: "https://linkedin.com",
        },
      ],
    },
  ],
};

const pricingData = {
  data: [
    {
      planName: "Landing",
      planPrice: "59 990₽",
      cancelPrice: "79 990₽",
      planDescp:
        "Отлично подходит тем, кто только начинает развивать бизнес в интернете.",
      planIncludes: [
        "Индивидуальный ручной дизайн",
        "Формирование воронки",
        "SEO ядро",
        "Заявки на почту, CRM или TG-бот",
        "Подключение Яндекс.Метрика, Google",
      ],
    },
    {
      planName: "Многостраничник",
      tag: "Популярный",
      planPrice: "99 990₽",
      cancelPrice: "149 990₽",
      planDescp: "Идеально подходит компаниям, нацеленным масштабироваться.",
      planIncludes: [
        "Индивидуальный ручной дизайн",
        "Воронки для каждой страницы",
        "SEO ядро для каждой страницы",
        "Заявки на почту, CRM или TG-бот",
        "Подключение Яндекс.Метрика, Google",
        "Блог",
      ],
    },
    {
      planName: "Интернет-магазин",
      planPrice: "149 990₽",
      planDescp:
        "Для магазинов, которые хотят отличаться от конкурентов на Tilda и Wordpress.",
      planIncludes: [
        "Индивидуальный ручной дизайн",
        "Формирование воронки",
        "Каталог товаров",
        "SEO ядро для страниц и товаров",
        "Заявки на почту, CRM или TG-бот",
        "Подключение Яндекс.Метрика, Google",
      ],
    },
  ],
  partnerLogo: [
    { light: "/images/home/pricing/2.png", dark: "/images/home/pricing/2.png" },
    { light: "/images/home/pricing/3.png", dark: "/images/home/pricing/3.png" },
    { light: "/images/home/pricing/4.png", dark: "/images/home/pricing/4.png" },
    { light: "/images/home/pricing/5.png", dark: "/images/home/pricing/5.png" },
    { light: "/images/home/pricing/6.png", dark: "/images/home/pricing/6.png" },
    { light: "/images/home/pricing/7.png", dark: "/images/home/pricing/7.png" },
    { light: "/images/home/pricing/8.png", dark: "/images/home/pricing/8.png" },
    { light: "/images/home/pricing/9.png", dark: "/images/home/pricing/9.png" },
  ],
};

const itOutSource = {
  data: [
    {
      planName: "Тариф БАЗОВЫЙ",
      planPrice: "9 990₽",
      cancelPrice: "19 990₽",
      planDescp: "Для тех, кому нужно просто «чтобы работало»",
      planIncludes: [
        "Разработка сайта",
        "Резервное копирование",
        "SSL-сертификат",
        "Техподдержка сайта (обеспечение 24/7 работы)",
        "Рабочие заявки в TG/почту/CRM",
      ],
    },
    {
      planName: "Тариф СТАНДАРТ",
      planIncludesTitle: "Все из Базового +",
      planPrice: "19 990₽",
      cancelPrice: "29 990₽",
      planDescp: "Для растущих проектов",
      planIncludes: [
        "Разработчик для развития проекта",
        "Дизайнер для рекламных материалов",
        "Наполнение, оформление Яндекс.Карт",
      ],
    },
    {
      planName: "Тариф ПРОДВИЖЕНИЕ",
      planPrice: "39 990₽",
      cancelPrice: "49 990₽",
      planIncludesTitle: "Все из Базового и Стандарта +",
      planDescp: "Для лидеров рынка",
      planIncludes: [
        "Директолог",
        "SEO на 1 регион",
        "Бюджет на SEO включен в тариф",
      ],
    },
    {
      planName: "НОВЫЙ ТАРИФ",
      planPrice: "64 990₽",
      cancelPrice: "74 990₽",
      planIncludesTitle: "Все из Предыдущих тарифов +",
      planDescp: "Полноценый аутсорсинг для бизнеса",
      planIncludes: ["Сайт", "SEO (включая бюджет)", "СММ"],
    },
    {
      planName: "Тариф ПРОДАЖИ",
      planPrice: "79 990₽",
      cancelPrice: "89 990₽",
      planIncludesTitle: "Все из Предыдущих тарифов +",
      planDescp: "Для быстрого роста продаж",
      planIncludes: [
        "Настройка контекстной рекламы",
        "Ведение рекламных кампаний",
        "Рекламный бюджет включен в тариф",
      ],
    },
  ],
};

const faqData = {
  data: [
    {
      faq_que: "Чем Next.js лучше Tilda или WordPress?",
      faq_ans:
        'Главное преимущество — скорость. Страницы загружаются мгновенно, что напрямую влияет на конверсию и SEO. Конструкторы ограничены готовыми блоками и имеют "мусорный код". В NEXT.JS - мы разрабатываем дизайн и код с нуля, подстраивая его под ваш бизнес',
    },
    {
      faq_que: "Почему именно Next.js?",
      faq_ans:
        'Next.js — это фреймворк, который используют крупные компании (Nike, Netflix, Uber, Starbucks) для высоконагруженных проектов. Он автоматически оптимизирует сайт для поисковых систем, обеспечивает мгновенную загрузку и позволяет подключать любые внешние сервисы. В отличие от WordPress, где сайт может "лечь" при большом потоке посетителей, Next.js стабильно работает даже при высоких нагрузках. Это не просто сайт, а полноценный digital-инструмент, который можно бесконечно дорабатывать под растущие потребности бизнеса.',
    },
    {
      faq_que: "Что если мне нужно добавить новые функции позже?",
      faq_ans:
        "Сайт на Next.js изначально создается с возможностью масштабирования. После сдачи проекта мы бесплатно вносим правки в течение 3 месяцев. Далее изменения оплачиваются отдельно (200 руб./правка), но если у вас регулярно появляются новые задачи, выгоднее подключить пакетное обслуживание (от 5000 руб./мес).",
    },
    {
      faq_que: "Нужно ли за что-то платить после разработки?",
      faq_ans:
        "Поскольку сайт работает на сервере (это ключевое преимущество для скорости и SEO), необходимо платить за аренду сервера, вы можете разместить его самостоятельно или взять у нас услугу по размещению и мониторингу сайта, которая составляет 4000 руб./мес. (аренда сервера + мониторинг).",
    },
    {
      faq_que: "Сколько стоит внести изменения в сайт?",
      faq_ans:
        'Первые 3 месяца после запуска — правки бесплатны. Далее стоимость зависит от задачи: простая корректировка текста или картинки — от 200 руб., сложные доработки (например, добавление нового раздела) обсуждаются индивидуально. Для активных проектов, где правки нужны регулярно, есть пакеты "Все включено" (от 8000 руб./мес вместе с сервером), которые экономят значительную часть вашего бюджета, а нам позволяют иметь фултайм-занятость',
    },
    {
      faq_que: "Занимаетесь ли вы рекламой?",
      faq_ans:
        "Да, мы настраиваем таргетированную и контекстную рекламу (Яндекс.Директ, Google Ads, VK, Telegram). Можно разово настроить и сможете самостоятельно запускать и останавливать рекламу или подключить наше полноценное ведение: аудит, A/B-тесты, аналитику и регулярную оптимизацию. Важно: сайт на Next.js дает более низкую стоимость клика за счет скорости загрузки, что снижает стоимость рекламы на 20–30% по сравнению с конструкторами.",
    },
    {
      faq_que: "Как начать работу?",
      faq_ans:
        "Сначала мы бесплатно разрабатываем дизайн-концепт и маршрутную карту сайта (главная страница + блок-схема), чтобы вы оценили стиль и логику будущего сайта. После согласования — работаем по схеме 50/50: 50% предоплата, оставшиеся 50% после размещения сайта на вашем домене. Оплата доступна любыми способами: Расчетный счет, Дебетовая карта, Наличные средства, QR код",
    },
    {
      faq_que: "Есть ли пакетные предложения для бизнеса?",
      faq_ans:
        "Да, мы предлагаем услугу «IT-аутсорсинг» — полное сопровождение вашего бизнеса в digital-пространстве. Разработку логотипа и брендбука, Дизайн рекламы и вывесок, Создание и настройку сайта, Ведение соцсетей, SEO-продвижение и настройку контекстной рекламы. Стоимость: от 49 900 руб./месяц (без учета рекламного бюджета). Почему это выгодно? Вы получаете единую команду для всех digital-задач — без поиска подрядчиков и контроля процессов. Мы берем на себя все технические и маркетинговые задачи, чтобы вы могли сосредоточиться на развитии бизнеса.",
    },
  ],
};
const contactData = {
  keypoint: ["Always-On Customer Support", "Service Across the Globe"],
  managerProfile: {
    image: "/images/avatar/avatar_1.jpg",
    name: "Courtney Henry",
    position: "Onboarding & Success Manager",
  },
};

const aboutusStats = [
  {
    number: 200,
    postfix: "+",
    title: "Бизнесов запустили наши сайты",
    // descp: "Expanding reach across international regions with localized expertise and worldwide impact."
  },
  {
    number: 3,
    postfix: "+",
    title: "Лет работы",
    // descp: "Driving growth with curated partnerships and high-performing, audience-driven initiatives."
  },
  {
    number: 10,
    postfix: "млн+",
    title: "Прибыли принесли клиентам наши продукты за прошлый год",
    // descp: "Shaping industry conversations through innovation, creativity, and lasting influence."
  },
];

const servicesSliderData = [
  "Branding",
  "Web development",
  "Agency",
  "Content creation",
  "SaaS",
  "Motion & 3d modeling",
  "Photography",
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    statsFactData,
    servicesData,
    testimonialData,
    teamData,
    pricingData,
    itOutSource,
    faqData,
    contactData,
    aboutusStats,
    servicesSliderData,
  });
};
