import React from "react";
import { Outlet } from "react-router-dom";

export default function WhatWeDo() {
    return (
        <div className="w-full bg-white text-black">
            

            {/* FIX NAVBAR OVERLAP */}
            <div className="mt-[80px]">
                {/* HERO */}
                <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-gray-50">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1581092919535-7146c4f12c9c?auto=format&fit=crop&w=2000&q=80"
                            alt="Robust Robotics What We Do"
                            className="w-full h-full object-cover opacity-40 scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                        {/* <p className="text-sm tracking-[0.25em] font-semibold text-gray-600 uppercase">
                            [02] WHAT WE DO
                        </p> */}

                        <h1 className="mt-8 text-5xl md:text-7xl font-light leading-tight max-w-6xl">
                            Pioneering Innovation in{" "}
                            <span className="font-semibold text-gray-900">
                                Autonomous Technology
                            </span>
                        </h1>

                        <p className="mt-10 text-lg md:text-2xl text-gray-700 max-w-4xl leading-relaxed">
                            Robust Robotics designs and deploys intelligent autonomous systems
                            that transform complex operational challenges into streamlined
                            solutions — across air, land, and sea.
                        </p>

                        <div className="mt-14 flex flex-wrap gap-5">
                            <button className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-md font-semibold transition shadow-lg">
                                Explore Our Technology
                            </button>

                            <button className="border border-gray-400 hover:border-black text-black px-10 py-4 rounded-md font-semibold transition">
                                Request a Consultation
                            </button>
                        </div>

                        {/* Highlight Cards */}
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                            {[
                                {
                                    title: "Autonomous Platforms",
                                    desc: "Built for reliability in complex and contested environments.",
                                },
                                {
                                    title: "AI & Computer Vision",
                                    desc: "Real-time perception and mission intelligence at the edge.",
                                },
                                {
                                    title: "Mission Control Software",
                                    desc: "Unified command and fleet coordination across domains.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHO WE ARE */}
                <section className="py-28 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-sm tracking-[0.25em] font-semibold text-gray-500 uppercase">
                            Company Overview
                        </p>

                        <h2 className="mt-10 text-4xl md:text-6xl font-light max-w-6xl">
                            Engineering autonomy for defense, environment, and industry.
                        </h2>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Robust Robotics stands at the intersection of advanced engineering
                                and practical innovation. We specialize in developing autonomous
                                systems that operate across multiple domains — aerial, terrestrial,
                                and maritime — delivering mission-critical capabilities.
                            </p>

                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Our integrated approach combines artificial intelligence, computer
                                vision, and adaptive robotics to create platforms that don’t just
                                function — they excel in demanding, real-world conditions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* MISSION */}
                <section className="py-28 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-sm tracking-[0.25em] font-semibold text-gray-500 uppercase">
                            Our Mission
                        </p>

                        <h2 className="mt-10 text-4xl md:text-6xl font-light max-w-6xl">
                            Protect human life through intelligent autonomous technology.
                        </h2>

                        <p className="mt-12 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            To pioneer intelligent autonomous technologies that enhance
                            operational capability, protect human life, and contribute to
                            environmental sustainability through precision-engineered solutions.
                        </p>
                    </div>
                </section>

                {/* CORE CAPABILITIES */}
                <section className="py-28 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-sm tracking-[0.25em] font-semibold text-gray-500 uppercase">
                            Core Capabilities
                        </p>

                        <h2 className="mt-10 text-4xl md:text-6xl font-light">
                            Intelligent Systems Engineering
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            We develop autonomous platforms engineered for complexity. Our
                            solutions integrate advanced sensors, adaptive AI, and robust
                            mechanical systems to deliver reliable performance in challenging
                            operational environments.
                        </p>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Autonomous Aerial Systems",
                                    points: [
                                        "AI-powered navigation and obstacle avoidance",
                                        "Extended endurance platforms with adaptive flight control",
                                        "Multi-sensor integration for situational awareness",
                                    ],
                                },
                                {
                                    title: "Industrial Robotics & Automation",
                                    points: [
                                        "Precision manufacturing and assembly automation",
                                        "AI-driven quality inspection systems",
                                        "Collaborative robotics for human-machine operations",
                                    ],
                                },
                                {
                                    title: "Computer Vision & AI Integration",
                                    points: [
                                        "Real-time object detection and classification",
                                        "Predictive analytics for maintenance and operations",
                                        "Edge computing for low-latency decision making",
                                    ],
                                },
                                {
                                    title: "Autonomous Maritime Systems",
                                    points: [
                                        "Subsurface reconnaissance and surveillance platforms",
                                        "Environmental monitoring and data collection",
                                        "Compact deployable underwater vehicles",
                                    ],
                                },
                                {
                                    title: "Specialized Ground Robotics",
                                    points: [
                                        "Environmental remediation platforms",
                                        "Heavy-duty payload transport systems",
                                        "All-terrain autonomous navigation",
                                    ],
                                },
                            ].map((cap, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-10 hover:shadow-xl transition group"
                                >
                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        {cap.title}
                                    </h3>

                                    <ul className="mt-6 space-y-3 text-gray-700 leading-relaxed list-disc pl-6">
                                        {cap.points.map((p, i) => (
                                            <li key={i}>{p}</li>
                                        ))}
                                    </ul>

                                    <div className="mt-10 flex justify-end">
                                        <span className="text-xl text-gray-400 group-hover:text-black transition">
                                            →
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRODUCTS & SOLUTIONS */}
                <section className="py-28 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-sm tracking-[0.25em] font-semibold text-gray-500 uppercase">
                            Products & Solutions
                        </p>

                        <h2 className="mt-10 text-4xl md:text-6xl font-light">
                            Platforms built for mission execution.
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our products are modular, scalable, and engineered for extreme
                            environments. Each system is designed with reliability, redundancy,
                            and mission flexibility.
                        </p>

                        <div className="mt-16 space-y-10">
                            {[
                                {
                                    title: "Unmanned Aerial Vehicles (UAV Systems)",
                                    desc: "Persistent surveillance, rapid deployment, and multi-mission flexibility for defense and commercial operations.",
                                    list: [
                                        "VTOL configurations",
                                        "Autonomous flight planning with dynamic re-routing",
                                        "Extended flight endurance (4–8 hours)",
                                        "Modular payload integration up to 15kg",
                                        "BVLOS operation capability",
                                        "Real-time encrypted data transmission",
                                        "All-weather operational capability",
                                    ],
                                },
                                {
                                    title: "Industrial Robotics",
                                    desc: "Automation solutions that increase efficiency, ensure quality, and reduce operational costs.",
                                    list: [
                                        "6-axis articulated robots with 0.02mm repeatability",
                                        "Payload capacity: 5kg to 500kg configurations",
                                        "Collaborative safety systems",
                                        "AI-powered quality inspection (99.8% detection)",
                                        "Integration with manufacturing systems (MES)",
                                    ],
                                },
                                {
                                    title: "Computer Vision & AI Systems",
                                    desc: "Real-time perception and decision intelligence optimized for edge deployment.",
                                    list: [
                                        "Multi-spectral imaging (visible, thermal, infrared)",
                                        "3D depth perception and spatial mapping",
                                        "Object detection and classification algorithms",
                                        "Sub-50ms latency inference",
                                        "Secure encrypted data handling",
                                    ],
                                },
                                {
                                    title: "Autonomous Underwater Vehicles (AUV)",
                                    desc: "Compact submersible platforms for underwater reconnaissance and monitoring missions.",
                                    list: [
                                        "Operating depth: up to 200 meters",
                                        "Endurance: 12–36 hours mission duration",
                                        "INS + Doppler velocity log navigation",
                                        "Obstacle detection sonar",
                                        "Modular payload bay system",
                                    ],
                                },
                                {
                                    title: "Environmental Robotics",
                                    desc: "Autonomous ground platforms for coastal cleanup and industrial transport.",
                                    list: [
                                        "AI-powered debris detection and classification",
                                        "Selective collection for environmental safety",
                                        "Payload transport rovers up to 2,000kg",
                                        "LiDAR-based mapping and localization",
                                        "Fleet coordination support",
                                    ],
                                },
                            ].map((product, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-2xl p-12 hover:shadow-xl transition"
                                >
                                    <h3 className="text-3xl font-semibold text-gray-900">
                                        {product.title}
                                    </h3>

                                    <p className="mt-5 text-gray-700 text-lg leading-relaxed max-w-5xl">
                                        {product.desc}
                                    </p>

                                    <ul className="mt-8 space-y-2 text-gray-700 list-disc pl-6 text-lg">
                                        {product.list.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INDUSTRIES WE SERVE */}
                <section className="py-28 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-sm tracking-[0.25em] font-semibold text-gray-500 uppercase">
                            Industries We Serve
                        </p>

                        <h2 className="mt-10 text-4xl md:text-6xl font-light">
                            Solutions across critical sectors.
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Defense & Security",
                                    desc: "Perimeter surveillance, reconnaissance, intelligence gathering, and force protection.",
                                },
                                {
                                    title: "Environmental Services",
                                    desc: "Coastal cleanup, wildlife monitoring, pollution assessment, and climate research.",
                                },
                                {
                                    title: "Industrial & Manufacturing",
                                    desc: "Automation, inspection, quality assurance, and predictive maintenance systems.",
                                },
                                {
                                    title: "Emergency Response",
                                    desc: "Disaster assessment, mapping, hazard detection, and search & rescue platforms.",
                                },
                                {
                                    title: "Infrastructure",
                                    desc: "Pipeline, cable, bridge, and powerline inspection and monitoring solutions.",
                                },
                            ].map((industry, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-10 hover:shadow-xl transition"
                                >
                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        {industry.title}
                                    </h3>
                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {industry.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE */}
                <section className="py-28 bg-gray-50 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-sm tracking-[0.25em] font-semibold text-gray-500 uppercase">
                            Why Choose Robust Robotics
                        </p>

                        <h2 className="mt-10 text-4xl md:text-6xl font-light">
                            Built on reliability. Driven by innovation.
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Proven Engineering Excellence",
                                    desc: "Robust mechanical design, redundancy, and extensive testing protocols ensure reliability in the field.",
                                },
                                {
                                    title: "Mission-First Design Philosophy",
                                    desc: "Every platform begins with understanding the operational challenge. We build purpose-built solutions.",
                                },
                                {
                                    title: "Continuous Innovation",
                                    desc: "We invest in R&D, advancing autonomy, sensors, and AI so customers benefit from platform upgrades.",
                                },
                                {
                                    title: "Global Support Network",
                                    desc: "From consultation to deployment training and maintenance, we ensure your systems remain mission-ready.",
                                },
                                {
                                    title: "Security & Compliance",
                                    desc: "We maintain strong cybersecurity standards and follow international export compliance practices.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-10 hover:shadow-xl transition"
                                >
                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-28 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-sm tracking-[0.25em] font-semibold text-gray-500 uppercase">
                            Contact & Engagement
                        </p>

                        <h2 className="mt-10 text-4xl md:text-6xl font-light">
                            Let's Discuss Your Requirements
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
                            Whether you're facing complex surveillance challenges, seeking industrial automation,
                            or require specialized autonomous platforms — our team is ready to engineer your solution.
                        </p>

                        <div className="mt-14 flex justify-center gap-6 flex-wrap">
                            <button className="bg-black hover:bg-gray-900 text-white px-12 py-4 rounded-md font-semibold transition shadow-lg">
                                Request Consultation
                            </button>

                            <button className="border border-gray-400 hover:border-black px-12 py-4 rounded-md font-semibold transition">
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
    );
}
