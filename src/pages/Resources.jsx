// /**
//  * Resources Hub Page
//  * 
//  * A central location for all company updates including:
//  * - Newsroom (announcements and milestones)
//  * - Webinars (technical deep dives and demos)
//  * - Events (upcoming summits and forums)
//  */

// import { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Lastfooter from '../components/Lastfooter';

// /**
//  * Resources Component
//  * 
//  * Features:
//  * - Search functionality for News, Webinars, and Events.
//  * - Categorized sections with status tracking.
//  * 
//  * Hooks:
//  * - useState (newsSearch, webinarSearch, eventSearch): Track user input for filtering content in each section.
//  */
// const Resources = () => {
//     // Search states for each category
//     const [newsSearch, setNewsSearch] = useState('');
//     const [webinarSearch, setWebinarSearch] = useState('');
//     const [eventSearch, setEventSearch] = useState('');

//     /**
//      * Data: newsItems
//      * Recent press releases and company news.
//      */
//     const newsItems = [
//         {
//             date: 'January 18, 2026',
//             title: 'Robust Robotics Showcases AI-Powered Robotic Systems at AI Impact Bhopal Pre-Summit',
//             description: 'Robust Robotics presented its latest advancements in intelligent automation, computer vision, and autonomous systems at the AI Impact Bhopal Pre-Summit.',
//         },
//         {
//             date: 'December 12, 2025',
//             title: 'Robust Robotics Selected Among Top Innovators at National Hackathon',
//             description: 'Our team secured a Top 10 position among 1700+ submissions, highlighting our commitment to practical and scalable robotic solutions.',
//         },
//         {
//             date: 'October 30, 2025',
//             title: 'Robust Robotics Partners with Academic and Incubation Ecosystems to Accelerate Deep-Tech Innovation',
//             description: 'Strategic collaborations aimed at strengthening R&D, prototyping, and industry-ready deployments.',
//         },
//         {
//             date: 'September 5, 2025',
//             title: 'Robust Robotics Unveils Vision-Based Autonomous Control Platform',
//             description: 'A major step forward in AI-driven perception and decision-making for robotics and mobility systems.',
//         },
//     ];

//     const webinars = [
//         {
//             date: 'June 10, 2025',
//             category: 'Robotics & AI',
//             title: 'Building Vision-Based Autonomous Systems',
//         },
//         {
//             date: 'April 22, 2025',
//             category: 'Industrial Automation',
//             title: 'AI-Driven Safety and Monitoring Solutions',
//         },
//         {
//             date: 'February 14, 2025',
//             category: 'Drones & Smart Mobility',
//             title: 'Edge AI for Real-Time Decision Making',
//         },
//         {
//             date: 'November 28, 2024',
//             category: 'Embedded Systems',
//             title: 'Designing Robust Hardware–Software Architectures',
//         },
//     ];

//     const events = [
//         {
//             dateRange: 'January 26, 2026 – January 28, 2026',
//             title: 'AI Impact Summit 2026 | Bhopal, India',
//             description: 'Meet the Robust Robotics team to explore AI-powered robotics solutions for automation, safety, and smart infrastructure.',
//         },
//         {
//             dateRange: 'February 15, 2026 – February 16, 2026',
//             title: 'National Robotics & Automation Expo 2026',
//             description: 'Robust Robotics will showcase its latest autonomous systems, vision-based control platforms, and industrial robotics solutions.',
//         },
//         {
//             dateRange: 'March 10, 2026',
//             title: 'Startup & Deep-Tech Innovation Forum',
//             description: 'Engage with our founders and engineers to learn how we turn bold ideas into deployable robotic systems.',
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
//             <Navbar />

//             {/* Hero Section */}
//             <div className="pt-32 pb-16 px-8 sm:px-12 lg:px-20 max-w-7xl mx-auto">
//                 <div className="text-center mb-16 animate-fadeIn">
//                     <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
//                         Resources Hub
//                     </h1>
//                     <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
//                         Stay connected with our latest innovations, insights, and industry events
//                     </p>
//                 </div>

//                 {/* Newsroom Section */}
//                 <section id="newsroom" className="mb-24">
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
//                         <div>
//                             <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 flex items-center gap-3">
//                                 <span className="w-2 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
//                                 Newsroom
//                             </h2>
//                             <p className="text-gray-400 text-lg ml-5">
//                                 Latest announcements, partnerships, and milestones
//                             </p>
//                         </div>
//                         <div className="relative w-full md:w-auto">
//                             <input
//                                 type="text"
//                                 placeholder="Search news..."
//                                 value={newsSearch}
//                                 onChange={(e) => setNewsSearch(e.target.value)}
//                                 className="w-full md:w-80 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
//                             />
//                             <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </div>
//                     </div>

//                     <div className="grid gap-6">
//                         {newsItems.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
//                             >
//                                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
//                                     <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">
//                                         {item.date}
//                                     </span>
//                                     <div className="flex gap-3">
//                                         <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-cyan-700 transition-all hover:shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105">
//                                             Read now
//                                         </button>
//                                         <button className="px-6 py-2 border border-cyan-500 text-cyan-400 rounded-full font-medium hover:bg-cyan-500/10 transition-all">
//                                             Know More
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-gray-400 leading-relaxed">
//                                     {item.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center mt-10">
//                         <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-full font-semibold hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
//                             Load more
//                         </button>
//                     </div>
//                 </section>

//                 {/* Webinars Section */}
//                 <section id="webinars" className="mb-24">
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
//                         <div>
//                             <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 flex items-center gap-3">
//                                 <span className="w-2 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
//                                 Webinars
//                             </h2>
//                             <p className="text-gray-400 text-lg ml-5">
//                                 Technical deep dives, live demos, and product walkthroughs
//                             </p>
//                         </div>
//                         <div className="relative w-full md:w-auto">
//                             <input
//                                 type="text"
//                                 placeholder="Search webinars..."
//                                 value={webinarSearch}
//                                 onChange={(e) => setWebinarSearch(e.target.value)}
//                                 className="w-full md:w-80 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
//                             />
//                             <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </div>
//                     </div>

//                     <div className="mb-6">
//                         <h3 className="text-2xl font-bold text-white mb-6">Past Webinars</h3>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6">
//                         {webinars.map((webinar, index) => (
//                             <div
//                                 key={index}
//                                 className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
//                             >
//                                 {/* Decorative gradient overlay */}
//                                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

//                                 <div className="relative z-10">
//                                     <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase mb-3 block">
//                                         {webinar.date}
//                                     </span>
//                                     <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4">
//                                         {webinar.category}
//                                     </div>
//                                     <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
//                                         {webinar.title}
//                                     </h3>
//                                     <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105">
//                                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                                             <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
//                                         </svg>
//                                         Watch now
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="text-center mt-10">
//                         <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-full font-semibold hover:bg-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
//                             Load more
//                         </button>
//                     </div>
//                 </section>

//                 {/* Events Section */}
//                 <section id="events" className="mb-16">
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
//                         <div>
//                             <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 flex items-center gap-3">
//                                 <span className="w-2 h-12 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></span>
//                                 Events
//                             </h2>
//                             <p className="text-gray-400 text-lg ml-5">
//                                 Join us at upcoming technology summits and innovation forums
//                             </p>
//                         </div>
//                         <div className="relative w-full md:w-auto">
//                             <input
//                                 type="text"
//                                 placeholder="Search events..."
//                                 value={eventSearch}
//                                 onChange={(e) => setEventSearch(e.target.value)}
//                                 className="w-full md:w-80 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all backdrop-blur-sm"
//                             />
//                             <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                             </svg>
//                         </div>
//                     </div>

//                     <div className="grid gap-6">
//                         {events.map((event, index) => (
//                             <div
//                                 key={index}
//                                 className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden"
//                             >
//                                 {/* Decorative corner accent */}
//                                 <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-br-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

//                                 <div className="relative z-10">
//                                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                                         <div className="flex-1">
//                                             <div className="flex items-center gap-3 mb-4">
//                                                 <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                                 </svg>
//                                                 <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">
//                                                     {event.dateRange}
//                                                 </span>
//                                             </div>
//                                             <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
//                                                 {event.title}
//                                             </h3>
//                                             <p className="text-gray-400 leading-relaxed">
//                                                 {event.description}
//                                             </p>
//                                         </div>
//                                         <div className="flex-shrink-0">
//                                             <button className="w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium hover:from-emerald-700 hover:to-teal-700 transition-all hover:shadow-lg hover:shadow-emerald-500/30 transform hover:scale-105 flex items-center justify-center gap-2">
//                                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                                 </svg>
//                                                 Book a meeting
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </div>

//             <Footer />
//             <Lastfooter />
//         </div>
//     );
// };

// export default Resources;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";

const KnowledgeBase = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      <div className="pt-32">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
            Knowledge Base & Resource Center
          </p>

          <h1 className="mt-8 text-6xl md:text-7xl font-light leading-tight max-w-5xl">
            Technical Resources,
            <br />
            <span className="font-semibold">
              Industry Applications & Innovation Insights
            </span>
          </h1>

          <p className="mt-10 text-xl text-gray-600 max-w-4xl leading-relaxed">
            A comprehensive collection of whitepapers, case studies, technical briefs,
            industry research, webinars, and operational insights shaping the future
            of autonomous systems across defense, industrial, maritime, and environmental sectors.
          </p>
        </section>

        {/* WHITEPAPERS */}
        <section className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-4xl font-light mb-16">
              Whitepapers
            </h2>

            <div className="grid md:grid-cols-2 gap-16">

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  The Autonomous Advantage in Defense Operations
                </h3>
                <p className="text-gray-600 mb-6">
                  AI-powered unmanned systems enhancing force protection,
                  reducing risk exposure, and expanding operational reach
                  in contested environments.
                </p>
                <div className="flex gap-8 text-sm font-semibold">
                  <button className="underline">Read Now</button>
                  <button className="underline">Download PDF</button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Edge AI and Real-Time Decision Making
                </h3>
                <p className="text-gray-600 mb-6">
                  Neural network deployment, sensor fusion architecture,
                  and low-latency processing for mission-critical platforms.
                </p>
                <div className="flex gap-8 text-sm font-semibold">
                  <button className="underline">Read Now</button>
                  <button className="underline">Download PDF</button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CASE STUDIES BY SECTOR */}
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <h2 className="text-4xl font-light mb-20">
              Case Studies by Sector
            </h2>

            {/* DEFENSE */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-10">
                Defense & Security
              </h3>

              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-semibold">
                    24/7 Perimeter Surveillance Deployment
                  </h4>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li>• 98% detection accuracy</li>
                    <li>• 70% reduction in human patrol</li>
                    <li>• Sub-5-minute incident response</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Harbor Protection via Autonomous Underwater Surveillance
                  </h4>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li>• 360° subsurface monitoring</li>
                    <li>• Threat anomaly detection</li>
                    <li>• Integrated command systems</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* INDUSTRIAL */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-10">
                Industrial & Manufacturing
              </h3>

              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-semibold">
                    AI Vision Systems in Automotive Production
                  </h4>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li>• 99.8% defect detection accuracy</li>
                    <li>• 2.5x faster inspection cycles</li>
                    <li>• $4.2M annual cost savings</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    Autonomous Underground Payload Transport
                  </h4>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li>• 500+ tons daily transport capacity</li>
                    <li>• Zero worker injuries</li>
                    <li>• 45% cost reduction</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* BLOG & INSIGHTS */}
        <section className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <h2 className="text-4xl font-light mb-16">
              Blog & Industry Insights
            </h2>

            <div className="grid md:grid-cols-3 gap-16">

              <div>
                <h3 className="text-lg font-semibold">
                  Deep Learning at the Edge
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Bringing AI inference to autonomous platforms operating
                  in resource-constrained environments.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Human-Robot Collaboration in Industry 5.0
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Collaborative intelligence between humans and machines.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Autonomous Underwater Operations
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                  Expanding maritime security and oceanographic research.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* EVENTS & WEBINARS */}
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <h2 className="text-4xl font-light mb-16">
              Events & Webinars
            </h2>

            <div className="space-y-10 text-gray-700">
              <p>
                <span className="font-semibold">
                  March 10–12, 2026 —
                </span>{" "}
                AUVSI XPONENTIAL 2026 | Orlando, USA
              </p>

              <p>
                <span className="font-semibold">
                  April 22–24, 2026 —
                </span>{" "}
                Automate 2026 | Chicago, USA
              </p>

              <p>
                <span className="font-semibold">
                  Live Webinar —
                </span>{" "}
                Multi-Platform Fleet Management & Mission Control
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT / STAY CONNECTED */}
        <section className="border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl font-light">
              Contact Our Experts
            </h2>

            <p className="mt-8 text-gray-600">
              technical@robustrobotics.com<br />
              sales@robustrobotics.com<br />
              press@robustrobotics.com<br />
              info@robustrobotics.com
            </p>

            <p className="mt-12 text-sm tracking-[0.3em] uppercase text-gray-400">
              Engineering Intelligence Into Motion
            </p>
          </div>
        </section>

      </div>

      <Footer />
      <Lastfooter />
    </div>
  );
};

export default KnowledgeBase;
