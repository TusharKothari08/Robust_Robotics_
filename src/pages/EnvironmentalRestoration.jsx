import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

export default function EnvironmentalRestoration() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* HERO */}
            <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-500 tracking-wide">
                        Home <span className="mx-2">/</span> Sustainability & Social Impact{" "}
                        <span className="mx-2">/</span>{" "}
                        <span className="text-black font-semibold">
                            Environmental Restoration
                        </span>
                    </p>

                    <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                        Environmental Restoration
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
                        Environmental restoration isn't just what we do commercially — it's
                        our commitment to the planet. Through partnerships with conservation
                        organizations, indigenous communities, and government agencies, we
                        deploy our technology and expertise to heal ecosystems that need it
                        most.
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

            {/* INTRO */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest text-gray-500 uppercase font-semibold">
                        Introduction
                    </p>

                    <h2 className="mt-6 text-3xl md:text-5xl font-light leading-tight">
                        Technology with measurable ecological impact.
                    </h2>

                    <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-5xl">
                        We deploy autonomous systems to accelerate reforestation, stabilize
                        degraded landscapes, and support ecosystem recovery after natural
                        disasters. Our work integrates modern drone platforms with
                        ecological science and long-term monitoring.
                    </p>
                </div>
            </section>

            {/* INITIATIVES */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest text-gray-500 uppercase font-semibold">
                        Restoration Initiatives
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Post-Disaster Ecological Recovery",
                                desc: "Rapid-response restoration services for wildfire, flood, and storm recovery zones.",
                                points: [
                                    "2025: 12 disaster deployments",
                                    "2.5M+ seeds deployed",
                                    "850+ hectares restored",
                                    "8 communities supported",
                                ],
                            },
                            {
                                title: "Indigenous Land Restoration Partnerships",
                                desc: "We support indigenous-led restoration through technology and training.",
                                points: [
                                    "Community-led priorities",
                                    "Traditional knowledge integration",
                                    "Local training and employment",
                                    "Long-term monitoring support",
                                ],
                            },
                            {
                                title: "Degraded Agricultural Land Recovery",
                                desc: "Restoring degraded farmland into productive ecosystems using targeted planting strategies.",
                                points: [
                                    "1,200+ hectares transformed",
                                    "45 agricultural communities assisted",
                                    "8.5M+ native plants established",
                                ],
                            },
                            {
                                title: "Urban Greening & Air Quality",
                                desc: "Creating green corridors in underserved areas to improve air quality and reduce heat islands.",
                                points: [
                                    "Schoolyard greening programs",
                                    "Vacant lot transformation",
                                    "Highway corridor restoration",
                                    "Community garden establishment",
                                ],
                            },
                            {
                                title: "Mining Site Reclamation",
                                desc: "Pro-bono services supporting abandoned mine restoration and erosion prevention.",
                                points: [
                                    "2025: 6 mining sites rehabilitated",
                                    "180+ hectares restored",
                                    "3 regional partnerships established",
                                ],
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm hover:shadow-md transition"
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
            <section className="py-20 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest text-gray-500 uppercase font-semibold">
                        Environmental Impact Metrics
                    </p>

                    <h2 className="mt-6 text-3xl md:text-5xl font-light">
                        Cumulative Impact Since Founding
                    </h2>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { value: "15.2M+", label: "Seeds deployed" },
                            { value: "3,400+", label: "Hectares restored" },
                            { value: "$8.5M", label: "Pro-bono restoration services" },
                            { value: "68,000", label: "Projected CO₂ sequestered (20-year)" },
                            { value: "125", label: "Community partnerships" },
                            { value: "85", label: "Native species reintroduced" },
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

            {/* PARTNERS */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-light">Partnerships</h2>

                    <p className="mt-8 text-lg text-gray-700 max-w-5xl leading-relaxed">
                        Our impact is built through long-term partnerships with
                        conservation, research, and community organizations worldwide.
                    </p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
                        <div className="border border-gray-200 bg-white rounded-2xl p-8">
                            <h3 className="text-xl font-semibold text-black mb-4">
                                We collaborate with:
                            </h3>
                            <ul className="space-y-2">
                                <li>• Conservation NGOs (WWF, The Nature Conservancy)</li>
                                <li>• Government forestry and environmental agencies</li>
                                <li>• Indigenous organizations and land councils</li>
                                <li>• Academic research institutions</li>
                                <li>• Local community restoration groups</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 bg-white rounded-2xl p-8">
                            <h3 className="text-xl font-semibold text-black mb-4">
                                Get involved:
                            </h3>
                            <ul className="space-y-2">
                                <li>• Nominate a restoration site</li>
                                <li>• Submit partnership inquiry</li>
                                <li>• Join volunteer opportunities</li>
                            </ul>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
                                    Submit Nomination
                                </button>
                                <button className="border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                                    Contact Social Impact Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Lastfooter />
        </div>
    );
}
