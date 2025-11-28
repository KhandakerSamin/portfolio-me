export default function AboutMe() {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Daffodil International University",
      period: "2024 - Present",
      details: "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
      status: "current"
    },
    {
      degree: "Web Development Course",
      institution: "Programming Hero",
      period: "July 2023 - December 2023",
      details: "Completed Frontend Web Development with React and Simple backend with Node.js. With some real life projects.",
      status: "completed"
    },
    {
      degree: "HSC in Science",
      institution: "Akhaura Cambrian College",
      period: "2019 - 2021",
      details: "Completed Higher Secondary Education in science with the main subject Higher Math",
      status: "completed"
    }
  ];

  const achievements = [
    {
      title: "Student Associate",
      organization: "Data Science Lab, DIU",
      icon: "🎓",
      description: "Working on innovative data science projects and research"
    },
    {
      title: "Ambassador",
      organization: "Bondi Pathshala",
      icon: "🌟",
      description: "Representing and promoting educational initiatives"
    },
    {
      title: "Champion",
      organization: "National Science Fair (Brahmanbaria)",
      icon: "🏆",
      description: "First place in Science Fair competition - 2019"
    }
  ];

  return (
    <section className="relative z-10 w-full py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-blue-400">
            About
          </span>{" "}
          <span className="text-white">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
          ESTJ-A Personality • Strategic Thinker • Team Leader
        </p>

        {/* Biography Section */}
        <div className="mb-20">
          <div className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">👋</span>
              Hello, I&apos;m Khandaker Samin Yeasar
            </h3>
            <div className="text-gray-300 space-y-4 leading-relaxed text-base md:text-lg">
              <p>
                I&apos;m currently pursuing a B.Sc. in Software Engineering at Daffodil International University. 
                As an <span className="text-blue-400 font-semibold">Executive (ESTJ-A)</span> personality type, 
                I&apos;m driven by a strong sense of responsibility and a passion for organized and collaborative work environments.
              </p>
              <p>
                Having completed a Web Development course from Programming Hero, I have honed my skills in frontend web development, 
                specializing in <span className="text-purple-400 font-semibold">React.js and the MERN stack</span>. 
                I actively explore advanced technologies such as <span className="text-blue-400 font-semibold">Next.js, TypeScript</span>, and modern UI frameworks.
              </p>
              <p>
                As a dedicated learner and aspiring professional in the tech industry, I bring a strategic mindset to my projects. 
                I take pride in my ability to <span className="text-green-400 font-semibold">lead and contribute to successful endeavors</span>, 
                ensuring not only project completion but also the growth and cohesion of the teams I work with.
              </p>
              <p>
                My journey in software engineering is marked by a commitment to excellence, evident in my academic pursuits and practical experiences. 
                I am excited about the evolving landscape of web development and am eager to contribute my skills to 
                <span className="text-pink-400 font-semibold"> innovative projects</span> that transform ideas into dynamic, 
                user-friendly digital experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              Education
            </span>{" "}
            <span className="text-white">Journey</span>
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {/* Status Badge */}
                {edu.status === 'current' && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">
                    Currently Studying
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                    📚
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-400 font-semibold mb-2 text-lg">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      {edu.period}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-400">
              Achievements
            </span>{" "}
            <span className="text-white">& Recognition</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 text-center"
              >
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h4>

                {/* Organization */}
                <p className="text-yellow-400 font-semibold mb-3">
                  {achievement.organization}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/5 group-hover:to-orange-500/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Interest Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/30 rounded-full px-8 py-4">
            <p className="text-gray-300 text-lg">
              <span className="text-blue-400 font-semibold">Currently Learning:</span> AI & Machine Learning • 
              <span className="text-purple-400 font-semibold"> Python for Data Science</span> • 
              <span className="text-pink-400 font-semibold"> Advanced Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
