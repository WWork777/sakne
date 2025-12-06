"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

function PaymentBanner() {
  return (
    <div className="bg-lightgray dark:bg-secondary py-20 md:py-40 relative">
      <div className="container">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
              <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">
                02
              </span>
              <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
              <p className="section-bedge py-1.5 px-4 rounded-full">Оплата</p>
            </div>
            <div className="flex flex-col gap-11">
              <div className="flex flex-col gap-5">
                <h2 className="max-w-3xl">Гибкие способы оплаты</h2>
                <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                  Выберите самый удобный для вас вариант оплаты. Мы сделали
                  процесс максимально простым и прозрачным.
                </p>
              </div>

              {/* Способы оплаты */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
                {/* Кредитная карта */}
                <div className="group bg-white dark:bg-lightgray/10 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon="mdi:credit-card-fast"
                        width="28"
                        height="28"
                        className="text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-secondary dark:text-white text-lg">
                        Кредитная карта
                      </span>
                      <p className="text-sm text-secondary/60 dark:text-white/60">
                        Безопасная оплата картой любого банка
                      </p>
                    </div>
                    <div className="flex gap-1 opacity-70 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Доли */}
                <div className="group bg-white dark:bg-lightgray/10 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon="tabler:chart-pie"
                        width="28"
                        height="28"
                        className="text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-secondary dark:text-white text-lg">
                        Оплата долями
                      </span>
                      <p className="text-sm text-secondary/60 dark:text-white/60">
                        Разделите платеж на несколько частей
                      </p>
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium mt-2">
                      Без переплат
                    </div>
                  </div>
                </div>

                {/* Рассрочка без банка */}
                <div className="group bg-white dark:bg-lightgray/10 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon="mdi:calendar-sync"
                        width="28"
                        height="28"
                        className="text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold text-secondary dark:text-white text-lg">
                        Рассрочка
                      </span>
                      <p className="text-sm text-secondary/60 dark:text-white/60">
                        Гибкий график платежей без участия банка
                      </p>
                    </div>
                    <div className="text-xs text-orange-600 dark:text-orange-400 font-medium mt-2">
                      Без банковских комиссий
                    </div>
                  </div>
                </div>
              </div>

              {/* Дополнительная информация */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-secondary/12 dark:border-white/12">
                <div className="flex items-center gap-2 text-sm text-secondary/70 dark:text-white/70">
                  <Icon
                    icon="mdi:shield-check"
                    width="18"
                    height="18"
                    className="text-green-500"
                  />
                  <span>Безопасные платежи</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary/70 dark:text-white/70">
                  <Icon
                    icon="mdi:lock-outline"
                    width="18"
                    height="18"
                    className="text-blue-500"
                  />
                  <span>Защита данных</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary/70 dark:text-white/70">
                  <Icon
                    icon="mdi:clock-outline"
                    width="18"
                    height="18"
                    className="text-purple-500"
                  />
                  <span>Мгновенное подтверждение</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentBanner;
