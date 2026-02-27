import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Lastfooter from "../../components/Lastfooter";
import { Link } from "react-router-dom";

export default function TrainingOperatorDevelopment() {
    const trainingPrograms = [
        {
            title: "Basic Drone Pilot Certification",
            desc: "Foundational training covering aviation regulations, safety procedures, basic flight operations, and emergency protocols.",
            duration: "3 Days",
            certification: "Pilot License (Regulatory Compliant)",
            topics: [
                "Aviation regulations (FAA Part 107 / DGCA / regional)",
                "Flight physics and weather",
                "Safety procedures",
                "Basic flight operations",
                "Emergency response",
                "Pre-flight inspections",
            ],
        },
        {
            title: "Advanced Restoration Operations",
            desc: "Specialized training for ecological restoration missions including seed selection, terrain analysis, deployment planning, and success monitoring.",
            duration: "5 Days",
            certification: "Restoration Specialist",
            topics: [
                "Ecological restoration principles",
                "Seed biology and selection",
                "Terrain and soil assessment",
                "Mission planning software",
                "Payload configuration",
                "Post-deployment monitoring",
            ],
        },
        {
            title: "Maintenance Technician Certification",
            desc: "Technical training for field maintenance, troubleshooting, repair, and component replacement ensuring maximum operational uptime.",
            duration: "4 Days",
            certification: "Certified Technician Level 1-3",
            topics: [
                "System architecture",
                "Preventive maintenance",
                "Diagnostic procedures",
                "Component replacement",
                "Software updates",
                "Field repair techniques",
            ],
        },
        {
            title: "Mission Planning & Analytics",
            desc: "Training in mission design, data analysis, GIS software, and reporting for mission planners and data analysts.",
            duration: "3 Days",
            certification: "Mission Planner",
            topics: [
                "Mission planning software",
                "GIS and data analysis tools",
                "Sensor data interpretation",
                "Report generation",
                "ROI calculation",
                "Stakeholder communication",
            ],
        },
        {
            title: "Safety & Compliance",
            desc: "Specialized training in aviation safety management, risk assessment, and regulatory compliance for safety officers.",
            duration: "2 Days",
            certification: "Safety Officer",
            topics: [
                "Safety management systems",
                "Risk assessment methodologies",
                "Incident investigation",
                "Regulatory compliance",
                "Safety culture development",
                "Emergency response planning",
            ],
        },
    ];

    const deliveryMethods = [
        {
            title: "Virtual Reality Simulation",
            desc: "Immersive VR environments allowing trainees to practice flight operations, emergency procedures, and complex missions in a safe, repeatable setting.",
            points: [
                "Realistic flight physics",
                "Weather and environmental scenarios",
                "Emergency situation practice",
                "Mission rehearsal",
                "Performance feedback and scoring",
            ],
        },
        {
            title: "Physical Simulation Systems",
            desc: "Desktop flight simulators with actual controller hardware for muscle memory development and procedural training.",
            points: [
                "Authentic controller hardware",
                "Multiple difficulty levels",
                "Mission scenario library",
                "Instructor monitoring",
                "Performance metrics",
            ],
        },
        {
            title: "Hands-On Field Training",
            desc: "Supervised real-world operations with training aircraft on controlled ranges for practical skill development.",
            points: [
                "Supervised flight operations",
                "Real payload deployment practice",
                "Various terrain and weather conditions",
                "Emergency procedure execution",
                "Maintenance hands-on practice",
            ],
        },
        {
            title: "Online Learning Platform",
            desc: "Self-paced digital courses, video tutorials, and knowledge assessments accessible anytime for initial learning and refresher training.",
            points: [
                "Video instruction library",
                "Interactive quizzes",
                "Progress tracking",
                "Digital certification",
                "Mobile app access",
            ],
        },
    ];

    const metrics = [
        { value: "2,400+", label: "Pilots Trained" },
        { value: "850+", label: "Technicians Certified" },
        { value: "180+", label: "Mission Planners Qualified" },
        { value: "98%", label: "First-Time Pass Rate" },
        { value: "45", label: "Countries Delivered" },
    ];

    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* OFFSET FOR FIXED NAVBAR */}
            <div className="pt-20">
                {/* HERO */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        {/* Breadcrumb */}
                        <div className="text-sm text-gray-500 flex flex-wrap gap-2">
                            <Link to="/" className="hover:text-gray-800 transition">
                                Home
                            </Link>
                            <span>›</span>
                            <span className="text-gray-700 font-medium">Who We Are</span>
                            <span>›</span>
                            <span className="text-gray-700 font-medium">Our Businesses</span>
                            <span>›</span>
                            <span className="text-gray-900 font-semibold">
                                Training & Operator Development
                            </span>
                        </div>

                        <p className="mt-8 text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Training & Operator Development
                        </p>

                        <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                            Training & Operator Development
                        </h1>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Robust Robotics Training & Operator Development ensures every pilot,
                            technician, and mission planner has the knowledge and skills to deploy
                            our systems safely, effectively, and in compliance with regulations.
                        </p>

                        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our 40+ training specialists, simulation engineers, and certification
                            instructors deliver comprehensive programs from basic drone operation
                            through advanced restoration mission planning—combining classroom learning,
                            virtual simulation, and hands-on field experience.
                        </p>

                        {/* Quick Links */}
                        <div className="mt-12 flex flex-wrap gap-4">
                            <a
                                href="#programs"
                                className="border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
                            >
                                Training Programs
                            </a>
                            <a
                                href="#delivery"
                                className="border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
                            >
                                Delivery Methods
                            </a>
                            <a
                                href="#facilities"
                                className="border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
                            >
                                Training Facilities
                            </a>
                            <a
                                href="#certification"
                                className="border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
                            >
                                Certification
                            </a>
                        </div>
                    </div>
                </section>

                {/* TRAINING PROGRAMS */}
                <section id="programs" className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Training Programs
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Structured Training for Real-World Mission Readiness
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our training programs combine aviation fundamentals, mission planning,
                            system operation, maintenance, and regulatory compliance—delivered by
                            instructors with deep operational experience.
                        </p>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {trainingPrograms.map((program, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 p-10 hover:shadow-md transition"
                                >
                                    <h3 className="text-2xl font-semibold">{program.title}</h3>

                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {program.desc}
                                    </p>

                                    <div className="mt-8 border-t border-gray-200 pt-6 space-y-3">
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold text-gray-900">Duration:</span>{" "}
                                            {program.duration}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold text-gray-900">Certification:</span>{" "}
                                            {program.certification}
                                        </p>
                                    </div>

                                    <p className="mt-8 font-semibold text-gray-900">
                                        Course Content:
                                    </p>
                                    <ul className="mt-4 space-y-2 text-gray-700">
                                        {program.topics.map((topic, i) => (
                                            <li key={i}>• {topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DELIVERY METHODS */}
                <section id="delivery" className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Training Delivery Methods
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Learn Through Simulation, Practice, and Real-World Execution
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            Our training programs use modern learning approaches including immersive VR,
                            physical simulators, field exercises, and digital self-paced learning.
                        </p>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {deliveryMethods.map((method, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 p-10"
                                >
                                    <h3 className="text-2xl font-semibold">{method.title}</h3>

                                    <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                        {method.desc}
                                    </p>

                                    <p className="mt-8 font-semibold text-gray-900">
                                        Features:
                                    </p>

                                    <ul className="mt-4 space-y-2 text-gray-700">
                                        {method.points.map((point, i) => (
                                            <li key={i}>• {point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TRAINING FACILITIES */}
                <section id="facilities" className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Training Facilities
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Dedicated Facilities Designed for Operator Excellence
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Primary Training Center</h3>
                                <p className="mt-5 text-gray-700 text-lg leading-relaxed">
                                    [Location]
                                </p>

                                <ul className="mt-8 space-y-2 text-gray-700">
                                    <li>• 6 VR simulation stations</li>
                                    <li>• 12 desktop simulators</li>
                                    <li>• Classroom for 30 students</li>
                                    <li>• Indoor flight practice area</li>
                                    <li>• Maintenance workshop</li>
                                </ul>
                            </div>

                            <div className="bg-white border border-gray-200 p-10">
                                <h3 className="text-2xl font-semibold">Field Training Ranges</h3>
                                <p className="mt-5 text-gray-700 text-lg leading-relaxed">
                                    [Multiple locations]
                                </p>

                                <ul className="mt-8 space-y-2 text-gray-700">
                                    <li>• Open flight ranges</li>
                                    <li>• Forest terrain simulation</li>
                                    <li>• Desert environment</li>
                                    <li>• Coastal/wetland area</li>
                                    <li>• Mountain/high-altitude site</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CERTIFICATION & COMPLIANCE */}
                <section id="certification" className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Certification & Compliance
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Certified Programs for Global Operational Readiness
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            All Robust Robotics training programs meet or exceed aviation authority standards,
                            manufacturer certifications, insurance requirements, and customer-specific qualifications.
                        </p>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-medium text-gray-800">
                            {[
                                "Regional aviation authority requirements",
                                "International drone operation standards",
                                "Manufacturer certification standards",
                                "Insurance underwriter requirements",
                                "Customer-specific qualifications",
                            ].map((item, index) => (
                                <div key={index} className="border border-gray-200 p-6 bg-gray-50">
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-gray-50 border border-gray-200 p-10">
                            <h3 className="text-2xl font-semibold">Recertification</h3>
                            <ul className="mt-6 space-y-2 text-gray-700 text-lg">
                                <li>• Annual refresher training</li>
                                <li>• Updated regulatory training</li>
                                <li>• New system familiarization</li>
                                <li>• Skills assessment testing</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* METRICS */}
                <section className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Training Metrics (2025)
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Proven Results Across Global Operations
                        </h2>

                        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6">
                            {metrics.map((m, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 p-8 text-center"
                                >
                                    <p className="text-3xl md:text-4xl font-light text-gray-900">
                                        {m.value}
                                    </p>
                                    <p className="mt-3 text-sm font-semibold tracking-wide text-gray-600 uppercase">
                                        {m.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CUSTOM TRAINING */}
                <section className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-6 py-20">
                        <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                            Custom Training Programs
                        </p>

                        <h2 className="mt-6 text-3xl md:text-5xl font-light">
                            Training Tailored to Your Operational Requirements
                        </h2>

                        <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                            We develop tailored training programs designed for organizations operating large fleets,
                            government agencies, conservation partners, and research institutions.
                        </p>

                        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-medium text-gray-800">
                            {[
                                "Large fleet operators",
                                "Government agencies",
                                "Conservation organizations",
                                "Agricultural cooperatives",
                                "Research institutions",
                            ].map((item, index) => (
                                <div key={index} className="border border-gray-200 p-6 bg-gray-50">
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="mt-14 flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="bg-black text-white px-10 py-4 font-semibold hover:bg-gray-900 transition"
                            >
                                Request Custom Training Program
                            </Link>

                            <Link
                                to="/careers"
                                className="border border-gray-300 px-10 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition"
                            >
                                Join Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
                <Lastfooter />
            </div>
        </div>
    );
}
