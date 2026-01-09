import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section className="py-28 bg-white px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-green-50 rounded-3xl p-14 text-center shadow-xl"
      >
        <h2 className="text-4xl font-bold text-primary">
          Start with a Free Pilot Month
        </h2>

        <p className="mt-6 text-lg text-gray-700">
          No risk. No hardware. No long-term commitment.
        </p>

        <p className="mt-4 text-gray-600">
          Let Nxtbite prove the impact on your tables and sales.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition">
            Get Quotation
          </button>
        </div>

        <p className="mt-8 text-green-800 font-medium">
          “If we don’t bring value, you don’t pay.”
        </p>

        <p className="mt-6 text-gray-700">
          Sign up today. <br />
          <strong>Let’s launch in your restaurant.</strong>
        </p>
      </motion.div>
    </section>
  );
}
