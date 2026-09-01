const links = [
  { name: "GitHub", href: "https://github.com/aidilbaihaqi/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aidilbaihaqi/" },
  { name: "Instagram", href: "https://www.instagram.com/albyhaqee" },
  { name: "YouTube", href: "https://www.youtube.com/@albyhaqee" },
  { name: "Saweria", href: "https://saweria.co/aidilbaihaqi" },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto px-4 pb-28 sm:px-6 lg:px-8 lg:pb-10">
      <div className="border-t border-rule pt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
          <p className="font-mono text-micro uppercase tracking-label text-muted">
            © 2026 Aidil Baihaqi
          </p>

          <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-micro uppercase tracking-label text-muted transition-colors duration-200 hover:text-signal-ink focus:outline-none"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
