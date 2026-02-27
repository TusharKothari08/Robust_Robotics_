/**
 * Newsletter Signup Page
 * 
 * Provides a form for users to subscribe to the monthly newsletter.
 * Collects user information such as name, email, industry, and experience.
 */

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsroom from "./Newsroom";
import Lastfooter from "../components/Lastfooter";

/**
 * Signup Component
 * 
 * This component renders a subscription form with various input types:
 * - Text inputs for names and country.
 * - Email input for the newsletter address.
 * - Select dropdowns for Industry and Experience.
 * - Privacy and consent checkboxes.
 */
const Signup = () => {

    /**
     * Handles the form submission.
     * Currently displays a success alert, placeholder for future API integration.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Successfully Submitted ✅"); // replace with API later
    };

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 px-6">

                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-12 border border-gray-200">

                    {/* Heading */}
                    <h1 className="text-3xl font-semibold text-center mb-10">
                        Subscribe to our Monthly Newsletter
                    </h1>

                    {/* FORM */}
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        {/* Names */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="First Name*"
                                required
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600"
                            />

                            <input
                                type="text"
                                placeholder="Last Name*"
                                required
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600"
                            />
                        </div>

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email*"
                            required
                            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600"
                        />

                        {/* Industry */}
                        <select
                            required
                            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600"
                        >
                            <option value="">Industry*</option>
                            <option>Aerospace</option>
                            <option>Defense</option>
                            <option>Robotics</option>
                            <option>Technology</option>
                            <option>Student</option>
                            <option>Other</option>
                        </select>

                        {/* Country */}
                        <input
                            type="text"
                            placeholder="Country/Region"
                            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600"
                        />

                        {/* Experience */}
                        <select
                            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-600"
                        >
                            <option>Work Experience</option>
                            <option>0-2 Years</option>
                            <option>3-5 Years</option>
                            <option>5-10 Years</option>
                            <option>10+ Years</option>
                        </select>

                        {/* ================= PRIVACY SECTION ================= */}

                        <div className="border-t pt-6 space-y-4">

                            <p className="text-sm text-gray-600 leading-relaxed">
                                Robust Robotics is committed to protecting and respecting your privacy.
                                We’ll only use your personal information to administer your account and
                                to provide the products and services you requested from us. From time
                                to time, we would like to contact you about our products and services,
                                as well as other content that may be of interest to you. If you consent
                                to us contacting you for this purpose, please tick below:
                            </p>

                            {/* Consent Checkbox */}
                            <div className="flex items-start gap-3">
                                <input type="checkbox" required className="mt-1 w-4 h-4" />
                                <p className="text-sm text-gray-700">
                                    I agree to receive other communications from Robust Robotics.
                                </p>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                You can unsubscribe from these communications at any time.
                                For more information on how to unsubscribe, our privacy practices,
                                and how we are committed to protecting and respecting your privacy,
                                please review our Privacy Policy.
                            </p>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                By clicking submit below, you consent to allow Robust Robotics
                                to store and process the personal information submitted above
                                to provide you the content requested.
                            </p>

                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg"
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </section>
            <Newsroom />

            <Lastfooter />

        </>
    );
};

export default Signup;
