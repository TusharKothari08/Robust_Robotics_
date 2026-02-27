import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function AISurveillance() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            AI Surveillance & Computer Vision
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            AI Surveillance & Computer Vision
                        </h1>

                        {/* QUICK LINKS */}
                        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                            {["Threat Detection", "Smart Analytics", "Real-Time Monitoring", "Edge AI Systems"].map(
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
                            Robust Robotics AI Surveillance & Computer Vision provides advanced real-time
                            monitoring solutions for defense, smart cities, and commercial infrastructure.
                            Our systems are designed to detect threats, track movement, and deliver actionable
                            intelligence with low latency and high reliability.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            By combining deep learning, multi-sensor fusion, and edge computing, we deliver
                            scalable surveillance solutions that support mission-critical security operations
                            while enabling long-term data analytics and predictive monitoring.
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
                            Intelligence Through Real-Time Vision Analytics
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Real-Time Threat Detection",
                                    desc: "AI systems designed to detect intrusions, suspicious behavior, and security threats with automated alerting and classification.",
                                    points: [
                                        "Intrusion detection and alert escalation",
                                        "Restricted area monitoring",
                                        "Threat classification with AI models",
                                        "Continuous surveillance coverage",
                                    ],
                                },
                                {
                                    title: "Smart City Monitoring & Analytics",
                                    desc: "Advanced urban analytics for traffic, public safety, crowd monitoring, and abnormal behavior detection in real-time.",
                                    points: [
                                        "Traffic flow analysis",
                                        "Crowd density and movement tracking",
                                        "Incident detection and reporting",
                                        "Smart zone monitoring for safety",
                                    ],
                                },
                                {
                                    title: "Thermal & Night Vision Integration",
                                    desc: "Integrated thermal and IR analytics for low visibility operations and 24/7 mission readiness.",
                                    points: [
                                        "Night monitoring with thermal analytics",
                                        "Heat signature classification",
                                        "Fire and smoke detection systems",
                                        "Low visibility tracking capabilities",
                                    ],
                                },
                                {
                                    title: "Facial Recognition & Identity Analytics",
                                    desc: "Optional identity analytics systems for high-security environments, supporting access monitoring and security compliance.",
                                    points: [
                                        "Identity verification analytics",
                                        "Watchlist-based detection systems",
                                        "Access point monitoring",
                                        "Privacy-safe deployment configurations",
                                    ],
                                },
                                {
                                    title: "Edge AI Processing Systems",
                                    desc: "Low-latency edge AI solutions that process surveillance data locally for defense-grade performance and reduced network dependency.",
                                    points: [
                                        "Sub-second inference processing",
                                        "Secure offline deployment support",
                                        "Reduced bandwidth requirements",
                                        "On-premise high security architecture",
                                    ],
                                },
                                {
                                    title: "Predictive Analytics & Risk Forecasting",
                                    desc: "AI analytics platforms that detect patterns, forecast risk zones, and generate security intelligence reports.",
                                    points: [
                                        "Anomaly detection over time",
                                        "Threat pattern analysis",
                                        "Risk heatmap generation",
                                        "Automated incident reporting",
                                    ],
                                },
                            ].map((cap, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-10">
                                    <h3 className="text-2xl font-semibold">{cap.title}</h3>

                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {cap.desc}
                                    </p>

                                    <p className="mt-6 font-semibold text-gray-900">Core Functions:</p>
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

                {/* SOLUTIONS SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Product Portfolio
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Vision Intelligence Platforms
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "VisionShield AI",
                                    subtitle: "Perimeter monitoring and intrusion detection platform",
                                    specs: [
                                        "Real-time intrusion alerts",
                                        "Multi-camera and sensor integration",
                                        "AI threat classification engine",
                                        "Secure dashboard and reporting",
                                    ],
                                },
                                {
                                    title: "CityPulse Analytics",
                                    subtitle: "Smart city monitoring and traffic intelligence suite",
                                    specs: [
                                        "Traffic and crowd monitoring AI",
                                        "Incident detection and alerting",
                                        "City-wide heatmap analytics",
                                        "Cloud-connected reporting system",
                                    ],
                                },
                                {
                                    title: "ThermalGuard XR",
                                    subtitle: "Thermal monitoring and night surveillance platform",
                                    specs: [
                                        "Thermal + IR integration",
                                        "Fire and smoke detection",
                                        "Low visibility tracking",
                                        "Edge AI deployment support",
                                    ],
                                },
                                {
                                    title: "SecureVision Edge Node",
                                    subtitle: "Defense-grade on-premise AI processing unit",
                                    specs: [
                                        "Offline edge processing",
                                        "Secure encryption protocols",
                                        "High-speed AI inference",
                                        "Minimal bandwidth dependency",
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
                            Secure Operations With AI-Driven Surveillance
                        </h2>

                        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl">
                            Whether your mission is defense security, smart city public safety, or commercial
                            infrastructure protection, Robust Robotics delivers scalable computer vision systems
                            designed for reliability, accuracy, and secure deployment.
                        </p>

                        <button className="mt-12 px-10 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition">
                            Request a Vision Intelligence Demo →
                        </button>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
