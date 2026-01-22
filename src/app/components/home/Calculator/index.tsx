// components/OutsourcingCalculator.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function OutsourcingCalculator() {
  // Шаг 1: Тип сайта + сервер
  const [siteType, setSiteType] = useState<"single" | "multi">("single");
  const [isNotOurServer, setIsNotOurServer] = useState(false);

  // Шаг 2: SEO
  const [seoOption, setSeoOption] = useState<"free" | "120" | "240" | "1000">(
    "free"
  );

  // Шаг 3: Реклама
  const [adOption, setAdOption] = useState<"free" | "paid">("free");

  // Шаг 4: Доп. аутсорсинг
  const [blogChecked, setBlogChecked] = useState(false);

  // Шаг 5: SMM (сделан опциональным)
  const [isSmmNeeded, setIsSmmNeeded] = useState(true); // <-- НОВОЕ СОСТОЯНИЕ
  const [postsPerWeek, setPostsPerWeek] = useState<"1" | "2" | "3" | "5" | "7">(
    "1"
  );
  const [socialNetworks, setSocialNetworks] = useState<"1" | "2" | "3">("2");
  const [shootingsNeeded, setShootingsNeeded] = useState(false);

  // Навигация
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // Расчёт промежуточной стоимости для шага 1
  const calculateStep1Total = () => {
    let total = siteType === "single" ? 10000 : 20000;
    if (isNotOurServer) total += 2000;
    return total;
  };

  // Расчёт промежуточной стоимости для шага 2
  const calculateStep2Total = () => {
    let total = calculateStep1Total();
    switch (seoOption) {
      case "120":
        total += 20000;
        break;
      case "240":
        total += 25000;
        break;
      case "1000":
        total += 50000;
        break;
      default:
        break;
    }
    return total;
  };

  // Расчёт промежуточной стоимости для шага 3
  const calculateStep3Total = () => {
    let total = calculateStep2Total();
    if (adOption === "paid") total += 10000;
    return total;
  };

  // Расчёт промежуточной стоимости для шага 4
  const calculateStep4Total = () => {
    let total = calculateStep3Total();
    if (blogChecked) total += 5000;
    return total;
  };

  // Расчёт промежуточной стоимости для шага 5 (БЕЗ shootingsNeeded)
  const calculateStep5TotalWithoutShooting = () => {
    if (!isSmmNeeded) {
      return calculateStep4Total(); // Если SMM не нужен — не добавляем ничего
    }

    let total = calculateStep4Total();

    let smmBase = 0;
    switch (postsPerWeek) {
      case "1":
        smmBase = 5000;
        break;
      case "2":
        smmBase = 6000;
        break;
      case "3":
        smmBase = 8000;
        break;
      case "5":
        smmBase = 12000;
        break;
      case "7":
        smmBase = 18000;
        break;
    }

    let multiplier = 1.0;
    switch (socialNetworks) {
      case "1":
        multiplier = 0.7;
        break;
      case "3":
        multiplier = 1.3;
        break;
      default:
        multiplier = 1.0;
    }

    total += smmBase * multiplier;
    return total;
  };

  // Расчёт промежуточной стоимости для шага 5 (с shootingsNeeded)
  const calculateStep5Total = () => {
    let total = calculateStep5TotalWithoutShooting();
    if (shootingsNeeded && isSmmNeeded) total += 5000; // Добавляем съёмку только если SMM включен
    return total;
  };

  // Финальный расчёт
  const calculateTotal = () => {
    return calculateStep5Total();
  };

  const totalAmount = calculateTotal();

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-5 text-secondary dark:text-white">
              1. Выберите тип сайта
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="radio"
                  name="siteType"
                  value="single"
                  checked={siteType === "single"}
                  onChange={() => setSiteType("single")}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Одностраничник (лендинг)
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    Быстрый запуск, минимум страниц
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    10 000 ₽/мес
                  </span>
                </div>
              </label>
              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="radio"
                  name="siteType"
                  value="multi"
                  checked={siteType === "multi"}
                  onChange={() => setSiteType("multi")}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Многостраничный сайт
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    Полноценный сайт с разделами, меню, формами
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    20 000 ₽/мес
                  </span>
                </div>
              </label>
            </div>

            <div className="mt-6">
              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="checkbox"
                  checked={isNotOurServer}
                  onChange={(e) => setIsNotOurServer(e.target.checked)}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Сервер не наш
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    Вы используете свой хостинг или сервер
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    +2 000 ₽/мес
                  </span>
                </div>
              </label>
            </div>

            <div className="mt-6 pt-4 border-t border-secondary/12 dark:border-white/12">
              <div className="flex justify-between items-center text-base font-semibold">
                <span>Промежуточный итог:</span>
                <span className="dark:text-lightgray text-secondary">
                  {calculateStep1Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-5 text-secondary dark:text-white">
              2. SEO (выберите пакет)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="radio"
                  name="seo"
                  value="free"
                  checked={seoOption === "free"}
                  onChange={() => setSeoOption("free")}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Базовый пакет
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    14 дней, 120 запросов
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    Бесплатно
                  </span>
                </div>
              </label>
              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="radio"
                  name="seo"
                  value="120"
                  checked={seoOption === "120"}
                  onChange={() => setSeoOption("120")}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Стандарт
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    120 запросов
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    20 000 ₽
                  </span>
                </div>
              </label>
              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="radio"
                  name="seo"
                  value="240"
                  checked={seoOption === "240"}
                  onChange={() => setSeoOption("240")}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Профессиональный
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    240 запросов
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    25 000 ₽
                  </span>
                </div>
              </label>
              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="radio"
                  name="seo"
                  value="1000"
                  checked={seoOption === "1000"}
                  onChange={() => setSeoOption("1000")}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Премиум
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    1000 запросов
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    50 000 ₽
                  </span>
                </div>
              </label>
            </div>
            <div className="mt-6 pt-4 border-t border-secondary/12 dark:border-white/12">
              <div className="flex justify-between items-center text-base font-semibold">
                <span>Промежуточный итог:</span>
                <span className="dark:text-lightgray text-secondary">
                  {calculateStep2Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-5 text-secondary dark:text-white">
              3. Реклама (Директолог)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="radio"
                  name="ads"
                  value="free"
                  checked={adOption === "free"}
                  onChange={() => setAdOption("free")}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Первичная настройка
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    Запуск рекламы без дальнейшего ведения
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    Бесплатно
                  </span>
                </div>
              </label>
              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="radio"
                  name="ads"
                  value="paid"
                  checked={adOption === "paid"}
                  onChange={() => setAdOption("paid")}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Полное ведение
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    Настройка + ежемесячное ведение кампаний
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    10 000 ₽/мес
                  </span>
                </div>
              </label>
            </div>
            <div className="mt-6 pt-4 border-t border-secondary/12 dark:border-white/12">
              <div className="flex justify-between items-center text-base font-semibold">
                <span>Промежуточный итог:</span>
                <span className="dark:text-lightgray text-secondary">
                  {calculateStep3Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-5 text-secondary dark:text-white">
              4. Доп. аутсорсинг (Web)
            </h3>
            <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
              <input
                type="checkbox"
                checked={blogChecked}
                onChange={(e) => setBlogChecked(e.target.checked)}
                className="mt-1 w-5 h-5 text-primary focus:ring-primary"
              />
              <div>
                <span className="block font-medium text-secondary dark:text-white">
                  Ведение блога
                </span>
                <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                  Написание и публикация статей/новостей
                </span>
                <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                  +5 000 ₽/мес
                </span>
              </div>
            </label>
            <div className="mt-6 pt-4 border-t border-secondary/12 dark:border-white/12">
              <div className="flex justify-between items-center text-base font-semibold">
                <span>Промежуточный итог:</span>
                <span className="dark:text-lightgray text-secondary">
                  {calculateStep4Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-5 text-secondary dark:text-white">
              5. SMM
            </h3>

            {/* Чекбокс для отключения всего SMM */}
            <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10 mb-6">
              <input
                type="checkbox"
                checked={!isSmmNeeded}
                onChange={(e) => setIsSmmNeeded(!e.target.checked)}
                className="mt-1 w-5 h-5 text-primary focus:ring-primary"
              />
              <div>
                <span className="block font-medium text-secondary dark:text-white">
                  Мне не нужен SMM
                </span>
                <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                  Пропустить этот шаг и не включать SMM в расчёт
                </span>
              </div>
            </label>

            {/* Остальные опции SMM (неактивны, если SMM отключен) */}
            <div
              className={`space-y-6 ${
                !isSmmNeeded ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-secondary dark:text-white">
                  Посты в неделю (для 2 соцсетей)
                </label>
                <select
                  value={postsPerWeek}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e) => setPostsPerWeek(e.target.value as any)}
                  className="w-full p-4 border border-secondary/20 dark:border-white/20 rounded-2xl bg-white dark:bg-lightgray/10 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-secondary dark:text-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAuNjY2Njg3IDIuNjY2NjdMNS45OTk5NSA4LjAwMDAxTDEwLjY2NjcgMi42NjY2NyIgc3Ryb2tlPSIjMUYyQTJFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-[right_1rem_center] bg-no-repeat"
                  disabled={!isSmmNeeded}
                >
                  <option value="1" className="text-secondary">
                    1 пост/нед — 5 000 ₽
                  </option>
                  <option value="2" className="text-secondary">
                    2 поста/нед — 6 000 ₽
                  </option>
                  <option value="3" className="text-secondary">
                    3 поста/нед — 8 000 ₽
                  </option>
                  <option value="5" className="text-secondary">
                    5 постов/нед — 12 000 ₽
                  </option>
                  <option value="7" className="text-secondary">
                    7 постов/нед (ежедневно) — 18 000 ₽
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-secondary dark:text-white">
                  Количество соцсетей
                </label>
                <select
                  value={socialNetworks}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e) => setSocialNetworks(e.target.value as any)}
                  className="w-full p-4 border border-secondary/20 dark:border-white/20 rounded-2xl bg-white dark:bg-lightgray/10 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition text-secondary dark:text-white appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAuNjY2Njg3IDIuNjY2NjdMNS45OTk5NSA4LjAwMDAxTDEwLjY2NjcgMi42NjY2NyIgc3Ryb2tlPSIjMUYyQTJFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+')] bg-[right_1rem_center] bg-no-repeat"
                  disabled={!isSmmNeeded}
                >
                  <option value="1" className="text-secondary">
                    1 соцсеть — ×0.7
                  </option>
                  <option value="2" className="text-secondary">
                    2 соцсети — ×1.0
                  </option>
                  <option value="3" className="text-secondary">
                    3 соцсети — ×1.3
                  </option>
                </select>
              </div>

              <label className="flex items-start gap-4 p-5 border border-secondary/20 dark:border-white/20 rounded-2xl cursor-pointer hover:border-primary transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
                <input
                  type="checkbox"
                  checked={shootingsNeeded}
                  onChange={(e) => setShootingsNeeded(e.target.checked)}
                  className="mt-1 w-5 h-5 text-primary focus:ring-primary"
                  disabled={!isSmmNeeded}
                />
                <div>
                  <span className="block font-medium text-secondary dark:text-white">
                    Выезд на съёмку
                  </span>
                  <span className="block text-sm text-secondary/70 dark:text-white/70 mt-1">
                    Фото/видео контент для постов
                  </span>
                  <span className="block text-base font-semibold mt-2 text-secondary px-3 py-1 bg-primary dark:text-black rounded-full w-fit">
                    +5 000 ₽/мес
                  </span>
                </div>
              </label>
            </div>

            <div className="mt-6 pt-4 border-t border-secondary/12 dark:border-white/12">
              <div className="flex justify-between items-center text-base font-semibold">
                <span>Промежуточный итог:</span>
                <span className="dark:text-lightgray text-secondary">
                  {calculateStep5Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-5 text-secondary dark:text-white">
              Готово! Ваша конфигурация
            </h3>
            <div className="bg-secondary/5 dark:bg-white/5 rounded-2xl p-6 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Тип сайта:</span>
                  <span className="font-medium">
                    {siteType === "single"
                      ? "Одностраничник (10 000 ₽)"
                      : "Многостраничник (20 000 ₽)"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Сервер не наш:</span>
                  <span className="font-medium">
                    {isNotOurServer ? "+2 000 ₽" : "Не выбрано"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>SEO пакет:</span>
                  <span className="font-medium">
                    {seoOption === "free"
                      ? "Бесплатно"
                      : seoOption === "120"
                      ? "20 000 ₽"
                      : seoOption === "240"
                      ? "25 000 ₽"
                      : "50 000 ₽"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Реклама:</span>
                  <span className="font-medium">
                    {adOption === "free" ? "Бесплатно" : "10 000 ₽"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Ведение блога:</span>
                  <span className="font-medium">
                    {blogChecked ? "5 000 ₽" : "Не выбрано"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>SMM:</span>
                  <span className="font-medium">
                    {!isSmmNeeded
                      ? "Не включено"
                      : (() => {
                          let smmBase = 0;
                          switch (postsPerWeek) {
                            case "1":
                              smmBase = 5000;
                              break;
                            case "2":
                              smmBase = 6000;
                              break;
                            case "3":
                              smmBase = 8000;
                              break;
                            case "5":
                              smmBase = 12000;
                              break;
                            case "7":
                              smmBase = 18000;
                              break;
                          }
                          let multiplier = 1.0;
                          switch (socialNetworks) {
                            case "1":
                              multiplier = 0.7;
                              break;
                            case "3":
                              multiplier = 1.3;
                              break;
                            default:
                              multiplier = 1.0;
                          }
                          return `${Math.round(
                            smmBase * multiplier
                          ).toLocaleString()} ₽`;
                        })()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Выезд на съёмку:</span>
                  <span className="font-medium">
                    {shootingsNeeded && isSmmNeeded ? "5 000 ₽" : "Не выбрано"}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t border-secondary/12 dark:border-white/12 pt-6 mb-6">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Итого в месяц:</span>
                <span className="dark:text-lightgray text-secondary">
                  {totalAmount.toLocaleString()} ₽
                </span>
              </div>
            </div>

            {/* КНОПКА "НАЗАД" — ДОБАВЛЕНА ЗДЕСЬ */}
            <div className="flex gap-4 sm:flex-row flex-col">
              <button
                onClick={prevStep}
                className="px-6 py-3 rounded-full bg-secondary/10 dark:bg-white/10 hover:bg-secondary/20 dark:hover:bg-white/20 cursor-pointer w-full"
              >
                <span className="text-lg font-bold text-lightgray group-hover:text-white transition-all duration-300 ease-in-out">
                  Назад
                </span>
              </button>

              {/* КНОПКА "ЗАКАЗАТЬ" */}
              <Link
                href="https://t.me/Pavelvrl"
                className="group relative flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out py-4"
              >
                <span className="text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
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
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-lightgray dark:bg-darkblack p-3 sm:p-5 xl:p-20 flex flex-col gap-20">
      {/* Заголовок с номером и бейджем, как в других блоках */}
      <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
        <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
          <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">
            03
          </span>
          <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
          <p className="section-bedge py-1.5 px-4 rounded-full">
            Калькулятор IT-Аутсорсинга
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="max-w-3xl">Рассчитайте стоимость</h2>
          <p className="max-w-2xl text-secondary/70 dark:text-white/70">
            Подберите оптимальный пакет услуг, исходя из ваших задач и бюджета.
          </p>
        </div>
      </div>

      {/* Основной контент калькулятора */}
      <div className="bg-white dark:bg-lightgray/10 p-5 sm:p-8 xl:p-10 rounded-2xl shadow-sm max-w-5xl w-full mx-auto">
        {/* Индикатор шагов */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2">
            {[...Array(totalSteps)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i + 1 === currentStep
                    ? "bg-primary"
                    : "bg-secondary/20 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Контент шага */}
        {renderStep()}

        {/* Навигация */}
        {currentStep < 6 && (
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-full ${
                currentStep === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-secondary/10 dark:bg-white/10 hover:bg-secondary/20 dark:hover:bg-white/20 cursor-pointer"
              }`}
            >
              Назад
            </button>

            <button
              onClick={nextStep}
              className="px-6 py-3 bg-primary text-secondary rounded-full hover:bg-secondary hover:text-white transition cursor-pointer"
            >
              {currentStep === 5 ? "Рассчитать" : "Далее"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
