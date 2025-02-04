export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-4xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
          <div className="px-4 md:px-0 flex justify-between items-center">
            {/* Logo */}
            <div>
              <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="ngobarengaidil">


                <svg className="w-30 h-auto" width="45" height="30" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.7487 17.694L40.7533 13.8128L42.1232 11.1872L46.8035 15.7534L44.7487 17.694Z" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                  <path d="M45.0912 19.2922L40.525 23.7443L41.7807 26.3699L47.6026 20.5479L45.0912 19.2922Z" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                  <rect x="36.7581" y="8.67578" width="5.47945" height="5.47945" rx="2" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                  <rect x="44.5206" y="15.5251" width="5.47945" height="5.47945" rx="2" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                  <rect x="36.7581" y="23.2877" width="5.47945" height="5.47945" rx="2" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                  <path d="M13.1352 8.90411L0 16.6148V21.3933L13.1352 28.7671V24.5434L3.84445 19.0041L13.1352 13.3562V8.90411Z" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                  <path d="M29.4707 14.0259L25.5784 12.2845C22.1807 19.8104 20.4758 24.4213 17.9351 32.6151C17.6811 33.6 19.014 34.0567 19.5303 34.1218C20.1726 34.1549 20.4846 33.9336 20.5694 33.7718C24.2147 26.3458 26.1924 22.0709 29.4707 14.0259Z" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                  <path d="M29.9745 12.8946L26.0563 11.156L26.8931 9.15117L30.8113 10.8898L29.9745 12.8946Z" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                  <path d="M30.791 9.57477L27.9077 8.32482C27.9396 5.92663 27.6355 4.64183 27.4795 4.2992L33.0013 -3.36938e-05L33.7443 6.9856C32.4106 7.25939 31.2573 8.87784 30.791 9.57477Z" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                  <ellipse cx="30.9163" cy="5.13108" rx="0.951285" ry="0.952547" transform="rotate(-6.07113 30.9163 5.13108)" className="fill-gray-900 dark:fill-white" fill="currentColor" />
                </svg>




              </a>
            </div>
            {/* End Logo */}

            <div className="md:hidden">
              {/* Toogle Button */}
              <button type="button" className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
                <svg className="hs-collapse-open:hidden shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              {/* End Toogle Button */}
            </div>
          </div>

          <div id="hs-navbar-header-floating" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Home</a>
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Projects</a>
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none dark:border-neutral-200 dark:text-neutral-200" href="#" aria-current="page">About</a>
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Contact</a>
              {/* <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Articles</a> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}