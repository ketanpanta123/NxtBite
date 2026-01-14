import { motion } from "framer-motion";
import { useState } from "react";

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
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setError("");
    setSuccess(false);

    const phoneRegex = /^[0-9]{10}$/;

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    // ✅ success
    setSuccess(true);
    setName("");
    setPhone("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section data-theme="light" className="py-32 px-8 bg-white">
      <div className="max-w-4xl mx-auto [perspective:1200px]">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
          className="relative bg-green-50 rounded-3xl p-16 text-center shadow-2xl"
        >
          {/* Glow background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-300/30 to-transparent blur-3xl -z-10" />

          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Start with a Free Pilot Month
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            No risk. No hardware. No long-term commitment.
          </p>

          <p className="mt-4 text-gray-600">
            Let Nxtbite prove the impact on your tables and sales.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition"
            >
              Get Quotation
            </button>
          </div>

          {/* FORM — HORIZONTAL (UNCHANGED) */}
          {showForm && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-10 flex flex-wrap justify-center gap-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-56"
                />

                <input
                  type="tel"
                  placeholder="Phone Number (+61)  "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-56"
                />

                <button
                  onClick={handleSubmit}
                  className="bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
                >
                  Submit
                </button>
              </motion.div>

              {/* SMALL ALERTS (BELOW FORM, NOT BREAKING LAYOUT) */}
              {error && (
                <div className="mt-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {success && (
                <div className="mt-3 text-sm text-green-700 font-medium">
                  ✔ Submission successful! We’ll contact you soon.
                </div>
              )}
            </>
          )}

          <p className="mt-10 text-green-800 font-medium">
            “If we don’t bring value, you don’t pay.”
          </p>

          <p className="mt-6 text-gray-700">
            Sign up today. <br />
            <strong>Let’s launch in your restaurant.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
