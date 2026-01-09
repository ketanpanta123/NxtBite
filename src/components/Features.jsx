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
    title: "Revenue Engine",
    desc: "Chef’s Specials, visuals, and upsells that work.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-2xl shadow"
          >
            <h3 className="text-2xl font-semibold text-primary">{f.title}</h3>
            <p className="mt-4 text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
