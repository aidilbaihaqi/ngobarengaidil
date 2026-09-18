import Link from "next/link";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/albyhaqee" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aidilbaihaqi/" },
  { name: "GitHub", href: "https://github.com/aidilbaihaqi/" },
  { name: "YouTube", href: "https://www.youtube.com/@albyhaqee" },
  { name: "Saweria", href: "https://saweria.co/aidilbaihaqi" },
];

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 lg:pb-10">
        {/* Closing invitation — the last thing every page says. */}
        <div className="border-t border-gray-200 py-14 text-center dark:border-neutral-700">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-neutral-500">
            Have a project in mind?
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Let&apos;s digitize how your business runs.
          </h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 px-7 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start a conversation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <a
              href="mailto:aidilmusirjun@gmail.com"
              className="inline-flex items-center rounded-full border border-gray-300 px-7 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-gray-400 dark:border-white/15 dark:text-neutral-300 dark:hover:border-white/30"
            >
              aidilmusirjun@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 dark:border-neutral-700">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs text-gray-600 dark:text-neutral-400">
                © 2026 Aidil Baihaqi · Tanjungpinang, Indonesia
              </p>
            </div>
            {/* End Col */}

            {/* List */}
            <ul className="flex flex-wrap items-center gap-y-2">
              {socialLinks.map((link) => (
                <li
                  key={link.name}
                  className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600"
                >
                  <a
                    className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* End List */}
          </div>
        </div>
      </footer>
    </>
  );
}
