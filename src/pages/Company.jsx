// /**
//  * Company Page (About Us)
//  * 
//  * Provides detailed information about Robust Robotics, its core capabilities,
//  * historical milestones, leadership team, and mission/vision.
//  */

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Lastfooter from '../components/Lastfooter';
// import { Link } from 'react-router-dom';

// /**
//  * Company Component
//  * 
//  * This page serves as the primary "About" page for the company.
//  * It uses several static data sets to render different informative sections.
//  */
// const Company = () => {
//     /**
//      * Capabilities Data
//      * High-level descriptions of technical focus areas.
//      */
//     const capabilities = [
//         {
//             title: 'Intelligent Robotics Platforms',
//             description: 'Our robotic systems are designed for resilience, adaptability, and precision. By integrating advanced sensors, embedded systems, and AI, we enable machines to perceive, decide, and act in real time.',
//             icon: (
//                 <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
//                 </svg>
//             ),
//         },
//         {
//             title: 'AI & Computer Vision',
//             description: 'We develop vision-based intelligence for object detection, tracking, safety monitoring, and autonomous decision-making—optimized for edge deployment and real-world conditions.',
//             icon: (
//                 <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//             ),
//         },
//         {
//             title: 'Smart Mobility & Autonomous Systems',
//             description: 'From drones to ground-based robotic platforms, our solutions enable intelligent navigation, payload handling, and mission-aware automation across industries.',
//             icon: (
//                 <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//             ),
//         },
//     ];

//     const milestones = [
//         { year: '2019–2021', description: 'Early R&D and concept validation in robotics and AI' },
//         { year: '2022', description: 'Prototype development and field testing of autonomous systems' },
//         { year: '2023', description: 'Expansion into AI-driven vision and edge intelligence' },
//         { year: '2024', description: 'National recognition through hackathons, incubators, and summits' },
//         { year: '2025', description: 'Deployment-ready platforms and strategic partnerships' },
//     ];

//     const leadership = [
//         { role: 'Founder & CEO', focus: 'Vision, Strategy, Product Direction' },
//         { role: 'Founder & CTO', focus: 'Robotics Architecture & AI Systems' },
//         { role: 'Head of AI & Vision', focus: 'Computer Vision & Edge Intelligence' },
//         { role: 'Head of Hardware', focus: 'Embedded Systems & Mechatronics' },
//         { role: 'Head of Operations', focus: 'Deployment & Partnerships' },
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
//             <Navbar />

//             {/* Hero Section */}
//             <div className="pt-32 pb-20 px-8 sm:px-12 lg:px-20 max-w-7xl mx-auto">
//                 <div className="text-center mb-20 animate-fadeIn">
//                     <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
//                         About Us
//                     </h1>
//                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
//                         Engineering Intelligent Robotics for the Real World
//                     </h2>
//                     <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
//                         Robust Robotics is reimagining how intelligent machines interact with complex, dynamic environments. We build full-stack robotic and AI systems that combine hardware, software, perception, and decision intelligence to solve real-world industrial and societal challenges.
//                     </p>
//                     <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mt-6 leading-relaxed">
//                         From autonomous mobility and vision-based control systems to AI-powered safety and automation platforms, our technologies are designed to work beyond controlled labs—on the ground, at the edge, and at scale.
//                     </p>
//                 </div>

//                 {/* Seeing Beyond Automation Section */}
//                 <section className="mb-24">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                             Seeing Beyond Automation
//                         </h2>
//                         <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                             Robots. AI. Systems.<br />Seamlessly Integrated.
//                         </p>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-8">
//                         {capabilities.map((capability, index) => (
//                             <div
//                                 key={index}
//                                 className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
//                             >
//                                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

//                                 <div className="relative z-10">
//                                     <div className="text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
//                                         {capability.icon}
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
//                                         {capability.title}
//                                     </h3>
//                                     <p className="text-gray-400 leading-relaxed">
//                                         {capability.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center mt-16">
//                         <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto italic">
//                             With Robust Robotics, you're not just deploying machines—<br />
//                             <span className="text-cyan-400 font-semibold">you're enabling intelligent systems that adapt, learn, and deliver impact.</span>
//                         </p>
//                     </div>
//                 </section>

//                 {/* Mission & Vision Section */}
//                 <section className="mb-24">
//                     <div className="grid md:grid-cols-2 gap-8">
//                         {/* Mission */}
//                         <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
//                             <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-br-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

//                             <div className="relative z-10">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <span className="w-2 h-12 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></span>
//                                     <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-emerald-400 mb-4">
//                                     Build Intelligent Systems That Enhance Human Capability
//                                 </h3>
//                                 <p className="text-gray-300 leading-relaxed mb-4">
//                                     Our mission is to create robust, reliable, and accessible robotic systems that improve safety, efficiency, and decision-making. By leveraging AI, robotics, and edge intelligence, we help industries act faster, operate smarter, and respond effectively to real-world challenges.
//                                 </p>
//                                 <p className="text-gray-400 leading-relaxed">
//                                     From industrial automation and infrastructure monitoring to emergency response and assistive technologies, we are building intelligence where it is needed most.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Vision */}
//                         <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
//                             <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

//                             <div className="relative z-10">
//                                 <div className="flex items-center gap-3 mb-6">
//                                     <span className="w-2 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
//                                     <h2 className="text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-purple-400 mb-4">
//                                     Power the Future with Intelligent Machines
//                                 </h3>
//                                 <p className="text-gray-300 leading-relaxed mb-4">
//                                     We envision a future where intelligent robotics seamlessly supports human life and industry—handling dangerous tasks, optimizing resources, and enabling safer, smarter environments.
//                                 </p>
//                                 <p className="text-gray-400 leading-relaxed">
//                                     Robust Robotics aims to become a foundational technology provider for autonomous and AI-driven systems across sectors, helping accelerate innovation while keeping humans at the center of progress.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Key Milestones Section */}
//                 <section className="mb-24">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
//                             <span className="w-2 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
//                             Key Milestones
//                         </h2>
//                     </div>

//                     <div className="relative">
//                         {/* Timeline line */}
//                         <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500"></div>

//                         <div className="space-y-8">
//                             {milestones.map((milestone, index) => (
//                                 <div
//                                     key={index}
//                                     className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                                         }`}
//                                 >
//                                     {/* Timeline dot */}
//                                     <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10"></div>

//                                     {/* Content */}
//                                     <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
//                                         <div className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
//                                             <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-bold mb-3">
//                                                 {milestone.year}
//                                             </span>
//                                             <p className="text-gray-300 leading-relaxed">
//                                                 {milestone.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Team Section */}
//                 <section className="mb-24">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
//                             <span className="w-2 h-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
//                             Team
//                         </h2>
//                         <p className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
//                             The Right Mix of Engineering, Passion, and Execution
//                         </p>
//                         <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
//                             Robust Robotics brings together engineers, researchers, designers, and builders with hands-on experience in robotics, AI, embedded systems, and real-world deployments. Our strength lies in turning complex technology into practical, scalable solutions.
//                         </p>
//                     </div>

//                     <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 mb-12">
//                         <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-3">
//                             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                             </svg>
//                             Turning Experience into Impact
//                         </h3>
//                         <p className="text-gray-300 leading-relaxed">
//                             We work collaboratively across disciplines to ensure our innovations move quickly from idea to prototype to deployment. Our team culture values experimentation, ownership, and purpose-driven engineering.
//                         </p>
//                     </div>

//                     {/* Leadership */}
//                     <div className="mb-12">
//                         <h3 className="text-3xl font-bold text-white mb-8 text-center">Leadership</h3>
//                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {leadership.map((leader, index) => (
//                                 <div
//                                     key={index}
//                                     className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
//                                 >
//                                     <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-4 flex items-center justify-center">
//                                         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                                         </svg>
//                                     </div>
//                                     <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
//                                         {leader.role}
//                                     </h4>
//                                     <p className="text-gray-400">
//                                         {leader.focus}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Advisors */}
//                     <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10">
//                         <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
//                             <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                             </svg>
//                             Advisors
//                         </h3>
//                         <p className="text-gray-300 leading-relaxed">
//                             Our advisors bring expertise across deep-tech startups, robotics commercialization, manufacturing, and policy—helping us scale responsibly and globally.
//                         </p>
//                     </div>
//                 </section>

//                 {/* Build With Us CTA */}
//                 <section className="text-center">
//                     <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 md:p-16 overflow-hidden">
//                         {/* Decorative elements */}
//                         <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
//                         <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

//                         <div className="relative z-10">
//                             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//                                 Build With Us
//                             </h2>
//                             <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
//                                 Drive the Next Leap in Robotics and AI
//                             </h3>
//                             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
//                                 Join Robust Robotics to work on technologies that matter—systems that operate in the real world and create measurable impact. If you're passionate about building intelligent machines that solve meaningful problems, we'd love to build the future together.
//                             </p>
//                             <Link
//                                 to="/careers"
//                                 className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg font-semibold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105"
//                             >
//                                 Explore Careers
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                 </svg>
//                             </Link>
//                         </div>
//                     </div>
//                 </section>
//             </div>

//             <Footer />
//             <Lastfooter />
//         </div>
//     );
// };

// export default Company;


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

const Company = () => {

  const leadership = [
    { name: "Founder & CEO", focus: "Vision, Strategy, Product Direction" },
    { name: "Founder & CTO", focus: "Robotics Architecture & AI Systems" },
    { name: "Head of AI & Vision", focus: "Computer Vision & Edge Intelligence" },
    { name: "Head of Hardware", focus: "Embedded Systems & Mechatronics" },
    { name: "Head of Operations", focus: "Deployment & Strategic Partnerships" },
  ];

  const businessAreas = [
    "Defense & Strategic Systems",
    "Industrial Robotics & Automation",
    "Smart Infrastructure & Monitoring",
    "Autonomous Mobility Platforms",
    "Edge AI & Computer Vision",
  ];

  const values = [
    "Engineer for Impact",
    "Pursue Technical Truth",
    "Own the Outcome",
    "Move with Precision",
    "Collaborate Across Disciplines",
    "Raise the Standard Continuously",
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      <div className="pt-32">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pb-32 text-center">
          <p className="text-sm tracking-[0.4em] uppercase text-gray-400">
            Company
          </p>

          <h1 className="mt-8 text-6xl md:text-7xl font-light leading-tight">
            Building Intelligent Systems
            <br />
            <span className="font-semibold">
              For The Real World
            </span>
          </h1>

          <p className="mt-10 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Robust Robotics engineers autonomous platforms and AI-driven systems
            designed for environments where reliability, safety, and performance
            are non-negotiable.
          </p>
        </section>

        {/* METRICS */}
        <section className="border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-10 text-center">
            {[
              ["2019", "Founded"],
              ["5+", "Core Business Areas"],
              ["Multiple", "Global Partnerships"],
              ["Field-Tested", "Deployment Platforms"],
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-4xl font-light">{item[0]}</h3>
                <p className="mt-2 text-gray-500 text-sm uppercase tracking-wider">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-5xl mx-auto px-6 py-32">
          <h2 className="text-4xl font-light mb-10">
            About Us
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Robust Robotics builds full-stack robotic systems integrating hardware,
            autonomy software, AI perception, and real-time decision intelligence.
            Our platforms operate beyond controlled labs — across industrial sites,
            strategic environments, and dynamic field conditions.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-gray-500">
                Where We Operate
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Operating across multiple regions with engineering, research,
                and deployment capabilities supporting global customers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-gray-500">
                Customer Base
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Serving defense, infrastructure, industrial automation,
                and emerging autonomy markets requiring mission-critical systems.
              </p>
            </div>
          </div>
        </section>

        {/* BUSINESS AREAS */}
        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-32">
            <h2 className="text-4xl font-light mb-16">
              Business Areas
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {businessAreas.map((area, i) => (
                <div
                  key={i}
                  className="p-8 border border-gray-200 bg-white hover:shadow-2xl transition"
                >
                  <p className="text-lg font-medium">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="max-w-5xl mx-auto px-6 py-32">
          <h2 className="text-4xl font-light mb-10">
            Our Team
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our multidisciplinary team brings together robotics engineers,
            AI researchers, embedded systems specialists, and deployment
            operators committed to building reliable, field-ready systems.
          </p>
        </section>

        {/* LEADERSHIP */}
        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-32">
            <h2 className="text-4xl font-light mb-16">
              Leadership
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {leadership.map((leader, i) => (
                <div
                  key={i}
                  className="border border-gray-200 bg-white p-8 hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold">
                    {leader.name}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    {leader.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="max-w-6xl mx-auto px-6 py-32">
          <h2 className="text-4xl font-light mb-16">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <div key={i}>
                <p className="text-lg font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JOIN OUR TEAM CTA */}
        <section className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

          <div className="relative max-w-5xl mx-auto px-6 py-36 text-center">
            <div className="w-16 h-[1px] bg-gray-600 mx-auto mb-12"></div>

            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              Join The Team
              <br />
              <span className="font-semibold">
                Building The Future of Autonomy
              </span>
            </h2>

            <p className="mt-10 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Work on systems that operate where precision, safety,
              and performance matter most.
            </p>

            <div className="mt-14">
              <Link
                to="/careers"
                className="bg-white text-black px-12 py-4 text-sm font-semibold tracking-wider transition transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Careers
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
      <Lastfooter />
    </div>
  );
};

export default Company;
