export default function TechnicalSkills() {
  const skills = [
    {
      name: "JavaScript",
      icon: "⚡",
      description: "Expert level proficiency in modern ES6+ JavaScript",
      level: "Expert"
    },
    {
      name: "React.js",
      icon: "⚛️",
      description: "Building dynamic and responsive user interfaces",
      level: "Advanced"
    },
    {
      name: "Next.js",
      icon: "▲",
      description: "Currently working with Next.js for modern web apps",
      level: "Advanced"
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "Backend development with Node.js runtime",
      level: "Advanced"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      description: "NoSQL database management and design",
      level: "Advanced"
    },
    {
      name: "Express.js",
      icon: "🚂",
      description: "RESTful API development with Express",
      level: "Advanced"
    },
    {
      name: "Python",
      icon: "🐍",
      description: "Growing skills in Python and AI integration",
      level: "Intermediate"
    },
    {
      name: "C/C++",
      icon: "⚙️",
      description: "Foundational programming and problem solving",
      level: "Intermediate"
    },
    {
      name: "Java",
      icon: "☕",
      description: "Object-oriented programming concepts",
      level: "Intermediate"
    }
  ];

  return (
    <section className="relative z-10 w-full py-20 px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
            Technical
          </span>{" "}
          <span className="text-white">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* Level Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                skill.level === 'Expert' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : skill.level === 'Advanced'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
              }`}>
                {skill.level}
              </span>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            <span className="text-blue-400 font-semibold">Comfortable with AI</span> tools and exploring machine learning integration in web applications
          </p>
        </div>
      </div>
    </section>
  );
}
