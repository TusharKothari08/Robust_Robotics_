/**
 * Newsroom Page
 *
 * Displays a grid of recent news articles, press releases, and company updates.
 */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";

/**
 * newsData
 * Array of news objects containing dates, titles, and preview images.
 */
const newsData = [
    {
        date: "January 18, 2026",
        title:
            "Robust Robotics Showcases AI-Powered Robotic Systems at AI Impact Bhopal Pre-Summit",
        image:
            "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070",
    },
    {
        date: "December 12, 2025",
        title: "Robust Robotics Selected Among Top Innovators at National Hackathon",
        image:
            "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070",
    },
    {
        date: "October 30, 2025",
        title:
            "Robust Robotics Partners with Academic Ecosystems to Accelerate Deep-Tech Innovation",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
    },
];

const Newsroom = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <Navbar />

            {/* HERO SECTION */}
            <section className="pt-36 pb-14 max-w-7xl mx-auto px-6">
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
                    Newsroom
                </p>

                <h1 className="text-4xl md:text-5xl font-light mb-5 tracking-tight">
                    Latest Updates & Announcements
                </h1>

                <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
                    Explore the latest announcements, partnerships, launches, and milestones
                    shaping the future of intelligent robotics.
                </p>
            </section>

            {/* NEWS GRID SECTION (GREY BACKGROUND) */}
            <section className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {newsData.map((item, index) => (
                            <div
                                key={index}
                                className="group border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden cursor-pointer flex flex-col"
                            >
                                {/* IMAGE */}
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-6 flex flex-col flex-grow">
                                    {/* DATE */}
                                    <p className="text-gray-500 text-sm mb-3">
                                        {item.date}
                                    </p>

                                    {/* TITLE */}
                                    <h2 className="text-lg font-semibold leading-snug text-gray-900 group-hover:text-blue-700 transition flex-grow">
                                        {item.title}
                                    </h2>

                                    {/* READ MORE */}
                                    <p className="mt-6 text-sm font-semibold text-blue-700">
                                        Read More →
                                    </p>
                                </div>

                                {/* Bottom Accent */}
                                <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                            </div>
                        ))}

                    </div>

                    {/* LOAD MORE */}
                    <div className="flex justify-center mt-14">
                        <button className="border border-gray-300 hover:border-blue-700 hover:text-blue-700 px-8 py-3 rounded-lg font-semibold transition bg-white">
                            Load More
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
            <Lastfooter />
        </div>
    );
};

export default Newsroom;
