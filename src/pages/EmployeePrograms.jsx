import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

export default function EmployeePrograms() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* HERO */}
            <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm text-gray-500 tracking-wide">
                        Home <span className="mx-2">/</span> Sustainability & Social Impact{" "}
                        <span className="mx-2">/</span>{" "}
                        <span className="text-black font-semibold">
                            Employee-Focused Programs
                        </span>
                    </p>

                    <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                        Employee-Focused Programs
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
                        We support employee growth, wellbeing, and resilience through career
                        development, educational support, and emergency relief programs.
                    </p>

                    <div className="mt-10">
                        <Link
                            to="/sustainability"
                            className="text-sm font-semibold text-gray-700 hover:text-black transition underline underline-offset-4"
                        >
                            ← Back to Sustainability & Social Impact
                        </Link>
                    </div>
                </div>
            </section>

            {/* RELIEF FUND */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest text-gray-500 uppercase font-semibold">
                        Employee Disaster Relief Fund
                    </p>

                    <h2 className="mt-6 text-3xl md:text-5xl font-light">
                        Supporting our team in times of need.
                    </h2>

                    <p className="mt-8 text-lg text-gray-700 max-w-5xl leading-relaxed">
                        The Robust Robotics Employee Disaster Relief Fund provides confidential
                        financial support when unexpected hardship affects our teammates.
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="border border-gray-200 bg-gray-50 rounded-2xl p-10">
                            <h3 className="text-2xl font-semibold">Eligible Assistance</h3>
                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li>• Temporary housing and displacement costs</li>
                                <li>• Medical expenses not covered by insurance</li>
                                <li>• Transportation and evacuation support</li>
                                <li>• Emergency food and basic necessities</li>
                                <li>• Home repair support</li>
                                <li>• Child care during emergency response</li>
                            </ul>
                            <p className="mt-6 text-gray-600">
                                Typical Assistance Range:{" "}
                                <span className="font-semibold text-black">$500 - $10,000</span>
                            </p>
                        </div>

                        <div className="border border-gray-200 bg-gray-50 rounded-2xl p-10">
                            <h3 className="text-2xl font-semibold">Processing Timeline</h3>
                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li>• Emergency cases: 24-48 hours</li>
                                <li>• Standard cases: 5-7 business days</li>
                                <li>• Funds disbursed via direct deposit or emergency check</li>
                            </ul>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
                                    Apply for Support
                                </button>
                                <button className="border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                                    Contact HR Hotline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ADDITIONAL PROGRAMS */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-light">
                        Additional Support Programs
                    </h2>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Educational Assistance",
                                desc: "Tuition reimbursement, certification funding, and student loan repayment support.",
                                points: [
                                    "Up to $8,000 annually (undergraduate)",
                                    "Up to $12,000 annually (graduate)",
                                    "$200/month student loan repayment",
                                ],
                            },
                            {
                                title: "Professional Development",
                                desc: "Leadership training, workshops, mentorship, and cross-functional growth opportunities.",
                                points: [
                                    "Emerging Leaders Program",
                                    "Management Excellence Training",
                                    "Conference attendance support",
                                ],
                            },
                            {
                                title: "Health & Wellness",
                                desc: "Confidential counseling, fitness support, and wellness programs.",
                                points: [
                                    "Mental health support & crisis intervention",
                                    "Gym subsidies and wellness incentives",
                                    "Ergonomic workplace support",
                                ],
                            },
                            {
                                title: "Family Support",
                                desc: "Paid parental leave, childcare assistance, elder care resources, and bereavement support.",
                                points: [
                                    "16 weeks paid parental leave",
                                    "Flexible return-to-work options",
                                    "Extended bereavement leave",
                                ],
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-md transition"
                            >
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <p className="mt-4 text-gray-700 leading-relaxed">{item.desc}</p>

                                <ul className="mt-6 space-y-2 text-gray-700">
                                    {item.points.map((p, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="mt-[6px] w-2 h-2 bg-gray-400 rounded-full"></span>
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { value: "$185K", label: "Disaster relief distributed (2025)" },
                            { value: "42", label: "Employees assisted" },
                            { value: "$420K", label: "Educational assistance provided" },
                            { value: "180", label: "Employees in development programs" },
                            { value: "95%", label: "Employee satisfaction score" },
                        ].map((metric, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-2xl p-8 bg-gray-50"
                            >
                                <p className="text-3xl font-semibold">{metric.value}</p>
                                <p className="mt-2 text-gray-600">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <Lastfooter />
        </div>
    );
}
