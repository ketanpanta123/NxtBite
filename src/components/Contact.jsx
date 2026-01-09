export default function Contact() {
  return (
    <section className="py-24 bg-white px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Contact Us</h2>

        <form className="mt-12 grid gap-6">
          <input
            placeholder="Restaurant Name"
            className="border p-4 rounded-lg"
          />
          <input
            placeholder="Email"
            className="border p-4 rounded-lg"
          />
          <input
            placeholder="Phone"
            className="border p-4 rounded-lg"
          />
          <textarea
            placeholder="Tell us about your restaurant"
            rows="4"
            className="border p-4 rounded-lg"
          />

          <button className="bg-primary text-white py-4 rounded-lg text-lg hover:opacity-90">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
