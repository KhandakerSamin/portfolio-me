"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, X, Sparkles, ShoppingCart, CreditCard, Zap, Mail, Smartphone, Shield, Microscope, Newspaper, Bot, Users, BarChart3, Palette, Lock, Target, Link as LinkIcon } from "lucide-react";

// Feature icon mapping
const getFeatureIcon = (index, projectId) => {
  if (projectId === 1) {
    const icons = [ShoppingCart, CreditCard, Zap, Mail, Smartphone, Shield];
    const Icon = icons[index] || Sparkles;
    return <Icon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />;
  } else if (projectId === 2) {
    const icons = [Microscope, Newspaper, Bot, Users, BarChart3, Palette];
    const Icon = icons[index] || Sparkles;
    return <Icon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />;
  } else {
    const icons = [Lock, BarChart3, Target, LinkIcon, Smartphone, Zap];
    const Icon = icons[index] || Sparkles;
    return <Icon className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />;
  }
};

// ProjectModal component defined outside
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className={`text-4xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r ${project.gradient}`}>
              {project.title}
            </h2>
            <p className="text-xl text-gray-400">{project.subtitle}</p>
          </div>

          {/* Full Description */}
          <p className="text-gray-300 leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg"
                >
                  {getFeatureIcon(index, project.id)}
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 bg-linear-to-r ${project.gradient} text-white rounded-full font-medium hover:opacity-90 transition-opacity`}
            >
              <Github className="w-5 h-5" />
              <span>GitHub Repository</span>
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white rounded-full font-medium transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProjectCard component - Row layout
const ProjectCard = ({ project, onClick, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className="group relative bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 p-6`}>
        {/* Project Image */}
        <div 
          className="relative w-full lg:w-1/2 h-64 lg:h-80 rounded-2xl overflow-hidden cursor-pointer group-hover:scale-[1.02] transition-transform duration-500"
          onClick={onClick}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              View Details
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full text-yellow-900 text-xs font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Featured
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Category Badge */}
          <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-blue-500/20 text-blue-400 border border-blue-500/30">
            {project.category}
          </span>

          {/* Title - Always visible */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm mb-4">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 5).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-xs text-gray-400">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-xl font-bold text-blue-400">{project.stats.commits}</p>
              <p className="text-xs text-gray-500">Commits</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-purple-400">{project.stats.lines}</p>
              <p className="text-xs text-gray-500">Lines</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-pink-400">{project.stats.duration}</p>
              <p className="text-xs text-gray-500">Duration</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={onClick}
              className={`flex-1 px-4 py-2 bg-linear-to-r ${project.gradient} text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2`}
            >
              <ExternalLink className="w-4 h-4" />
              View Details
            </button>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors text-sm flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors text-sm flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Lebanese Grill House",
      subtitle: "Full Stack Restaurant Ordering Platform",
      description: "A modern, production-ready restaurant ordering system with real-time order management, secure payment processing via Stripe, and an admin dashboard.",
      fullDescription: "Lebanese Grill House is a comprehensive food ordering platform designed to handle the complete order lifecycle from browsing to payment to order fulfillment. Features real-time admin notifications via WebSockets, secure payment processing with Stripe (including Apple Pay/Google Pay), and a responsive UI built with modern web technologies.",
      image: "/p1.png",
      technologies: ["Next.js 16", "Express.js", "MongoDB", "Stripe", "Socket.IO", "Tailwind CSS"],
      features: [
        "Smart basket system with real-time price calculation",
        "Secure Stripe payments with Apple Pay/Google Pay",
        "Real-time admin notifications with Socket.IO",
        "Automated email confirmations",
        "Fully responsive mobile-first design",
        "Rate limiting and security features"
      ],
      stats: {
        commits: "150+",
        lines: "5000+",
        duration: "2 months"
      },
      links: {
        github: "https://github.com/KhandakerSamin/Lebanese_Grill_House",
        live: "https://lebanse-grill-house.vercel.app/",
        case_study: "#"
      },
      category: "Full Stack",
      featured: true,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Data Science Lab Website",
      subtitle: "University Research Lab Platform",
      description: "A comprehensive full-stack web application for the Data Science Lab, featuring research projects, event management, and an AI-powered chatbot.",
      fullDescription: "The Data Science Lab Website serves as the digital hub for a university's Data Science Lab. It provides a comprehensive platform for showcasing research, managing events, facilitating club activities, and engaging visitors through an interactive chatbot.",
      image: "/p2.png",
      technologies: ["Next.js 15", "Express.js", "MongoDB", "Framer Motion", "EmailJS", "Radix UI"],
      features: [
        "Dynamic research project showcase",
        "Event management system with registration",
        "AI-powered chatbot for visitor engagement",
        "Team member profiles and management",
        "Kaggle API integration for competitions",
        "Modern animations with Framer Motion"
      ],
      stats: {
        commits: "200+",
        lines: "8000+",
        duration: "3 months"
      },
      links: {
        github: "https://github.com/KhandakerSamin/DataScience_Lab_Website",
        live: "https://data-science-lab-diu.vercel.app/",
        case_study: "#"
      },
      category: "Full Stack",
      featured: true,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "SlideLink",
      subtitle: "Student Presentation Collection Manager",
      description: "A modern web application to streamline the collection and management of student presentation slides with password-protected collections.",
      fullDescription: "SlideLink solves the common problem of collecting student presentation materials during courses. Instructors can create dedicated collections with automatic organization, real-time tracking, and easy access for all team members.",
      image: "/p3.png",
      technologies: ["Next.js 15", "React 19", "Express.js", "MongoDB", "Tailwind CSS 4"],
      features: [
        "Password-protected collection access",
        "Real-time dashboard with analytics",
        "Team-based submission system",
        "Direct Google Slides/PowerPoint links",
        "Fully responsive design",
        "Fast performance with Next.js 15"
      ],
      stats: {
        commits: "80+",
        lines: "3000+",
        duration: "1 month"
      },
      links: {
        github: "https://github.com/KhandakerSamin/SlideLink-Frontend",
        live: "https://slidelink.vercel.app/",
        case_study: "#"
      },
      category: "Full Stack",
      featured: false,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="relative z-10 w-full py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-blue-400">
              Featured
            </span>{" "}
            <span className="text-white">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into dynamic, user-friendly digital experiences with modern web technologies
          </p>
        </div>

        {/* Projects List - Row wise */}
        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <a
            href="https://github.com/KhandakerSamin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/50"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
