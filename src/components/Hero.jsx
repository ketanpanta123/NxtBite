import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          From <span className="text-primary">QR</span> to
          <br /> Customer Loyalty
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          We help people choose dine-in over food ordering by enhancing the
          dining experience.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition">
            I'm Interested
          </button>
          <button className="border border-gray-300 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition">
            See How It Works
          </button>
        </div>
      </motion.div>
    </section>
  );
}
