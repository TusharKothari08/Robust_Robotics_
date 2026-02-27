import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function SmartCitySolutions() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Smart City Solutions
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Smart City Solutions
                        </h1>

                        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                            {["Urban Safety", "Smart Infrastructure", "AI Monitoring", "City Analytics"].map(
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
                            Robust Robotics Smart City Solutions delivers intelligent automation systems
                            that modernize urban environments, strengthen public safety, and optimize
                            infrastructure operations. Our platforms integrate AI, robotics, and sensor fusion
                            to provide real-time situational awareness and long-term planning intelligence.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            From AI traffic analysis to automated street inspection and urban threat detection,
                            we design scalable solutions that help governments and commercial operators build
                            safer, cleaner, and smarter cities.
                        </p>
                    </div>
                </section>

                {/* CAPABILITIES */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Capabilities
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Enabling Smarter, Safer Urban Operations
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "AI Traffic Monitoring",
                                    desc: "Real-time traffic flow detection, congestion prediction, and smart signal integration for improved mobility and reduced city emissions.",
                                    points: [
                                        "Vehicle density analysis",
                                        "Congestion forecasting",
                                        "Incident detection",
                                        "Traffic pattern optimization",
                                    ],
                                },
                                {
                                    title: "Urban Surveillance Systems",
                                    desc: "Advanced AI surveillance solutions designed for smart city security with privacy-safe configuration and automated anomaly detection.",
                                    points: [
                                        "Intrusion detection",
                                        "Crowd monitoring analytics",
                                        "Thermal/night vision support",
                                        "Behavior anomaly alerts",
                                    ],
                                },
                                {
                                    title: "Smart Waste & Cleanliness Automation",
                                    desc: "Robotics-enabled waste detection, cleanup monitoring, and waste hotspot analytics to improve municipal cleanliness efficiency.",
                                    points: [
                                        "Waste detection AI",
                                        "Collection optimization",
                                        "Hotspot reporting dashboards",
                                        "Environmental compliance support",
                                    ],
                                },
                                {
                                    title: "Infrastructure Inspection Intelligence",
                                    desc: "Automated inspection of roads, bridges, tunnels, and pipelines using drones and autonomous rovers with AI-based reporting.",
                                    points: [
                                        "Crack and damage detection",
                                        "3D mapping and LiDAR scanning",
                                        "Predictive repair planning",
                                        "Automated inspection reports",
                                    ],
                                },
                                {
                                    title: "Emergency Response Support",
                                    desc: "Autonomous systems designed to assist police, fire, and disaster response teams with real-time mapping and situational intelligence.",
                                    points: [
                                        "Disaster zone mapping",
                                        "Thermal detection for rescue",
                                        "Real-time video streaming",
                                        "Rapid deployment operations",
                                    ],
                                },
                                {
                                    title: "Environmental Monitoring",
                                    desc: "Continuous monitoring systems for air quality, noise pollution, heat zones, and industrial emissions to support sustainability initiatives.",
                                    points: [
                                        "Air quality tracking",
                                        "Noise zone detection",
                                        "Heatmap generation",
                                        "Industrial compliance monitoring",
                                    ],
                                },
                            ].map((cap, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-10">
                                    <h3 className="text-2xl font-semibold">{cap.title}</h3>
                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">{cap.desc}</p>

                                    <p className="mt-6 font-semibold text-gray-900">Key Features:</p>
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

                {/* SOLUTIONS */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Solutions
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Smart City Deployment Solutions
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "CityVision Command Suite",
                                    subtitle: "Unified monitoring platform for city operators",
                                    specs: [
                                        "AI-powered analytics dashboard",
                                        "Incident reporting automation",
                                        "Multi-camera integration",
                                        "Real-time alerts and logs",
                                    ],
                                },
                                {
                                    title: "Urban Drone Response Unit",
                                    subtitle: "Rapid aerial deployment system",
                                    specs: [
                                        "Launch time under 3 minutes",
                                        "Thermal and EO payloads",
                                        "AI threat detection",
                                        "Encrypted live streaming",
                                    ],
                                },
                                {
                                    title: "Smart Infrastructure Mapper",
                                    subtitle: "Inspection drone with LiDAR mapping",
                                    specs: [
                                        "High resolution 3D scanning",
                                        "Bridge and tunnel analysis",
                                        "AI crack detection system",
                                        "Automated report generation",
                                    ],
                                },
                                {
                                    title: "CleanCity Robotics Fleet",
                                    subtitle: "Autonomous rovers for monitoring and reporting",
                                    specs: [
                                        "Waste hotspot detection",
                                        "Automated patrol scheduling",
                                        "Real-time reporting system",
                                        "City-wide deployment scalability",
                                    ],
                                },
                            ].map((solution, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition"
                                >
                                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                                    <p className="mt-2 text-gray-600 font-medium">{solution.subtitle}</p>

                                    <ul className="mt-6 space-y-2 text-gray-700">
                                        {solution.specs.map((spec, i) => (
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
                            Partner With Us to Build the Smart City of Tomorrow
                        </h2>

                        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl">
                            Whether you are a government agency, infrastructure provider, or commercial operator,
                            Robust Robotics delivers scalable smart city technology built for security, reliability,
                            and operational performance.
                        </p>

                        <button className="mt-12 px-10 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition">
                            Request a Smart City Consultation →
                        </button>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
