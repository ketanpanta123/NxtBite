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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.85,
    rotateX: -25,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 16,
    },
  },
};

export default function Features() {
  return (
    <section className="py-32 px-8 bg-gradient-to-b from-[#0f3d2e] to-[#06281e]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built for Modern Restaurants
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            A complete operating system for faster service, smarter decisions,
            and better guest experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="
            grid gap-10
            sm:grid-cols-2
            lg:grid-cols-3
            [perspective:1200px]
          "
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{
                y: -16,
                scale: 1.04,
                rotateX: 6,
                rotateY: -6,
              }}
              className="
                p-10 rounded-3xl
                bg-white/95 backdrop-blur
                shadow-xl hover:shadow-2xl
                transition-all
              "
            >
              <h3 className="text-2xl font-semibold text-[#0f3d2e]">
                {f.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
