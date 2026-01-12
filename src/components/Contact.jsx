import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errorField, setErrorField] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === errorField) {
      setErrorField(null);
      setErrorMessage("");
    }
  };

  const validate = () => {
    if (!formData.name.trim()) {
      setErrorField("name");
      setErrorMessage("Please fill out this field.");
      return false;
    }

    if (!formData.phone.trim()) {
      setErrorField("phone");
      setErrorMessage("Please fill out this field.");
      return false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setErrorField("phone");
      setErrorMessage("Phone number must be 10 digits.");
      return false;
    }

    if (!formData.email.trim()) {
      setErrorField("email");
      setErrorMessage("Please fill out this field.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorField("email");
      setErrorMessage("Enter a valid email address.");
      return false;
    }

    if (!formData.message.trim()) {
      setErrorField("message");
      setErrorMessage("Please fill out this field.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setFormData({ name: "", phone: "", email: "", message: "" });
      setErrorField(null);
      setErrorMessage("");
      setShowSuccessModal(true);
    }
  };

  const inputClass = (field) =>
    `w-full border p-4 rounded-lg transition
     ${
       errorField === field
         ? "border-red-500 animate-shake"
         : "border-gray-300 focus:border-green-600"
     }`;

  return (
    <>
      <section className="py-24 bg-white px-8">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Contact Us
          </h2>

          <p className="mt-6 text-center text-gray-600">
            Have a question or need assistance? Fill out the form below and our
            team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
            <div className="relative">
              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
              {errorField === "name" && (
                <Tooltip message={errorMessage} />
              )}
            </div>

            <div className="relative">
              <input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass("phone")}
              />
              {errorField === "phone" && (
                <Tooltip message={errorMessage} />
              )}
            </div>

            <div className="relative">
              <input
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              {errorField === "email" && (
                <Tooltip message={errorMessage} />
              )}
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Query"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={inputClass("message")}
              />
              {errorField === "message" && (
                <Tooltip message={errorMessage} />
              )}
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white py-4 rounded-lg text-lg hover:bg-green-800 transition"
            >
              Send Query
            </button>
          </form>
        </div>

        {/* Shake animation */}
        <style>
          {`
            @keyframes shake {
              0% { transform: translateX(0); }
              25% { transform: translateX(-4px); }
              50% { transform: translateX(4px); }
              75% { transform: translateX(-4px); }
              100% { transform: translateX(0); }
            }
            .animate-shake {
              animation: shake 0.3s;
            }
          `}
        </style>
      </section>

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>

            <div className="text-green-600 text-5xl mb-4">✔</div>

            <h3 className="text-xl font-semibold text-gray-900">
              Submission Successful
            </h3>

            <p className="mt-2 text-gray-600">
              Your query has been sent successfully. Our team will contact you
              shortly.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* Tooltip */
function Tooltip({ message }) {
  return (
    <div className="absolute left-4 top-full mt-2 bg-white text-black px-3 py-2 rounded-md shadow-lg flex items-center gap-2 text-sm border z-10">
      <span className="bg-orange-500 text-white font-bold px-2 rounded">
        !
      </span>
      {message}
      <div className="absolute left-4 -top-1.5 w-3 h-3 bg-white rotate-45 border-l border-t" />
    </div>
  );
}
