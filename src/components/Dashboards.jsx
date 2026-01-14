export default function Dashboards() {
  return (
    <section
      data-theme="light"
      className="
        py-16 sm:py-20 lg:py-24
        bg-gray-50
        px-4 sm:px-6 lg:px-8
      "
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Built for Everyone
        </h2>

        <p className="
          mt-4 sm:mt-6
          text-base sm:text-lg
          text-gray-600
          max-w-3xl mx-auto
        ">
          Customer, Waiter, Kitchen & Admin dashboards work together to deliver
          seamless dining.
        </p>

        <div className="
          mt-10 sm:mt-12
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          gap-6 sm:gap-8
        ">
          {/* CUSTOMER */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg sm:text-xl font-semibold text-primary">
              Customer
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
              Browse menus, place group orders, and track food status in real time.
            </p>
          </div>

          {/* WAITER */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg sm:text-xl font-semibold text-primary">
              Waiter
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
              Manage tables, receive service requests, and coordinate faster turnarounds.
            </p>
          </div>

          {/* KITCHEN / ADMIN */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg sm:text-xl font-semibold text-primary">
              Kitchen / Admin
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
              Monitor live orders, streamline preparation, and control operations from one dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
