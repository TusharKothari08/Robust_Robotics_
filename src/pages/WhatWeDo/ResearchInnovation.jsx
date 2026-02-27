import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function ResearchInnovation() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Research & Innovation (R&D)
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Research & Innovation (R&D)
                        </h1>

                        {/* QUICK LINKS */}
                        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                            {["AI Research", "Autonomous Systems", "Swarm Technology", "Future Materials"].map(
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
                            Robust Robotics Research & Innovation drives the future of autonomy through advanced engineering,
                            AI development, and mission-first technology research. Our R&D teams work across smart city systems,
                            defense applications, and commercial automation to develop next-generation robotics platforms.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            We focus on scalable autonomy, secure AI deployment, and next-level robotics performance. Our research
                            programs are built to deliver real-world operational impact—not just experimental prototypes.
                        </p>
                    </div>
                </section>

                {/* RESEARCH AREAS */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Focus Areas
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Advancing the Next Generation of Autonomous Intelligence
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Swarm Intelligence & Coordination",
                                    desc: "Autonomous swarm systems designed to coordinate multiple robotic units for large-scale monitoring and operational missions.",
                                    points: [
                                        "Multi-agent decision-making",
                                        "Coordinated mission deployment",
                                        "Swarm path optimization",
                                        "Distributed intelligence frameworks",
                                    ],
                                },
                                {
                                    title: "Edge AI & Secure Autonomy",
                                    desc: "AI models optimized for defense and smart city operations with secure low-latency inference and minimal network dependence.",
                                    points: [
                                        "Real-time edge inference",
                                        "Secure offline AI deployments",
                                        "Model optimization for embedded systems",
                                        "Defense-grade encryption architecture",
                                    ],
                                },
                                {
                                    title: "GPS-Denied Navigation Systems",
                                    desc: "Advanced navigation systems engineered for environments where GPS is unavailable, unreliable, or compromised.",
                                    points: [
                                        "LiDAR SLAM navigation",
                                        "Vision-based localization",
                                        "Sensor fusion path planning",
                                        "Autonomous terrain adaptation",
                                    ],
                                },
                                {
                                    title: "Autonomous Maritime Intelligence",
                                    desc: "Underwater autonomy research to improve navigation, endurance, and sensor accuracy in complex marine conditions.",
                                    points: [
                                        "Sonar-based navigation research",
                                        "Silent propulsion optimization",
                                        "Deep-water autonomy algorithms",
                                        "Marine sensor integration",
                                    ],
                                },
                                {
                                    title: "Energy Harvesting & Endurance Systems",
                                    desc: "Research into battery performance, hybrid propulsion, and energy harvesting solutions to extend operational mission time.",
                                    points: [
                                        "Solar-electric hybrid platforms",
                                        "Battery optimization research",
                                        "Lightweight structural materials",
                                        "Extended mission endurance systems",
                                    ],
                                },
                                {
                                    title: "Explainable AI & Ethical Autonomy",
                                    desc: "Developing AI systems that provide transparent reasoning and decision logs for accountability in mission-critical operations.",
                                    points: [
                                        "Explainable AI models",
                                        "Decision trace reporting",
                                        "Audit-ready operational logs",
                                        "Ethical autonomy compliance frameworks",
                                    ],
                                },
                            ].map((cap, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-10">
                                    <h3 className="text-2xl font-semibold">{cap.title}</h3>

                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {cap.desc}
                                    </p>

                                    <p className="mt-6 font-semibold text-gray-900">Key Research Goals:</p>
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

                {/* INITIATIVES */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Innovation Programs
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Strategic Innovation Initiatives
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Smart City Autonomy Program",
                                    subtitle: "Urban automation and monitoring technologies",
                                    specs: [
                                        "Autonomous urban inspection robotics",
                                        "Traffic intelligence AI research",
                                        "City-wide surveillance integration",
                                        "Emergency response automation systems",
                                    ],
                                },
                                {
                                    title: "Defense Autonomy Program",
                                    subtitle: "Secure mission-ready autonomy systems",
                                    specs: [
                                        "Autonomous patrol and reconnaissance",
                                        "Secure edge AI for threat detection",
                                        "Swarm technology for large coverage zones",
                                        "Encrypted mission communication research",
                                    ],
                                },
                                {
                                    title: "Commercial Automation Program",
                                    subtitle: "Industry-ready robotics performance optimization",
                                    specs: [
                                        "Warehouse robotics research",
                                        "Predictive maintenance AI systems",
                                        "Robotic inspection automation",
                                        "Heavy payload mobility development",
                                    ],
                                },
                                {
                                    title: "Marine Intelligence Program",
                                    subtitle: "Autonomous underwater monitoring innovation",
                                    specs: [
                                        "Next-gen sonar mapping algorithms",
                                        "Silent propulsion optimization",
                                        "Deep-water sensor fusion",
                                        "Port security monitoring automation",
                                    ],
                                },
                            ].map((initiative, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition"
                                >
                                    <h3 className="text-2xl font-semibold">{initiative.title}</h3>
                                    <p className="mt-2 text-gray-600 font-medium">{initiative.subtitle}</p>

                                    <ul className="mt-6 space-y-2 text-gray-700">
                                        {initiative.specs.map((spec, i) => (
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
                            Collaboration
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Partner With Our Innovation Teams
                        </h2>

                        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics collaborates with government agencies, academic research institutions,
                            and commercial industry leaders to develop autonomous systems that shape the future of technology.
                            Our innovation programs are designed to deliver scalable, secure, and real-world deployable solutions.
                        </p>

                        <button className="mt-12 px-10 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition">
                            Explore Research Partnerships →
                        </button>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
