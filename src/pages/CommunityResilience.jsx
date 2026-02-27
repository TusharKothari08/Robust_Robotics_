import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

export default function CommunityResilience() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* HERO */}
            <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm text-gray-500 tracking-wide">
                        Home <span className="mx-2">/</span> Sustainability & Social Impact{" "}
                        <span className="mx-2">/</span>{" "}
                        <span className="text-black font-semibold">Community Resilience</span>
                    </p>

                    <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                        Community Resilience
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
                        Resilient communities are better equipped to face environmental
                        challenges, recover from disasters, and build sustainable futures.
                        We support community resilience through disaster response, food
                        security initiatives, climate adaptation programs, and local
                        capacity building.
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

            {/* INITIATIVES */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest text-gray-500 uppercase font-semibold">
                        Resilience Initiatives
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Disaster Response & Recovery",
                                desc: "Rapid-response restoration services supporting communities impacted by natural disasters.",
                                points: [
                                    "Emergency reforestation after wildfires",
                                    "Coastal restoration after storms",
                                    "Erosion control following floods",
                                    "Assessment flights for damage evaluation",
                                ],
                            },
                            {
                                title: "Food Security & Sustainable Agriculture",
                                desc: "Programs supporting smallholder farmers and community food systems.",
                                points: [
                                    "180 smallholder farmers supported (2025)",
                                    "25 community gardens established",
                                    "Precision crop monitoring and planning",
                                    "Training and equipment access programs",
                                ],
                            },
                            {
                                title: "Climate Adaptation Support",
                                desc: "Helping communities adapt to climate change through nature-based solutions.",
                                points: [
                                    "Urban cooling corridors",
                                    "Flood risk reduction via wetlands",
                                    "Drought-resistant planting strategies",
                                    "Mangrove restoration for coastal defense",
                                ],
                            },
                            {
                                title: "Economic Resilience & Green Jobs",
                                desc: "Creating long-term employment pathways through restoration projects.",
                                points: [
                                    "95 people trained for green careers",
                                    "65 job placements",
                                    "$1.2M local wages paid",
                                    "12 restoration businesses supported",
                                ],
                            },
                            {
                                title: "Basic Needs Support",
                                desc: "Employee-driven support programs for immediate community needs.",
                                points: [
                                    "Food bank partnerships",
                                    "School supply drives",
                                    "Disaster relief supply collection",
                                    "Emergency assistance partnerships",
                                ],
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-2xl p-10 hover:shadow-md transition"
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
                </div>
            </section>

            {/* METRICS */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-light">
                        Community Resilience Metrics
                    </h2>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { value: "42", label: "Disaster response deployments" },
                            { value: "$4.8M", label: "Pro-bono services provided" },
                            { value: "2,500+", label: "Community members supported" },
                            { value: "180", label: "Farmer partnerships" },
                            { value: "95", label: "Green jobs created" },
                            { value: "15", label: "Climate adaptation projects" },
                        ].map((metric, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-8"
                            >
                                <p className="text-3xl font-semibold">{metric.value}</p>
                                <p className="mt-2 text-gray-600">{metric.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 flex flex-wrap gap-4">
                        <button className="bg-black text-white px-8 py-4 font-semibold rounded-md hover:bg-gray-900 transition">
                            Submit Partnership Application
                        </button>
                        <button className="border border-gray-300 px-8 py-4 font-semibold rounded-md hover:bg-gray-100 transition">
                            Emergency Contact
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            <Lastfooter />
        </div>
    );
}
