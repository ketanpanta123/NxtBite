export default function Dashboards() {
  return (
    <section className="py-24 bg-gray-50 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Built for Everyone</h2>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          Customer, Waiter, Kitchen & Admin dashboards work together to deliver
          seamless dining.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {["Customer", "Waiter", "Kitchen / Admin"].map((role, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-primary">{role}</h3>
              <p className="mt-4 text-gray-600">
                Optimized workflows with real-time updates.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
