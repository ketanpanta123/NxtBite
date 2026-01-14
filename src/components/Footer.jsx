export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#06281e] text-white px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400">
            NxtBite
          </h2>
          <p className="mt-3 sm:mt-4 text-sm text-green-100 max-w-sm">
            Smart dining made seamless. Digital menus, shared ordering,
            and faster experiences — all in one place.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Contact
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm text-green-100">
            <li className="flex items-start gap-3">
              📞 <span>+61 452547143</span>
            </li>
            <li className="flex items-start gap-3">
              ✉️ <span>aasrith.au@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              📍
              <span>
                20 Jasmine Grove,<br />
                Officer,<br />
                Victoria, 3809
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Explore
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-sm text-green-100">
            {[
              ["features", "Features"],
              ["pricing", "Pricing"],
              ["preview", "How It Works"],
              ["contact", "Contact Us"],
              ["scroll", "About NxtBite"],
            ].map(([id, label]) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-green-400 cursor-pointer transition"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-6 sm:mt-8 border-t border-green-900 pt-3 text-center text-xs sm:text-sm text-green-200">
        {new Date().getFullYear()} © NxtBite. All rights reserved.
      </div>
    </footer>
  );
}
