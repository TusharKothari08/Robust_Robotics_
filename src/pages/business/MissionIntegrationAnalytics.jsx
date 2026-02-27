import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";

export default function MissionIntegrationAnalytics() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* PAGE WRAPPER */}
            <div className="pt-20">
                {/* HERO SECTION */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Mission Integration & Analytics
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Mission Integration & Analytics
                        </h1>

                        <p className="mt-12 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics Mission Integration & Analytics transforms raw sensor data into actionable
                            environmental intelligence through advanced geospatial systems, digital twin technology,
                            and mission planning software.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our 85+ data scientists, GIS specialists, and software engineers build the digital
                            infrastructure that turns drone-collected data into measurable ecological insights and
                            restoration success metrics.
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
                            Data Systems Built for Real-World Missions
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Geospatial Intelligence */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Geospatial Intelligence Platform</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Comprehensive GIS solutions processing LiDAR, multispectral, and photogrammetric data
                                    into detailed terrain models, vegetation health maps, and restoration planning tools.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Platform Features:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Real-time data processing</li>
                                    <li>• Cloud-based storage and analysis</li>
                                    <li>• Multi-source data fusion</li>
                                    <li>• Historical change detection</li>
                                    <li>• Automated report generation</li>
                                </ul>
                            </div>

                            {/* Digital Twin */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Digital Twin Technology</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    3D virtual representations of restoration sites enabling before/after visualization,
                                    growth simulation, and long-term monitoring of ecological recovery.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Digital Twin Applications:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Pre-mission site visualization</li>
                                    <li>• Restoration progress tracking</li>
                                    <li>• Growth rate prediction</li>
                                    <li>• Stakeholder engagement tools</li>
                                    <li>• Investment impact demonstration</li>
                                </ul>
                            </div>

                            {/* Mission Planning */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Mission Planning Software</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Intelligent flight planning systems optimizing coverage, payload distribution, and
                                    operational efficiency based on terrain, weather, and ecological objectives.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Planning Features:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Automated route optimization</li>
                                    <li>• Seed distribution calculations</li>
                                    <li>• Weather integration</li>
                                    <li>• Multi-drone coordination</li>
                                    <li>• Restricted airspace compliance</li>
                                </ul>
                            </div>

                            {/* Vegetation Health */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Vegetation Health Analytics</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    AI-powered analysis of multispectral imagery identifying plant stress, disease,
                                    invasive species, and germination success rates.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Analysis Capabilities:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• NDVI vegetation indices</li>
                                    <li>• Thermal stress detection</li>
                                    <li>• Species classification</li>
                                    <li>• Growth rate calculation</li>
                                    <li>• Health trend analysis</li>
                                </ul>
                            </div>

                            {/* Visualization */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Data Visualization & Reporting</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Stakeholder-ready reports, interactive dashboards, and visual presentations communicating
                                    restoration outcomes to investors, government agencies, and communities.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Reporting Tools:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• Executive dashboards</li>
                                    <li>• Interactive web maps</li>
                                    <li>• Before/after visualizations</li>
                                    <li>• ROI and carbon calculations</li>
                                    <li>• Customizable report templates</li>
                                </ul>
                            </div>

                            {/* API Integration */}
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">API Integration</h3>

                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    Open APIs enabling integration with third-party GIS platforms, agricultural management systems,
                                    and environmental monitoring networks.
                                </p>

                                <p className="mt-6 font-semibold text-gray-900">Integration Capabilities:</p>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    <li>• RESTful API access</li>
                                    <li>• Standard GIS file formats</li>
                                    <li>• Cloud platform compatibility</li>
                                    <li>• Real-time data streaming</li>
                                    <li>• Custom integration support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TECHNOLOGY STACK */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Technology Stack
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Built for High-Volume Data and Precision Decisions
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Sensors */}
                            <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition">
                                <h3 className="text-xl font-semibold">Sensors & Data Collection</h3>
                                <ul className="mt-6 space-y-2 text-gray-700">
                                    <li>• LiDAR scanners (360° coverage)</li>
                                    <li>• Multispectral cameras (5-band)</li>
                                    <li>• Thermal imaging</li>
                                    <li>• RGB photogrammetry</li>
                                    <li>• Hyperspectral sensors (optional)</li>
                                </ul>
                            </div>

                            {/* Processing */}
                            <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition">
                                <h3 className="text-xl font-semibold">Processing & Analysis</h3>
                                <ul className="mt-6 space-y-2 text-gray-700">
                                    <li>• AI/ML vegetation classification</li>
                                    <li>• Point cloud processing</li>
                                    <li>• Orthomosaic generation</li>
                                    <li>• Change detection algorithms</li>
                                    <li>• Predictive modeling</li>
                                </ul>
                            </div>

                            {/* Delivery */}
                            <div className="bg-gray-50 border border-gray-200 p-10 hover:bg-white transition">
                                <h3 className="text-xl font-semibold">Platform & Delivery</h3>
                                <ul className="mt-6 space-y-2 text-gray-700">
                                    <li>• Cloud-native architecture</li>
                                    <li>• Mobile app access</li>
                                    <li>• Web dashboard</li>
                                    <li>• Offline capability</li>
                                    <li>• API access</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CUSTOMERS */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Customers
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Trusted by Organizations Driving Environmental Outcomes
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our mission integration and analytics platform supports stakeholders across conservation,
                            government, industry, and environmental finance.
                        </p>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-medium text-gray-800">
                            {[
                                "Conservation organizations",
                                "Government forestry departments",
                                "Carbon credit verifiers",
                                "Agricultural enterprises",
                                "Research institutions",
                                "Impact investors",
                            ].map((customer, index) => (
                                <div key={index} className="bg-white border border-gray-200 p-6">
                                    {customer}
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
