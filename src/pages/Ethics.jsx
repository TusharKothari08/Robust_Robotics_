import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

export default function Ethics() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80"
                        alt="Ethics and Integrity"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <p className="text-white text-sm tracking-widest font-semibold uppercase">
                        Company
                    </p>

                    <h1 className="mt-6 text-white text-5xl md:text-7xl font-light leading-tight">
                        Ethics <span className="font-semibold text-gray-200">& Integrity</span>
                    </h1>

                    <p className="mt-8 text-gray-200 text-lg md:text-2xl max-w-3xl leading-relaxed">
                        Doing what&apos;s right is at the heart of everything we do.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-5">
                        <button className="bg-white text-black hover:bg-gray-100 px-10 py-4 font-semibold transition rounded-md shadow-lg">
                            Code of Conduct
                        </button>

                        <button className="border border-white/70 text-white hover:bg-white hover:text-black px-10 py-4 font-semibold transition rounded-md">
                            Ethics Training
                        </button>
                    </div>
                </div>
            </section>

            {/* BREADCRUMB */}
            <section className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <p className="text-sm text-gray-500">
                        <Link to="/" className="hover:text-black transition">
                            Home
                        </Link>{" "}
                        <span className="mx-2">/</span>
                        <span className="text-gray-800 font-medium">Ethics</span>
                    </p>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Introduction
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light leading-tight">
                        Our Commitment to Integrity
                    </h2>

                    <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
                        Robust Robotics&apos; success depends on our unwavering commitment to
                        integrity. Our core values—Act with Integrity, Restore Responsibly,
                        and Innovate Ethically—are fundamental to who we are and what we do.
                    </p>

                    <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
                        At Robust Robotics, we believe that doing what&apos;s right goes beyond
                        obeying laws and regulations. It means holding ourselves to the
                        highest ethical standards, even when the law may not require it.
                    </p>

                    <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
                        We refuse to allow our integrity to be compromised by our desire to
                        succeed, regardless of business circumstances or competitive pressures.
                    </p>
                </div>
            </section>

            {/* CODE OF ETHICS BLOCK */}
            <section className="bg-gray-50 py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Rooted in Integrity
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light">
                        Code of Ethics & Business Conduct
                    </h2>

                    <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
                        Our Code of Ethics and Business Conduct, titled{" "}
                        <span className="font-semibold text-gray-900">“Rooted in Integrity”</span>,
                        outlines our expectations for employees, contractors, partners, and
                        anyone acting on behalf of our company.
                    </p>

                    <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
                        It provides the foundation for our comprehensive ethics program and
                        guides our daily decisions.
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Act with Integrity",
                                desc: "We are honest, transparent, and accountable in every action and decision.",
                            },
                            {
                                title: "Restore Responsibly",
                                desc: "We respect the communities and ecosystems our technology impacts.",
                            },
                            {
                                title: "Innovate Ethically",
                                desc: "We build autonomy and AI systems with safety, fairness, and responsibility.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition"
                            >
                                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 flex flex-wrap gap-5">
                        <button className="bg-black text-white hover:bg-gray-900 px-10 py-4 font-semibold transition rounded-md shadow-md">
                            Download Code of Conduct (PDF)
                        </button>

                        <button className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-10 py-4 font-semibold transition rounded-md">
                            View Ethics Policies
                        </button>
                    </div>
                </div>
            </section>

            {/* EXPECTATIONS */}
            <section className="py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Expectations
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light">
                        Standards We Hold Ourselves To
                    </h2>

                    <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
                        We require all employees, consultants, contractors, and board members
                        to agree to abide by our Code of Conduct as a condition of their
                        engagement with Robust Robotics.
                    </p>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Compliance & Responsibility",
                                desc: "We comply with applicable laws, export controls, safety standards, and ethical business practices worldwide.",
                            },
                            {
                                title: "Respect & Professionalism",
                                desc: "We foster an environment where every individual is treated with respect and fairness.",
                            },
                            {
                                title: "Confidentiality & Data Protection",
                                desc: "We safeguard sensitive customer information, research data, and intellectual property.",
                            },
                            {
                                title: "Integrity in Partnerships",
                                desc: "We expect the same ethical standards from our partners, suppliers, and contractors.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm hover:shadow-lg transition"
                            >
                                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ETHICS TRAINING */}
            <section className="bg-gray-50 py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Training & Awareness
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light">
                        Ethics Training & Continuous Learning
                    </h2>

                    <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
                        Integrity is not a one-time promise. It&apos;s a continuous process.
                        Our ethics training programs ensure employees understand our values,
                        responsibilities, and compliance expectations.
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            "Mandatory onboarding ethics program",
                            "Annual compliance and refresher training",
                            "Cybersecurity and data handling workshops",
                            "Supplier and partner compliance reviews",
                            "AI responsibility and safety briefings",
                            "Conflict-of-interest disclosure programs",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm hover:shadow-lg transition font-semibold text-gray-800 text-lg"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 border-t border-gray-200 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Speak Up
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light">
                        Ethics Reporting & Support
                    </h2>

                    <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        If you have concerns, questions, or need guidance, we encourage you
                        to speak up. Our ethics team is committed to maintaining a safe,
                        transparent, and responsible workplace.
                    </p>

                    <div className="mt-12 flex justify-center gap-5 flex-wrap">
                        <button className="bg-black text-white hover:bg-gray-900 px-12 py-4 font-semibold transition rounded-md shadow-lg">
                            Report an Ethics Concern
                        </button>

                        <button className="border border-gray-300 text-gray-800 hover:bg-gray-100 px-12 py-4 font-semibold transition rounded-md">
                            Contact Ethics Office
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            <Lastfooter />
        </div>
    );
}
