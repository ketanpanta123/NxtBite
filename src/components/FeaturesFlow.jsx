import { motion } from "framer-motion";

const sellingPoints = [
  "Digital Menu That Sells For You",
  "AI Ordering Assistant (Mood Bot)",
  "Group Ordering from Multiple Devices",
  "Waiter Console + Kitchen Console",
  "WhatsApp-ready Customer Database",
  "Real-time service calls & order tracking",
];

export default function FeaturesFlow() {
  return (
    <section className="py-24 bg-white px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT – FEATURES LIST */}
        <div className="space-y-6">
          {sellingPoints.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <span className="mt-1 text-green-600 text-xl">✔</span>
              <p className="text-lg text-gray-800">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT – QR FLOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-green-50 rounded-3xl p-10 text-center shadow"
        >
          <h3 className="text-2xl font-bold text-primary">
            One QR Scan.
          </h3>
          <h3 className="text-2xl font-bold text-primary mt-2">
            Multiple phones.
          </h3>
          <h3 className="text-2xl font-bold text-primary mt-2">
            Single cart.
          </h3>

          <p className="mt-6 text-gray-600 text-lg">
            Zero wait. Faster decisions. Happier tables.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
