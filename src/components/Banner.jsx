import React from "react";
import pattern from "../assets/vector1.png";

const Pattern = ({ mirror = false, opacity = 0.42 }) => (
  <img
    src={pattern}
    alt=""
    draggable="false"
    className={`pointer-events-none select-none absolute -top-10 ${
      mirror ? "-right-16 -scale-x-100" : "-left-16"
    } w-[165%] sm:w-[135%] h-auto mix-blend-screen`}
    style={{ opacity, mixBlendMode: "screen" }}
  />
);

const StatCard = ({ label, value, from, to }) => (
  <div className="relative overflow-hidden rounded-2xl p-8 text-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] h-44 sm:h-52">
    <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${from}, ${to})` }} />
    <Pattern />
    <Pattern mirror />
    <div className="relative">
      <p className="text-base sm:text-lg font-medium">{label}</p>
      <p className="text-4xl sm:text-5xl font-extrabold mt-2 leading-none">{value}</p>
    </div>
  </div>
);

function Banner({ inProgress = 0, resolved = 0 }) {
  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard label="In-Progress" value={inProgress} from="#7C3AED" to="#6366F1" />
        <StatCard label="Resolved" value={resolved} from="#16A34A" to="#22C55E" />
      </div>
    </section>
  );
}

export default Banner;
