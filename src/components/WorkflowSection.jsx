import { motion } from "framer-motion";

export default function WorkflowSection() {
  return (
    <section className="py-24 bg-gray-50 px-8">
      <div className="max-w-6xl mx-auto">

        {/* FLOW TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Built for Real Restaurant Workflows
        </motion.h2>

        {/* FLOW STEPS */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            "Customers build the order",
            "Waiter confirms with the table",
            "Order goes to kitchen",
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow text-center"
            >
              <p className="text-lg font-semibold text-gray-800">
                {step}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-600 text-lg">
          <strong>Your team stays in control</strong> — Nxtbite just speeds the flow.
        </p>

        <p className="mt-2 text-center text-green-700 font-medium">
          “We trained cafes & fine dining staff in under 15 minutes.”
        </p>

        {/* VERTICAL NAV */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Kitchen",
              desc: "Preparing → Ready",
            },
            {
              title: "Waiter",
              desc: "Assigned tables, item alerts, service requests",
            },
            {
              title: "Admin",
              desc: "Sales reports, menu edits, pricing control, customer exports",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="border-l-4 border-green-600 pl-6"
            >
              <h3 className="text-xl font-bold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-center text-gray-600">
          ✔️ Monitor-ready &nbsp; • &nbsp; ✔️ Fully mobile responsive
        </p>
      </div>
    </section>
  );
}
