import { useEffect, useState } from "react";

export default function Header() {
  const [invert, setInvert] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // INVERT COLOR FOR CONTRAST
            setInvert(entry.target.dataset.theme === "light");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        invert
          ? "bg-green-900 text-white shadow-lg"
          : "bg-white text-green-900 shadow-md"
      }`}
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <button
          onClick={() => scrollTo("home")}
          className="text-2xl font-bold tracking-tight"
        >
          NxtBite
        </button>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollTo("features")} className="hover:text-green-400 transition">
            Features
          </button>
          <button onClick={() => scrollTo("pricing")} className="hover:text-green-400 transition">
            Pricing
          </button>
          <button onClick={() => scrollTo("preview")} className="hover:text-green-400 transition">
            Product
          </button>
          <button onClick={() => scrollTo("scroll")} className="hover:text-green-400 transition">
            Flow
          </button>
          <button onClick={() => scrollTo("dashboards")} className="hover:text-green-400 transition">
            Dashboards
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-green-400 transition">
            Contact
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollTo("cta")}
            className={`ml-2 px-5 py-2 rounded-full transition
            ${
              invert
                ? "bg-white text-green-900"
                : "bg-green-700 text-white hover:bg-green-800"
            }`}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}
