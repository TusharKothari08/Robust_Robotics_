import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function CommercialRobotics() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Commercial Robotics & Automation
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Commercial Robotics & Automation
                        </h1>

                        {/* QUICK LINKS */}
                        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                            {["Industrial Automation", "Warehouse Logistics", "Quality Inspection", "Facility Intelligence"].map(
                                (item, index) => (
                                    <button
                                        key={index}
                                        className="px-6 py-3 border border-gray-300 hover:border-gray-500 transition bg-white"
                                    >
                                        {item}
                                    </button>
                                )
                            )}
                        </div>

                        <p className="mt-12 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics Commercial Robotics & Automation delivers intelligent systems designed to
                            increase productivity, reduce operational risk, and improve quality assurance in high-demand
                            commercial environments.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            From warehouse automation to AI-driven inspection systems, our solutions provide measurable
                            performance improvements across manufacturing, logistics, energy, and industrial operations.
                            We build platforms that integrate seamlessly into existing workflows while offering future-ready scalability.
                        </p>
                    </div>
                </section>

                {/* CAPABILITIES SECTION */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Capabilities
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Automation That Drives Commercial Performance
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Warehouse & Logistics Automation",
                                    desc: "Autonomous systems designed to improve logistics operations with fleet coordination, smart routing, and automated material handling.",
                                    points: [
                                        "Autonomous transport vehicles",
                                        "Smart warehouse mapping",
                                        "Fleet scheduling and coordination",
                                        "Dynamic obstacle avoidance",
                                    ],
                                },
                                {
                                    title: "Robotic Manufacturing Automation",
                                    desc: "Precision robotics solutions for assembly lines, fabrication systems, and high-speed production environments.",
                                    points: [
                                        "Robotic arms and manipulators",
                                        "Assembly and packaging automation",
                                        "Tool-changing systems",
                                        "Repeatability and precision control",
                                    ],
                                },
                                {
                                    title: "AI-Powered Quality Inspection",
                                    desc: "Computer vision inspection platforms that detect defects, ensure compliance, and improve product consistency.",
                                    points: [
                                        "Defect detection and classification",
                                        "Dimensional verification systems",
                                        "Surface finish evaluation",
                                        "Real-time production monitoring",
                                    ],
                                },
                                {
                                    title: "Industrial Facility Intelligence",
                                    desc: "Smart facility monitoring using autonomous systems for safety inspection, asset tracking, and predictive maintenance.",
                                    points: [
                                        "Predictive maintenance analytics",
                                        "Thermal equipment monitoring",
                                        "Hazard detection and reporting",
                                        "Automated inspection scheduling",
                                    ],
                                },
                                {
                                    title: "Heavy Payload Transport Rovers",
                                    desc: "Rugged autonomous transport platforms built for harsh industrial environments and heavy load operations.",
                                    points: [
                                        "Payload capacity up to 2000kg",
                                        "All-terrain rugged operation",
                                        "Indoor GPS-denied navigation",
                                        "Explosion-proof configurations",
                                    ],
                                },
                                {
                                    title: "Energy & Utility Automation",
                                    desc: "Inspection and monitoring solutions for power grids, renewable energy assets, pipelines, and critical utility networks.",
                                    points: [
                                        "Solar farm monitoring",
                                        "Powerline inspection drones",
                                        "Pipeline anomaly detection",
                                        "Utility maintenance optimization",
                                    ],
                                },
                            ].map((cap, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-10">
                                    <h3 className="text-2xl font-semibold">{cap.title}</h3>

                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {cap.desc}
                                    </p>

                                    <p className="mt-6 font-semibold text-gray-900">Key Solutions:</p>
                                    <ul className="mt-4 space-y-2 text-gray-700">
                                        {cap.points.map((p, i) => (
                                            <li key={i}>• {p}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRODUCT PORTFOLIO */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Product Portfolio
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Commercial Platforms
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "RoboLogix Fleet",
                                    subtitle: "Warehouse automation and logistics rover network",
                                    specs: [
                                        "Fleet size support: up to 50 units",
                                        "AI navigation and smart routing",
                                        "Load capacity: 500kg per unit",
                                        "24/7 operational support system",
                                    ],
                                },
                                {
                                    title: "VisionInspect Pro",
                                    subtitle: "AI vision inspection and defect detection suite",
                                    specs: [
                                        "Defect detection accuracy: 99.5%",
                                        "Real-time production analytics",
                                        "Surface and dimensional inspection",
                                        "Integration with MES/ERP systems",
                                    ],
                                },
                                {
                                    title: "HeavyMover XR",
                                    subtitle: "Industrial autonomous heavy transport platform",
                                    specs: [
                                        "Payload: 1000kg to 2000kg",
                                        "LiDAR + sensor fusion navigation",
                                        "12-hour battery endurance",
                                        "All-terrain rugged operation",
                                    ],
                                },
                                {
                                    title: "FactoryAutomation Core",
                                    subtitle: "Robotic arms and automation integration systems",
                                    specs: [
                                        "6-axis robotic automation support",
                                        "Assembly and packaging workflows",
                                        "Precision control and repeatability",
                                        "Tool changing modular system",
                                    ],
                                },
                            ].map((platform, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition"
                                >
                                    <h3 className="text-2xl font-semibold">{platform.title}</h3>
                                    <p className="mt-2 text-gray-600 font-medium">{platform.subtitle}</p>

                                    <ul className="mt-6 space-y-2 text-gray-700">
                                        {platform.specs.map((spec, i) => (
                                            <li key={i}>• {spec}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Engagement
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Transform Commercial Operations Through Automation
                        </h2>

                        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics works with industries to implement robotics solutions that reduce downtime,
                            increase productivity, and create safer operational environments. Whether your focus is logistics,
                            manufacturing, or facility intelligence, we provide tailored solutions engineered for performance.
                        </p>

                        <button className="mt-12 px-10 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition">
                            Request an Automation Consultation →
                        </button>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
