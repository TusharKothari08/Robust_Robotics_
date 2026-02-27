import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KnowledgeCenterDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const resources = {
        "autonomous-navigation-gps-denied": {
            type: "Technical Brief",
            title: "Autonomous Navigation in GPS-Denied Environments",
            content:
                "This technical brief explores the use of sensor fusion, inertial navigation, LiDAR, and AI-driven localization techniques that enable autonomous platforms to operate in GPS-denied and electronically contested environments. The document highlights key challenges and solutions for reliable mission execution.",
            actionText: "Download PDF",
        },

        "lidar-digital-twins-case-study": {
            type: "Case Study",
            title: "Rapid Infrastructure Assessment Using LiDAR-Based Digital Twins",
            content:
                "This case study highlights how our LiDAR mapping platform enabled real-time 3D reconstruction and digital twin generation, reducing survey time by 75% in critical infrastructure assessment projects. The approach improved accuracy, reduced cost, and accelerated decision-making.",
            actionText: "Read Full Case Study",
        },

        "fiber-optic-tethering-uav": {
            type: "White Paper",
            title: "The Role of Fiber-Optic Tethering in Modern UAV Operations",
            content:
                "This white paper examines fiber-optic tethering as a key enabler for secure communication, high-bandwidth transmission, and unlimited flight time. It also covers operational benefits for surveillance, perimeter defense, and mission-critical drone deployments.",
            actionText: "Access White Paper",
        },
    };

    const resource = resources[id];

    if (!resource) {
        return (
            <>
                <Navbar />
                <div className="max-w-4xl mx-auto px-6  py-20 text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">
                        Resource Not Found
                    </h1>
                    <button
                        onClick={() => navigate("/knowledge-center")}
                        className="mt-20 text-blue-700 font-semibold hover:underline"
                    >
                        ← Back to Knowledge Center
                    </button>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-20 mt-10">
                <button
                    onClick={() => navigate("/knowledge-center")}
                    className="text-blue-700 font-semibold hover:underline"
                >
                    ← Back to Knowledge Center
                </button>

                <p className="mt-10 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {resource.type}
                </p>

                <h1 className="mt-4 text-5xl font-light text-gray-900 leading-snug">
                    {resource.title}
                </h1>

                <p className="mt-10 text-lg text-gray-700 leading-relaxed">
                    {resource.content}
                </p>

                <button className="mt-12 bg-blue-700 text-white px-10 py-4 font-semibold hover:bg-blue-800 transition">
                    {resource.actionText}
                </button>
            </div>

            <Footer />
        </>
    );
}
