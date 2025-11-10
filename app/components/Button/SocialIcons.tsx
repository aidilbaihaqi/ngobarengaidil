import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function SocialIcons() {
  return (
    <div className="flex mt-3 justify-center space-x-4 text-2xl">
      <a href="http://instagram.com/albyhaqee" target="_blank" className="text-pink-500 dark:text-pink-300 hover:text-pink-700 dark:hover:text-pink-500">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.tiktok.com/@albyhaqee" target="_blank" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a href="https://www.linkedin.com/in/aidilbaihaqi/" target="_blank" className="text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-600">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/aidilbaihaqi" target="_blank" className="text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.youtube.com/@albyhaqee" target="_blank" className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://saweria.co/aidilbaihaqi" target="_blank" className="text-red-900 dark:text-gray-300 hover:text-red-950 dark:hover:text-gray-400">
        <FontAwesomeIcon icon={faCoffee} />
      </a>
    </div>
  );
}
