"use client";

import { useState } from "react";
import Main from "../components/Layout/Main";
import ClickSpark from "../components/ui/ClickSpark";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:aidilmusirjun@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: faInstagram,
      url: "http://instagram.com/albyhaqee",
      color: "text-pink-500 dark:text-pink-300 hover:text-pink-700 dark:hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: faTiktok,
      url: "https://www.tiktok.com/@albyhaqee",
      color: "text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/aidilbaihaqi/",
      color: "text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/aidilbaihaqi",
      color: "text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400",
    },
    {
      name: "YouTube",
      icon: faYoutube,
      url: "https://www.youtube.com/@albyhaqee",
      color: "text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500",
    },
    {
      name: "Saweria",
      icon: faCoffee,
      url: "https://saweria.co/aidilbaihaqi",
      color: "text-red-900 dark:text-gray-300 hover:text-red-950 dark:hover:text-gray-400",
    },
  ];

  return (
    <ClickSpark
      sparkColor="#8b5cf6"
      sparkSize={10}
      sparkRadius={18}
      sparkCount={8}
      duration={450}
      easing="ease-out"
    >
      <Main>
        {/* Main Content */}
        <main id="content">
          <div className="w-full max-w-5xl mx-auto pt-5 md:pt-16 px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header */}
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? Feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Send Me a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                        placeholder="Project Inquiry"
                      />
                    </div>
 </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info & Social Media */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 rounded-xl">
                        <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:aidilmusirjun@gmail.com"
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          aidilmusirjun@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 rounded-xl">
                        <MessageSquare className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                          Response Time
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Usually within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Connect With Me
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 group"
                      >
                        <FontAwesomeIcon
                          icon={social.icon}
                          className={`text-2xl ${social.color} transition-colors`}
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Main>
    </ClickSpark>
  );
}
