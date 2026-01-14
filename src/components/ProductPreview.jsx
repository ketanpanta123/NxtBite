import { motion } from "framer-motion";

export default function ProductPreview() {
  return (
    <section
      data-theme="light"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Application Preview
        </motion.h2>

        <div
          className="
            mt-10 sm:mt-16
            grid grid-cols-1 md:grid-cols-2
            gap-8 sm:gap-12
            items-center
          "
        >
          {/* IMAGE 1 */}
          <div className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden">
            <motion.img
              src="/qr.jpeg"
              alt="QR Menu Preview"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>

          {/* IMAGE 2 (TEMP VIDEO PLACEHOLDER) */}
          <div className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden">
            <motion.img
              src="/Image5.JPG"
              alt="Application Flow Preview"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
