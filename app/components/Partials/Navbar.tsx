import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = typeof window !== 'undefined' ? useRouter() : null;
  const currentPath = router?.pathname || '/';

  const isActiveRoute = (targetPath) => currentPath === targetPath;

  return (
    <div
      id="hs-navbar-header-floating"
      className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
      aria-labelledby="hs-navbar-header-floating-collapse"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
        <Link
          href="/"
          className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${
            isActiveRoute('/')
              ? 'border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200'
              : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
          } focus:outline-none`}
          aria-current={isActiveRoute('/') ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${
            isActiveRoute('/projects')
              ? 'border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200'
              : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
          } focus:outline-none`}
          aria-current={isActiveRoute('/projects') ? 'page' : undefined}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${
            isActiveRoute('/about')
              ? 'border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200'
              : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
          } focus:outline-none`}
          aria-current={isActiveRoute('/about') ? 'page' : undefined}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${
            isActiveRoute('/contact')
              ? 'border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200'
              : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200'
          } focus:outline-none`}
          aria-current={isActiveRoute('/contact') ? 'page' : undefined}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
