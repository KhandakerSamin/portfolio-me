export default function FrequentlyUsedTools() {
  const frameworks = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Express", icon: "🚂" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" }
  ];

  const databases = [
    { name: "MongoDB", icon: "🍃" },
    { name: "Mongoose", icon: "🔗" },
    { name: "Firebase", icon: "🔥" }
  ];

  const software = [
    { name: "Windows", icon: "🪟" },
    { name: "Linux", icon: "🐧" },
    { name: "VS Code", icon: "💻" },
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "Postman", icon: "📮" }
  ];

  const ToolCard = ({ name, icon }) => (
    <div className="group relative bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col items-center justify-center min-h-[140px]">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-white font-semibold text-center text-sm">
        {name}
      </h4>
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );

  return (
    <section className="relative z-10 w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="tools">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
            Frequently Used
          </span>{" "}
          <span className="text-white">Tools</span>
        </h2>

        {/* Frameworks Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6 text-center">
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {frameworks.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>

        {/* Databases Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
            Databases
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {databases.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>

        {/* Software & Tools Section */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            Development Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {software.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </div>

        {/* Additional Skills Badge */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <span className="px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 font-semibold">
            RESTful APIs
          </span>
          <span className="px-6 py-3 bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold">
            Responsive Design
          </span>
          <span className="px-6 py-3 bg-linear-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-green-300 font-semibold">
            Version Control
          </span>
          <span className="px-6 py-3 bg-linear-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-pink-300 font-semibold">
            JWT Authentication
          </span>
        </div>
      </div>
    </section>
  );
}
