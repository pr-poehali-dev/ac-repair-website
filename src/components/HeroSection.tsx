import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/da19aa27-dc6b-432e-94f8-b7c660578e0d/files/7f073227-5cee-4d4e-bace-46dc2e671b25.jpg";

const SERVICES = [
  { icon: "Wrench", title: "Ремонт кондиционеров", desc: "Диагностика и устранение любых неисправностей. Работаем с любыми марками.", price: "от 1 500 ₽" },
  { icon: "Thermometer", title: "Заправка фреоном", desc: "Восстановление уровня хладагента с проверкой утечек.", price: "от 2 000 ₽" },
  { icon: "Settings", title: "Техническое обслуживание", desc: "Чистка, промывка дренажной системы, проверка всех узлов.", price: "от 1 200 ₽" },
  { icon: "Zap", title: "Монтаж и демонтаж", desc: "Профессиональная установка кондиционеров под ключ.", price: "от 4 000 ₽" },
  { icon: "Shield", title: "Гарантийный ремонт", desc: "Обслуживание по гарантии для всех наших клиентов.", price: "Бесплатно" },
  { icon: "Clock", title: "Экстренный выезд", desc: "Выезд мастера в течение 2 часов в любой день недели.", price: "от 500 ₽" },
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

interface HeroSectionProps {
  scrollTo: (href: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  const [calcType, setCalcType] = useState(0);
  const [calcUrgency, setCalcUrgency] = useState(0);
  const [calcSize, setCalcSize] = useState(0);

  const calcTotal = Math.round(
    CALC_OPTIONS.type[calcType].price *
      CALC_OPTIONS.urgency[calcUrgency].mult *
      CALC_OPTIONS.size[calcSize].mult
  );

  return (
    <>
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
    </>
  );
}
