import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

export default function Sustainability() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* HERO */}
            <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm text-gray-500 tracking-wide">
                        Home <span className="mx-2">/</span> Sustainability & Social Impact{" "}
                        <span className="mx-2">/</span>{" "}
                        <span className="text-black font-semibold">Sustainability</span>
                    </p>

                    <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                        Sustainability at Robust Robotics
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
                        Restoring ecosystems today, building sustainable systems for tomorrow.
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

            {/* FEATURED RESOURCES */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest text-gray-500 uppercase font-semibold">
                        Featured Resources
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "2025 Sustainability Performance Report",
                                desc: "Comprehensive overview of environmental, social, and governance achievements.",
                                btn: "Download Report (PDF)",
                            },
                            {
                                title: "2025 Performance Index",
                                desc: "Key metrics and year-over-year sustainability progress.",
                                btn: "View Index",
                            },
                            {
                                title: "Sustainability Disclosure Hub",
                                desc: "Detailed data, frameworks, and third-party assessments.",
                                btn: "Access Hub",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 bg-gray-50 rounded-2xl p-10 hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="mt-4 text-gray-700 leading-relaxed">{item.desc}</p>
                                <button className="mt-8 border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                                    {item.btn}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STORY CAROUSEL STYLE */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest text-gray-500 uppercase font-semibold">
                        Highlight Stories
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Carbon-Neutral Operations Achieved Two Years Ahead of Schedule",
                                desc: "Our facilities reached carbon neutrality in 2025 through renewable energy adoption and verified offsets.",
                            },
                            {
                                title: "Biodegradable Seed Pod Technology Eliminates Plastic Waste",
                                desc: "Patent-pending seed capsule design eliminates petroleum plastics with soil-compostable materials.",
                            },
                            {
                                title: "Closed-Loop Battery Recycling Partnership Launched",
                                desc: "Battery material recovery exceeding 95% from retired lithium-ion drone systems.",
                            },
                        ].map((story, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold">{story.title}</h3>
                                <p className="mt-6 text-gray-700 leading-relaxed">{story.desc}</p>

                                <button className="mt-8 text-sm font-semibold underline underline-offset-4 hover:text-gray-800 transition">
                                    Read Full Story →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FRAMEWORK */}
            <section className="py-20 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-light">
                        Sustainability Framework
                    </h2>

                    <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-5xl">
                        Robust Robotics’ sustainability program is built around environmental
                        restoration, operational responsibility, and regenerative innovation.
                        We integrate sustainability into product design, manufacturing, field
                        operations, and end-of-life management.
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                num: "[01]",
                                title: "Environmental Stewardship",
                                desc: "Minimize operational footprint while maximizing ecological restoration impact.",
                                points: [
                                    "Net-zero emissions by 2030",
                                    "100% renewable energy by 2028",
                                    "Zero waste to landfill by 2027",
                                    "100% biodegradable products by 2026",
                                ],
                            },
                            {
                                num: "[02]",
                                title: "Regenerative Innovation",
                                desc: "Design systems that restore ecosystems rather than only reducing harm.",
                                points: [
                                    "Biodegradable seed pod development",
                                    "Solar-electric hybrid propulsion",
                                    "Carbon sequestration tracking",
                                    "Indigenous knowledge integration",
                                ],
                            },
                            {
                                num: "[03]",
                                title: "Responsible Growth",
                                desc: "Scale our business sustainably while creating shared community value.",
                                points: [
                                    "Supplier sustainability standards",
                                    "Living wage commitment",
                                    "Community investment (2% revenue)",
                                    "Third-party sustainability audits",
                                ],
                            },
                        ].map((pillar, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-10"
                            >
                                <p className="text-sm text-gray-500 font-semibold tracking-widest">
                                    {pillar.num}
                                </p>
                                <h3 className="mt-4 text-2xl font-semibold">{pillar.title}</h3>
                                <p className="mt-4 text-gray-700 leading-relaxed">{pillar.desc}</p>

                                <ul className="mt-6 space-y-2 text-gray-700">
                                    {pillar.points.map((p, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="mt-[6px] w-2 h-2 bg-gray-400 rounded-full"></span>
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="mt-8 text-sm font-semibold underline underline-offset-4 hover:text-gray-800 transition">
                                    Explore →
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <button className="bg-black text-white px-10 py-4 font-semibold rounded-md hover:bg-gray-900 transition">
                            Read Sustainability Policy (PDF)
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            <Lastfooter />
        </div>
    );
}
