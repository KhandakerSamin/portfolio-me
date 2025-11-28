"use client";
import { useEffect, useRef, useState } from "react";

export default function TechnicalSkills() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  const skills = [
    {
      name: "JavaScript",
      icon: "⚡",
      description: "Expert level proficiency in modern ES6+ JavaScript",
      level: "Expert",
      size: "square"
    },
    {
      name: "React.js",
      icon: "⚛️",
      description: "Building dynamic and responsive user interfaces",
      level: "Advanced",
      size: "wide"
    },
    {
      name: "Next.js",
      icon: "▲",
      description: "Currently working with Next.js for modern web apps",
      level: "Advanced",
      size: "medium"
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "Backend development with Node.js runtime",
      level: "Advanced",
      size: "medium"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      description: "NoSQL database management and design",
      level: "Advanced",
      size: "square"
    },
    {
      name: "Express.js",
      icon: "🚂",
      description: "RESTful API development with Express",
      level: "Advanced",
      size: "wide"
    }
  ];

  return (
    <section className="relative z-10 w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
            Technical
          </span>{" "}
          <span className="text-white">Skills</span>
        </h2>

        {/* Skills Grid - Row 1 */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Medium (JavaScript) */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className={`col-span-12 md:col-span-3 group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/70 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 ${
              visibleCards.includes(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0ms" }}>
            <div className="text-5xl mb-4">
              {skills[0].icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">{skills[0].name}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skills[0].description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30 group-hover:bg-green-500/30 transition-colors duration-300">
              {skills[0].level}
            </span>
          </div>

          {/* Small (React) */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className={`col-span-12 md:col-span-4 group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/70 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 ${
              visibleCards.includes(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}>
            <div className="text-5xl mb-4">
              {skills[1].icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{skills[1].name}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skills[1].description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors duration-300">
              {skills[1].level}
            </span>
          </div>

          {/* Big (Next.js) */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className={`col-span-12 md:col-span-5 group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/70 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 ${
              visibleCards.includes(2)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}>
            <div className="text-5xl mb-4">
              {skills[2].icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{skills[2].name}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skills[2].description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors duration-300">
              {skills[2].level}
            </span>
          </div>
        </div>

        {/* Skills Grid - Row 2 */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {/* Big (Node.js) */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className={`col-span-12 md:col-span-5 group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/70 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 ${
              visibleCards.includes(3)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0ms" }}>
            <div className="text-5xl mb-4">
              {skills[3].icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{skills[3].name}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skills[3].description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors duration-300">
              {skills[3].level}
            </span>
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
          </div>

          {/* Small (MongoDB) */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className={`col-span-12 md:col-span-4 group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/70 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 ${
              visibleCards.includes(4)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}>
            <div className="text-5xl mb-4">
              {skills[4].icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{skills[4].name}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skills[4].description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors duration-300">
              {skills[4].level}
            </span>
          </div>

          {/* Medium (Express) */}
          <div
            ref={(el) => (cardsRef.current[5] = el)}
            className={`col-span-12 md:col-span-3 group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/70 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 ${
              visibleCards.includes(5)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}>
            <div className="text-5xl mb-4">
              {skills[5].icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{skills[5].name}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skills[5].description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors duration-300">
              {skills[5].level}
            </span>
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center px-4">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            <span className="text-blue-400 font-semibold">Comfortable with AI</span> tools and exploring machine learning integration in web applications
          </p>
        </div>
      </div>
    </section>
  );
}
