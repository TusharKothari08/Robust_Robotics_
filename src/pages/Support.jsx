/**
 * Customer Support Page
 * 
 * Provides an overview of support tiers (Basic, Standard, Premium),
 * success toolkits, and direct support contact options.
 */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * Support Component
 * 
 * Structure:
 * - Hero header.
 * - Support Tiers display.
 * - Success Toolkit (links/guides overview).
 * - Immediate help CTA.
 */
const Support = () => {
    return (
        <div className="bg-[#0A1A2F] text-white min-h-screen">
            <Navbar />

            {/* HERO */}
            <div className="pt-44 pb-24 max-w-6xl mx-auto px-6">
                <h1 className="text-6xl font-semibold mb-6">
                    Customer Support
                </h1>

                <p className="text-xl text-gray-400 max-w-3xl">
                    Access expert guidance, technical resources,
                    and dedicated support designed to help you
                    succeed with intelligent automation.
                </p>
            </div>

            {/* SUPPORT TIERS */}
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mb-32">

                {[
                    { title: "Basic", desc: "Community access and help centre." },
                    { title: "Standard", desc: "Priority email support and faster responses." },
                    { title: "Premium", desc: "24/7 support with a dedicated success manager." },
                ].map((plan, i) => (
                    <div key={i} className="bg-[#102544] p-8 rounded-2xl hover:scale-105 transition">
                        <h3 className="text-2xl font-semibold mb-4">
                            {plan.title}
                        </h3>

                        <p className="text-gray-400">
                            {plan.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* TOOLKIT */}
            <div className="max-w-6xl mx-auto px-6 mb-32">
                <h2 className="text-4xl font-semibold mb-10">
                    Your Success Toolkit
                </h2>

                <div className="grid md:grid-cols-2 gap-8 text-gray-400">
                    <p>Help centre with guides and FAQs</p>
                    <p>Developer documentation</p>
                    <p>Community discussions</p>
                    <p>Product knowledge base</p>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center pb-32">
                <h2 className="text-4xl font-semibold mb-6">
                    Need Immediate Help?
                </h2>

                <button className="px-8 py-4 bg-cyan-500 rounded-full hover:bg-cyan-600 transition">
                    Contact Support
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default Support;
