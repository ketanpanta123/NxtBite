import { useState } from "react";

export default function CTA() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setSuccess(true);

    setTimeout(() => {
      setOpen(false);
      setEmail("");
      setSuccess(false);
    }, 2000);
  };

  return (
    <>
      {/* CTA SECTION */}
      <section
        data-theme="dark"
        className="py-16 sm:py-20 lg:py-24 bg-primary text-white text-center px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Let Nxtbite Prove the Impact
        </h2>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg opacity-90 max-w-xl mx-auto">
          Start with a free pilot. If we don’t add value, you don’t pay.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 sm:mt-10 bg-white text-primary px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition"
        >
          I'm Interested
        </button>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-xl relative text-center">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            {!success ? (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-primary">
                  Thank you for showing interest!
                </h3>

                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Enter your email and we’ll reach out shortly.
                </p>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    mt-5 sm:mt-6 w-full
                    border border-gray-300
                    rounded-lg px-4 py-3
                    text-sm sm:text-base
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                />

                {error && (
                  <p className="mt-2 text-sm text-red-500 text-left">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Submit
                </button>
              </>
            ) : (
              /* SUCCESS STATE */
              <div className="py-10 sm:py-12">
                <p className="text-primary text-lg sm:text-xl font-semibold">
                  We’ll contact you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
