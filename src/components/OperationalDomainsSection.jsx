import { useNavigate } from "react-router-dom";
import aerospace from "../assets/aerospace.png";
import terrestrial from "../assets/terrestrial.png";
import maritime from "../assets/maritime.png";
import AnimatedLabel from "../components/ui/AnimatedLabel";

export default function OperationalDomainsSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* 🔥 AUTOMATIC LETTER ANIMATION */}
          <AnimatedLabel className="text-sm font-semibold tracking-widest text-black uppercase">
            [03] Core Competencies
          </AnimatedLabel>

          <button
            onClick={() => navigate("/operational-domains")}
            className="text-sm font-semibold text-blue-500 hover:underline flex items-center gap-1"
          >
            View More <span className="text-lg">{">"}</span>
          </button>
        </div>

        {/* Main Title */}
        <h2 className="mt-8 text-4xl md:text-5xl font-light text-gray-800 leading-snug">
          Solutions Across Every <br /> Environment
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* AIR */}
          <div
  onClick={() => navigate("/operational-domains")}
  className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-3"
>

  {/* IMAGE */}
  <img
    src={aerospace}
    alt="Aerospace"
    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-[900ms] ease-out"
  />

  {/* DARK FILM */}
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500" />

  {/* PREMIUM GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/95 via-[#0A1A2F]/40 to-transparent opacity-90 group-hover:opacity-80 transition duration-500" />

  {/* EDGE GLOW */}
  <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-cyan-400/40 transition duration-500" />

  {/* GLASS PANEL */}
  <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-white/5 p-6">

    <h3 className="text-2xl font-semibold text-white tracking-wide">
      Aerospace
    </h3>

    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-[0.25em] mt-1">
      AIR
    </p>

  </div>

</div>

          {/* LAND */}
          <div
  onClick={() => navigate("/operational-domains")}
  className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-3"
>

  <img
    src={terrestrial}
    alt="Terrestrial"
    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-[900ms] ease-out"
  />

  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500" />

  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/95 via-[#0A1A2F]/40 to-transparent opacity-90 group-hover:opacity-80 transition duration-500" />

  <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-cyan-400/40 transition duration-500" />

  <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-white/5 p-6">

    <h3 className="text-2xl font-semibold text-white tracking-wide">
      Terrestrial
    </h3>

    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-[0.25em] mt-1">
      LAND
    </p>

  </div>

</div>

          {/* SEA */}
          <div
  onClick={() => navigate("/operational-domains")}
  className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-3"
>

  <img
    src={maritime}
    alt="Maritime"
    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-[900ms] ease-out"
  />

  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500" />

  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/95 via-[#0A1A2F]/40 to-transparent opacity-90 group-hover:opacity-80 transition duration-500" />

  <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-cyan-400/40 transition duration-500" />

  <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-white/5 p-6">

    <h3 className="text-2xl font-semibold text-white tracking-wide">
      Maritime
    </h3>

    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-[0.25em] mt-1">
      SEA
    </p>

  </div>

</div>

        </div>
      </div>
    </section>
  );
}