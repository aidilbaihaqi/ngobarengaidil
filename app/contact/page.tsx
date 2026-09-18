"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Main from "../components/Layout/Main";
import ClickSpark from "../components/ui/ClickSpark";
import SpotlightCard from "../components/ui/SpotlightCard";
import AuroraBackground from "../components/ui/AuroraBackground";
import Reveal from "../components/ui/Reveal";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  Copy,
  Check,
  Clock,
  Plus,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const EMAIL = "aidilmusirjun@gmail.com";

/* What a business developer can bring to the table — any field, any size. */
const engagementTypes = [
  "Company profile website",
  "Custom dashboard",
  "AI assistant",
  "Workflow automation",
  "LMS / e-learning",
  "E-commerce",
  "Data & analytics",
  "IT mentoring",
];

/* Answered here and mirrored in the FAQPage structured data (layout.tsx). */
const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Websites, custom dashboards, AI assistants, and workflow automation — for businesses in any field: retail, education, media, government, logistics, health, and more. If a process in your company is still manual, it is probably a project.",
  },
  {
    question: "How does a project start?",
    answer:
      "We start with a short conversation about how your business runs and what should change. You get a written scope and a fixed quote before anything is built — no obligation until you approve it.",
  },
  {
    question: "How long does a typical build take?",
    answer:
      "A company profile site usually ships in 1–3 weeks. Dashboards, AI features, and automation systems typically run 4–8 weeks depending on scope. You see progress in staging throughout, not just at the end.",
  },
  {
    question: "Do you work with teams outside Indonesia?",
    answer:
      "Yes — the workflow is fully remote-friendly, in English or Bahasa Indonesia, with async updates so time zones are never a blocker.",
  },
  {
    question: "Who owns the result?",
    answer:
      "You do. Every engagement ends with a full handover: deployment, documentation, and the complete source code — plus mentoring for your team if you want to keep building in-house.",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: faInstagram,
    url: "http://instagram.com/albyhaqee",
    color:
      "text-pink-500 dark:text-pink-300 group-hover:text-pink-700 dark:group-hover:text-pink-400",
  },
  {
    name: "TikTok",
    icon: faTiktok,
    url: "https://www.tiktok.com/@albyhaqee",
    color:
      "text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/aidilbaihaqi/",
    color:
      "text-blue-700 dark:text-blue-400 group-hover:text-blue-900 dark:group-hover:text-blue-500",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/aidilbaihaqi",
    color:
      "text-gray-900 dark:text-gray-200 group-hover:text-gray-700 dark:group-hover:text-gray-400",
  },
  {
    name: "YouTube",
    icon: faYoutube,
    url: "https://www.youtube.com/@albyhaqee",
    color:
      "text-red-600 dark:text-red-400 group-hover:text-red-800 dark:group-hover:text-red-500",
  },
  {
    name: "Saweria",
    icon: faCoffee,
    url: "https://saweria.co/aidilbaihaqi",
    color:
      "text-amber-700 dark:text-gray-300 group-hover:text-amber-900 dark:group-hover:text-gray-400",
  },
];

/* Shared input chrome: quiet at rest, brand-blue ring when it owns focus. */
const fieldClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all duration-300 focus:border-blue-500/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-neutral-500 dark:focus:border-blue-400/60 dark:focus:bg-white/[0.07]";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions / http) — the mailto link still works.
    }
  };

  /* The headline arrives one word at a time — the page's single set piece. */
  const headline = ["Let's", "build", "something", "that", "runs."];

  return (
    <ClickSpark
      sparkColor="#1A73E8"
      sparkSize={10}
      sparkRadius={18}
      sparkCount={8}
      duration={450}
      easing="ease-out"
    >
      <Main>
        {/* Main Content */}
        <main id="content" className="relative">
          <AuroraBackground className="h-[34rem]" />

          <div className="relative w-full max-w-5xl mx-auto pt-10 md:pt-20 px-4 sm:px-6 lg:px-8 pb-20">
            {/* Header */}
            <div className="mb-16 text-center">
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-400"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-green-500" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Available for new projects
              </motion.span>

              <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white">
                {headline.map((word, i) => (
                  <motion.span
                    key={word + i}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.6,
                      ease: [0.2, 0.8, 0.2, 1],
                    }}
                    className={`inline-block mr-[0.28em] last:mr-0 ${
                      word === "runs."
                        ? "bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              >
                Whatever field your business is in — tell me how it works today,
                and I&apos;ll show you what it could run like.
              </motion.p>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-neutral-500"
              >
                <Clock className="h-4 w-4" />
                Replies within 24 hours · GMT+7 (WIB)
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
              {/* Contact Form */}
              <Reveal className="lg:col-span-3">
                <SpotlightCard className="rounded-2xl border border-gray-200 bg-white/90 p-8 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                  <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                    Tell me about your project
                  </h2>
                  <p className="mt-1 mb-6 text-sm text-gray-500 dark:text-neutral-400">
                    A few honest sentences beat a formal brief.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`${fieldClass} pl-11 pr-4`}
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Your Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`${fieldClass} pl-11 pr-4`}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className={`${fieldClass} pl-11 pr-4`}
                          placeholder="A dashboard for our operations team"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                        className={`${fieldClass} resize-none px-4`}
                        placeholder="What does your business do, and which part of it should stop being manual?"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
                    >
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Send Message
                    </button>
                  </form>
                </SpotlightCard>
              </Reveal>

              {/* Contact Info & Social Media */}
              <div className="space-y-6 lg:col-span-2">
                {/* Direct email, with a copy control that confirms itself. */}
                <Reveal delay={0.08}>
                  <SpotlightCard
                    className="rounded-2xl border border-gray-200 bg-white/90 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                    spotlightColor="rgba(43, 196, 138, 0.12)"
                  >
                    <h2 className="mb-4 font-display text-lg font-bold text-gray-900 dark:text-white">
                      Prefer email?
                    </h2>
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                      <a
                        href={`mailto:${EMAIL}`}
                        className="truncate text-sm font-medium text-gray-800 transition-colors hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400"
                      >
                        {EMAIL}
                      </a>
                      <button
                        type="button"
                        onClick={copyEmail}
                        aria-label={copied ? "Email copied" : "Copy email address"}
                        className="shrink-0 rounded-lg border border-gray-200 p-2 text-gray-500 transition-all duration-200 hover:border-green-500/50 hover:text-green-600 dark:border-white/10 dark:text-neutral-400 dark:hover:text-green-400"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <p
                      aria-live="polite"
                      className={`mt-2 text-xs text-green-600 transition-opacity duration-300 dark:text-green-400 ${
                        copied ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Copied to clipboard — talk soon.
                    </p>
                  </SpotlightCard>
                </Reveal>

                {/* Engagement menu — what "a project" can mean, field by field. */}
                <Reveal delay={0.16}>
                  <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                    <h2 className="mb-1 font-display text-lg font-bold text-gray-900 dark:text-white">
                      What can we build together?
                    </h2>
                    <p className="mb-4 text-sm text-gray-500 dark:text-neutral-400">
                      A starting point, not a limit.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {engagementTypes.map((type, i) => (
                        <motion.span
                          key={type}
                          initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04, duration: 0.3 }}
                          className="cursor-default rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
                        >
                          {type}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* Social Media */}
                <Reveal delay={0.24}>
                  <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                    <h2 className="mb-4 font-display text-lg font-bold text-gray-900 dark:text-white">
                      Connect With Me
                    </h2>

                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/40"
                        >
                          <FontAwesomeIcon
                            icon={social.icon}
                            className={`text-xl transition-colors ${social.color}`}
                          />
                          <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400">
                            {social.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* FAQ — the questions every prospective client asks first. */}
            <section aria-label="Frequently asked questions" className="mt-24">
              <Reveal>
                <div className="mb-10 text-center">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-neutral-500">
                    Before you write
                  </p>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                    Common questions
                  </h2>
                </div>
              </Reveal>

              <div className="mx-auto max-w-3xl space-y-3">
                {faqs.map((faq, i) => (
                  <Reveal key={faq.question} delay={i * 0.06}>
                    <details className="group rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-xl transition-colors duration-300 open:border-blue-500/40 dark:border-white/10 dark:bg-white/5 dark:open:border-blue-400/40">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                        <span className="font-display text-sm font-semibold text-gray-900 md:text-base dark:text-white">
                          {faq.question}
                        </span>
                        <Plus className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-45 group-open:text-blue-500" />
                      </summary>
                      <p className="px-6 pb-5 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                        {faq.answer}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </section>
          </div>
        </main>
      </Main>
    </ClickSpark>
  );
}
