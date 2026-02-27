/**
 * About Us Page
 *
 * Displays the company mission, vision, milestones and CTA.
 */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

const milestones = [
    {
        year: "2022",
        text: "Robust Robotics founded with a vision to transform intelligent automation.",
    },
    {
        year: "2023",
        text: "Developed our first AI-powered robotic platform.",
    },
    {
        year: "2024",
        text: "Partnered with industry leaders to deploy automation solutions.",
    },
    {
        year: "2025",
        text: "Expanded R&D to accelerate next-generation robotics systems.",
    },
];

const AboutUs = () => {
    return (
        <div className="bg-white text-black min-h-screen">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-36 pb-14 max-w-7xl mx-auto px-6">
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
                    About Robust Robotics
                </p>

                <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight mb-6">
                    Building Intelligent Robotics <br className="hidden md:block" />
                    That Works in the Real World
                </h1>

                <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed mb-8">
                    Robust Robotics is an engineering-driven company focused on designing autonomous
                    systems, industrial robotics platforms, and AI-powered perception solutions.
                    We build robotics systems that move beyond prototypes — into deployment.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link
                        to="/careers"
                        className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 font-semibold rounded-lg transition"
                    >
                        Explore Careers
                    </Link>

                    <Link
                        to="/contact"
                        className="border border-gray-300 hover:border-blue-700 hover:text-blue-700 px-8 py-3 font-semibold rounded-lg transition bg-white"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            {/* IMAGE SECTION */}
            <section className="max-w-7xl mx-auto px-6 pb-16">
                <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070"
                        alt="Robust Robotics Team"
                        className="w-full h-[300px] md:h-[420px] object-cover"
                    />

                    <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                </div>
            </section>

            {/* MISSION + VISION + VALUES */}
            <section className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-8">
                            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">
                                Mission
                            </p>
                            <h2 className="text-2xl font-light mb-4 text-gray-900">
                                Engineering Impact
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                To accelerate the world’s transition toward intelligent automation by
                                developing robotics systems that perceive, learn, and adapt in real-world
                                environments.
                            </p>
                        </div>

                        <div className="border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-8">
                            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">
                                Vision
                            </p>
                            <h2 className="text-2xl font-light mb-4 text-gray-900">
                                Humans + Machines
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We envision a future where humans and intelligent machines collaborate seamlessly,
                                improving safety, productivity, and innovation across industries.
                            </p>
                        </div>

                        <div className="border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-8">
                            <p className="text-sm font-semibold text-blue-700 uppercase tracking-widest mb-3">
                                Focus
                            </p>
                            <h2 className="text-2xl font-light mb-4 text-gray-900">
                                Real Deployment
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We build complete robotics platforms — hardware, software, AI, and control systems —
                                designed for deployment, not just demos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MILESTONES */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
                            Our Journey
                        </p>

                        <h2 className="text-3xl md:text-4xl font-light mb-4">
                            Key Milestones
                        </h2>

                        <p className="text-gray-600 leading-relaxed max-w-lg">
                            We are growing rapidly through engineering execution, research-driven innovation,
                            and real-world problem solving.
                        </p>
                    </div>

                    <div className="space-y-10 border-l border-gray-300 pl-8">
                        {milestones.map((item, i) => (
                            <div key={i} className="relative">
                                <span className="absolute -left-[13px] top-1.5 w-6 h-6 bg-blue-700 rounded-full border-4 border-white"></span>

                                <p className="text-blue-700 font-semibold text-sm mb-2">
                                    {item.year}
                                </p>

                                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="border border-gray-200 bg-white rounded-2xl shadow-sm p-10 md:p-14 text-center">
                        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
                            Careers at Robust Robotics
                        </p>

                        <h2 className="text-3xl md:text-4xl font-light mb-4">
                            Build With Us
                        </h2>

                        <p className="text-gray-600 mb-8 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                            If you love building real robotics systems, solving engineering challenges,
                            and working across AI, hardware, and autonomy — Robust Robotics is the place for you.
                        </p>

                        <Link
                            to="/careers"
                            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-3 font-semibold rounded-lg transition"
                        >
                            View Careers
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <Lastfooter />
        </div>
    );
};

export default AboutUs;
