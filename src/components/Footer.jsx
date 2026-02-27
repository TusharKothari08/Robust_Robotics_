// // /**
// //  * Footer Component
// //  * 
// //  * Provides global navigation links and a newsletter signup call-to-action.
// //  * It is categorized into logical columns to help users find information.
// //  */

// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // /**
// //  * Footer Component
// //  * 
// //  * Hooks:
// //  * - useNavigate: To programmatically navigate to the signup page when the button is clicked.
// //  * 
// //  * Structure:
// //  * - Helpful Links (4 columns of navigation).
// //  * - Newsletter subscription prompt and button.
// //  */


// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     // bg-[#0B1120]
//     <footer className=" text-gray-400 bg-black pt-16 pb-8 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Main Container */}
//         <div className="flex flex-col lg:flex-row justify-between gap-12">

//           {/* LEFT SIDE - 4 Columns */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">

//             {/* Company */}
//             <div>
//               <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
//                 Company
//               </h4>
//               <ul className="space-y-3">
//                 {["About", "Mission", "Leadership", "Careers", "Updates"].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-sm hover:text-blue-400 transition-colors duration-300"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Resources */}
//             <div>
//               <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
//                 Resources
//               </h4>
//               <ul className="space-y-3">
//                 {["Documentation", "Case Studies", "News & Announcements", "Articles"].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-sm hover:text-blue-400 transition-colors duration-300"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Support */}
//             <div>
//               <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
//                 Support
//               </h4>
//               <ul className="space-y-3">
//                 {["Contact", "Technical Help", "Partnerships", "Media Inquiries"].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-sm hover:text-blue-400 transition-colors duration-300"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Legal */}
//             <div>
//               <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
//                 Legal
//               </h4>
//               <ul className="space-y-3">
//                 {["Privacy Policy", "Terms", "Compliance Information"].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-sm hover:text-blue-400 transition-colors duration-300"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           </div>

//           {/* RIGHT SIDE - Newsletter Signup */}
//           <div className="w-full lg:w-96">
//             <h3 className="text-white text-xl font-semibold mb-4">
//               Join the Vector Star newsletter
//             </h3>

//             <p className="text-sm text-gray-500 leading-relaxed mb-6">
//               Get articles on the innovative projects our scientists and engineers are working on right now.
//             </p>

//             {/* Signup Form */}
//             <form className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
//               />

//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-md transition duration-300"
//               >
//                 Sign Up →
//               </button>
//             </form>
//           </div>

//         </div>

//         {/* Bottom Divider */}
//         <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
//           <p>© {new Date().getFullYear()} Robust Robotics. All rights reserved.</p>
//           <p className="mt-3 sm:mt-0">Engineered for precision.</p>
//         </div>

//       </div>
//     </footer>
//   );
// }

/**
 * Footer Component
 *
 * Provides global navigation links and a newsletter signup call-to-action.
 * Connected properly to React Router routes.
 */

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* LEFT SIDE - 4 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">

            {/* Company */}
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about-us" className="text-sm hover:text-blue-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-sm hover:text-blue-400 transition">
                    Leadership Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm hover:text-blue-400 transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/company" className="text-sm hover:text-blue-400 transition">
                    Company Overview
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/resources" className="text-sm hover:text-blue-400 transition">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/newsroom" className="text-sm hover:text-blue-400 transition">
                    News & Announcements
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-sm hover:text-blue-400 transition">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/webinars" className="text-sm hover:text-blue-400 transition">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/contact" className="text-sm hover:text-blue-400 transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-sm hover:text-blue-400 transition">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link to="/our-businesses" className="text-sm hover:text-blue-400 transition">
                    Our Businesses
                  </Link>
                </li>
                <li>
                  <Link to="/global-activities" className="text-sm hover:text-blue-400 transition">
                    Global Activities
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/cookies" className="text-sm hover:text-blue-400 transition">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link to="/ethics" className="text-sm hover:text-blue-400 transition">
                    Ethics
                  </Link>
                </li>
                <li>
                  <Link to="/sustainability" className="text-sm hover:text-blue-400 transition">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDE - Newsletter Signup */}
          <div className="w-full lg:w-96">
            <h3 className="text-white text-xl font-semibold mb-4">
              Join the Vector Star newsletter
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Get articles on the innovative projects our scientists and engineers are working on right now.
            </p>

            <Link
              to="/signup"
              className="inline-block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-md transition duration-300"
            >
              Sign Up →
            </Link>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Robust Robotics. All rights reserved.</p>
          <p className="mt-3 sm:mt-0">Engineered for precision.</p>
        </div>
      </div>
    </footer>
  );
}
