import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";

export default function GlobalActivities() {
    const [activeRegion, setActiveRegion] = useState("ASIA-PACIFIC");

    const regions = {
        "ASIA-PACIFIC": {
            countries: "India, Philippines, Indonesia, Thailand, Australia, New Zealand",
            focus: [
                "Mangrove restoration",
                "Tropical rainforest recovery",
                "Post-typhoon reforestation",
                "Agricultural sustainability",
            ],
            projects: [
                "Sundarbans Mangrove Restoration (India/Bangladesh)",
                "Philippine Coral Triangle Forest Recovery",
                "Australian Bushfire Rehabilitation",
                "Indonesian Peatland Restoration",
            ],
            hub: "Mumbai, India",
            employees: "85+ local employees",
            suppliers: "320+ regional suppliers",
            centers: "4 training centers",
        },
        AFRICA: {
            countries: "Kenya, Tanzania, Ethiopia, South Africa, Morocco, Ghana",
            focus: [
                "Desertification reversal",
                "Dryland restoration",
                "Agroforestry development",
                "Wildlife corridor creation",
            ],
            projects: [
                "Great Green Wall Sahel Support",
                "Kenyan Dryland Restoration Initiative",
                "Ethiopian Highland Reforestation",
                "South African Fynbos Recovery",
            ],
            hub: "Nairobi, Kenya",
            employees: "65+ local employees",
            suppliers: "180+ regional suppliers",
            centers: "3 training centers",
        },
        "LATIN AMERICA": {
            countries: "Brazil, Colombia, Peru, Chile, Argentina, Costa Rica, Mexico",
            focus: [
                "Amazon rainforest restoration",
                "Atlantic Forest recovery",
                "Andean ecosystem rehabilitation",
                "Coastal mangrove protection",
            ],
            projects: [
                "Amazon Degraded Land Restoration",
                "Atlantic Forest Corridor Creation",
                "Andean Cloud Forest Recovery",
                "Central American Dry Forest Restoration",
            ],
            hub: "São Paulo, Brazil",
            employees: "70+ local employees",
            suppliers: "240+ regional suppliers",
            centers: "2 training centers",
        },
        EUROPE: {
            countries: "UK, Germany, Spain, Portugal, Poland, Greece",
            focus: [
                "Post-wildfire restoration",
                "Agricultural land conversion",
                "Urban greening",
                "Biodiversity corridor creation",
            ],
            projects: [
                "Mediterranean Forest Fire Recovery",
                "European Green Belt Support",
                "UK Upland Restoration",
                "Iberian Peninsula Rewilding",
            ],
            hub: "Barcelona, Spain",
            employees: "45+ local employees",
            suppliers: "280+ regional suppliers",
            centers: "2 training centers",
        },
        "MIDDLE EAST": {
            countries: "UAE, Saudi Arabia, Jordan, Israel, Oman",
            focus: [
                "Desert greening",
                "Oasis restoration",
                "Date palm establishment",
                "Arid land rehabilitation",
            ],
            projects: [
                "UAE Desert Greening Initiative",
                "Saudi Arabia Green Initiative Support",
                "Jordan Valley Restoration",
                "Oman Coastal Protection",
            ],
            hub: "Dubai, UAE",
            employees: "35+ local employees",
            suppliers: "150+ regional suppliers",
            centers: "1 training center",
        },
        "NORTH AMERICA": {
            countries: "USA, Canada, Mexico",
            focus: [
                "Wildfire recovery",
                "Indigenous land restoration",
                "Agricultural sustainability",
                "Urban forest expansion",
            ],
            projects: [
                "Western US Fire Recovery Program",
                "Canadian Boreal Restoration",
                "Mexican Mangrove Protection",
                "Great Plains Grassland Recovery",
            ],
            hub: "Headquarters & multiple facilities",
            employees: "Primary R&D and manufacturing",
            suppliers: "Extensive supplier network",
            centers: "Multiple training centers",
        },
    };

    const news = [
        {
            date: "Jan 12, 2026",
            type: "Press Release",
            title: "Tata Technologies Partnership Expands Drone Manufacturing in India",
            desc: "Robust Robotics and Tata Technologies announced expansion of their drone manufacturing facility in Bangalore, doubling production capacity to serve growing South Asian demand for restoration technology.",
        },
        {
            date: "Dec 20, 2025",
            type: "Story",
            title: "Brazilian Amazon Communities Receive First Locally-Manufactured Restoration Drones",
            desc: "Indigenous communities in the Brazilian Amazon received delivery of locally-manufactured seed bombing drones, enabling autonomous forest restoration on traditional lands.",
        },
        {
            date: "Nov 08, 2025",
            type: "Press Release",
            title: "Partnership Framework Signed with Kenya Wildlife Service",
            desc: "Robust Robotics formalized a five-year partnership with Kenya Wildlife Service to support wildlife corridor restoration and community-based rehabilitation across Kenya’s critical ecosystems.",
        },
        {
            date: "Oct 15, 2025",
            type: "Story",
            title: "UAE Desert Greening Project Exceeds Targets",
            desc: "The collaborative desert restoration project in UAE surpassed initial targets, planting 1.2M+ seeds across 400 hectares of degraded arid land.",
        },
    ];

    const active = regions[activeRegion];

    return (
        <div className="w-full bg-white text-black">
            <Navbar />

            {/* HERO */}
            <section className="relative w-full min-h-[85vh] flex items-center pt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=2000&q=80"
                        alt="Global Partnerships"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/80"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                    <p className="text-sm tracking-widest font-semibold text-gray-600 uppercase">
                        Global Activities
                    </p>

                    <h1 className="mt-6 text-5xl md:text-7xl font-light leading-tight text-gray-900">
                        Global Partnerships
                    </h1>

                    <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-4xl leading-relaxed">
                        Environmental Restoration Without Borders, Economic Growth Within Communities
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-900 transition">
                            Explore Partnerships
                        </button>
                        <button className="border border-gray-400 px-8 py-4 font-semibold hover:bg-gray-100 transition">
                            View Global Impact Map
                        </button>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Introduction
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        Investing in Today and Tomorrow
                    </h2>

                    <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
                        By acting as a catalyst for ecological restoration and sustainable economic
                        development, we help further environmental progress and green innovation for our
                        partner nations and communities worldwide.
                    </p>
                </div>
            </section>

            {/* GLOBAL METRICS */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Global Presence at a Glance
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { value: "28+", label: "Countries", desc: "Active operations and partnerships across six continents" },
                            { value: "450+", label: "International Team Members", desc: "Local expertise driving regional restoration projects" },
                            { value: "85+", label: "Partner Organizations", desc: "Conservation groups, governments, and communities we collaborate with globally" },
                        ].map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-10">
                                <h3 className="text-5xl font-light text-gray-900">{item.value}</h3>
                                <p className="mt-3 text-lg font-semibold text-gray-800">{item.label}</p>
                                <p className="mt-4 text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 border border-gray-200 bg-white p-10">
                        <h3 className="text-2xl font-semibold text-gray-900">By The Numbers</h3>
                        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
                            <li>28+ countries with active projects</li>
                            <li>12 permanent international facilities</li>
                            <li>85+ conservation and community partnerships</li>
                            <li>15+ years combined international experience</li>
                            <li>6 regional hubs coordinating operations</li>
                            <li>2,800+ suppliers across 28 countries</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* PARTNERSHIP PILLARS */}
            <section className="py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Partnership Pillars
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        Four Core Areas
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                num: "[01]",
                                title: "Ecological Impact",
                                desc: "For more than a decade, Robust Robotics has partnered globally to restore degraded ecosystems and combat climate change through innovative drone technology.",
                                points: [
                                    "15.2M+ seeds deployed internationally",
                                    "3,400+ hectares restored across continents",
                                    "85 native species reintroduced globally",
                                    "28 countries with active restoration projects",
                                    "12 threatened ecosystems supported",
                                ],
                                cta: "View Global Impact Map",
                            },
                            {
                                num: "[02]",
                                title: "Economic Development",
                                desc: "Our international operations create skilled employment, support local suppliers, and invest in community infrastructure—building economic resilience through restoration.",
                                points: [
                                    "450+ international employees",
                                    "$8.5M invested in international operations (2025)",
                                    "2,800+ global suppliers",
                                    "1,200+ indirect jobs supported",
                                    "$4.2M in local procurement (international)",
                                ],
                                cta: "Explore Economic Impact",
                            },
                            {
                                num: "[03]",
                                title: "Technology Transfer & Capacity Building",
                                desc: "We build local capacity through training, technology transfer, and collaborative research—enabling communities to lead their own restoration efforts.",
                                points: [
                                    "Operator training in 18 countries",
                                    "Technology partnerships with regional manufacturers",
                                    "Joint research with local universities",
                                    "Indigenous knowledge integration",
                                    "Open-source algorithm sharing",
                                ],
                                cta: "Learn About Partnerships",
                            },
                            {
                                num: "[04]",
                                title: "Knowledge Exchange",
                                desc: "Robust Robotics serves as a catalyst for green innovation through international R&D collaboration.",
                                points: [
                                    "15+ university research partnerships (international)",
                                    "8 joint development projects",
                                    "6 indigenous knowledge collaborations",
                                    "Regional adaptation of technology",
                                    "Climate zone-specific solutions",
                                ],
                                cta: "Explore R&D Initiatives",
                            },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-200 bg-white p-10 hover:shadow-lg transition">
                                <p className="text-sm tracking-widest font-semibold text-gray-500">
                                    {item.num}
                                </p>
                                <h3 className="mt-4 text-3xl font-light text-gray-900">{item.title}</h3>
                                <p className="mt-6 text-gray-700 leading-relaxed text-lg">{item.desc}</p>

                                <ul className="mt-6 space-y-2 text-gray-700">
                                    {item.points.map((p, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-gray-400">•</span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>

                                <button className="mt-8 border border-gray-400 px-6 py-3 font-semibold hover:bg-gray-100 transition">
                                    {item.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERACTIVE MAP */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Interactive Global Map
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        Click a Region to Learn More
                    </h2>

                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Region Buttons */}
                        <div className="border border-gray-200 bg-white p-8">
                            <h3 className="text-xl font-semibold text-gray-900">Regions</h3>

                            <div className="mt-6 flex flex-col gap-3">
                                {Object.keys(regions).map((region) => (
                                    <button
                                        key={region}
                                        onClick={() => setActiveRegion(region)}
                                        className={`text-left px-5 py-3 border transition font-semibold ${activeRegion === region
                                                ? "border-black bg-gray-100 text-black"
                                                : "border-gray-200 hover:bg-gray-50 text-gray-700"
                                            }`}
                                    >
                                        {region}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Region Info */}
                        <div className="lg:col-span-2 border border-gray-200 bg-white p-10">
                            <h3 className="text-3xl font-light text-gray-900">{activeRegion}</h3>

                            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                                <span className="font-semibold">Countries Active:</span> {active.countries}
                            </p>

                            <div className="mt-8">
                                <h4 className="text-lg font-semibold text-gray-900">Focus Areas</h4>
                                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                    {active.focus.map((item, i) => (
                                        <li key={i} className="border border-gray-200 px-4 py-3 bg-gray-50">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10">
                                <h4 className="text-lg font-semibold text-gray-900">Key Projects</h4>
                                <ul className="mt-4 space-y-2 text-gray-700">
                                    {active.projects.map((p, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-gray-400">•</span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-8">
                                <h4 className="text-lg font-semibold text-gray-900">Local Presence</h4>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                                    <p><span className="font-semibold">Regional Hub:</span> {active.hub}</p>
                                    <p>{active.employees}</p>
                                    <p>{active.suppliers}</p>
                                    <p>{active.centers}</p>
                                </div>
                            </div>

                            <button className="mt-10 bg-black text-white px-8 py-4 font-semibold hover:bg-gray-900 transition">
                                View {activeRegion} Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNERSHIP MODELS */}
            <section className="py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Partnership Models
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        How We Work Globally
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Government Partnerships",
                                desc: [
                                    "National environmental ministries",
                                    "Forestry departments",
                                    "Climate action agencies",
                                    "Agricultural ministries",
                                    "Development agencies",
                                ],
                                extra: [
                                    "Long-term framework agreements",
                                    "Technology transfer arrangements",
                                    "Training and capacity building",
                                    "Local manufacturing support",
                                    "Joint investment in infrastructure",
                                ],
                            },
                            {
                                title: "Conservation NGO Collaborations",
                                desc: [
                                    "International conservation organizations",
                                    "Regional environmental groups",
                                    "Community-based organizations",
                                    "Indigenous land councils",
                                ],
                                extra: [
                                    "Pro-bono restoration services",
                                    "Discounted technology access",
                                    "Joint research projects",
                                    "Data sharing agreements",
                                    "Co-funding opportunities",
                                ],
                            },
                            {
                                title: "Community Partnerships",
                                desc: [
                                    "Community-led priority setting",
                                    "Local employment and training",
                                    "Benefit sharing agreements",
                                    "Cultural protocol respect",
                                    "Long-term commitment",
                                ],
                                extra: [
                                    "Indigenous partnership protocols",
                                    "Farming cooperative agreements",
                                    "Village restoration committees",
                                    "Youth training programs",
                                    "Women’s empowerment initiatives",
                                ],
                            },
                            {
                                title: "Academic & Research Collaborations",
                                desc: [
                                    "Joint research programs",
                                    "Student exchange and internships",
                                    "Technology co-development",
                                    "Field research support",
                                    "Publication collaboration",
                                ],
                                extra: [
                                    "15+ international universities",
                                    "8 joint PhD programs",
                                    "12 field research stations",
                                    "25+ published papers (2020-2025)",
                                ],
                            },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-200 bg-white p-10 hover:shadow-lg transition">
                                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>

                                <div className="mt-6">
                                    <p className="font-semibold text-gray-800">Collaboration With:</p>
                                    <ul className="mt-3 space-y-2 text-gray-700">
                                        {item.desc.map((d, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="text-gray-400">•</span>
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <p className="font-semibold text-gray-800">Partnership Structure:</p>
                                    <ul className="mt-3 space-y-2 text-gray-700">
                                        {item.extra.map((e, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="text-gray-400">•</span>
                                                {e}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGY TRANSFER */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Technology Transfer & Local Manufacturing
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        Building Local Capacity
                    </h2>

                    <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-5xl">
                        Our approach is designed to strengthen local ecosystems and local economies by enabling
                        regional production, training local talent, and supporting sustainable supply chain development.
                    </p>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "India",
                                desc: [
                                    "Drone assembly and seed pod production",
                                    "Partnership with Tata Technologies",
                                    "45 local manufacturing jobs",
                                    "$2.8M annual local procurement",
                                    "Serving South Asia market",
                                ],
                            },
                            {
                                title: "Brazil",
                                desc: [
                                    "Latin America regional production",
                                    "Partnership with Embraer subsidiary",
                                    "35 local manufacturing jobs",
                                    "Serving Latin American markets",
                                    "Local seed science integration",
                                ],
                            },
                            {
                                title: "Kenya",
                                desc: [
                                    "Africa regional hub",
                                    "Partnership with local tech manufacturer",
                                    "25 manufacturing and assembly jobs",
                                    "Serving sub-Saharan Africa",
                                    "Training center attached",
                                ],
                            },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-200 bg-white p-10">
                                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                                <ul className="mt-6 space-y-2 text-gray-700">
                                    {item.desc.map((d, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-gray-400">•</span>
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 border border-gray-200 bg-white p-10">
                        <h3 className="text-2xl font-semibold text-gray-900">Licensing Agreements</h3>
                        <ul className="mt-6 space-y-2 text-gray-700 text-lg">
                            <li>Biodegradable seed pod technology licensed to 3 international companies</li>
                            <li>Flight control software open-source components</li>
                            <li>Mission planning tools available to conservation organizations</li>
                            <li>Training curriculum shared with educational institutions</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* WORKFORCE DEVELOPMENT */}
            <section className="py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Workforce Development
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        International Training Programs
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Pilot Certification",
                                desc: [
                                    "Programs in 18 countries",
                                    "Local regulatory compliance",
                                    "Language-appropriate training",
                                    "2,400+ international pilots certified",
                                ],
                            },
                            {
                                title: "Technical Training",
                                desc: [
                                    "Regional maintenance technician programs",
                                    "Local language instruction",
                                    "Certification pathways",
                                    "Job placement support",
                                ],
                            },
                            {
                                title: "Ecological Restoration Training",
                                desc: [
                                    "Restoration specialist certification",
                                    "Indigenous knowledge integration",
                                    "Regional species expertise",
                                    "Community-led approaches",
                                ],
                            },
                            {
                                title: "Skills Development Impact (2025)",
                                desc: [
                                    "240+ International trainers certified",
                                    "2,400+ Pilots trained globally",
                                    "850+ Technicians certified",
                                    "180+ Restoration specialists",
                                    "65 Training partnerships",
                                ],
                            },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-200 bg-white p-10">
                                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                                <ul className="mt-6 space-y-2 text-gray-700">
                                    {item.desc.map((d, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-gray-400">•</span>
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROBUST ROBOTICS INTERNATIONAL */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Robust Robotics International
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        Robust Robotics Global, Inc. (RRGI)
                    </h2>

                    <p className="mt-10 text-lg md:text-xl text-gray-700 leading-relaxed max-w-6xl">
                        Robust Robotics Global, Inc., established in 2018, is a wholly-owned subsidiary of Robust Robotics
                        with 450+ employees across 28 countries worldwide.
                    </p>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="border border-gray-200 bg-white p-10">
                            <h3 className="text-2xl font-semibold text-gray-900">Mission & Values</h3>
                            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                                RRGI has a single mission: delivering innovative environmental restoration technology and services
                                to governments, conservation organizations, and communities around the world.
                            </p>

                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li>• Ecological Impact First</li>
                                <li>• Cultural Respect</li>
                                <li>• Shared Prosperity</li>
                                <li>• Long-term Partnership</li>
                                <li>• Open Innovation</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 bg-white p-10">
                            <h3 className="text-2xl font-semibold text-gray-900">Leveraging Global Capabilities</h3>
                            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                                RRGI operates independently while accessing Robust Robotics’ full technical resources through
                                collaborative agreements.
                            </p>

                            <ul className="mt-6 space-y-2 text-gray-700">
                                <li>• Regional project management</li>
                                <li>• Local regulatory compliance</li>
                                <li>• Cultural and ecological expertise</li>
                                <li>• Supply chain localization</li>
                                <li>• Technology adaptation for regional conditions</li>
                                <li>• Training and capacity building</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEWS */}
            <section className="py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end flex-wrap gap-6">
                        <div>
                            <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                                Latest International News
                            </p>
                            <h2 className="mt-6 text-4xl md:text-5xl font-light text-gray-900">
                                Updates from Global Operations
                            </h2>
                        </div>

                        <button className="border border-gray-400 px-6 py-3 font-semibold hover:bg-gray-100 transition">
                            View All News →
                        </button>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {news.map((item, index) => (
                            <div key={index} className="border border-gray-200 bg-white p-10 hover:shadow-lg transition">
                                <p className="text-sm text-gray-500 font-semibold">
                                    {item.date} • {item.type}
                                </p>
                                <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="mt-5 text-gray-700 leading-relaxed text-lg">
                                    {item.desc}
                                </p>

                                <button className="mt-8 text-black font-semibold hover:underline">
                                    → Read More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CAREERS CONTACT */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Regional Contact & Careers
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        Join Our International Team
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { region: "Asia-Pacific", loc: "Mumbai, India", email: "careers-apac@robustrobotics.com" },
                            { region: "Africa", loc: "Nairobi, Kenya", email: "careers-africa@robustrobotics.com" },
                            { region: "Latin America", loc: "São Paulo, Brazil", email: "careers-latam@robustrobotics.com" },
                            { region: "Europe", loc: "Barcelona, Spain", email: "careers-europe@robustrobotics.com" },
                            { region: "Middle East", loc: "Dubai, UAE", email: "careers-mena@robustrobotics.com" },
                            { region: "North America", loc: "[Your Location]", email: "careers-na@robustrobotics.com" },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-200 bg-white p-10">
                                <h3 className="text-xl font-semibold text-gray-900">{item.region}</h3>
                                <p className="mt-4 text-gray-700">{item.loc}</p>
                                <p className="mt-2 text-gray-600">{item.email}</p>

                                <button className="mt-6 font-semibold text-black hover:underline">
                                    → View Careers
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GLOBAL IMPACT METRICS */}
            <section className="py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Global Impact Metrics
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        International Operations Dashboard (2025)
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { value: "85+", label: "Active partnerships" },
                            { value: "15.2M+", label: "Seeds deployed globally" },
                            { value: "68,000", label: "Tonnes CO₂ sequestration potential (20-year)" },
                            { value: "340+", label: "Species benefiting from restoration" },
                            { value: "12", label: "Threatened ecosystems supported" },
                            { value: "2,400+", label: "People trained internationally" },
                            { value: "$8.5M", label: "International operations investment" },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-200 bg-gray-50 p-8">
                                <h3 className="text-4xl font-light text-gray-900">{item.value}</h3>
                                <p className="mt-3 text-gray-700 font-semibold">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RESPONSIBILITY */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm tracking-widest font-semibold text-gray-500 uppercase">
                        Sustainability & Responsibility
                    </p>

                    <h2 className="mt-8 text-4xl md:text-6xl font-light text-gray-900">
                        Ethical International Operations
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="border border-gray-200 bg-white p-10">
                            <h3 className="text-2xl font-semibold text-gray-900">Commitments</h3>
                            <ul className="mt-6 space-y-2 text-gray-700 text-lg">
                                <li>• Respect for indigenous rights and knowledge</li>
                                <li>• Free, prior, and informed consent (FPIC)</li>
                                <li>• Fair labor practices in all countries</li>
                                <li>• Environmental compliance with local and international standards</li>
                                <li>• Anti-corruption policies</li>
                                <li>• Transparent reporting</li>
                                <li>• Equitable benefit sharing</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 bg-white p-10">
                            <h3 className="text-2xl font-semibold text-gray-900">Certifications</h3>
                            <ul className="mt-6 space-y-2 text-gray-700 text-lg">
                                <li>• B Corporation International Standards</li>
                                <li>• Fair Trade practices verification</li>
                                <li>• ISO 14001 (all facilities)</li>
                                <li>• Local regulatory compliance (all regions)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 border-t border-gray-200 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-light text-gray-900">
                        Build Global Partnerships with Robust Robotics
                    </h2>

                    <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Whether you represent a government agency, conservation organization, research institution,
                        or local community, we are ready to partner on restoration missions that create measurable
                        impact and lasting shared value.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <button className="bg-black text-white px-10 py-4 font-semibold hover:bg-gray-900 transition">
                            Partnership Inquiry
                        </button>
                        <button className="border border-gray-400 px-10 py-4 font-semibold hover:bg-gray-100 transition">
                            Contact Regional Hub
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            <Lastfooter />
        </div>
    );
}
