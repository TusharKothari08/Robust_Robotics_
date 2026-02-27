import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function AutonomousMobility() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Autonomous Mobility Systems
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Autonomous Mobility Systems
                        </h1>

                        {/* QUICK LINKS */}
                        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                            {["Ground Robotics", "Fleet Autonomy", "All-Terrain Navigation", "Smart Logistics"].map(
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
                            Robust Robotics Autonomous Mobility Systems delivers intelligent ground platforms
                            engineered for defense operations, smart city monitoring, and commercial logistics.
                            Our vehicles operate reliably in dynamic environments using AI navigation, sensor fusion,
                            and real-time obstacle avoidance.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            From urban environments to industrial facilities and remote terrain, our mobility platforms
                            provide scalable autonomy for patrol missions, heavy payload transport, and high-risk operations.
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
                            Ground Autonomy Built for Complex Environments
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "All-Terrain Navigation",
                                    desc: "Autonomous navigation designed for rough terrain, urban environments, and industrial sites using LiDAR mapping and sensor fusion.",
                                    points: [
                                        "LiDAR-based mapping and localization",
                                        "Obstacle avoidance and route planning",
                                        "All-weather rugged operation",
                                        "Slope and uneven surface handling",
                                    ],
                                },
                                {
                                    title: "Autonomous Patrol Operations",
                                    desc: "Security patrol platforms designed for smart cities, defense zones, and restricted facilities with continuous monitoring capability.",
                                    points: [
                                        "Autonomous patrol scheduling",
                                        "Restricted zone monitoring",
                                        "Intrusion detection integration",
                                        "Real-time operator alerts",
                                    ],
                                },
                                {
                                    title: "Heavy Payload Transport Systems",
                                    desc: "Industrial-grade transport platforms built for commercial and defense logistics operations where human exposure is risky or inefficient.",
                                    points: [
                                        "Payload capacity up to 2000kg",
                                        "Fleet coordination and scheduling",
                                        "Indoor and GPS-denied navigation",
                                        "Rugged safety systems",
                                    ],
                                },
                                {
                                    title: "Secure Remote Monitoring & Control",
                                    desc: "Mission-ready control systems enabling secure remote operations, fleet management, and emergency override functionality.",
                                    points: [
                                        "Encrypted remote command system",
                                        "Live telemetry and diagnostics",
                                        "Emergency stop and safety controls",
                                        "Remote override capability",
                                    ],
                                },
                                {
                                    title: "Fleet Coordination & Swarm Mobility",
                                    desc: "Multi-robot coordination for large-scale deployment operations including smart logistics, patrol, and industrial automation.",
                                    points: [
                                        "Multi-vehicle mission coordination",
                                        "Automated fleet path planning",
                                        "Collision avoidance between units",
                                        "Scalable deployment architecture",
                                    ],
                                },
                                {
                                    title: "Predictive Maintenance Intelligence",
                                    desc: "AI-driven analytics systems that detect component degradation early and optimize vehicle maintenance scheduling.",
                                    points: [
                                        "Component health monitoring",
                                        "Predictive maintenance alerts",
                                        "Operational downtime reduction",
                                        "Fleet performance analytics",
                                    ],
                                },
                            ].map((cap, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-10">
                                    <h3 className="text-2xl font-semibold">{cap.title}</h3>

                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {cap.desc}
                                    </p>

                                    <p className="mt-6 font-semibold text-gray-900">Core Features:</p>
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
                            Autonomous Ground Platforms
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "RoverGuard PX",
                                    subtitle: "Autonomous security patrol rover",
                                    specs: [
                                        "360-degree sensor monitoring",
                                        "Night operation support",
                                        "Intrusion detection AI integration",
                                        "Encrypted remote control system",
                                    ],
                                },
                                {
                                    title: "CargoMover XR",
                                    subtitle: "Heavy-duty payload transport vehicle",
                                    specs: [
                                        "Payload: up to 2000kg",
                                        "All-terrain rugged chassis",
                                        "Fleet coordination capability",
                                        "12-hour endurance operation",
                                    ],
                                },
                                {
                                    title: "UrbanScout S1",
                                    subtitle: "Smart city monitoring and inspection rover",
                                    specs: [
                                        "AI camera and monitoring payload",
                                        "Infrastructure inspection analytics",
                                        "Autonomous patrol scheduling",
                                        "Cloud reporting integration",
                                    ],
                                },
                                {
                                    title: "FleetAutonomy Suite",
                                    subtitle: "Multi-vehicle coordination platform",
                                    specs: [
                                        "Centralized fleet management dashboard",
                                        "Autonomous mission scheduling",
                                        "Collision avoidance algorithms",
                                        "Secure encrypted communications",
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

                {/* CTA SECTION */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Engagement
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Deploy Autonomous Mobility at Scale
                        </h2>

                        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics mobility platforms are engineered to deliver consistent autonomy in
                            smart cities, defense zones, and commercial environments. We provide scalable solutions
                            for patrol operations, logistics transport, and high-risk industrial automation.
                        </p>

                        <button className="mt-12 px-10 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition">
                            Request an Autonomous Mobility Demo →
                        </button>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
