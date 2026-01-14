import { useEffect, useState } from "react";

export default function Header() {
  const [invert, setInvert] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${invert ? "bg-green-900 text-white" : "bg-white text-green-900"}
      shadow`}
    >
      {/* TOP BAR */}
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => scrollTo("home")}
          className="text-xl sm:text-2xl font-bold tracking-tight"
        >
          NxtBite
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["features", "pricing", "preview", "dashboards", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="hover:text-green-400 transition capitalize"
              >
                {item}
              </button>
            )
          )}

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

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`md:hidden px-4 pb-6 pt-2 space-y-4 text-sm font-medium
          ${invert ? "bg-green-900 text-white" : "bg-white text-green-900"}`}
        >
          {["features", "pricing", "preview", "dashboards", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left py-2 border-b border-gray-200/20 capitalize"
              >
                {item}
              </button>
            )
          )}

          <button
            onClick={() => scrollTo("cta")}
            className={`w-full mt-4 px-5 py-3 rounded-full font-semibold
            ${
              invert
                ? "bg-white text-green-900"
                : "bg-green-700 text-white"
            }`}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
