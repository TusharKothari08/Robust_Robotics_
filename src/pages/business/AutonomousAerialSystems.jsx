import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function AutonomousAerialSystems() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* PAGE WRAPPER */}
            <div className="pt-20">

                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">

                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Autonomous Aerial Systems
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Autonomous Aerial Systems
                        </h1>

                        {/* QUICK LINKS */}
                        <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
                            {["Innovation Center", "Product Line", "Supply Chain", "Virtual Tours"].map(
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
                            Robust Robotics Autonomous Aerial Systems delivers breakthrough solutions for environmental restoration,
                            precision agriculture, and emergency response operations worldwide.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our team of 180+ aerospace engineers, ecologists, and field specialists is committed to advancing drone
                            technology that makes measurable environmental impact. By integrating cutting-edge autonomous navigation,
                            precision payload systems, and real-time sensor fusion, we're developing platforms that operate effectively
                            in challenging conditions—from dense forests to arid deserts—enabling large-scale ecological restoration at
                            unprecedented speed and efficiency.
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
                            Capabilities to Restore Ecosystems
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                            {/* Precision Seed Deployment */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Precision Seed Deployment</h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Today's environmental challenges demand solutions that scale rapidly. We're developing technology that
                                    delivers seeds with pinpoint accuracy, adaptive payload release systems, and real-time terrain analysis
                                    to maximize germination success rates across diverse ecosystems.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Key Technologies:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Ballistic seed capsule systems</li>
                                    <li>• Variable payload mechanisms</li>
                                    <li>• Wind compensation algorithms</li>
                                    <li>• Germination-optimized release patterns</li>
                                </ul>
                            </div>

                            {/* Mission Focused Innovation */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Mission-Focused Innovation</h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    We're evolving how autonomous systems operate in real-world conditions, embracing modular architecture,
                                    biodegradable materials, and edge computing to enable rapid deployment and environmental sustainability.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Innovation Priorities:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Swarm coordination for large-area coverage</li>
                                    <li>• Biodegradable seed pod development</li>
                                    <li>• Solar-electric hybrid propulsion</li>
                                    <li>• Open-source ecological data sharing</li>
                                </ul>
                            </div>

                            {/* All Terrain Operations */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">All-Terrain Operations</h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Our platforms combine advanced navigation, weather-resistant design, and multi-sensor fusion to operate
                                    effectively in mountains, forests, deserts, and wetlands—wherever restoration is needed most.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Operational Capabilities:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• High-altitude mountain operations (up to 4,500m)</li>
                                    <li>• Dense canopy penetration</li>
                                    <li>• Desert heat resistance (up to 50°C)</li>
                                    <li>• Low-visibility navigation</li>
                                </ul>
                            </div>

                            {/* Innovation Lab */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Innovation Lab</h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    At Robust Robotics Innovation Lab, your environmental mission defines our engineering purpose.
                                    We partner with conservationists, agronomists, and land managers to anticipate tomorrow's ecological
                                    challenges and develop technology solutions today.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Research Focus Areas:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Next-generation autonomous navigation</li>
                                    <li>• Biodegradable materials engineering</li>
                                    <li>• Precision agriculture algorithms</li>
                                    <li>• Climate-adaptive seed delivery</li>
                                </ul>
                            </div>

                            {/* Ecological Restoration */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Ecological Restoration Solutions</h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    The future of land restoration requires integrated, scalable solutions. Our end-to-end approach spans
                                    mission planning through long-term monitoring, enabling measurable ecological recovery across landscapes.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Comprehensive Services:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Pre-mission terrain analysis</li>
                                    <li>• Species-specific seed mix design</li>
                                    <li>• Deployment execution</li>
                                    <li>• Post-deployment monitoring</li>
                                    <li>• Germination success reporting</li>
                                </ul>
                            </div>

                            {/* Monitoring */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Intelligence, Surveillance & Remote Monitoring</h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    As restoration projects expand across larger areas, persistent monitoring becomes essential. Our survey
                                    drones combine multispectral imaging, thermal sensors, and AI-powered vegetation analysis to track
                                    restoration progress over time.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Monitoring Capabilities:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Multispectral vegetation health assessment</li>
                                    <li>• Thermal stress detection</li>
                                    <li>• Growth rate tracking</li>
                                    <li>• Invasive species identification</li>
                                    <li>• Automated progress reporting</li>
                                </ul>
                            </div>

                            {/* Modular Architecture */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Modular Platform Architecture</h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Our modular design enables rapid payload changes, software updates, and mission-specific configurations
                                    —from seed bombing to surveying to emergency response—all on a common platform.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Benefits:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Quick mission reconfiguration</li>
                                    <li>• Cost-effective fleet management</li>
                                    <li>• Simplified maintenance</li>
                                    <li>• Future-proof upgrades</li>
                                </ul>
                            </div>

                            {/* AI Integration */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Artificial Intelligence Integration</h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    We invest continuously in AI and autonomy to enhance operational safety, increase mission success, and
                                    enable human operators to manage complex restoration projects with confidence.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">AI Applications:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Terrain classification and analysis</li>
                                    <li>• Optimal seed distribution planning</li>
                                    <li>• Real-time obstacle avoidance</li>
                                    <li>• Automated flight path optimization</li>
                                    <li>• Predictive maintenance</li>
                                </ul>
                            </div>

                            {/* Operator Support */}
                            <div className="bg-white border border-gray-200 p-10 md:col-span-2">
                                <h3 className="text-2xl font-semibold">Operator Support & Fleet Management</h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg max-w-5xl">
                                    We're advancing technology to maximize operational uptime and effectiveness through digital fleet
                                    management, predictive maintenance, and augmented reality training tools.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Support Systems:</p>
                                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                    <li>• Digital twin simulations</li>
                                    <li>• Predictive component replacement</li>
                                    <li>• Remote diagnostics</li>
                                    <li>• AR-assisted maintenance guides</li>
                                    <li>• 24/7 technical support</li>
                                </ul>
                            </div>
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
                            Core Platforms
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                            {[
                                {
                                    title: "AirSeed Pro X500",
                                    subtitle: "Heavy-lift seed bombing platform",
                                    specs: [
                                        "Payload: 50kg seed capacity",
                                        "Range: 25km radius",
                                        "Coverage: 100 hectares/day",
                                        "Terrain: All environments",
                                    ],
                                },
                                {
                                    title: "EcoSurveyor LR",
                                    subtitle: "Long-range monitoring and assessment",
                                    specs: [
                                        "Flight time: 120 minutes",
                                        "Sensors: Multispectral, thermal, LiDAR",
                                        "Range: 40km radius",
                                        "Resolution: 2cm GSD",
                                    ],
                                },
                                {
                                    title: "RapidResponse FR",
                                    subtitle: "Fire detection and emergency deployment",
                                    specs: [
                                        "Response time: <5 minutes to launch",
                                        "Detection: Thermal and smoke sensors",
                                        "Payload: Fire retardant or seeds",
                                        "Operations: Day/night capable",
                                    ],
                                },
                                {
                                    title: "SwarmSeed Network",
                                    subtitle: "Coordinated multi-drone operations",
                                    specs: [
                                        "Fleet size: Up to 20 units",
                                        "Synchronized deployment",
                                        "Coverage: 500+ hectares/day",
                                        "Autonomous coordination",
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

                {/* JOIN OUR TEAM */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Join Our Team
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Delivering Environmental Impact Requires Next-Generation Talent
                        </h2>

                        <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-6xl">
                            To create autonomous systems that restore ecosystems at scale, we're seeking engineers, ecologists,
                            software developers, and field operators with passion for both technology and environmental stewardship.
                        </p>

                        <p className="mt-10 font-semibold text-gray-900 text-lg">Open Roles:</p>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                "Aerospace Engineers",
                                "AI/ML Specialists",
                                "Ecological Systems Designers",
                                "Flight Operations Managers",
                                "Payload Systems Engineers",
                            ].map((role, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 p-6 font-semibold text-gray-800"
                                >
                                    {role}
                                </div>
                            ))}
                        </div>

                        <button className="mt-12 px-10 py-4 bg-black text-white font-semibold hover:bg-gray-900 transition">
                            Explore Open Positions →
                        </button>
                    </div>
                </section>

                {/* LOCATIONS */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Our Locations
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Primary Facilities
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                            <div className="border border-gray-200 bg-gray-50 p-10">
                                <h3 className="text-2xl font-semibold">Innovation & Manufacturing Hub</h3>
                                <p className="mt-3 text-gray-600 font-medium">[City, Region] - Headquarters</p>

                                <ul className="mt-6 space-y-2 text-gray-700">
                                    <li>• R&D laboratories</li>
                                    <li>• Drone assembly line</li>
                                    <li>• Seed science center</li>
                                    <li>• Flight testing range</li>
                                </ul>
                            </div>

                            <div className="border border-gray-200 bg-gray-50 p-10">
                                <h3 className="text-2xl font-semibold">Regional Operations Centers</h3>
                                <p className="mt-3 text-gray-600 font-medium">[Multiple locations globally]</p>

                                <ul className="mt-6 space-y-2 text-gray-700">
                                    <li>• Field deployment teams</li>
                                    <li>• Maintenance facilities</li>
                                    <li>• Training centers</li>
                                    <li>• Customer support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-14 flex flex-wrap gap-4">
                            <button className="px-8 py-4 border border-gray-400 font-semibold hover:border-black transition">
                                Explore Our Locations →
                            </button>

                            <button className="px-8 py-4 border border-gray-400 font-semibold hover:border-black transition">
                                Virtual Facility Tours →
                            </button>
                        </div>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
