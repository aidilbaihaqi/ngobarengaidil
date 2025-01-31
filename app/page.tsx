"use client";

import Main from "./components/Layout/Main";
import Image from "next/image";
import { TypewriterEffectSmoothDemo } from "./components/Text/TypewriterEffectSmooth";

export default function Home() {
  return (
    <Main>
      {/* Main Content */}
      <main id="content">
        <div className="w-full max-w-4xl mx-auto pt-5 md:pt-16 px-4 sm:px-6 lg:px-8">
          {/* Profile */}
          <div className="flex items-center gap-x-3">
            <div className="shrink-0">
            <Image
              src={"/image/aidil.jpg"}
              alt="Aidil Baihaqi"
              width={500}
              height={500}
              className="shrink-0 size-16 rounded-full"
            />
            </div>
            
            <div className="grow">
              <TypewriterEffectSmoothDemo />
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Web Developer | Content Creator | Awardee of Beasiswa Pendidikan Indonesia
              </p>
            </div>
          </div>
          {/* End Profile */}

          {/* About */}
          <div className="mt-8">
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Passionate and results-driven Junior Programmer with over 3 years of experience in software engineering. Skilled in web development, mentoring junior developers, and delivering high-quality freelance projects for diverse clients, including individuals, businesses, and government organizations. Adept at team collaboration, agile methodologies, and leveraging modern tools to solve complex problems efficiently.
            </p>

            {/* <ul className="mt-5 flex flex-col gap-y-3">
              <li className="flex items-center gap-x-2.5">
                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="mailto:aidilmusirjun@gmail.com" target="_blank">
                  aidilmusirjun@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-x-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 size-3.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>

                <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://www.instagram.com/albyhaqee/" target="_blank">
                  @albyhaqee
                </a>
              </li>

              <li className="flex items-center gap-x-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 size-3.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
                  <path d="M8 11v6M8 8v.01" />
                  <path d="M12 16v-5a2 2 0 1 1 4 0v5" />
                </svg>

                <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://www.linkedin.com/in/aidilbaihaqi/" target="_blank">
                  Aidil Baihaqi
                </a>
              </li>

              <li className="flex items-center gap-x-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 size-3.5"
                >
                  <path d="M9 19c-5 1-5-2-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1s-1.18-.37-3.91 1.48a13.38 13.38 0 0 0-7 0C5.27.63 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77 5.44 5.44 0 0 0 2.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
                </svg>


                <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://github.com/aidilbaihaqi/" target="_blank">
                  aidilbaihaqi
                </a>
              </li>
            </ul> */}
          </div>
          {/* End About */}

          {/* Skills */}
          <div className="my-10 sm:my-14">
            <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
              Skills
            </h2>

            {/* List */}
            <div className="space-y-3">
              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-gray-500 dark:text-neutral-500">Design Tools:</span>
                </dt>
                <dd>
                  <ul>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg className="shrink-0 size-4 me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                      </svg>
                      Figma
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24  24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <rect width="24" height="24" rx="4" fill="#001E36" />
                        <text x="5" y="16" fill="#00C8FF" fontSize="10" fontWeight="bold">Ps</text>
                      </svg>
                      Adobe Photoshop
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24  24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <rect width="24" height="24" rx="4" fill="#330000" />
                        <text x="6" y="16" fill="#FF9A00" fontSize="10" fontWeight="bold">Ai</text>
                      </svg>
                      Adobe Illustrator
                    </li>
                  </ul>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-gray-500 dark:text-neutral-500">Filming Tools:</span>
                </dt>
                <dd>
                  <ul>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24  24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <rect width="24" height="24" rx="4" fill="#220A3A" />
                        <text x="5" y="16" fill="#EA77FF" fontSize="10" fontWeight="bold">Pr</text>
                      </svg>

                      Adobe Premiere Pro
                    </li>
                  </ul>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-gray-500 dark:text-neutral-500">Development:</span>
                </dt>
                <dd>
                  <ul>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <path d="M3 3l3 5-3 5h6l3 5 3-5h6l-3-5 3-5H12l-3 5-3-5z" />
                      </svg>
                      Laravel
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
                      </svg>
                      Node.js
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg className="shrink-0 size-4 me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 5C8.8 5 6.8 6.6 6 9.8C7.2 8.2 8.6 7.6 10.2 8C11.1129 8.228 11.7653 8.89067 12.4876 9.62356C13.664 10.8178 15.0258 12.2 18 12.2C21.2 12.2 23.2 10.6 24 7.4C22.8 9 21.4 9.6 19.8 9.2C18.8871 8.972 18.2347 8.30933 17.5124 7.57644C16.336 6.38222 14.9742 5 12 5ZM6 12.2C2.8 12.2 0.8 13.8 0 17C1.2 15.4 2.6 14.8 4.2 15.2C5.11289 15.4284 5.76533 16.0907 6.48756 16.8236C7.664 18.0178 9.02578 19.4 12 19.4C15.2 19.4 17.2 17.8 18 14.6C16.8 16.2 15.4 16.8 13.8 16.4C12.8871 16.172 12.2347 15.5093 11.5124 14.7764C10.336 13.5822 8.97422 12.2 6 12.2Z" fill="currentColor" />
                      </svg>
                      Tailwind CSS
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg className="shrink-0 size-4 me-1" width="160" height="143" viewBox="0 0 160 143" fill="none">
                        <path d="M160 71.2597C160 60.6604 146.726 50.6156 126.376 44.3865C131.072 23.6445 128.985 7.14227 119.788 1.85895C117.668 0.619648 115.19 0.0326126 112.483 0.0326126V7.30534C113.983 7.30534 115.19 7.59886 116.201 8.15328C120.636 10.6971 122.56 20.3832 121.06 32.8414C120.701 35.9071 120.114 39.1358 119.397 42.4297C113.004 40.8642 106.025 39.6576 98.6873 38.8748C94.2845 32.8414 89.7187 27.3624 85.1203 22.5683C95.7521 12.6865 105.732 7.27273 112.515 7.27273V0C103.547 0 91.806 6.39217 79.9348 17.4806C68.0636 6.4574 56.3229 0.130453 47.3543 0.130453V7.40318C54.1052 7.40318 64.1174 12.7843 74.7493 22.6009C70.1834 27.395 65.6176 32.8414 61.2801 38.8748C53.9095 39.6576 46.9303 40.8642 40.5381 42.4623C39.788 39.201 39.2336 36.0375 38.8422 33.0045C37.3094 20.5463 39.201 10.8602 43.6038 8.28373C44.5821 7.6967 45.8541 7.43579 47.3543 7.43579V0.163066C44.6148 0.163066 42.1362 0.750101 39.9837 1.9894C30.8194 7.27273 28.7648 23.7424 33.4937 44.4191C13.2083 50.6808 0 60.693 0 71.2597C0 81.8589 13.2735 91.9038 33.6241 98.1329C28.9278 118.875 31.0151 135.377 40.212 140.66C42.3318 141.9 44.8104 142.487 47.5499 142.487C56.5186 142.487 68.2593 136.095 80.1305 125.006C92.0016 136.029 103.742 142.356 112.711 142.356C115.45 142.356 117.929 141.769 120.082 140.53C129.246 135.247 131.3 118.777 126.572 98.1003C146.792 91.8712 160 81.8263 160 71.2597ZM117.538 49.5067C116.331 53.7138 114.831 58.0514 113.135 62.3889C111.798 59.7799 110.395 57.1708 108.863 54.5618C107.362 51.9527 105.764 49.4089 104.166 46.9303C108.797 47.6152 113.265 48.4631 117.538 49.5067ZM102.601 84.2397C100.057 88.6425 97.448 92.817 94.7411 96.6979C89.8818 97.1219 84.9572 97.3502 80 97.3502C75.0754 97.3502 70.1508 97.1219 65.3241 96.7305C62.6172 92.8496 59.9755 88.7077 57.4317 84.3375C54.9531 80.0652 52.7028 75.7277 50.6482 71.3575C52.6702 66.9874 54.9531 62.6172 57.3991 58.3449C59.9429 53.9421 62.552 49.7676 65.2589 45.8867C70.1182 45.4627 75.0428 45.2344 80 45.2344C84.9246 45.2344 89.8492 45.4627 94.6759 45.8541C97.3828 49.735 100.024 53.8769 102.568 58.247C105.047 62.5194 107.297 66.8569 109.352 71.2271C107.297 75.5972 105.047 79.9674 102.601 84.2397ZM113.135 80C114.896 84.3701 116.396 88.7403 117.636 92.98C113.363 94.0236 108.863 94.9042 104.199 95.5891C105.797 93.0779 107.395 90.5014 108.895 87.8598C110.395 85.2507 111.798 82.609 113.135 80ZM80.0652 114.798C77.0322 111.667 73.9992 108.178 70.9988 104.362C73.934 104.492 76.9344 104.59 79.9674 104.59C83.033 104.59 86.066 104.525 89.0338 104.362C86.0987 108.178 83.0656 111.667 80.0652 114.798ZM55.8011 95.5891C51.17 94.9042 46.702 94.0563 42.4297 93.0126C43.6364 88.8055 45.1366 84.468 46.8325 80.1305C48.1696 82.7395 49.572 85.3486 51.1048 87.9576C52.6376 90.5667 54.203 93.1105 55.8011 95.5891ZM79.9022 27.7212C82.9352 30.852 85.9682 34.3416 88.9686 38.1574C86.0334 38.0269 83.033 37.9291 80 37.9291C76.9344 37.9291 73.9014 37.9943 70.9336 38.1574C73.8687 34.3416 76.9018 30.852 79.9022 27.7212ZM55.7685 46.9303C54.1704 49.4415 52.5724 52.0179 51.0722 54.6596C49.572 57.2687 48.1696 59.8777 46.8325 62.4868C45.0713 58.1166 43.5711 53.7464 42.3318 49.5067C46.6042 48.4957 51.1048 47.6152 55.7685 46.9303ZM26.2536 87.7619C14.7085 82.8373 7.24011 76.3799 7.24011 71.2597C7.24011 66.1394 14.7085 59.6494 26.2536 54.7574C29.0583 53.5508 32.1239 52.4745 35.2874 51.4635C37.1464 57.8557 39.5923 64.5088 42.6254 71.3249C39.625 78.1084 37.2116 84.7289 35.3853 91.0885C32.1566 90.0774 29.0909 88.9686 26.2536 87.7619ZM43.7994 134.366C39.364 131.822 37.4399 122.136 38.9401 109.678C39.2988 106.612 39.8859 103.384 40.6034 100.09C46.9955 101.655 53.9747 102.862 61.3127 103.645C65.7155 109.678 70.2813 115.157 74.8797 119.951C64.2479 129.833 54.2682 135.247 47.4847 135.247C46.0171 135.214 44.7778 134.921 43.7994 134.366ZM121.158 109.515C122.691 121.973 120.799 131.659 116.396 134.236C115.418 134.823 114.146 135.084 112.646 135.084C105.895 135.084 95.8826 129.702 85.2507 119.886C89.8166 115.092 94.3824 109.645 98.7199 103.612C106.091 102.829 113.07 101.623 119.462 100.024C120.212 103.318 120.799 106.482 121.158 109.515ZM133.714 87.7619C130.909 88.9686 127.843 90.0448 124.68 91.0558C122.821 84.6637 120.375 78.0106 117.342 71.1945C120.342 64.4109 122.756 57.7905 124.582 51.4309C127.811 52.4419 130.876 53.5508 133.746 54.7574C145.291 59.682 152.76 66.1394 152.76 71.2597C152.727 76.3799 145.259 82.87 133.714 87.7619Z" fill="currentColor" />
                        <path d="M79.9674 86.1639C88.1988 86.1639 94.8716 79.4911 94.8716 71.2597C94.8716 63.0284 88.1988 56.3555 79.9674 56.3555C71.7361 56.3555 65.0632 63.0284 65.0632 71.2597C65.0632 79.4911 71.7361 86.1639 79.9674 86.1639Z" fill="currentColor" />
                      </svg>
                      React
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <text x="2" y="16" fill="black" fontSize="10" fontWeight="bold">Express</text>
                      </svg>
                      Express.js
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <path d="M3 3h18v18H3V3z" stroke="black" />
                        <line x1="4" y1="4" x2="20" y2="20" stroke="black" />
                      </svg>
                      Next.js
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <path d="M8 3h8a5 5 0 0 1 5 5v4h-6v2h6v4a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-4h6v-2H3V8a5 5 0 0 1 5-5z" stroke="#3776AB" />
                      </svg>
                      Python
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <path d="M4 4h16v16H4V4z" stroke="#00758F" />
                        <text x="6" y="16" fill="#F29111" fontSize="10" fontWeight="bold">MySQL</text>
                      </svg>
                      MySQL
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 size-3.5 me-1"
                      >
                        <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" stroke="#F05032" />
                        <circle cx="12" cy="12" r="3" stroke="#F05032" />
                      </svg>
                      Git
                    </li>
                  </ul>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-gray-500 dark:text-neutral-500">Design Expertise:</span>
                </dt>
                <dd>
                  <ul>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      UI/UX Design
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      Design Systems
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      Custom Illustrations
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      Responsive Design
                    </li>
                  </ul>
                </dd>
              </dl>

              <dl className="flex flex-col sm:flex-row gap-1">
                <dt className="min-w-40">
                  <span className="block text-sm text-gray-500 dark:text-neutral-500">Soft Skills:</span>
                </dt>
                <dd>
                  <ul>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      Strong communication
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      Problem-solving
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      Attention to detail
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      Time management
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      Coaching & Mentoring
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      Critical Thinking
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            {/* End List */}
          </div>
          {/* End Skills */}

          {/* Experience */}
          <div className="mt-10 sm:mt-14">
            <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
              Experience
            </h2>

            {/* Timeline */}
            <div>
              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                  <Image
                    src={"/image/logo-risalahmaritim.svg"}
                    alt="Risalah Maritim"
                    width={32}
                    height={32}
                    className="shrink-0 size-6 rounded-full"
                  />
                    
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    Nov 2024 - Present
                  </h3>

                  <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Full Stack Developer at Risalah Maritim, Student Journalism Organization
                  </p>

                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Risalah Maritim is a student journalism organization that serves as a news portal, media platform, and creative space for students. It publishes news, opinions, articles, and literary works while acting as a bridge for students to voice their perspectives to the wider world.
                  </p>

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Design, develop, and maintain digital platforms, including websites, mobile applications, and content management systems using React for frontend and Laravel for backend to support student journalism activities.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Conduct requirements gathering and analysis to ensure digital solutions align with organizational goals.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Plan and implement system architecture, ensuring scalability, security, and efficiency.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Develop user-friendly interfaces and robust backend functionalities using appropriate technologies.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Perform rigorous testing, troubleshooting, and debugging to maintain system stability and performance
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Optimize and manage CMS platforms for efficient content publishing and workflow management.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Document development processes, system structures, and maintenance guidelines for future reference.
                    </li>
                  </ul>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                  <Image
                    src={"/image/logo-sma1.svg"}
                    alt="SMAN 1 Bintan Timur"
                    width={32}
                    height={32}
                    className="shrink-0 size-6 rounded-full"
                  />
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    Aug 2024 - Nov 2024
                  </h3>

                  <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Informatic Club Mentor at SMA Negeri 1 Bintan Timur
                  </p>

                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Mentored students on programming fundamentals, operating systems, Python, basic artificial
                  intelligence, and computer vision.
                  </p>

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Guide students in understanding core programming concepts, including data structures, algorithms, and problem-solving techniques.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Teach the fundamentals of operating systems, covering processes, memory management, file systems, and system security.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Provide hands-on training in Python, focusing on syntax, data manipulation, and application development.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Introduce students to AI concepts, including machine learning basics, neural networks, and AI ethics.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Help students develop debugging skills and logical approaches to solving technical problems.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    Provide insights into industry trends, learning resources, and career opportunities in technology.
                    </li>
                  </ul>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                  <Image
                    src={"/image/logo-lukananakit.svg"}
                    alt="Lu Kan Anak IT"
                    width={32}
                    height={32}
                    className="shrink-0 size-6 rounded-full"
                  />
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    Dec 2023 - Jul 2024
                  </h3>

                  <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Content Creator at CV Lukan Group
                  </p>

                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Created programming course videos for the Lukan Anak IT YouTube channel, simplifying complex
                  topics for beginner programmers.
                  </p>

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    <b>Video Production & Editing:</b> Create high-quality programming course videos for the Lukan Anak IT YouTube channel using Adobe Premiere Pro and CapCut to enhance visuals and maintain smooth transitions.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    <b>Scriptwriting & Storyboarding: </b>Plan video structure, create compelling scripts, and design storyboards to ensure clear and effective knowledge delivery.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    <b>Thumbnail & Branding Design: </b>Craft eye-catching thumbnails and consistent visual branding using Adobe Illustrator and Figma to optimize video reach and engagement.
                    </li>
                  </ul>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                  <Image
                    src={"/image/logo-rakamin.webp"}
                    alt="Risalah Maritim"
                    width={32}
                    height={32}
                    className="shrink-0 size-6 rounded-full"
                  />
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    May 2023 - Jun 2023
                  </h3>

                  <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Full Stack Developer Internship at PT Investree x Rakamin Academy
                  </p>

                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Completed several dynamic web and REST API projects using Laravel 10 and related packages,
                  incorporating Laravel UI with React JS.
                  </p>

                  <div className="mt-3">
                    {/* Card */}
                    <a className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="#">
                      <div className="relative flex items-center overflow-hidden">
                        <Image
                          src={"/image/logo-investree.svg"}
                          width={32}
                          height={0}
                          alt="PT Investree"
                          className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                        />

                        <div className="grow p-4 ms-32 sm:ms-48">
                          <div className="min-h-24 flex flex-col justify-center">
                            <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                              PT Investree Randhika Jaya, Investree
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                            A financial technology (fintech) company based in Jakarta, Indonesia. Founded in 2015, Investree focuses on empowering Micro, Small, and Medium Enterprises (MSMEs) by providing easier and more affordable access to capital through a technology-based lending platform.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* End Card */}
                  </div>

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    <b>Frontend Development:</b> Developed responsive and dynamic user interfaces using React.js integrated with Laravel UI, ensuring smooth user experiences and modern design practices.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    <b>Backend Development:</b> Built and maintained RESTful APIs using Laravel 10, managing database interactions, authentication, and business logic while ensuring security and performance optimization.
                    </li>
                  </ul>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Item */}
              <div className="group relative flex gap-x-5">
                {/* Icon */}
                <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-6 flex justify-center items-center">
                  <Image
                    src={"/image/logo-tunas.svg"}
                    alt="PT Tunas Idea Indonesia"
                    width={32}
                    height={32}
                    className="shrink-0 size-6 rounded-full"
                  />
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-8 group-last:pb-0">
                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    Jan 2022 - Juli 2022
                  </h3>

                  <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Back End Developer Internship at PT Tunas Idea Indonesia
                  </p>

                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Design, develop, and maintain RESTful APIs to facilitate secure and efficient data exchange between frontend applications and the backend.
                  </p>

                  <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    <b>API Development:</b> Design, develop, and maintain RESTful APIs to facilitate secure and efficient data exchange between frontend applications and the backend.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    <b>Database Management:</b> Design, optimize, and manage databases using MySQL ensuring data integrity and efficiency.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    <b>Performance Optimization:</b> Improve system performance through caching, query optimization, and scalable infrastructure.
                    </li>
                  </ul>

                  
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
            </div>
            {/* End Timeline */}
          </div>
          {/* End Experience */}

          {/* Education */}
          <div className="mt-10 sm:mt-14">
            <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
              Education
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">

                <Image 
                  src={"/image/logo-umrah.png"}
                  width={400}
                  height={400}
                  alt="Universitas Maritim Raja Ali Haji"
                  className="shrink-0 size-10 mb-3"
                />

                <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2023 - Present
                </h3>

                <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Bachelor`s Degree in Informatics Engineering
                </p>

                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Universitas Maritim Raja Ali Haji
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
                <Image 
                  src={"/image/logo-smkn1.svg"}
                  width={400}
                  height={400}
                  alt="SMK Negeri 1 Bintan Timur"
                  className="shrink-0 size-10 mb-3"
                />

                <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                  2019 - 2023
                </h3>

                <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  High School Diploma in Software Engineering
                </p>

                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  SMK Negeri 1 Bintan Timur
                </p>
              </div>
            </div>
            {/* End Grid */}
          </div>
          {/* End Education */}

          {/* Honor and Awards */}
          <div className="mt-10 sm:mt-14">
            <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
              Honor and Awards
            </h2>
          </div>
          {/* End Honor and Awards */}

        </div>
      </main>
    </Main>
  );
}
