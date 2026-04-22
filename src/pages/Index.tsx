import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/da19aa27-dc6b-432e-94f8-b7c660578e0d/files/7f073227-5cee-4d4e-bace-46dc2e671b25.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Советы", href: "#tips" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Wrench", title: "Ремонт кондиционеров", desc: "Диагностика и устранение любых неисправностей. Работаем с любыми марками.", price: "от 1 500 ₽" },
  { icon: "Thermometer", title: "Заправка фреоном", desc: "Восстановление уровня хладагента с проверкой утечек.", price: "от 2 000 ₽" },
  { icon: "Settings", title: "Техническое обслуживание", desc: "Чистка, промывка дренажной системы, проверка всех узлов.", price: "от 1 200 ₽" },
  { icon: "Zap", title: "Монтаж и демонтаж", desc: "Профессиональная установка кондиционеров под ключ.", price: "от 4 000 ₽" },
  { icon: "Shield", title: "Гарантийный ремонт", desc: "Обслуживание по гарантии для всех наших клиентов.", price: "Бесплатно" },
  { icon: "Clock", title: "Экстренный выезд", desc: "Выезд мастера в течение 2 часов в любой день недели.", price: "от 500 ₽" },
];

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

const CALC_OPTIONS = {
  type: [
    { label: "Диагностика", price: 500 },
    { label: "Чистка фильтров", price: 800 },
    { label: "Заправка фреоном", price: 2000 },
    { label: "Ремонт компрессора", price: 6000 },
    { label: "Монтаж сплит-системы", price: 4000 },
    { label: "Замена платы управления", price: 3500 },
  ],
  urgency: [
    { label: "Плановый (3–5 дней)", mult: 1 },
    { label: "Срочный (сегодня)", mult: 1.3 },
    { label: "Экстренный (2 часа)", mult: 1.6 },
  ],
  size: [
    { label: "До 25 м²", mult: 1 },
    { label: "25–50 м²", mult: 1.2 },
    { label: "50–100 м²", mult: 1.5 },
    { label: "Более 100 м²", mult: 2 },
  ],
};

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calcType, setCalcType] = useState(0);
  const [calcUrgency, setCalcUrgency] = useState(0);
  const [calcSize, setCalcSize] = useState(0);

  const calcTotal = Math.round(
    CALC_OPTIONS.type[calcType].price *
      CALC_OPTIONS.urgency[calcUrgency].mult *
      CALC_OPTIONS.size[calcSize].mult
  );

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-steel-950 text-steel-100 font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-steel-950/90 backdrop-blur-md border-b border-steel-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-arctic-500 to-arctic-700 flex items-center justify-center animate-pulse-glow">
                <Icon name="Wind" size={18} className="text-white" />
              </div>
              <span className="font-heading font-bold text-white text-lg tracking-wide">
                Аркти<span className="text-arctic-400">кСервис</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-sm text-steel-400 hover:text-arctic-400 transition-colors rounded-md hover:bg-steel-800/50"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <a
              href="tel:+78001234567"
              className="hidden md:flex items-center gap-2 bg-arctic-600 hover:bg-arctic-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
            >
              <Icon name="Phone" size={14} />
              8 800 123-45-67
            </a>

            <button
              className="md:hidden text-steel-300 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-steel-900 border-t border-steel-800 px-4 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-3 py-2 text-steel-300 hover:text-arctic-400 hover:bg-steel-800 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+78001234567"
              className="mt-2 flex items-center justify-center gap-2 bg-arctic-600 text-white px-4 py-3 rounded-lg font-medium"
            >
              <Icon name="Phone" size={14} />
              8 800 123-45-67
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-950 via-steel-950/80 to-steel-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-transparent to-transparent" />

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-arctic-600/20 border border-arctic-500/30 text-arctic-400 px-3 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 rounded-full bg-arctic-400 animate-pulse" />
              Профессиональный сервис
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Ремонт кондиционеров
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-arctic-400 to-arctic-600">
                быстро и надёжно
              </span>
            </h1>

            <p className="text-steel-300 text-lg sm:text-xl mb-8 leading-relaxed font-light">
              Выезд мастера за 2 часа. Гарантия на все виды работ.
              Работаем с любыми марками кондиционеров.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollTo("#contacts")}
                className="flex items-center justify-center gap-2 bg-arctic-600 hover:bg-arctic-500 text-white px-8 py-4 rounded-xl font-heading font-semibold text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]"
              >
                <Icon name="Phone" size={18} />
                Вызвать мастера
              </button>
              <button
                onClick={() => scrollTo("#calculator")}
                className="flex items-center justify-center gap-2 border border-steel-600 hover:border-arctic-500 text-steel-300 hover:text-arctic-400 px-8 py-4 rounded-xl font-heading font-semibold text-base transition-all"
              >
                <Icon name="Calculator" size={18} />
                Рассчитать стоимость
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "10+", label: "лет опыта" },
                { num: "5 000+", label: "клиентов" },
                { num: "2 ч", label: "выезд мастера" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-black text-2xl sm:text-3xl text-arctic-400">{stat.num}</div>
                  <div className="text-steel-400 text-xs sm:text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-steel-500" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Услуги"
            title="Полный спектр работ с кондиционерами"
            desc="От диагностики до монтажа «под ключ» — решаем любые задачи"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="group bg-steel-900/60 border border-steel-800 hover:border-arctic-500/50 rounded-2xl p-6 transition-all duration-300 hover:bg-steel-800/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.08)] cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-arctic-600/20 border border-arctic-500/20 flex items-center justify-center mb-4 group-hover:bg-arctic-600/30 group-hover:border-arctic-500/40 transition-all">
                  <Icon name={s.icon} size={22} className="text-arctic-400" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-arctic-400 font-semibold font-heading text-base">{s.price}</span>
                  <Icon name="ArrowRight" size={16} className="text-steel-600 group-hover:text-arctic-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-24 bg-steel-900/40 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Калькулятор"
            title="Рассчитайте стоимость услуги"
            desc="Выберите параметры — получите предварительную оценку за секунду"
          />

          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-3 space-y-6">
              <CalcGroup
                title="Тип услуги"
                options={CALC_OPTIONS.type.map((o) => o.label)}
                selected={calcType}
                onChange={setCalcType}
              />
              <CalcGroup
                title="Срочность"
                options={CALC_OPTIONS.urgency.map((o) => o.label)}
                selected={calcUrgency}
                onChange={setCalcUrgency}
              />
              <CalcGroup
                title="Площадь помещения"
                options={CALC_OPTIONS.size.map((o) => o.label)}
                selected={calcSize}
                onChange={setCalcSize}
              />
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-arctic-900/40 to-steel-900 border border-arctic-500/30 rounded-2xl p-8 sticky top-24 animate-pulse-glow">
                <div className="text-center mb-8">
                  <p className="text-steel-400 text-sm mb-3 uppercase tracking-widest font-medium">Предварительная стоимость</p>
                  <div className="font-heading font-black text-5xl text-white mb-1">
                    {calcTotal.toLocaleString("ru")} ₽
                  </div>
                  <p className="text-steel-500 text-xs mt-2">Точная цена — после диагностики</p>
                </div>

                <div className="space-y-3 mb-8 text-sm">
                  <div className="flex justify-between text-steel-400">
                    <span>Услуга:</span>
                    <span className="text-white">{CALC_OPTIONS.type[calcType].label}</span>
                  </div>
                  <div className="flex justify-between text-steel-400">
                    <span>Срочность:</span>
                    <span className="text-white">{CALC_OPTIONS.urgency[calcUrgency].label}</span>
                  </div>
                  <div className="flex justify-between text-steel-400">
                    <span>Площадь:</span>
                    <span className="text-white">{CALC_OPTIONS.size[calcSize].label}</span>
                  </div>
                </div>

                <button
                  onClick={() => scrollTo("#contacts")}
                  className="w-full bg-arctic-600 hover:bg-arctic-500 text-white py-4 rounded-xl font-heading font-semibold text-base transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                >
                  Заказать эту услугу
                </button>

                <p className="text-center text-steel-500 text-xs mt-3">
                  Ответим в течение 10 минут
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Контакты"
            title="Свяжитесь с нами"
            desc="Ответим в течение 10 минут и организуем выезд мастера"
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "8 800 123-45-67", sub: "Звонок бесплатный" },
                { icon: "MessageCircle", label: "WhatsApp", value: "+7 (900) 123-45-67", sub: "Пишите в любое время" },
                { icon: "MapPin", label: "Адрес офиса", value: "ул. Холодная, 15", sub: "Пн–Пт 9:00–20:00" },
                { icon: "Mail", label: "Email", value: "info@arctic-service.ru", sub: "Отвечаем в течение часа" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 bg-steel-900/60 border border-steel-800 rounded-xl p-5 hover:border-arctic-500/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-arctic-600/20 border border-arctic-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={20} className="text-arctic-400" />
                  </div>
                  <div>
                    <p className="text-steel-400 text-xs mb-0.5">{c.label}</p>
                    <p className="text-white font-heading font-semibold text-base">{c.value}</p>
                    <p className="text-steel-500 text-xs">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-steel-900/60 border border-steel-800 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-white text-xl mb-6">Оставьте заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-steel-400 text-sm mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Алексей"
                    className="w-full bg-steel-800/60 border border-steel-700 hover:border-arctic-500/40 focus:border-arctic-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-steel-500 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 text-sm mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-steel-800/60 border border-steel-700 hover:border-arctic-500/40 focus:border-arctic-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-steel-500 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-steel-400 text-sm mb-2">Описание проблемы</label>
                  <textarea
                    rows={3}
                    placeholder="Кондиционер не охлаждает, слышен шум..."
                    className="w-full bg-steel-800/60 border border-steel-700 hover:border-arctic-500/40 focus:border-arctic-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-steel-500 text-sm transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-arctic-600 hover:bg-arctic-500 text-white py-4 rounded-xl font-heading font-bold text-base transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-[1.02]">
                  Отправить заявку
                </button>
                <p className="text-center text-steel-500 text-xs">
                  Перезвоним в течение 10 минут
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-steel-950 border-t border-steel-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-arctic-500 to-arctic-700 flex items-center justify-center">
                <Icon name="Wind" size={14} className="text-white" />
              </div>
              <span className="font-heading font-bold text-white">
                Аркти<span className="text-arctic-400">кСервис</span>
              </span>
            </div>
            <p className="text-steel-500 text-sm">© 2025 АрктикСервис. Ремонт кондиционеров.</p>
            <div className="flex items-center gap-1 text-steel-500 text-sm">
              <Icon name="Phone" size={14} className="text-arctic-500" />
              <a href="tel:+78001234567" className="hover:text-arctic-400 transition-colors">8 800 123-45-67</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

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

function CalcGroup({
  title,
  options,
  selected,
  onChange,
}: {
  title: string;
  options: string[];
  selected: number;
  onChange: (i: number) => void;
}) {
  return (
    <div>
      <p className="text-steel-300 text-sm font-medium mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`px-4 py-2 rounded-lg text-sm border transition-all ${
              selected === i
                ? "bg-arctic-600 border-arctic-500 text-white shadow-[0_0_12px_rgba(14,165,233,0.3)]"
                : "bg-steel-900/60 border-steel-700 text-steel-400 hover:border-arctic-500/40 hover:text-steel-200"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}