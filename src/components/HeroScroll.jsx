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

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  // 🎯 INITIAL CENTERING
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cardWidth = isMobile ? 260 : 340;
    const overlap = isMobile ? 50 : 80;
    const effectiveWidth = cardWidth - overlap;
    const initialIndex = Math.floor(images.length / 2);

    el.scrollLeft =
      initialIndex * effectiveWidth -
      el.offsetWidth / 2 +
      cardWidth / 2;
  }, [isMobile]);

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
          Math.min(-distance / 80, 6),
          -6
        );

        const scale = Math.max(
          1 - abs / (isMobile ? 1200 : 1600),
          0.88
        );

        const isCentered = abs < (isMobile ? 70 : 90);

        return {
          rotate,
          scale,
          zIndex: isCentered ? 20 : 10,
          boxShadow: isCentered
            ? "0 30px 60px rgba(0,0,0,0.35)"
            : "0 14px 30px rgba(0,0,0,0.2)",
        };
      });

      setStyles(nextStyles);
    };

    update();
    el.addEventListener("scroll", update);
    return () => el.removeEventListener("scroll", update);
  }, [isMobile]);

  return (
    <section className="
      min-h-[85vh] sm:min-h-screen
      bg-gradient-to-b from-[#0f3d2e] to-[#06281e]
      text-white overflow-hidden
    ">
      {/* HERO TEXT */}
      <div className="text-center pt-24 sm:pt-32 px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Smart dining{" "}
          <span className="text-green-400">done right</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-green-100 max-w-xl mx-auto">
          Digital menu. One shared order. Zero friction.
        </p>
      </div>

      {/* CAROUSEL */}
      <div
        ref={containerRef}
        className="mt-16 sm:mt-28 flex overflow-x-scroll scrollbar-hide"
        style={{ perspective: "1200px" }}
      >
        {/* LEFT SPACER */}
        <div className="w-[20vw] sm:w-[45vw] shrink-0" />

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
            style={{ marginLeft: i === 0 ? 0 : isMobile ? "-50px" : "-80px" }}
            className="
              min-w-[260px] sm:min-w-[340px]
              h-[360px] sm:h-[480px]
              rounded-3xl
              overflow-hidden
              bg-white
              flex items-center justify-center
            "
          >
            {/* FULL IMAGE — NO CROP */}
            <img
              src={img}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}

        {/* RIGHT SPACER */}
        <div className="w-[20vw] sm:w-[45vw] shrink-0" />
      </div>
    </section>
  );
}
