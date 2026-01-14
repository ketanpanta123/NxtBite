import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
  "/img1.PNG",
  "/img2.JPG",
  "/img3.PNG",
  "/img4.JPG",
  "/img5.PNG",
  "/img6.PNG",
];

export default function HeroCarousel() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [styles, setStyles] = useState([]);

  // 🎯 INITIAL CENTERING
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cardWidth = 340;
    const overlap = 80;
    const effectiveWidth = cardWidth - overlap;
    const initialIndex = 4;

    el.scrollLeft =
      initialIndex * effectiveWidth -
      el.offsetWidth / 2 +
      cardWidth / 2;
  }, []);

  // 🧠 SMOOTH SCROLL TRANSFORMS
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
        const abs = Math.abs(distance);

        const rotate = Math.max(
          Math.min(-distance / 60, 8),
          -8
        );

        const scale = Math.max(1 - abs / 1600, 0.85);
        const isCentered = abs < 90;

        return {
          rotate,
          scale,
          zIndex: isCentered ? 20 : 10,
          boxShadow: isCentered
            ? "0 40px 80px rgba(0,0,0,0.35)"
            : "0 18px 35px rgba(0,0,0,0.2)",
        };
      });

      setStyles(nextStyles);
    };

    update();
    el.addEventListener("scroll", update);
    return () => el.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f3d2e] to-[#06281e] text-white overflow-hidden">
      {/* HERO TEXT */}
      <div className="text-center pt-32">
        <h1 className="text-6xl font-bold tracking-tight">
          Smart dining{" "}
          <span className="text-green-400">done right</span>
        </h1>
        <p className="mt-6 text-lg text-green-100 max-w-xl mx-auto">
          Digital menu. One shared order. Zero friction.
        </p>
      </div>

      {/* CAROUSEL */}
      <div
        ref={containerRef}
        className="mt-28 flex overflow-x-scroll scrollbar-hide"
        style={{ perspective: "1200px" }}
      >
        <div className="w-[45vw] shrink-0" />

        {images.map((img, i) => (
          <motion.div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            animate={styles[i]}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 25,
              mass: 0.8,
            }}
            style={{ marginLeft: i === 0 ? 0 : "-80px" }}
            className="
              min-w-[340px]
              h-[480px]
              rounded-3xl
              overflow-hidden
              bg-white
              flex
              items-center
              justify-center
            "
          >
            {/* ✅ FULL IMAGE — NO CROP */}
            <img
              src={img}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}

        <div className="w-[45vw] shrink-0" />
      </div>
    </section>
  );
}
