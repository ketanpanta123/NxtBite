import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PricingSection from "./components/PricingSection";
import ProductPreview from "./components/ProductPreview";
import HeroScroll from "./components/HeroScroll";
import Dashboards from "./components/Dashboards";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="home" className="font-sans text-gray-900">
      <Header />

      {/* HERO */}
      <section data-theme="light">
        <Hero />
      </section>

      {/* FEATURES */}
      <section id="features" data-theme="light">
        <Features />
      </section>

      {/* PRICING */}
      <section id="pricing" data-theme="light">
        <PricingSection />
      </section>

      {/* PRODUCT PREVIEW */}
      <section id="preview" data-theme="light">
        <ProductPreview />
      </section>

      {/* FLOW / SCROLL */}
      <section id="scroll" data-theme="light">
        <HeroScroll />
      </section>

      {/* DASHBOARDS */}
      <section id="dashboards" data-theme="light">
        <Dashboards />
      </section>

      {/* CTA (DARK SECTION → HEADER CHANGES COLOR HERE) */}
      <section id="cta" data-theme="dark">
        <CTA />
      </section>

      {/* CONTACT */}
      <section id="contact" data-theme="light">
        <Contact />
      </section>

      {/* FOOTER (DARK BACKGROUND) */}
      <section id="footer" data-theme="dark">
        <Footer />
      </section>
    </div>
  );
}
