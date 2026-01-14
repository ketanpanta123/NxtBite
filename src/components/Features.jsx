import { motion } from "framer-motion";

const features = [
  {
    title: "Frictionless Start",
    desc: "Scan QR → Menu → Order. No app installs. No drop-offs.",
  },
  {
    title: "AI-Powered Menu",
    desc: "Mood Bot recommends dishes based on intent.",
  },
  {
    title: "Group Ordering",
    desc: "Multiple phones. One shared order. Zero waiting.",
  },
  {
    title: "Waiter & Kitchen Console",
    desc: "Live orders, table status, and kitchen flow in sync.",
  },
  {
    title: "WhatsApp-ready Customer Database",
    desc: "Build repeat customers with direct WhatsApp outreach.",
  },
  {
    title: "Real-time Service & Order Tracking",
    desc: "Instant service calls and live order visibility.",
  },
];

export default function Features() {
  return (
    <section
      data-theme="dark"
      className="py-32 px-8 bg-gradient-to-b from-[#0f3d2e] to-[#06281e]"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built for Modern Restaurants
          </h2>

          <p className="mt-6 text-lg text-white/70 mx-auto text-center lg:whitespace-nowrap">
            A complete operating system for faster service, smarter decisions, and better guest experiences.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.92,
                filter: "blur(6px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                type: "spring",
                stiffness: 90,
                damping: 18,
                mass: 1.2,
              }}
              whileHover={{
                y: -18,
                scale: 1.06,
                rotateX: 2,
                rotateY: -2,
              }}
              className="p-10 rounded-3xl bg-white shadow-xl h-full flex flex-col"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FIXED TITLE HEIGHT FOR ALL */}
              <h3 className="text-2xl font-semibold text-[#0f3d2e] min-h-[64px]">
                {f.title}
              </h3>

              {/* FLEX DESCRIPTION */}
              <p className="mt-4 text-gray-600 flex-grow">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
