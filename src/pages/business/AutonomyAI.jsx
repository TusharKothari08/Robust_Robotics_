import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function AutonomyArtificialIntelligence() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* PAGE WRAPPER */}
            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Autonomy & Artificial Intelligence
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Autonomy & Artificial Intelligence
                        </h1>

                        <p className="mt-12 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics AI & Autonomy division develops the intelligent software that enables our
                            platforms to navigate complex terrain, make real-time decisions, and operate safely without
                            constant human intervention.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            With 65+ AI researchers, machine learning engineers, and autonomy specialists, we're advancing
                            the state of the art in environmental robotics—from computer vision that identifies optimal
                            planting locations to predictive algorithms that maximize restoration success.
                        </p>
                    </div>
                </section>

                {/* AI CAPABILITIES */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            AI Capabilities
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Intelligence Built for Autonomous Field Operations
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Computer Vision */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">
                                    Computer Vision & Terrain Classification
                                </h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Deep learning models that analyze camera and sensor data in real-time to classify terrain
                                    types, identify obstacles, and select optimal seed deployment locations.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Vision Applications:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Terrain type identification (soil, rock, vegetation)</li>
                                    <li>• Slope and erosion assessment</li>
                                    <li>• Obstacle detection and avoidance</li>
                                    <li>• Existing vegetation mapping</li>
                                    <li>• Optimal planting site selection</li>
                                </ul>
                            </div>

                            {/* Autonomous Navigation */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Autonomous Navigation</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    GPS-denied navigation systems using visual-inertial odometry, SLAM (Simultaneous Localization
                                    and Mapping), and sensor fusion for reliable operation in forests, canyons, and areas with
                                    poor satellite coverage.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Navigation Technologies:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Visual-inertial odometry</li>
                                    <li>• LiDAR-based SLAM</li>
                                    <li>• Terrain-relative navigation</li>
                                    <li>• Magnetic compass compensation</li>
                                    <li>• Multi-sensor fusion</li>
                                </ul>
                            </div>

                            {/* Path Planning */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Path Planning & Optimization</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Intelligent algorithms that calculate efficient flight paths considering wind patterns,
                                    terrain, mission objectives, and battery constraints.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Planning Algorithms:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Coverage path planning</li>
                                    <li>• Dynamic obstacle avoidance</li>
                                    <li>• Wind-optimal routing</li>
                                    <li>• Battery-aware planning</li>
                                    <li>• Multi-objective optimization</li>
                                </ul>
                            </div>

                            {/* Predictive Analytics */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Predictive Analytics</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Machine learning models predicting germination success, vegetation growth rates, and ecosystem
                                    recovery based on environmental factors and historical data.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Predictive Models:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Germination probability</li>
                                    <li>• Growth rate forecasting</li>
                                    <li>• Optimal planting timing</li>
                                    <li>• Species suitability analysis</li>
                                    <li>• Climate impact assessment</li>
                                </ul>
                            </div>

                            {/* Swarm Intelligence */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Swarm Intelligence</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Coordinated multi-drone operations where autonomous agents communicate and collaborate
                                    to maximize coverage efficiency and mission success.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Swarm Capabilities:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Distributed task allocation</li>
                                    <li>• Collision avoidance</li>
                                    <li>• Formation flying</li>
                                    <li>• Adaptive coverage</li>
                                    <li>• Fault tolerance (continue if one unit fails)</li>
                                </ul>
                            </div>

                            {/* Edge Computing */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Edge Computing</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    On-board AI processing enabling real-time decision-making without reliance on ground station
                                    connectivity or cloud computing.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Edge AI Benefits:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Real-time response</li>
                                    <li>• Reduced bandwidth requirements</li>
                                    <li>• Continued operation in remote areas</li>
                                    <li>• Enhanced privacy/security</li>
                                    <li>• Lower latency</li>
                                </ul>
                            </div>

                            {/* Continual Learning */}
                            <div className="bg-white border border-gray-200 p-10 md:col-span-2">
                                <h3 className="text-2xl font-semibold">Continual Learning</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Systems that improve over time by learning from each mission, adapting to regional conditions,
                                    and incorporating operator feedback.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Learning Systems:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Mission outcome analysis</li>
                                    <li>• Performance optimization</li>
                                    <li>• Regional adaptation</li>
                                    <li>• Operator preference learning</li>
                                    <li>• Failure mode analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* R&D SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Research & Development
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Advancing the Future of Autonomy
                        </h2>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-gray-50 border border-gray-200 p-10">
                                <h3 className="text-xl font-semibold">Current R&D Focus</h3>
                                <ul className="mt-6 space-y-2 text-gray-700 text-lg">
                                    <li>• Reinforcement learning for optimal seed placement</li>
                                    <li>• Generative AI for mission planning</li>
                                    <li>• Hyperspectral image analysis</li>
                                    <li>• Autonomous charging/battery swap</li>
                                    <li>• Beyond-visual-line-of-sight operations</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 border border-gray-200 p-10">
                                <h3 className="text-xl font-semibold">Academic Partnerships</h3>
                                <ul className="mt-6 space-y-2 text-gray-700 text-lg">
                                    <li>• 8 university research collaborations</li>
                                    <li>• 4 joint PhD programs</li>
                                    <li>• Published papers in leading robotics journals</li>
                                    <li>• Open-source AI algorithm contributions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI ETHICS & SAFETY */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            AI Ethics & Safety
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Responsible Autonomy at Scale
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics develops AI responsibly to ensure safe deployment in critical environments.
                            Our autonomy systems are built with transparency, validation, and human oversight at the core.
                        </p>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-medium text-gray-800">
                            {[
                                "Explainable AI decision-making",
                                "Human-in-the-loop for critical decisions",
                                "Safety-certified algorithms",
                                "Bias detection and mitigation",
                                "Transparent performance reporting",
                            ].map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-6">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
