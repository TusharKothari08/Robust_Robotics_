import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InnovationUpdateDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const updates = {
        "ai-fire-suppression-platform-advances": {
            title: "AI-Powered Fire Suppression Platform Advances",
            date: "January 2026",
            content:
                "Our autonomous aerial firefighting system successfully completed field validation trials. The platform demonstrated rapid threat detection, intelligent route planning, and precision payload deployment in challenging environmental conditions. This milestone marks a major step toward scalable and responsive wildfire suppression solutions.",
        },

        "high-speed-interceptor-architecture-certified": {
            title: "High-Speed Interceptor Architecture Certified",
            date: "December 2025",
            content:
                "Our dual-mode interceptor platform has been certified for aerial threat response in contested operational theaters. The system supports both fiber-guided and fully autonomous flight modes, enabling high-speed interception while maintaining mission flexibility and resilience in GPS-denied environments.",
        },

        "next-generation-gis-capabilities-deployed": {
            title: "Next-Generation GIS Capabilities Deployed",
            date: "November 2025",
            content:
                "Enhanced 360° LiDAR mapping systems are now deployed to deliver real-time digital twins for defense, infrastructure inspection, and urban development. These capabilities enable rapid 3D reconstruction, CAD-ready export, and accurate mission planning across complex environments.",
        },

        "operator-training-systems-expanded": {
            title: "Operator Training Systems Expanded",
            date: "October 2025",
            content:
                "We expanded our operator training program with simulation-based modules designed for tethered drone operations. These training systems enable safe skill development, mission rehearsal, and scenario-based practice to ensure high performance in real operational deployments.",
        },
    };

    const update = updates[id];

    if (!update) {
        return (
            <>
                <Navbar />
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">
                        Update Not Found
                    </h1>
                    <button
                        onClick={() => navigate("/innovation-updates")}
                        className="mt-6 text-blue-700 font-semibold hover:underline"
                    >
                        ← Back to Innovation Updates
                    </button>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-20">
                <button
                    onClick={() => navigate("/innovation-updates")}
                    className="text-blue-700 font-semibold hover:underline"
                >
                    ← Back to Innovation Updates
                </button>

                <p className="mt-8 text-sm font-semibold text-gray-500">
                    {update.date}
                </p>

                <h1 className="mt-4 text-5xl font-light text-gray-900 leading-snug">
                    {update.title}
                </h1>

                <p className="mt-10 text-lg text-gray-700 leading-relaxed">
                    {update.content}
                </p>
            </div>

            <Footer />
        </>
    );
}
