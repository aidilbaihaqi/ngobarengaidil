import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function SocialIcons() {
  return (
    <nav className="flex mt-3 justify-center space-x-4 text-2xl" aria-label="Social media links">
      <a 
        href="http://instagram.com/albyhaqee" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit my Instagram profile"
        className="text-pink-500 dark:text-pink-300 hover:text-pink-700 dark:hover:text-pink-500 transition-colors"
      >
        <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
      </a>
      <a 
        href="https://www.tiktok.com/@albyhaqee" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit my TikTok profile"
        className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <FontAwesomeIcon icon={faTiktok} aria-hidden="true" />
      </a>
      <a 
        href="https://www.linkedin.com/in/aidilbaihaqi/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
        className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-600 transition-colors"
      >
        <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
      </a>
      <a 
        href="https://github.com/aidilbaihaqi" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
        className="text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 transition-colors"
      >
        <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
      </a>
      <a 
        href="https://www.youtube.com/@albyhaqee" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit my YouTube channel"
        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500 transition-colors"
      >
        <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
      </a>
      <a 
        href="https://saweria.co/aidilbaihaqi" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Support me on Saweria"
        className="text-red-900 dark:text-gray-300 hover:text-red-950 dark:hover:text-gray-400 transition-colors"
      >
        <FontAwesomeIcon icon={faCoffee} aria-hidden="true" />
      </a>
    </nav>
  );
}
