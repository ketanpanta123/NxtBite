import { motion } from "framer-motion";

/* Card animation */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    rotateX: -20,
    filter: "blur(10px)",
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
      mass: 0.9,
    },
  },
};

export default function PricingSection() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-4xl mx-auto [perspective:1200px]">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          whileHover={{
            rotateX: 4,
            rotateY: -4,
            scale: 1.02,
          }}
          className="
            relative bg-green-50 rounded-3xl p-16
            text-center shadow-2xl
          "
        >
          {/* Glow background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-300/30 to-transparent blur-3xl -z-10" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            Start with a Free Pilot Month
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: false }}
            className="mt-6 text-lg text-gray-700"
          >
            No risk. No hardware. No long-term commitment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
            className="mt-4 text-gray-600"
          >
            Let Nxtbite prove the impact on your tables and sales.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, type: "spring" }}
            viewport={{ once: false }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(16,185,129,0.4)",
                  "0 0 25px rgba(16,185,129,0.6)",
                  "0 0 0px rgba(16,185,129,0.4)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="
                bg-primary text-white
                px-12 py-4 rounded-full
                text-lg font-semibold
              "
            >
              Get Quotation
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: false }}
            className="mt-10 text-green-800 font-medium"
          >
            “If we don’t bring value, you don’t pay.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: false }}
            className="mt-6 text-gray-700"
          >
            Sign up today. <br />
            <strong>Let’s launch in your restaurant.</strong>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
