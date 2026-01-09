import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
];

export default function HeroCarousel() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [styles, setStyles] = useState([]);

  // 🔒 INITIAL POSITION (CENTER IMAGE INDEX 4)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cardWidth = 340;
    const overlap = 120;
    const effectiveWidth = cardWidth - overlap;
    const initialIndex = 4;

    el.scrollLeft =
      initialIndex * effectiveWidth -
      el.offsetWidth / 2 +
      cardWidth / 2;
  }, []);

  // 🎯 SCROLL-DRIVEN TRANSFORMS (THIS IS THE KEY)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const center = el.scrollLeft + el.offsetWidth / 2;

      const nextStyles = cardRefs.current.map((card) => {
        if (!card) return {};

        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2;

        const distance = cardCenter - center;

        const rotate = Math.max(
          Math.min(-distance / 25, 15),
          -15
        );

        const scale = Math.max(
          1 - Math.abs(distance) / 1100,
          0.75
        );

        const isCentered = Math.abs(distance) < 40;

        return {
          rotate,
          scale,
          zIndex: isCentered ? 100 : 50,
          boxShadow: isCentered
            ? "0 35px 90px rgba(0,0,0,0.45)"
            : "0 15px 40px rgba(0,0,0,0.25)",
        };
      });

      setStyles(nextStyles);
    };

    update(); // initial
    el.addEventListener("scroll", update);
    return () => el.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f3d2e] to-[#06281e] text-white overflow-hidden">
      
      {/* HERO TEXT */}
      <div className="text-center pt-32">
        <h1 className="text-6xl font-bold">
          Smart dining, <span className="text-green-400">done right</span>
        </h1>
        <p className="mt-6 text-green-100">
          One digital menu. One shared order. Zero friction.
        </p>
      </div>

      {/* CAROUSEL */}
      <div
        ref={containerRef}
        className="mt-24 flex overflow-x-scroll scrollbar-hide"
      >
        <div className="w-[40vw] shrink-0" />

        {images.map((img, i) => (
          <motion.div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            animate={styles[i]}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{
              marginLeft: i === 0 ? 0 : "-120px",
            }}
            className="min-w-[340px] h-[420px] rounded-3xl overflow-hidden bg-white"
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt=""
            />
          </motion.div>
        ))}

        <div className="w-[40vw] shrink-0" />
      </div>
    </section>
  );
}
