import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  data-theme="light"
  className="min-h-[85vh] sm:min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8"
>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          From <span className="text-primary">QR</span> to
          <br /> Customer Loyalty
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-600">
          We upgrade your restraunt's service, experience, and revenue
        </p>

       
      </motion.div>
    </section>
  );
}
