import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-10 w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
              Full-Stack
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400">
              MERN Developer
            </span>
          </h1>

          {/* Location Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <svg 
              className="w-5 h-5 text-blue-400" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-gray-300 text-lg">
              Brahmanbaria, <span className="text-blue-400 font-semibold">Bangladesh</span>
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/50 text-center"
            >
              See Projects
            </a>
            <a 
              href="/cv.pdf"
              download
              className="px-8 py-3 bg-transparent border-2 border-gray-600 text-white font-medium rounded-full hover:border-gray-400 hover:bg-gray-800/30 transition-all duration-300 text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Content - Hazy Image Section */}
        <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
          {/* Gradient Glow Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
          
          {/* Image Container with Hazy Overlay */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-800">
            {/* Background Image */}
            <Image
              src="/hero.jpg"
              alt="Khandaker Samin Yeasar"
              fill
              className="object-cover"
              priority
            />
            
            {/* Hazy Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/50"></div>
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-end justify-center p-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Hey There! <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Glad</span> you&apos;re here
                </h3>
                <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                  Motivated Full-Stack MERN Developer with a strong foundation in web technologies and a growing interest in AI and machine learning. Currently expanding skills in Python and exploring AI integration with web applications. Studying B.Sc. in Software Engineering at Daffodil International University.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
