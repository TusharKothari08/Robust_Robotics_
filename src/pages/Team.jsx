// /**
//  * Team Page
//  *
//  * Premium team page with leadership + engineering team cards.
//  * Includes stats section, expertise tags, and CTA.
//  */

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Lastfooter from "../components/Lastfooter";
// import { Link } from "react-router-dom";

// // ✅ Import Team Images
// import TusharJain from "../assets/TeamPhotos/Tushar_Jain.png";
// import TusharKothari from "../assets/TeamPhotos/Tushar_Kothari1.png";
// import AtharvaBhawsar from "../assets/TeamPhotos/Atharva_Bhawsar.png"
// import AngadSinghSaluja from "../assets/TeamPhotos/AngadSinghSaluja.jpeg";
// import CharanjeetKaurSaluja from "../assets/TeamPhotos/CharanjeetKaurSaluja.jpeg";

// const leadership = [
//     {
//         name: "Charanjeet Kaur Saluja",
//         role: "Founder",
//         image: CharanjeetKaurSaluja,
//         linkedin: "https://www.linkedin.com/in/charanjeet-kour-saluja-a89277325",
//         bio: "Focused on building scalable robotics systems with strong engineering execution and real-world deployment.",
//         tags: ["Leadership", "Robotics Strategy", "Product Vision"],
//     },
//     {
//         name: "Angad Singh Saluja",
//         role: "Co-Founder",
//         image: AngadSinghSaluja,
//         linkedin: "https://linkedin.com/in/angad-singh-saluja-770299225",
//         bio: "Driving engineering innovation across autonomy, embedded systems, and intelligent robotics infrastructure.",
//         tags: ["Autonomy", "Engineering", "Systems Design"],
//     },
// ];

// const team = [
//     {
//         name: "Tushar Jain",
//         role: "Machine Learning Engineer",
//         image: TusharJain,
//         linkedin: "https://linkedin.com/in/tushar-jain-dhabariya-ab39a6282",
//         bio: "Builds high-performance AI models for perception and real-time decision-making in autonomous robotics systems. Focused on translating advanced algorithms into reliable, mission-ready solutions.",
//         tags: ["ML", "Computer Vision", "Deployment"],
//     },
//     {
//         name: "Tushar Kothari",
//         role: "Full Stack Developer",
//         image: TusharKothari,
//         linkedin: "https://linkedin.com/in/tushar-kothari-309bb2297",
//         bio: "Develops scalable web platforms and internal systems that power robotics operations. Combines strong frontend and backend expertise to deliver secure, high-performance digital solutions.",
//         tags: ["React", "Backend", "UI/UX"],
//     },
//     {
//         name: "Athrva Bhawsar",
//         role: "Deep Learning Engineer",
//         image: AtharvaBhawsar,
//         linkedin: "https://linkedin.com/in/athrva-bhawsar07",
//         bio: "Designs and deploys deep learning systems for computer vision and autonomous navigation. Works on intelligent perception models built for real-world operational environments.",
//         tags: ["Deep Learning", "AI Research", "Optimization"],
//     },
// ];

// const LinkedInIcon = () => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-4 h-4"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//     >
//         <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.6c0-1.8 0-4-2.4-4s-2.8 1.9-2.8 3.9V24h-4V8z" />
//     </svg>
// );

// const MemberCard = ({ member }) => {
//     return (
//         <div className="group border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col">
//             {/* IMAGE */}
//             <div className="relative bg-gray-50 flex items-center justify-center">
//                 <img
//                     src={member.image}
//                     alt={member.name}
//                     className="h-64 w-full object-contain p-4 group-hover:scale-105 transition duration-500"
//                 />

//                 {/* LinkedIn */}
//                 <a
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-gray-200 rounded-full p-2 shadow-sm hover:border-blue-700 hover:text-blue-700 transition"
//                 >
//                     <LinkedInIcon />
//                 </a>
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>

//                 <p className="text-blue-700 font-semibold text-sm mt-1">
//                     {member.role}
//                 </p>

//                 <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-grow">
//                     {member.bio}
//                 </p>

//                 {/* TAGS */}
//                 <div className="flex flex-wrap gap-2 mt-6">
//                     {member.tags.map((tag, index) => (
//                         <span
//                             key={index}
//                             className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700"
//                         >
//                             {tag}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Accent */}
//             <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
//         </div>
//     );
// };

// const Team = () => {
//     return (
//         <div className="bg-white min-h-screen text-black">
//             <Navbar />

//             {/* HERO */}
//             <section className="pt-36 pb-14 max-w-7xl mx-auto px-6">
//                 <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
//                     Our People
//                 </p>

//                 <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
//                     The Team Building <br className="hidden md:block" />
//                     Robust Robotics
//                 </h1>

//                 <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
//                     Robust Robotics is built by engineers, researchers, and developers who
//                     believe robotics should move beyond prototypes. We design systems that
//                     operate in real-world environments — with safety, reliability, and
//                     performance as priorities.
//                 </p>
//             </section>

//             {/* STATS STRIP */}
//             <section className="bg-gray-50 border-t border-gray-200">
//                 <div className="max-w-7xl mx-auto px-6 py-12">
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                         {[
//                             { value: "10+", label: "Builders & Engineers" },
//                             { value: "4+", label: "Robotics Domains" },
//                             { value: "15+", label: "Prototypes & Iterations" },
//                             { value: "100%", label: "Execution Mindset" },
//                         ].map((stat, i) => (
//                             <div
//                                 key={i}
//                                 className="border border-gray-200 bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition"
//                             >
//                                 <h3 className="text-3xl font-semibold text-blue-700 mb-2">
//                                     {stat.value}
//                                 </h3>
//                                 <p className="text-gray-600 font-medium text-sm">
//                                     {stat.label}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* LEADERSHIP */}
//             <section className="max-w-7xl mx-auto px-6 py-16">
//                 <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
//                     <div>
//                         <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
//                             Leadership
//                         </p>

//                         <h2 className="text-3xl md:text-4xl font-light">
//                             Founders & Core Leadership
//                         </h2>
//                     </div>

//                     <p className="text-gray-600 max-w-xl leading-relaxed">
//                         Our leadership team brings a builder-first mindset, focusing on real
//                         execution, technical depth, and building robotics systems that
//                         create measurable impact.
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-8">
//                     {leadership.map((member, i) => (
//                         <MemberCard key={i} member={member} />
//                     ))}
//                 </div>
//             </section>

//             {/* TEAM SECTION */}
//             <section className="bg-gray-50 border-t border-gray-200">
//                 <div className="max-w-7xl mx-auto px-6 py-16">
//                     <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
//                         <div>
//                             <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
//                                 Engineering Team
//                             </p>

//                             <h2 className="text-3xl md:text-4xl font-light">
//                                 Builders, Developers & Researchers
//                             </h2>
//                         </div>

//                         <p className="text-gray-600 max-w-xl leading-relaxed">
//                             We work across AI, autonomy, embedded systems, and full-stack
//                             development. Every member contributes directly to real products
//                             and platforms.
//                         </p>
//                     </div>

//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {team.map((member, i) => (
//                             <MemberCard key={i} member={member} />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA */}
//             <section className="bg-gray-50 border-t border-gray-200">
//                 <div className="max-w-7xl mx-auto px-6 py-16">
//                     <div className="border border-gray-200 bg-white rounded-2xl shadow-sm p-10 md:p-14 text-center">
//                         <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
//                             Careers
//                         </p>

//                         <h2 className="text-3xl md:text-4xl font-light mb-4">
//                             Want to Build With Us?
//                         </h2>

//                         <p className="text-gray-600 mb-8 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
//                             If you enjoy solving difficult engineering problems and building
//                             robotics systems that operate in real environments, we would love
//                             to hear from you.
//                         </p>

//                         <Link
//                             to="/careers"
//                             className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-3 font-semibold rounded-lg transition"
//                         >
//                             View Careers
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//             <Lastfooter />
//         </div>
//     );
// };

// export default Team;

/**
 * Team Page – Premium Enterprise Version
 */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lastfooter from "../components/Lastfooter";
import { Link } from "react-router-dom";

// Team Images
import TusharJain from "../assets/TeamPhotos/Tushar_Jain.png";
import TusharKothari from "../assets/TeamPhotos/Tushar_Kothari1.png";
import AtharvaBhawsar from "../assets/TeamPhotos/Atharva_Bhawsar.png";
import AngadSinghSaluja from "../assets/TeamPhotos/AngadSinghSaluja.jpeg";
import CharanjeetKaurSaluja from "../assets/TeamPhotos/CharanjeetKaurSaluja.jpeg";

const leadership = [
  {
    name: "Charanjeet Kaur Saluja",
    role: "Founder",
    image: CharanjeetKaurSaluja,
    linkedin: "https://www.linkedin.com/in/charanjeet-kour-saluja-a89277325",
    bio: "Focused on building scalable robotics systems with strong engineering execution and real-world deployment.",
    tags: ["Leadership", "Robotics Strategy", "Product Vision"],
  },
  {
    name: "Angad Singh Saluja",
    role: "Co-Founder",
    image: AngadSinghSaluja,
    linkedin: "https://linkedin.com/in/angad-singh-saluja-770299225",
    bio: "Driving engineering innovation across autonomy, embedded systems, and intelligent robotics infrastructure.",
    tags: ["Autonomy", "Engineering", "Systems Design"],
  },
];

const team = [
  {
    name: "Tushar Jain",
    role: "Machine Learning Engineer",
    image: TusharJain,
    linkedin: "https://linkedin.com/in/tushar-jain-dhabariya-ab39a6282",
    bio: "Builds high-performance AI models for perception and real-time decision-making in autonomous robotics systems.",
    tags: ["ML", "Computer Vision", "Deployment"],
  },
  {
    name: "Tushar Kothari",
    role: "Full Stack Developer",
    image: TusharKothari,
    linkedin: "https://linkedin.com/in/tushar-kothari-309bb2297",
    bio: "Develops scalable web platforms and internal systems powering robotics operations and digital infrastructure.",
    tags: ["React", "Backend", "UI/UX"],
  },
  {
    name: "Athrva Bhawsar",
    role: "Deep Learning Engineer",
    image: AtharvaBhawsar,
    linkedin: "https://linkedin.com/in/athrva-bhawsar07",
    bio: "Designs and deploys deep learning systems for computer vision and autonomous navigation.",
    tags: ["Deep Learning", "AI Research", "Optimization"],
  },
];

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.6c0-1.8 0-4-2.4-4s-2.8 1.9-2.8 3.9V24h-4V8z" />
  </svg>
);

const MemberCard = ({ member }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-1">

      {/* Image */}
      <div className="relative bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="h-72 w-full object-contain p-6 transition duration-500 group-hover:scale-105"
        />

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-5 right-5 bg-white border border-gray-300 rounded-full p-2 hover:border-black transition"
        >
          <LinkedInIcon />
        </a>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900">
          {member.name}
        </h3>

        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">
          {member.role}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mt-5 flex-grow">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {member.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="h-[2px] bg-black"></div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
          Our People
        </p>

        <h1 className="mt-10 text-6xl md:text-7xl font-light leading-tight max-w-5xl">
          Engineering Minds.
          <br />
          <span className="font-semibold">
            Real-World Builders.
          </span>
        </h1>

        <p className="mt-10 text-xl text-gray-600 max-w-3xl leading-relaxed">
          Robust Robotics is built by engineers and researchers who believe robotics
          must operate beyond laboratories — delivering safety, precision, and measurable impact.
        </p>
      </section>

      {/* STATS */}
      <section className="border-t border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-center">
          {[
            { value: "10+", label: "Engineers & Builders" },
            { value: "4+", label: "Robotics Domains" },
            { value: "15+", label: "System Iterations" },
            { value: "100%", label: "Execution Focus" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-light">{stat.value}</h3>
              <p className="text-gray-500 text-sm mt-3 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-light mb-16">
          Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {leadership.map((member, i) => (
            <MemberCard key={i} member={member} />
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-4xl font-light mb-16">
            Engineering Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <MemberCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <h2 className="text-4xl font-light">
            Join the Builders
          </h2>

          <p className="mt-8 text-gray-600 text-lg max-w-3xl mx-auto">
            If you’re driven to solve difficult engineering problems and deploy
            robotics systems that operate in the real world, we’d like to meet you.
          </p>

          <Link
            to="/careers"
            className="inline-block mt-12 px-12 py-4 bg-black text-white text-sm uppercase tracking-wider rounded-lg hover:bg-gray-900 transition"
          >
            View Careers
          </Link>
        </div>
      </section>

      <Footer />
      <Lastfooter />
    </div>
  );
};

export default Team;
