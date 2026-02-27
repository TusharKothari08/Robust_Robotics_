import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

export default function EmployeeVolunteerism() {
    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* HERO */}
            <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm text-gray-500 tracking-wide">
                        Home <span className="mx-2">/</span> Sustainability & Social Impact{" "}
                        <span className="mx-2">/</span>{" "}
                        <span className="text-black font-semibold">Employee Volunteerism</span>
                    </p>

                    <h1 className="mt-6 text-4xl md:text-6xl font-light leading-tight">
                        Employee Volunteerism
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
                        Volunteering isn't just a "nice-to-do" for our team members — it's part
                        of our culture. We support employees through paid volunteer time,
                        sponsored initiatives, and skills-based community impact programs.
                    </p>

                    <div className="mt-10">
                        <Link
                            to="/sustainability"
                            className="text-sm font-semibold text-gray-700 hover:text-black transition underline underline-offset-4"
                        >
                            ← Back to Sustainability & Social Impact
                        </Link>
                    </div>
                </div>
            </section>

            {/* VOLUNTEERS */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest text-gray-500 uppercase font-semibold">
                        Meet Our Volunteers
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                name: "Priya",
                                role: "Aerospace Systems Engineer",
                                desc: "Coordinates reforestation events, STEM workshops, and disaster response seed bombing missions.",
                                focus: "Environmental restoration, STEM mentorship, disaster response",
                            },
                            {
                                name: "Marcus",
                                role: "Field Operations Manager",
                                desc: "Volunteers teaching drone operation to veterans and leads urban tree planting programs.",
                                focus: "Veteran support, youth mentorship, urban reforestation",
                            },
                            {
                                name: "Amara",
                                role: "Data Scientist",
                                desc: "Provides pro-bono GIS mapping and data workshops for conservation organizations.",
                                focus: "Conservation data support, mapping, planning",
                            },
                            {
                                name: "Chen",
                                role: "Manufacturing Technician",
                                desc: "Supports farming cooperatives and teaches sustainable agriculture practices.",
                                focus: "Agriculture sustainability, food security, restoration",
                            },
                            {
                                name: "Sofia",
                                role: "Software Engineer",
                                desc: "Mentors youth robotics teams and runs conservation technology coding clubs.",
                                focus: "Youth STEM mentorship, robotics education",
                            },
                        ].map((v, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 bg-gray-50 rounded-2xl p-10 hover:shadow-md transition"
                            >
                                <h3 className="text-2xl font-semibold">{v.name}</h3>
                                <p className="mt-2 text-gray-600 font-medium">{v.role}</p>

                                <p className="mt-6 text-gray-700 leading-relaxed">{v.desc}</p>

                                <p className="mt-6 text-sm text-gray-500 uppercase tracking-widest font-semibold">
                                    Volunteer Focus
                                </p>
                                <p className="mt-2 text-gray-700">{v.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPACT METRICS */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-light">
                        Volunteer Impact Metrics (2025)
                    </h2>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { value: "58,000+", label: "Employee volunteer hours" },
                            { value: "$1.4M", label: "Value of volunteer services" },
                            { value: "85%", label: "Employee participation rate" },
                            { value: "240", label: "Organized volunteer events" },
                            { value: "3,500+", label: "Community members served" },
                            { value: "125,000", label: "Trees planted" },
                        ].map((metric, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-8"
                            >
                                <p className="text-3xl font-semibold">{metric.value}</p>
                                <p className="mt-2 text-gray-600">{metric.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 flex flex-wrap gap-4">
                        <button className="bg-black text-white px-8 py-4 font-semibold rounded-md hover:bg-gray-900 transition">
                            Employee Volunteer Portal
                        </button>
                        <button className="border border-gray-300 px-8 py-4 font-semibold rounded-md hover:bg-gray-100 transition">
                            Request Volunteers
                        </button>
                        <button className="border border-gray-300 px-8 py-4 font-semibold rounded-md hover:bg-gray-100 transition">
                            View Open Positions
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            <Lastfooter />
        </div>
    );
}
