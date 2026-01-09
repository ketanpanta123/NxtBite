import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductPreview from "./components/ProductPreview";
import Dashboards from "./components/Dashboards";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import HeroScroll from "./components/HeroScroll";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Features />
      <ProductPreview />
      <HeroScroll />
      <Dashboards />
      <CTA />
      <Contact />
    </div>
  );
}
