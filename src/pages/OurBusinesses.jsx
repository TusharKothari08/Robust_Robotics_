/**
 * Our Businesses Page
 *
 * Provides an overview of the different sectors and domains in which
 * Robust Robotics operates (Industrial Robotics, AI & Vision, etc.).
 */

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";

const OurBusinesses = () => {
    const navigate = useNavigate();

    const businesses = [
        {
            title: "Industrial Robotics",
            desc: "Automation platforms designed to improve productivity, efficiency, and workplace safety.",
            route: "/business/industrial-robotics",
        },
        {
            title: "AI & Computer Vision",
            desc: "Real-time detection, analytics, and intelligent control systems powered by AI.",
            route: "/business/ai-computer-vision",
        },
        {
            title: "Autonomous Systems",
            desc: "AI-driven navigation, decision-making, and autonomy for complex real-world operations.",
            route: "/business/autonomous-systems",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 text-black min-h-screen">
            <Navbar />

            {/* HERO SECTION */}
            <div className="pt-44 pb-20 max-w-7xl mx-auto px-6">
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
                    Our Businesses
                </p>

                <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
                    Building Robotics Solutions Across Multiple Domains
                </h1>

                <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                    Robust Robotics operates across multiple technology domains, delivering intelligent
                    automation platforms and robotics infrastructure designed to transform industries.
                </p>
            </div>

            {/* BUSINESS CARDS */}
            <div className="max-w-7xl mx-auto px-6 pb-28">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                    {businesses.map((biz, i) => (
                        <div
                            key={i}
                            className="group border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col hover:-translate-y-2"
                        >
                            {/* Top Accent */}
                            <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-700 transition">
                                    {biz.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-10 flex-grow">
                                    {biz.desc}
                                </p>

                                {/* Button Always Bottom */}
                                <button
                                    onClick={() => navigate(biz.route)}
                                    className="mt-auto bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 font-semibold flex items-center justify-center gap-2 transition rounded-xl w-full"
                                >
                                    Learn More <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
            <Lastfooter />
        </div>
    );
};

export default OurBusinesses;
