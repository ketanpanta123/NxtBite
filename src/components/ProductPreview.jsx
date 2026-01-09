import { motion } from "framer-motion";

export default function ProductPreview() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center"
        >
          Application Preview
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            className="rounded-2xl shadow-lg"
            whileHover={{ scale: 1.03 }}
          />

          <motion.video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
