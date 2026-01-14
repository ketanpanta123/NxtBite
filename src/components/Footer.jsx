export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#06281e] text-white px-8 pt-16 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold text-green-400">
            NxtBite
          </h2>
          <p className="mt-4 text-sm text-green-100 max-w-sm">
            Smart dining made seamless. Digital menus, shared ordering,
            and faster experiences — all in one place.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-green-100">
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
                Officer,  <br />
                Victoria,3809
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Explore
          </h3>
          <ul className="space-y-3 text-sm text-green-100">
            <li
              onClick={() => scrollToSection("features")}
              className="hover:text-green-400 cursor-pointer"
            >
              Features
            </li>
            <li
              onClick={() => scrollToSection("pricing")}
              className="hover:text-green-400 cursor-pointer"
            >
              Pricing
            </li>
            <li
              onClick={() => scrollToSection("preview")}
              className="hover:text-green-400 cursor-pointer"
            >
              How It Works
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-green-400 cursor-pointer"
            >
              Contact Us
            </li>
            <li
              onClick={() => scrollToSection("scroll")}
              className="hover:text-green-400 cursor-pointer"
            >
              About NxtBite
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-6 border-t border-green-900 pt-3 text-center text-sm text-green-200">
        {new Date().getFullYear()} © NxtBite. All rights reserved.
      </div>
    </footer>
  );
}
