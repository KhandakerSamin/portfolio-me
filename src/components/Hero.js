import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-10 w-full min-h-[calc(100vh-100px)] flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-8 lg:gap-12 items-center">
        {/* Left Content - Order changes on mobile */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-6 order-2 lg:order-1">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
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
              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-gray-300 text-sm sm:text-base lg:text-lg">
              Brahmanbaria, <span className="text-blue-400 font-semibold">Bangladesh</span>
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/50 text-center"
            >
              See Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1ZcWQtAcj500uE-1P6BKRHHMXGh5lnsyD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border-2 border-gray-600 text-white font-medium rounded-full hover:border-gray-400 hover:bg-gray-800/30 transition-all duration-300 text-center"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Content - Hazy Image Section - Shows first on mobile */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center order-1 lg:order-2">
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
            <div className="absolute inset-0 flex items-end justify-center p-4 sm:p-6 lg:p-8">
              <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Hey There! <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Glad</span> you&apos;re here
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-sm sm:max-w-md mx-auto leading-relaxed">
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
