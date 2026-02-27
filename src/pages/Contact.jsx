

// /**
//  * Contact Page
//  *
//  * Premium contact experience with:
//  * - Hero section
//  * - Contact options cards
//  * - Contact form
//  * - Direct email
//  * - Office locations
//  */

// /**
//  * Contact Page
//  *
//  * Clean white premium layout
//  * - Hero section
//  * - Contact option cards
//  * - Email section
//  * - Office locations
//  */

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Contact = () => {
//   return (
//     <div className="bg-white text-gray-900 min-h-screen">
//       <Navbar />

//       {/* HERO SECTION */}
//       <div className="pt-44 pb-24 max-w-6xl mx-auto px-6">
//         <h1 className="text-6xl font-semibold mb-6 tracking-tight">
//           Get in Touch
//         </h1>

//         <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
//           Have a question or want to explore how our robotics solutions
//           can support your business? Our team is ready to help you.
//         </p>
//       </div>

//       {/* CONTACT OPTIONS */}
//       <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mb-28">

//         {[
//           {
//             title: "Contact Sales",
//             desc: "Speak with our sales team about pricing and solutions."
//           },
//           {
//             title: "Become a Partner",
//             desc: "Join our partner ecosystem and build the future together."
//           },
//           {
//             title: "General Enquiry",
//             desc: "Reach out for support, media, or any other questions."
//           }
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
//           >
//             <h3 className="text-2xl font-semibold mb-3">
//               {item.title}
//             </h3>

//             <p className="text-gray-600 leading-relaxed">
//               {item.desc}
//             </p>
//           </div>
//         ))}

//       </div>

//       {/* EMAIL SECTION */}
//       <div className="text-center mb-28">
//         <p className="text-gray-600 text-lg">
//           Can't find what you're looking for?
//         </p>

//         <p className="text-blue-600 text-xl font-medium mt-3 hover:underline cursor-pointer">
//           contact@robustrobotics.com
//         </p>
//       </div>

//       {/* OFFICES */}
//       <div className="max-w-6xl mx-auto px-6 pb-32">
//         <h2 className="text-4xl font-semibold mb-10 tracking-tight">
//           Our Offices
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 text-gray-600 text-lg">
//           <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
//             Bangalore, India
//           </div>

//           <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
//             Pune, India
//           </div>

//           <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
//             San Francisco, USA
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] bg-[size:48px_48px] opacity-30 pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-28 max-w-6xl mx-auto px-6">
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-6">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Let’s Engineer the Future of{" "}
          <span className="text-blue-600">Intelligent Robotics</span>
        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-3xl leading-relaxed">
          Whether you're scaling manufacturing, integrating automation,
          or exploring strategic collaboration — our team is ready
          to build next-generation robotics solutions with you.
        </p>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mb-28">
        {[
          {
            title: "Enterprise Solutions",
            desc: "Custom robotics architecture tailored for large-scale industrial deployment."
          },
          {
            title: "Strategic Partnerships",
            desc: "Collaborate with our engineering and AI teams to accelerate innovation."
          },
          {
            title: "Media & Research",
            desc: "Connect with our R&D and communications division for insights and publications."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-500"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              {item.desc}
            </p>

            <button className="text-blue-600 font-medium hover:underline">
              Get in Touch →
            </button>
          </div>
        ))}
      </section>

      {/* CONTACT FORM */}
      <section className="relative bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">
            Start a Conversation
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl">
            Share a few details about your requirements and our team
            will reach out within 24 hours.
          </p>

          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Company / Organization"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project or inquiry..."
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-md hover:bg-blue-700 transition w-fit"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* GLOBAL OFFICES */}
      <section className="relative max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-semibold mb-14">
          Global Innovation Hubs
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              city: "Bangalore",
              desc: "India – Engineering & Artificial Intelligence Lab"
            },
            {
              city: "Pune",
              desc: "India – Advanced Manufacturing Operations"
            },
            {
              city: "San Francisco",
              desc: "USA – Strategy & Global Partnerships"
            }
          ].map((office, i) => (
            <div
              key={i}
              className="p-8 border border-gray-200 rounded-2xl bg-white hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {office.city}
              </h3>
              <p className="text-gray-600">
                {office.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL CTA */}
      <section className="relative text-center pb-28">
        <p className="text-gray-600 mb-3">
          Prefer direct communication?
        </p>

        <a
          href="mailto:contact@robustrobotics.com"
          className="text-blue-600 text-xl font-medium hover:underline"
        >
          contact@robustrobotics.com
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

