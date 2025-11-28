"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ExternalLink, Github, ArrowLeft, Calendar, Code2, Users, CheckCircle2, Sparkles, ShoppingCart, CreditCard, Zap, Mail, Smartphone, Shield, Microscope, Newspaper, Bot, BarChart3, Palette, Lock, Target, Link as LinkIcon } from "lucide-react";

// Feature icon mapping
const getFeatureIcon = (index, projectId) => {
  const iconMaps = {
    1: [ShoppingCart, CreditCard, Zap, Mail, Smartphone, Shield],
    2: [Microscope, Newspaper, Bot, Users, BarChart3, Palette],
    3: [Lock, BarChart3, Target, LinkIcon, Smartphone, Zap]
  };
  const icons = iconMaps[projectId] || [];
  const Icon = icons[index] || CheckCircle2;
  return <Icon className="w-5 h-5 text-blue-400 shrink-0" />;
};

const projects = [
  {
    id: "lebanese-grill-house",
    title: "Lebanese Grill House",
    subtitle: "Full Stack Restaurant Ordering Platform",
    description: "A modern, production-ready restaurant ordering system with real-time order management, secure payment processing via Stripe, and an admin dashboard.",
    fullDescription: "Lebanese Grill House is a comprehensive food ordering platform designed to handle the complete order lifecycle from browsing to payment to order fulfillment. The application features real-time admin notifications via WebSockets, secure payment processing with Stripe (including Apple Pay/Google Pay), and a responsive UI built with modern web technologies. This project demonstrates advanced full-stack development skills including payment gateway integration, real-time communication, and production-level security practices.",
    detailedOverview: "Built as a real-world solution for a restaurant business, this platform handles everything from customer browsing to order fulfillment. The system includes a smart basket with real-time price calculations, multiple payment options through Stripe, instant notifications for new orders, and automated email confirmations. The admin dashboard provides complete order management capabilities with real-time updates.",
    image: "/p1.png",
    technologies: ["Next.js 16", "Express.js", "MongoDB", "Stripe", "Socket.IO", "Tailwind CSS", "Node.js", "JWT", "Bcrypt"],
    features: [
      "Smart basket system with real-time price calculation and item management",
      "Secure Stripe payments with Apple Pay/Google Pay integration",
      "Real-time admin notifications using Socket.IO for instant order updates",
      "Automated email confirmations for customers and admins",
      "Fully responsive mobile-first design optimized for all devices",
      "Rate limiting and security features including CORS and helmet protection",
      "Admin dashboard with complete order management",
      "Menu management system with categories and item customization"
    ],
    challenges: [
      "Implementing real-time order notifications without overwhelming the server",
      "Ensuring secure payment processing with Stripe's latest API",
      "Managing complex state for basket items with customizations",
      "Creating an intuitive admin interface for non-technical users"
    ],
    learnings: [
      "Advanced WebSocket implementation for real-time features",
      "Payment gateway integration and PCI compliance",
      "Production-level security best practices",
      "State management in complex React applications"
    ],
    stats: {
      commits: "150+",
      lines: "5000+",
      duration: "2 months"
    },
    links: {
      github: "https://github.com/KhandakerSamin/Lebanese_Grill_House",
      live: "https://lebanse-grill-house.vercel.app/"
    },
    category: "Full Stack",
    featured: true,
    gradient: "from-orange-500 to-red-500",
    projectId: 1
  },
  {
    id: "data-science-lab-website",
    title: "Data Science Lab Website",
    subtitle: "University Research Lab Platform",
    description: "A comprehensive full-stack web application for the Data Science Lab, featuring research projects, event management, and an AI-powered chatbot.",
    fullDescription: "The Data Science Lab Website serves as the digital hub for a university's Data Science Lab. It provides a comprehensive platform for showcasing research, managing events, facilitating club activities, and engaging visitors through an interactive chatbot. Built with modern web technologies, it features smooth animations, dynamic content management, and integration with external APIs.",
    detailedOverview: "This project was developed to create a professional online presence for the university's Data Science Lab. It includes dynamic research project showcases, event management with registration capabilities, team member profiles, and an AI-powered chatbot for visitor engagement. The platform integrates with Kaggle API to display ongoing competitions and uses EmailJS for communication.",
    image: "/p2.png",
    technologies: ["Next.js 15", "Express.js", "MongoDB", "Framer Motion", "EmailJS", "Radix UI", "Kaggle API", "React Query"],
    features: [
      "Dynamic research project showcase with detailed information and filtering",
      "Event management system with registration and capacity tracking",
      "AI-powered chatbot for visitor engagement and information retrieval",
      "Team member profiles with roles and social links",
      "Kaggle API integration for displaying active competitions",
      "Modern animations and transitions using Framer Motion",
      "Responsive design optimized for all devices",
      "Admin panel for content management and updates"
    ],
    challenges: [
      "Integrating multiple external APIs while maintaining performance",
      "Creating smooth animations without impacting load times",
      "Managing complex content types with MongoDB",
      "Building an intuitive chatbot with natural language processing"
    ],
    learnings: [
      "Advanced animation techniques with Framer Motion",
      "API integration and data synchronization",
      "Content management system architecture",
      "Performance optimization for content-heavy sites"
    ],
    stats: {
      commits: "200+",
      lines: "8000+",
      duration: "3 months"
    },
    links: {
      github: "https://github.com/KhandakerSamin/DataScience_Lab_Website",
      live: "https://data-science-lab-diu.vercel.app/"
    },
    category: "Full Stack",
    featured: true,
    gradient: "from-blue-500 to-purple-500",
    projectId: 2
  },
  {
    id: "slidelink",
    title: "SlideLink",
    subtitle: "Student Presentation Collection Manager",
    description: "A modern web application to streamline the collection and management of student presentation slides with password-protected collections.",
    fullDescription: "SlideLink solves the common problem of collecting student presentation materials during courses. Instructors can create dedicated collections with automatic organization, real-time tracking, and easy access for all team members. The platform provides password-protected collections, real-time analytics, and seamless integration with Google Slides and PowerPoint.",
    detailedOverview: "Developed to address the inefficiency of collecting presentation materials via email or file sharing platforms. SlideLink provides a centralized, organized solution where instructors create collections, students submit their work, and everyone has real-time visibility into submission status. The platform emphasizes simplicity and speed while maintaining security through password protection.",
    image: "/p3.png",
    technologies: ["Next.js 15", "React 19", "Express.js", "MongoDB", "Tailwind CSS 4", "JWT", "Bcrypt"],
    features: [
      "Password-protected collection access for privacy and security",
      "Real-time dashboard with analytics and submission tracking",
      "Team-based submission system with member management",
      "Direct Google Slides/PowerPoint links with preview support",
      "Fully responsive design optimized for mobile and desktop",
      "Fast performance with Next.js 15 and optimized APIs",
      "Collection management with edit and delete capabilities",
      "Export functionality for easy data retrieval"
    ],
    challenges: [
      "Designing an intuitive workflow for both instructors and students",
      "Ensuring secure access without complex authentication flows",
      "Creating real-time updates without constant polling",
      "Managing team submissions and preventing duplicates"
    ],
    learnings: [
      "Building user-friendly workflows for education sector",
      "Balancing security with ease of use",
      "Real-time data updates and state management",
      "Rapid prototyping and iterative development"
    ],
    stats: {
      commits: "80+",
      lines: "3000+",
      duration: "1 month"
    },
    links: {
      github: "https://github.com/KhandakerSamin/SlideLink-Frontend",
      live: "https://slidelink.vercel.app/"
    },
    category: "Full Stack",
    featured: false,
    gradient: "from-green-500 to-teal-500",
    projectId: 3
  }
];

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-linear-to-br from-black via-gray-900 to-black"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <button
              onClick={() => router.push("/#projects")}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section - Flex Layout */}
            <div className="flex flex-col lg:flex-row gap-6 mb-12">
              {/* Left Side - Project Info */}
              <div className="flex-1 flex flex-col justify-center">
                {project.featured && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold mb-4 w-fit">
                    <Sparkles className="w-4 h-4" />
                    Featured Project
                  </div>
                )}
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r ${project.gradient}`}>
                  {project.title}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-400 mb-6">{project.subtitle}</p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r ${project.gradient} text-white rounded-full font-medium hover:opacity-90 transition-opacity`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white rounded-full font-medium transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub Repository
                  </a>
                </div>
              </div>

              {/* Right Side - Project Image */}
              <div className="relative w-full lg:w-1/2 h-64 lg:h-80 rounded-3xl overflow-hidden border border-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className={`absolute inset-0 bg-linear-to-t ${project.gradient} opacity-10`}></div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white mb-1">{project.stats.lines}</p>
                <p className="text-sm text-gray-400">Lines of Code</p>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white mb-1">{project.stats.duration}</p>
                <p className="text-sm text-gray-400">Duration</p>
              </div>
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white mb-1">{project.stats.commits}</p>
                <p className="text-sm text-gray-400">Commits</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed mb-4">{project.fullDescription}</p>
                <p className="text-gray-300 leading-relaxed">{project.detailedOverview}</p>
              </div>

              {/* Key Features */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Key Features</h2>
                <div className="grid grid-cols-1 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-blue-500/30 transition-colors"
                    >
                      {getFeatureIcon(index, project.projectId)}
                      <span className="text-gray-300 flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Learnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Challenges Faced</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-red-400 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Key Learnings</h3>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Category */}
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <p className="text-sm text-gray-400 mb-2">Category</p>
                  <p className="text-white font-semibold">{project.category}</p>
                </div>

                {/* Links */}
                <div className="mt-6 pt-6 border-t border-gray-700/50 space-y-3">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => router.push("/#contact")}
                className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </button>
              <button
                onClick={() => router.push("/#projects")}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white rounded-full font-medium transition-colors"
              >
                View All Projects
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
