import Icon from "@/components/ui/icon";

const REVIEWS = [
  { name: "Алексей М.", rating: 5, text: "Мастер приехал через 1.5 часа после звонка. Всё починили быстро и профессионально. Кондиционер работает как новый!", date: "15 марта 2025" },
  { name: "Елена К.", rating: 5, text: "Отличный сервис! Сделали диагностику бесплатно, объяснили проблему понятным языком. Цена оказалась ниже, чем я ожидала.", date: "2 апреля 2025" },
  { name: "Сергей П.", rating: 5, text: "Обслуживаю технику у них уже 3 года. Всегда чётко, качественно и в срок. Рекомендую без раздумий.", date: "18 апреля 2025" },
];

const PORTFOLIO = [
  { title: "Офис на Тверской", type: "Монтаж 4 сплит-систем", tag: "Коммерческий" },
  { title: "ЖК «Северный»", type: "Обслуживание 12 квартир", tag: "Жилой" },
  { title: "Ресторан «Берёзка»", type: "Ремонт чиллера", tag: "Промышленный" },
  { title: "Склад логистики", type: "Установка 8 кассетных систем", tag: "Промышленный" },
  { title: "Медцентр «Здоровье»", type: "Замена компрессора", tag: "Коммерческий" },
  { title: "ТЦ «Лазурный»", type: "Сезонное ТО 20 единиц", tag: "Торговый" },
];

const TIPS = [
  { icon: "Droplets", title: "Чистите фильтры каждые 2 недели", desc: "Загрязнённые фильтры снижают эффективность на 30% и увеличивают расход электроэнергии." },
  { icon: "Thermometer", title: "Оптимальная температура — +22..24°C", desc: "Разница с уличной температурой более 8°C нагружает компрессор и сокращает срок службы." },
  { icon: "Calendar", title: "ТО дважды в год", desc: "Профилактическое обслуживание весной и осенью продлевает срок службы на 5–7 лет." },
  { icon: "Wind", title: "Не перекрывайте решётки", desc: "Свободная циркуляция воздуха снижает нагрузку на систему и улучшает охлаждение." },
];

function SectionHeader({ tag, title, desc }: { tag: string; title: string; desc: string }) {
  return (
    <div className="text-center mb-14">
      <div className="inline-flex items-center gap-2 bg-arctic-600/20 border border-arctic-500/30 text-arctic-400 px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-5">
        {tag}
      </div>
      <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-4">{title}</h2>
      <p className="text-steel-400 text-base max-w-xl mx-auto">{desc}</p>
    </div>
  );
}

export default function ContentSections() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-arctic-600/20 border border-arctic-500/30 text-arctic-400 px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
                О компании
              </div>
              <h2 className="font-heading font-black text-4xl text-white mb-6 leading-tight">
                10 лет надёжной работы с климатической техникой
              </h2>
              <p className="text-steel-300 text-base leading-relaxed mb-6">
                АрктикСервис — команда сертифицированных специалистов по обслуживанию кондиционеров и климатических систем. Работаем с 2014 года, обслужили более 5 000 клиентов по всему городу.
              </p>
              <p className="text-steel-400 text-base leading-relaxed mb-8">
                Используем только оригинальные запчасти и сертифицированный хладагент. Даём гарантию на все виды работ до 12 месяцев.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", text: "Сертифицированные специалисты" },
                  { icon: "Shield", text: "Гарантия до 12 месяцев" },
                  { icon: "Clock", text: "Работаем 7 дней в неделю" },
                  { icon: "MapPin", text: "Выезд по всему городу" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-steel-900/60 border border-steel-800 rounded-xl p-4">
                    <div className="w-8 h-8 rounded-lg bg-arctic-600/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={16} className="text-arctic-400" />
                    </div>
                    <span className="text-steel-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "5 000+", label: "Клиентов обслужено" },
                  { num: "98%", label: "Положительных отзывов" },
                  { num: "10+", label: "Лет на рынке" },
                  { num: "30 мин", label: "Среднее время диагностики" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-gradient-to-br from-steel-800/80 to-steel-900/80 border border-steel-700/50 hover:border-arctic-500/30 rounded-2xl p-6 text-center transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.06)]"
                  >
                    <div className="font-heading font-black text-3xl text-arctic-400 mb-2">{stat.num}</div>
                    <div className="text-steel-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-steel-900/40 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Портфолио"
            title="Наши выполненные работы"
            desc="Более 5 000 успешно реализованных проектов за 10 лет"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map((item, i) => (
              <div
                key={i}
                className="group relative bg-steel-900 border border-steel-800 hover:border-arctic-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.08)]"
              >
                <div className="h-36 bg-gradient-to-br from-arctic-900/40 via-steel-800 to-steel-900 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Snowflake" size={48} className="text-arctic-700/40 group-hover:text-arctic-600/50 transition-colors" />
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block bg-arctic-600/20 text-arctic-400 text-xs px-2.5 py-1 rounded-full mb-3 border border-arctic-500/20">
                    {item.tag}
                  </span>
                  <h3 className="font-heading font-bold text-white text-base mb-1">{item.title}</h3>
                  <p className="text-steel-400 text-sm">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Отзывы"
            title="Что говорят наши клиенты"
            desc="Более 4 800 пятизвёздочных отзывов на разных платформах"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="bg-steel-900/60 border border-steel-800 hover:border-arctic-500/30 rounded-2xl p-6 transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.06)]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, si) => (
                    <Icon key={si} name="Star" size={16} className="text-arctic-400 fill-arctic-400" />
                  ))}
                </div>
                <p className="text-steel-300 text-sm leading-relaxed mb-6 italic">«{r.text}»</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-arctic-600 to-arctic-800 flex items-center justify-center">
                      <span className="text-white text-sm font-heading font-bold">{r.name[0]}</span>
                    </div>
                    <span className="font-heading font-semibold text-white text-sm">{r.name}</span>
                  </div>
                  <span className="text-steel-500 text-xs">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section id="tips" className="py-24 bg-steel-900/40 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Советы"
            title="Советы по уходу и обслуживанию"
            desc="Простые правила, которые продлят жизнь вашему кондиционеру"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIPS.map((tip, i) => (
              <div
                key={i}
                className="group bg-steel-900/60 border border-steel-800 hover:border-arctic-500/30 rounded-2xl p-6 transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.06)]"
              >
                <div className="w-12 h-12 rounded-xl bg-arctic-600/20 border border-arctic-500/20 flex items-center justify-center mb-4 group-hover:bg-arctic-600/30 transition-all">
                  <Icon name={tip.icon} size={22} className="text-arctic-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-3 leading-snug">{tip.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
