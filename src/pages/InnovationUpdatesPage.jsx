import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function InnovationUpdatesPage() {
    const navigate = useNavigate();

    const updates = [
        {
            id: "ai-fire-suppression-platform-advances",
            title: "AI-Powered Fire Suppression Platform Advances",
            date: "January 2026",
            desc: "Our autonomous aerial firefighting system completed field validation, demonstrating rapid threat detection and precision payload deployment in challenging environmental conditions.",
        },
        {
            id: "high-speed-interceptor-architecture-certified",
            title: "High-Speed Interceptor Architecture Certified",
            date: "December 2025",
            desc: "Dual-mode interceptor platform validated for aerial threat response in contested operational theaters, featuring both fiber-guided and autonomous flight modes.",
        },
        {
            id: "next-generation-gis-capabilities-deployed",
            title: "Next-Generation GIS Capabilities Deployed",
            date: "November 2025",
            desc: "Enhanced 360° LiDAR mapping platform now delivers real-time digital twins for defense, infrastructure, and urban development applications.",
        },
        {
            id: "operator-training-systems-expanded",
            title: "Operator Training Systems Expanded",
            date: "October 2025",
            desc: "New simulation-based training modules enable safe skill development for advanced tethered drone operations.",
        },
    ];

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-20 mt-10">
                <p className="text-sm font-semibold tracking-widest text-gray-800 uppercase">
                    [05] INNOVATION UPDATES
                </p>

                <h1 className="mt-10 text-5xl font-light text-gray-900">
                    Advancing the State of the Art
                </h1>

                <p className="mt-6 text-lg text-gray-600 max-w-4xl leading-relaxed">
                    Explore our latest technology milestones, deployments, and advancements
                    across autonomous systems, AI, and mission-critical platforms.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {updates.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-xl p-10 shadow-sm hover:shadow-lg transition"
                        >
                            <p className="text-sm text-gray-500 font-semibold">
                                {item.date}
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                                {item.title}
                            </h2>

                            <p className="mt-5 text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>

                            <button
                                onClick={() => navigate(`/innovation-updates/${item.id}`)}
                                className="mt-8 text-blue-700 font-semibold hover:underline flex items-center gap-2"
                            >
                                Learn More <span className="text-lg">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
