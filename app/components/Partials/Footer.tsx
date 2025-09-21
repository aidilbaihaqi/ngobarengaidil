import ThemeToggle from "../Button/ThemeButton"
export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <p className="text-xs text-gray-600 dark:text-neutral-400">
                © 2025 Aidil Baihaqi
              </p>
            </div>
            {/* End Col */}

            {/* List */}
            <ul className="flex flex-wrap items-center gap-y-2">
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <a className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://www.instagram.com/albyhaqee">
                  Instagram
                </a>
              </li>
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <a className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://www.linkedin.com/in/aidilbaihaqi/">
                  Linkedin
                </a>
              </li>
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <a className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://github.com/aidilbaihaqi/">
                  Github
                </a>
              </li>
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <a className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://www.youtube.com/@albyhaqee">
                  Youtube
                </a>
              </li>
              <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <a className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://saweria.co/aidilbaihaqi">
                  Saweria
                </a>
              </li>
            </ul>
            {/* End List */}
          </div>
        </div>
      </footer>
    </>
  )

}