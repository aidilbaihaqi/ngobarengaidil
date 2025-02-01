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
              <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400">
                Web Developer | Content Creator
              </p>
            </div>
          </div>
          {/* End Profile */}

          {/* About */}
          <div className="mt-8">
            <p className="text-sm text-gray-600 dark:text-neutral-400 leading-6">
              Passionate and results-driven Junior Programmer with over 3 years of experience in software engineering. Skilled in web development, mentoring junior developers, and delivering high-quality freelance projects for diverse clients, including individuals, businesses, and government organizations. Adept at team collaboration, agile methodologies, and leveraging modern tools to solve complex problems efficiently.
            </p>
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
                      <Image width={15} height={15} alt="Figma" className="me-1" src="https://skillicons.dev/icons?i=figma"/>
                      Figma
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="Adobe Photoshop" className="me-1" src="https://skillicons.dev/icons?i=photoshop"/>
                      Adobe Photoshop
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="Adobe illustrator" className="me-1" src="https://skillicons.dev/icons?i=illustrator"/>
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
                      <Image width={15} height={15} alt="Adobe Premiere Pro" className="me-1" src="https://skillicons.dev/icons?i=premiere"/>

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
                      <Image width={15} height={15} alt="Laravel" className="me-1" src="https://skillicons.dev/icons?i=laravel"/>
                      Laravel
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="Node.js" className="me-1" src="https://skillicons.dev/icons?i=nodejs"/>
                      Node.js
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="Tailwind CSS" className="me-1" src="https://skillicons.dev/icons?i=tailwind"/>
                      Tailwind CSS
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="React.js" className="me-1" src="https://skillicons.dev/icons?i=react"/>
                      React
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="Express.js" className="me-1" src="https://skillicons.dev/icons?i=express"/>
                      Express.js
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="Next.js" className="me-1" src="https://skillicons.dev/icons?i=nextjs"/>
                      Next.js
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="Python" className="me-1" src="https://skillicons.dev/icons?i=python"/>
                      Python
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="MySQL" className="me-1" src="https://skillicons.dev/icons?i=mysql"/>
                      MySQL
                    </li>
                    <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                      <Image width={15} height={15} alt="Git" className="me-1" src="https://skillicons.dev/icons?i=git"/>
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

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Full Stack Developer at Risalah Maritim, Student Journalism Organization
                  </p>

                  <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400">
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

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Informatic Club Mentor at SMA Negeri 1 Bintan Timur
                  </p>

                  <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400">
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

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Content Creator at CV Lukan Group
                  </p>

                  <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400">
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

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Full Stack Developer Internship at PT Investree x Rakamin Academy
                  </p>

                  <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400">
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
                            <p className="leading-6 mt-1 text-sm text-gray-500 dark:text-neutral-500">
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

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Back End Developer Internship at PT Tunas Idea Indonesia
                  </p>

                  <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400">
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

                <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  Bachelor`s Degree in Informatics Engineering
                </p>

                <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400">
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

                <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                  High School Diploma in Software Engineering
                </p>

                <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  SMK Negeri 1 Bintan Timur
                </p>
              </div>
            </div>
            {/* End Grid */}
          </div>
          {/* End Education */}

          {/* Honor and Awards */}
          {/* <div className="mt-10 sm:mt-14">
            <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
              Honor and Awards
            </h2>
          </div> */}
          {/* End Honor and Awards */}

        </div>
      </main>
    </Main>
  );
}
