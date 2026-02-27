import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function KnowledgeCenterPage() {
    const navigate = useNavigate();

    const resources = [
        {
            type: "Technical Brief",
            title: "Autonomous Navigation in GPS-Denied Environments",
            desc: "Exploring sensor fusion and AI-driven positioning for reliable operation in contested zones.",
            action: "Download PDF",
            route: "/knowledge-center/autonomous-navigation-gps-denied",
        },
        {
            type: "Case Study",
            title: "Rapid Infrastructure Assessment Using LiDAR-Based Digital Twins",
            desc: "How our 3D mapping platform reduced survey time by 75% for critical infrastructure projects.",
            action: "Read Case Study",
            route: "/knowledge-center/lidar-digital-twins-case-study",
        },
        {
            type: "White Paper",
            title: "The Role of Fiber-Optic Tethering in Modern UAV Operations",
            desc: "Analysis of secure communications and unlimited flight time for specialized mission profiles.",
            action: "Access White Paper",
            route: "/knowledge-center/fiber-optic-tethering-uav",
        },
    ];

    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-20 mt-10">
                <h1 className="mt-10 text-5xl font-light text-gray-900">
                    Insights from the Field
                </h1>

                <p className="mt-6 text-lg text-gray-600 max-w-4xl leading-relaxed">
                    Explore our latest technical briefs, white papers, and case studies
                    developed from real-world operational deployments and research.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {resources.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-xl p-10 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
                        >
                            <div>
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                    {item.type}
                                </p>

                                <h2 className="mt-5 text-2xl font-semibold text-gray-900">
                                    {item.title}
                                </h2>

                                <p className="mt-5 text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            <button
                                onClick={() => navigate(item.route)}
                                className="mt-10 text-blue-700 font-semibold hover:underline flex items-center gap-2"
                            >
                                {item.action} <span className="text-lg">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
