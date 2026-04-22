import Icon from "@/components/ui/icon";

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

export default function ContactsSection() {
  return (
    <>
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
    </>
  );
}
