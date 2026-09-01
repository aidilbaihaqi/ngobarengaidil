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
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      color:
        "text-signal-ink dark:text-signal hover:text-signal-ink dark:hover:text-signal-ink",
    },
    {
      name: "TikTok",
      icon: faTiktok,
      url: "https://www.tiktok.com/@albyhaqee",
      color: "text-ink hover:text-ink-soft",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/aidilbaihaqi/",
      color:
        "text-signal-ink dark:text-signal hover:text-signal-ink dark:hover:text-signal-ink",
    },
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/aidilbaihaqi",
      color: "text-ink hover:text-ink-soft",
    },
    {
      name: "YouTube",
      icon: faYoutube,
      url: "https://www.youtube.com/@albyhaqee",
      color:
        "text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500",
    },
    {
      name: "Saweria",
      icon: faCoffee,
      url: "https://saweria.co/aidilbaihaqi",
      color: "text-red-900 hover:text-red-950",
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
              <h1 className="text-5xl md:text-6xl font-bold text-ink mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-ink-soft max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? Feel free to
                reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-xl border border-rule dark:border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-ink mb-6">
                  Send Me a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-ink-soft mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-ground-deep/5 border border-rule dark:border-white/10 rounded-xl text-ink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal/50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ink-soft mb-2"
                    >
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-ground-deep/5 border border-rule dark:border-white/10 rounded-xl text-ink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal/50 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-ink-soft mb-2"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-ground-deep/5 border border-rule dark:border-white/10 rounded-xl text-ink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal/50 transition-all duration-300"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-ink-soft mb-2"
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
                      className="w-full px-4 py-3 bg-ground-deep/5 border border-rule dark:border-white/10 rounded-xl text-ink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:border-signal/50 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-signal-ink hover:bg-signal text-ground font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-signal/50 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info & Social Media */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white/5 backdrop-blur-xl border border-rule dark:border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-ink mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-signal/10 dark:bg-signal/10 border border-signal/40 dark:border-signal/30 rounded-xl">
                        <Mail className="w-6 h-6 text-signal-ink dark:text-signal" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-ink mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:aidilmusirjun@gmail.com"
                          className="text-sm text-ink-soft hover:text-signal-ink dark:hover:text-signal transition-colors"
                        >
                          aidilmusirjun@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-signal/10 dark:bg-signal/10 border border-signal/40 dark:border-signal/30 rounded-xl">
                        <MessageSquare className="w-6 h-6 text-signal-ink dark:text-signal" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-ink mb-1">
                          Response Time
                        </h3>
                        <p className="text-sm text-ink-soft">
                          Usually within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white/5 backdrop-blur-xl border border-rule dark:border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-ink mb-6">
                    Connect With Me
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-ground-deep/5 border border-rule dark:border-white/10 rounded-xl hover:border-signal/40 dark:hover:border-signal/50 transition-all duration-300 group"
                      >
                        <FontAwesomeIcon
                          icon={social.icon}
                          className={`text-2xl ${social.color} transition-colors`}
                        />
                        <span className="text-sm font-medium text-ink-soft group-hover:text-signal-ink dark:group-hover:text-signal transition-colors">
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
