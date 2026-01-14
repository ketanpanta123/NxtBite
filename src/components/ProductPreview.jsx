import { motion } from "framer-motion";

export default function ProductPreview() {
  return (
    <section data-theme="light" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Application Preview
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden">
            <motion.img
              src="/qr.jpeg"
              alt="Restaurant"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>

          {/* VIDEO (GUARANTEED TO PLAY) */}
          <div className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="w-full h-full object-cover"
            >
              <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
