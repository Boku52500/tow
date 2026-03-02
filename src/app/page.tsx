"use client";

import { useEffect, useState, useRef } from "react";
import {
  Phone,
  MapPin,
  Truck,
  Wrench,
  Battery,
  CircleDot,
  Route,
  Clock,
  Zap,
  DollarSign,
  ShieldCheck,
  UserCheck,
  Star,
  Send,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

const PHONE = "577 07 38 89";
const PHONE_LINK = "tel:+995577073889";
const WHATSAPP_LINK = "https://wa.me/995577073889";
const VIBER_LINK = "viber://chat?number=+995577073889";

/* ─── Scroll Animation Hook ─── */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

/* ─── Header ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#services", label: "მომსახურება" },
    { href: "#why-us", label: "რატომ ჩვენ" },
    { href: "#about", label: "ჩვენ შესახებ" },
    { href: "#testimonials", label: "შეფასებები" },
    { href: "#contact", label: "კონტაქტი" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "header-scrolled py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Truck
            className={`w-8 h-8 ${scrolled ? "text-[#f5b800]" : "text-[#f5b800]"}`}
          />
          <span
            className={`text-xl font-bold ${
              scrolled ? "text-[#1a1a2e]" : "text-white"
            }`}
          >
            ევაკუატორი
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#f5b800] ${
                scrolled ? "text-[#1a1a2e]" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={PHONE_LINK}
            className="bg-[#f5b800] text-[#1a1a2e] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#e0a800] transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 ${scrolled ? "text-[#1a1a2e]" : "text-white"}`}
          aria-label="მენიუ"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t mt-2">
          <nav className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#1a1a2e] font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PHONE_LINK}
              className="bg-[#f5b800] text-[#1a1a2e] px-5 py-3 rounded-full font-bold text-center hover:bg-[#e0a800] transition-colors flex items-center justify-center gap-2 mt-2"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1562618817-3178157b89cc?auto=format&fit=crop&w=1920&q=80")',
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32">
        <div className="animate-on-scroll visible">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-[#f5b800]" />
            <span className="text-white text-sm font-medium">
              24/7 მომსახურება მთელ საქართველოში
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            სწრაფი და იაფი
            <span className="block text-[#f5b800]">ევაკუატორის მომსახურება</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            პროფესიონალური დახმარება ნებისმიერ დროს, ნებისმიერ ადგილას.
            თქვენი ავტომობილის უსაფრთხოება ჩვენი პრიორიტეტია.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={PHONE_LINK}
              className="group bg-[#f5b800] hover:bg-[#e0a800] text-[#1a1a2e] px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center gap-3 shadow-lg shadow-[#f5b800]/30"
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              დაგვირეკეთ ახლავე
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center gap-3 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mt-8 text-2xl font-bold transition-colors"
          >
            <Phone className="w-6 h-6 text-[#f5b800]" />
            {PHONE}
          </a>
        </div>
      </div>

    </section>
  );
}

/* ─── Services Section ─── */
function Services() {
  const services = [
    {
      icon: Truck,
      title: "ევაკუატორი",
      desc: "ნებისმიერი ტიპის ავტომობილის გადაზიდვა თანამედროვე აღჭურვილობით.",
      image: "/evakuatori.avif",
    },
    {
      icon: Truck,
      title: "ობობა ევაკუატორი",
      desc: "სპეციალური ობობა ევაკუატორით ავტომობილის უსაფრთხო გადაზიდვა ნებისმიერი ადგილიდან.",
      image: "/oboba.jpg",
    },
    {
      icon: Wrench,
      title: "ავარიისას დახმარება გზაზე",
      desc: "სწრაფი მისვლა ავარიის ადგილზე და პროფესიონალური დახმარება.",
      image: "/accident.jpg",
    },
    {
      icon: Battery,
      title: "აკუმულატორის დატენვა",
      desc: "აკუმულატორის დატენვა ადგილზე, სწრაფად და უსაფრთხოდ.",
      image: "/battery.jpg",
    },
    {
      icon: CircleDot,
      title: "საბურავის შეცვლა",
      desc: "საბურავის სწრაფი შეცვლა გზაზე, პროფესიონალური ხელსაწყოებით.",
      image: "/tire.png",
    },

  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#f5b800] font-bold text-sm uppercase tracking-widest">
            რას გთავაზობთ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a2e] mt-3">
            ჩვენი მომსახურება
          </h2>
          <div className="w-20 h-1.5 bg-[#f5b800] mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((s, i) => (
            <div
              key={i}
              className={`animate-on-scroll service-card bg-[#f8f9fa] rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${s.image ? '' : 'p-8'}`}
            >
              {s.image ? (
                <>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed">{s.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 bg-[#f5b800]/10 rounded-2xl flex items-center justify-center mb-6">
                    <s.icon className="w-8 h-8 text-[#f5b800]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">{s.desc}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyUs() {
  const reasons = [
    {
      icon: Clock,
      title: "24/7 მომსახურება",
      desc: "ვმუშაობთ 24 საათი, კვირაში 7 დღე.",
    },
    {
      icon: Zap,
      title: "სწრაფი რეაგირება",
      desc: "თქვენთან მოვალთ მინიმალურ დროში.",
    },
    {
      icon: DollarSign,
      title: "ხელმისაწვდომი ფასები",
      desc: "საუკეთესო ფასები ბაზარზე, დამატებითი ხარჯების გარეშე.",
    },
    {
      icon: UserCheck,
      title: "პროფესიონალი მძღოლები",
      desc: "გამოცდილი და სერტიფიცირებული სპეციალისტები.",
    },
    {
      icon: ShieldCheck,
      title: "დაზღვეული მომსახურება",
      desc: "სრული პასუხისმგებლობა თქვენი ავტომობილის უსაფრთხოებაზე.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#f5b800] font-bold text-sm uppercase tracking-widest">
            ჩვენი უპირატესობები
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3">
            რატომ ჩვენ?
          </h2>
          <div className="w-20 h-1.5 bg-[#f5b800] mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-[#f5b800] rounded-xl flex items-center justify-center mb-5">
                <r.icon className="w-7 h-7 text-[#1a1a2e]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
              <p className="text-gray-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ─── */
function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center animate-on-scroll">
          <span className="text-[#f5b800] font-bold text-sm uppercase tracking-widest">
            კომპანიის შესახებ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a2e] mt-3 mb-8">
            ჩვენ შესახებ
          </h2>
          <div className="w-20 h-1.5 bg-[#f5b800] mx-auto mb-10 rounded-full" />
        </div>

        <div className="animate-on-scroll bg-[#f8f9fa] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <p className="text-lg md:text-xl text-[#4a4a5a] leading-relaxed text-center">
            ჩვენი კომპანია მრავალწლიანი გამოცდილებით უზრუნველყოფს ევაკუატორის
            პროფესიონალურ მომსახურებას თბილისში და მის შემოგარენ ტერიტორიაზე.
            ჩვენი გუნდი შედგება გამოცდილი და კვალიფიციური სპეციალისტებისგან,
            რომლებიც აღჭურვილნი არიან თანამედროვე ტექნიკით. ჩვენ ვზრუნავთ თქვენი
            ავტომობილის უსაფრთხოებაზე ისევე, როგორც საკუთარზე. სწრაფი რეაგირება,
            სანდოობა და პროფესიონალიზმი — ეს არის ჩვენი მთავარი პრინციპები.
            ნდობით მოგვმართეთ ნებისმიერ დროს!
          </p>
          <div className="flex justify-center mt-8">
            <a
              href={PHONE_LINK}
              className="bg-[#f5b800] hover:bg-[#e0a800] text-[#1a1a2e] px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto text-center"
            >
              <Phone className="w-5 h-5 shrink-0" />
              <span>დაგვირეკეთ: {PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function Testimonials() {
  const testimonials = [
    {
      name: "გიორგი მელაძე",
      text: "ღამის 3 საათზე გამიფუჭდა მანქანა ავტობანზე. 20 წუთში ადგილზე იყვნენ! პროფესიონალური მომსახურება და ძალიან კორექტული მძღოლი. აუცილებლად გირჩევთ!",
      rating: 5,
    },
    {
      name: "ნინო ჩხაიძე",
      text: "აკუმულატორი დამიჯდა სამუშაო ადგილის წინ. 15 წუთში მოვიდნენ და სწრაფად მოაგვარეს. ფასიც ძალიან მისაღები იყო. მადლობა დიდი!",
      rating: 5,
    },
    {
      name: "დავით კვარაცხელია",
      text: "მანქანა ბათუმიდან თბილისში გადმომიყვანეს, ყველაფერმა იდეალურად ჩაიარა. მანქანას ნაკაწრიც კი არ ჰქონდა. სანდო სერვისია, ნამდვილად!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#f5b800] font-bold text-sm uppercase tracking-widest">
            რას ამბობენ ჩვენზე
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a2e] mt-3">
            კლიენტების შეფასებები
          </h2>
          <div className="w-20 h-1.5 bg-[#f5b800] mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-[#f5b800] fill-[#f5b800]"
                  />
                ))}
              </div>
              <p className="text-[#4a4a5a] leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1a1a2e] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <span className="font-bold text-[#1a1a2e]">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─── */
function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    formRef.current?.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-[#f5b800] font-bold text-sm uppercase tracking-widest">
            დაგვიკავშირდით
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a2e] mt-3">
            დაგვიკავშირდით
          </h2>
          <div className="w-20 h-1.5 bg-[#f5b800] mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#f5b800]/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#f5b800]" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a1a2e] mb-1">ტელეფონი</h4>
                <a
                  href={PHONE_LINK}
                  className="text-lg text-[#4a4a5a] hover:text-[#f5b800] transition-colors font-medium"
                >
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              

            </div>

            {/* WhatsApp & Viber */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-md"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={VIBER_LINK}
                className="flex items-center justify-center gap-3 bg-[#7360F2] hover:bg-[#6050d0] text-white px-6 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-md"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.538 6.852.46 10.14c-.078 3.288-.178 9.452 5.789 11.082l.007.001-.004 2.535s-.037.975.606 1.174c.777.24 1.236-.5 1.98-1.305.407-.44.97-1.086 1.395-1.58 3.85.325 6.812-.415 7.15-.528.78-.26 5.186-.817 5.9-6.672.738-6.033-.358-9.838-2.364-11.568l-.004-.003C19.396.917 15.462.024 11.4 0z" />
                </svg>
                Viber
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5"
            >
              <div>
                <label className="block text-sm font-bold text-[#1a1a2e] mb-2">
                  სახელი
                </label>
                <input
                  type="text"
                  required
                  placeholder="თქვენი სახელი"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-[#f5b800] focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1a1a2e] mb-2">
                  ტელეფონი
                </label>
                <input
                  type="tel"
                  required
                  placeholder="თქვენი ტელეფონის ნომერი"
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-[#f5b800] focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1a1a2e] mb-2">
                  შეტყობინება
                </label>
                <textarea
                  rows={4}
                  placeholder="თქვენი შეტყობინება..."
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-[#f5b800] focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#f5b800] hover:bg-[#e0a800] text-[#1a1a2e] py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                გაგზავნა
              </button>
              {submitted && (
                <p className="text-center text-green-600 font-medium animate-pulse">
                  ✓ შეტყობინება გაგზავნილია! მალე დაგიკავშირდებით.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Truck className="w-7 h-7 text-[#f5b800]" />
            <span className="text-xl font-bold">ევაკუატორი</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <Phone className="w-4 h-4 text-[#f5b800]" />
            <a href={PHONE_LINK} className="hover:text-white transition-colors font-medium">
              {PHONE}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href={VIBER_LINK}
              className="w-10 h-10 bg-[#7360F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Viber"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.538 6.852.46 10.14c-.078 3.288-.178 9.452 5.789 11.082l.007.001-.004 2.535s-.037.975.606 1.174c.777.24 1.236-.5 1.98-1.305.407-.44.97-1.086 1.395-1.58 3.85.325 6.812-.415 7.15-.528.78-.26 5.186-.817 5.9-6.672.738-6.033-.358-9.838-2.364-11.568l-.004-.003C19.396.917 15.462.024 11.4 0z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ევაკუატორი. ყველა უფლება დაცულია.
        </div>
      </div>
    </footer>
  );
}

/* ─── Floating Buttons ─── */
function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Viber */}
      <a
        href={VIBER_LINK}
        className="floating-btn relative w-14 h-14 bg-[#7360F2] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Viber"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.538 6.852.46 10.14c-.078 3.288-.178 9.452 5.789 11.082l.007.001-.004 2.535s-.037.975.606 1.174c.777.24 1.236-.5 1.98-1.305.407-.44.97-1.086 1.395-1.58 3.85.325 6.812-.415 7.15-.528.78-.26 5.186-.817 5.9-6.672.738-6.033-.358-9.838-2.364-11.568l-.004-.003C19.396.917 15.462.024 11.4 0z" />
        </svg>
      </a>

      {/* Phone - mobile only */}
      <a
        href={PHONE_LINK}
        className="floating-btn relative w-14 h-14 bg-[#f5b800] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:hidden"
        aria-label="დარეკვა"
      >
        <Phone className="w-7 h-7 text-[#1a1a2e]" />
      </a>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
