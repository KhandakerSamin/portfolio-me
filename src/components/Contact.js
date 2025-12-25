"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Simulate form submission
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "khandakersaminyeasar@gmail.com",
      link: "mailto:khandakersaminyeasar@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1310 892598",
      link: "tel:+8801310892598",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Brahmanbaria, Bangladesh",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/KhandakerSamin",
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/khandakersaminyeasar/",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "https://www.linkedin.com/in/khandakersaminyeasar/",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section className="relative z-10 w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400">
              Get In
            </span>{" "}
            <span className="text-white">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div>
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-linear-to-br ${info.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm break-all">
                          {info.value}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700 hover:scale-110 border border-gray-700/50 rounded-full transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white font-medium">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Quick Info */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <p className="text-gray-400 text-sm leading-relaxed">
                  <span className="text-blue-400 font-semibold">Open to opportunities!</span> 
                  {" "}Currently looking for internships, freelance projects, and collaborative work in 
                  <span className="text-purple-400 font-semibold"> Full-Stack Development</span> and 
                  <span className="text-pink-400 font-semibold"> Data Science</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : "bg-red-500/20 border border-red-500/30 text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Availability Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-linear-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/30 rounded-full px-8 py-4">
            <p className="text-gray-300 text-lg">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-green-400 font-semibold">Available for new opportunities</span> • 
              {" "}Response time: <span className="text-blue-400 font-semibold">Within 24 hours</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
