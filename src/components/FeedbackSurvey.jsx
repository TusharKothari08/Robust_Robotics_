import { useState, useEffect } from "react";

export default function FeedbackSurvey() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    rating: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Thank You
          </h2>
          <p className="text-gray-600">
            Your feedback has been successfully submitted.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-10">

        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Share Your Feedback
        </h1>

        <p className="text-gray-600 mb-8">
          Your insights help us refine and enhance our solutions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Feedback Category
            </label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 transition"
            >
              <option value="">Select Category</option>
              <option value="website">Website Experience</option>
              <option value="product">Product / Solutions</option>
              <option value="support">Customer Support</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Overall Rating
            </label>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="rating"
                    value={num}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  {num}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Detailed Feedback
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600 transition"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition shadow-md"
          >
            Submit Feedback
          </button>

        </form>
      </div>
    </section>
  );
}
