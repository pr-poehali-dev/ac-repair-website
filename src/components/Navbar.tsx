import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Советы", href: "#tips" },
  { label: "Контакты", href: "#contacts" },
];

interface NavbarProps {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  scrollTo: (href: string) => void;
}

export default function Navbar({ mobileOpen, setMobileOpen, scrollTo }: NavbarProps) {
  return (
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
  );
}
