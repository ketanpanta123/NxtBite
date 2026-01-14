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
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    setError("");
    setSuccess(false);

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    // ✅ success
    setSuccess(true);
    setName("");
    setPhone("");
    setEmail("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section
      data-theme="light"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto [perspective:1200px]">
        {/* ✅ ANIMATE ONLY ONCE */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
          className="relative bg-green-50 rounded-3xl p-6 sm:p-10 lg:p-16 text-center shadow-2xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-300/30 to-transparent blur-3xl -z-10" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Start with a Free Pilot Month
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700">
            No risk. No hardware. No long-term commitment.
          </p>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
            Let Nxtbite prove the impact on your tables and sales.
          </p>

          {/* CTA */}
          <div className="mt-8 sm:mt-12 flex justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-primary text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-700 transition"
            >
              Get Quotation
            </button>
          </div>

          {/* FORM */}
          {showForm && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {/* NAME */}
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* PHONE */}
                <input
                  type="tel"
                  placeholder="Phone Number (+61)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* SUBMIT */}
                <button
                  onClick={handleSubmit}
                  className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
                >
                  Submit
                </button>
              </motion.div>

              {/* EMAIL – FULL WIDTH BELOW */}
              <div className="mt-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* ERRORS / SUCCESS */}
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

          <p className="mt-8 sm:mt-10 text-green-800 font-medium">
            “If we don’t bring value, you don’t pay.”
          </p>

          <p className="mt-4 sm:mt-6 text-gray-700">
            Sign up today. <br />
            <strong>Let’s launch in your restaurant.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
