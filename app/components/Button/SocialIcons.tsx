import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * One accent, applied consistently. Brand colours are dropped on purpose:
 * six vendor colours in a row read as a logo wall, not as a set of links.
 */
const socials: { label: string; href: string; icon: IconDefinition }[] = [
  { label: "GitHub", href: "https://github.com/aidilbaihaqi", icon: faGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aidilbaihaqi/",
    icon: faLinkedin,
  },
  {
    label: "Instagram",
    href: "http://instagram.com/albyhaqee",
    icon: faInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@albyhaqee",
    icon: faYoutube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@albyhaqee",
    icon: faTiktok,
  },
  { label: "Saweria", href: "https://saweria.co/aidilbaihaqi", icon: faMugHot },
];

export default function SocialIcons({ className }: { className?: string }) {
  return (
    <nav
      className={`flex items-center gap-x-5 text-lg ${className ?? ""}`}
      aria-label="Social media links"
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-muted transition-colors duration-200 hover:text-signal-ink focus:outline-none"
        >
          <FontAwesomeIcon icon={s.icon} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
