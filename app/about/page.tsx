"use client";

import Main from "@/app/components/Layout/Main";
import Image from "next/image";
import { TypewriterEffectSmoothDemo } from "@/app/components/Text/TypewriterEffectSmooth";
import ClickSpark from "@/app/components/ui/ClickSpark";
import AwardCarousel from "@/app/components/ui/AwardCarousel";


export default function Home() {
  return (
    <ClickSpark
      sparkColor="#8b5cf6"
      sparkSize={10}
      sparkRadius={18}
      sparkCount={8}
      duration={450}
      easing="ease-out"
    >
      <Main>
        {/* Main Content */}
        <main id="content">
          <div className="w-full max-w-5xl mx-auto pt-5 md:pt-16 px-4 sm:px-6 lg:px-8 text-left">
            {/* Profile */}
            <div className="flex flex-col items-start gap-x-3">
              <div className="shrink-0 mb-4">
                <Image
                  src={"/image/aidil.jpg"}
                  alt="Aidil Baihaqi"
                  width={500}
                  height={500}
                  className="shrink-0 size-16 rounded-full"
                />
              </div>

              <div className="grow text-left">
                <TypewriterEffectSmoothDemo />
                <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left">
                  Software Engineer | Content Creator | IT Mentor | AI and Machine Learning Enthusiast focused on Bioinformatics
                </p>
              </div>
            </div>
            {/* End Profile */}

            {/* About */}
            <div className="mt-8 text-left">
              <p className="text-sm text-gray-600 dark:text-neutral-400 leading-6 text-left">
                Passionate and results-driven Programmer with over 5 years of experience in software engineering. Skilled in web development, mentoring junior developers, and delivering high-quality freelance projects for diverse clients, including individuals, businesses, and government organizations. Adept at team collaboration, agile methodologies, and leveraging modern tools to solve complex problems efficiently.
              </p>
            </div>
            {/* End About */}

            {/* Skills */}
            <div className="mt-10 sm:mt-14 text-left">
              <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200 text-left">
                Skills
              </h2>

              {/* List */}
              <div className="space-y-3 text-left">

                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Development:</span>
                  </dt>
                  <dd>
                    <ul>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Laravel" className="me-1" src="https://skillicons.dev/icons?i=html" />
                        HTML
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Laravel" className="me-1" src="https://skillicons.dev/icons?i=css" />
                        CSS
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Laravel" className="me-1" src="https://skillicons.dev/icons?i=js" />
                        Javascript
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Laravel" className="me-1" src="https://skillicons.dev/icons?i=ts" />
                        Typescript
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Laravel" className="me-1" src="https://skillicons.dev/icons?i=laravel" />
                        Laravel
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Node.js" className="me-1" src="https://skillicons.dev/icons?i=nodejs" />
                        Node.js
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Tailwind CSS" className="me-1" src="https://skillicons.dev/icons?i=tailwind" />
                        Tailwind CSS
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="React.js" className="me-1" src="https://skillicons.dev/icons?i=react" />
                        React
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Express.js" className="me-1" src="https://skillicons.dev/icons?i=express" />
                        Express.js
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Next.js" className="me-1" src="https://skillicons.dev/icons?i=nextjs" />
                        Next.js
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Python" className="me-1" src="https://skillicons.dev/icons?i=python" />
                        Python
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="MySQL" className="me-1" src="https://skillicons.dev/icons?i=mysql" />
                        MySQL
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Git" className="me-1" src="https://skillicons.dev/icons?i=git" />
                        Git
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Bootstrap" className="me-1" src="https://skillicons.dev/icons?i=bootstrap" />
                        Bootstrap
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Remix" className="me-1" src="https://skillicons.dev/icons?i=remix" />
                        Remix JS
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="MongoDB" className="me-1" src="https://skillicons.dev/icons?i=mongodb" />
                        MongoDB
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Firebase" className="me-1" src="https://skillicons.dev/icons?i=firebase" />
                        Firebase
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="GitHub" className="me-1" src="https://skillicons.dev/icons?i=github" />
                        GitHub
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="VS Code" className="me-1" src="https://skillicons.dev/icons?i=vscode" />
                        VS Code
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Netlify" className="me-1" src="https://skillicons.dev/icons?i=netlify" />
                        Netlify
                      </li>
                    </ul>
                  </dd>
                </dl>
                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Design Tools:</span>
                  </dt>
                  <dd>
                    <ul>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Figma" className="me-1" src="https://skillicons.dev/icons?i=figma" />
                        Figma
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Adobe Photoshop" className="me-1" src="https://skillicons.dev/icons?i=photoshop" />
                        Adobe Photoshop
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Adobe illustrator" className="me-1" src="https://skillicons.dev/icons?i=illustrator" />
                        Adobe Illustrator
                      </li>
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Filming Tools:</span>
                  </dt>
                  <dd>
                    <ul>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Adobe Premiere Pro" className="me-1" src="https://skillicons.dev/icons?i=premiere" />

                        Adobe Premiere Pro
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <Image width={15} height={15} alt="Adobe Premiere Pro" className="me-1" src="https://skillicons.dev/icons?i=ae" />

                        Adobe After Effect
                      </li>
                    </ul>
                  </dd>
                </dl>



                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Design Expertise:</span>
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

                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Soft Skills:</span>
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
            <div className="mt-10 sm:mt-14 text-left">
              <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200 text-left">
                Experience
              </h2>

              {/* Timeline */}
              <div>
                {/* Item - Beasiswa Pendidikan Indonesia */}
                <div className="group relative flex gap-x-5">
                  {/* Icon */}
                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <Image
                        src={"/image/logo-bpi.jpg"}
                        alt="Beasiswa Pendidikan Indonesia"
                        width={32}
                        height={32}
                        className="shrink-0 size-6 rounded-full"
                      />
                    </div>
                  </div>
                  {/* End Icon */}

                  {/* Right Content */}
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      Aug 2023 - Present · 2 yrs 2 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Beasiswa Pendidikan Indonesia Awardee
                    </p>

                    <p className="leading-6 mt-2 text-sm text-gray-600 dark:text-neutral-400 text-left">
                      Selected as Beasiswa Pendidikan Indonesia awardee, previously qualified for Beasiswa Indonesia Maju S1 Overseas program for Computer Science at Kyoto University. Actively engaged in social impact projects, IELTS and SAT preparation programs, cultural exchange initiatives, and educational outreach across Indonesia to promote digital literacy and technology advancement.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}

                {/* Item - PT Arus Digital Sinergi */}
                <div className="group relative flex gap-x-5">
                  {/* Icon */}
                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <Image
                        src={"/image/logo-ads.png"}
                        alt="PT Arus Digital Sinergi"
                        width={32}
                        height={32}
                        className="shrink-0 size-6 rounded-full"
                      />
                    </div>
                  </div>
                  {/* End Icon */}

                  {/* Right Content */}
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      Apr 2025 - September 2025 · 6 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Full Stack Developer at PT Arus Digital Sinergi
                    </p>

                    <p className="leading-6 mt-2 text-sm text-gray-600 dark:text-neutral-400 text-left">
                      Developed and delivered comprehensive full-stack solutions including company profile websites, Enterprise Resource Planning (ERP) systems, Minimum Viable Products (MVPs), and large-scale enterprise applications. Successfully managed end-to-end project development from conception to deployment, utilizing modern web technologies and mobile frameworks to create scalable, user-centric solutions.
                    </p>

                    <div className="mt-3">
                      {/* Card */}
                      <a className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="#">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center overflow-hidden">
                          <div className="flex-shrink-0 w-full sm:w-32 md:w-48 h-24 sm:h-auto">
                            <Image
                              src={"/image/banner-ads.jpg"}
                              width={192}
                              height={96}
                              alt="PT Arus Digital Sinergi"
                              className="w-full h-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-s-lg"
                            />
                          </div>

                          <div className="flex-1 p-4">
                            <div className="flex flex-col justify-center">
                              <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                                PT Arus Digital Sinergi
                              </h3>
                              <p className="leading-6 mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                PT Arus Digital Sinergi is a technology company based in Tanjungpinang, Kepulauan Riau, specializing in digital solutions such as website and mobile application development, ERP customization, and tailored software systems. With a focus on innovation and efficiency, the company provides services that empower businesses and organizations to streamline their operations, strengthen their digital presence, and embrace technology-driven transformation. Through its commitment to collaboration and impact, Arus Digital Sinergi positions itself as a trusted partner for clients seeking reliable and scalable IT solutions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* End Card */}
                    </div>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}

                {/* Item - Back End Developer */}
                <div className="group relative flex gap-x-5">
                  {/* Icon */}
                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <Image
                        src={"/image/logo-ads.png"}
                        alt="PT Arus Digital Sinergi"
                        width={32}
                        height={32}
                        className="shrink-0 size-6 rounded-full"
                      />
                    </div>
                  </div>
                  {/* End Icon */}

                  {/* Right Content */}
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      Mar 2025 - Apr 2025 · 2 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Back End Developer at PT Arus Digital Sinergi
                    </p>

                    <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400 text-left">
                      Specialized in backend development, designing and implementing robust server-side architectures, RESTful APIs, and database management systems. Focused on building scalable backend solutions, optimizing database performance, and ensuring secure data handling for web and mobile applications.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}

                {/* Item - Risalah Maritim */}
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
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      May 2023 - Nov 2025 · 2 yrs 5 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Full Stack Developer at Risalah Maritim, Student Journalism Organization
                    </p>

                    <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400 text-left">
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
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      Aug 2024 - Nov 2024 · 3 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Informatic Club Mentor at SMA Negeri 1 Bintan Timur
                    </p>

                    <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400 text-left">
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
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      Dec 2023 - Jul 2024 · 7 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Content Creator at CV Lukan Group
                    </p>

                    <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400 text-left">
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
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      May 2023 - Jun 2023 · 1 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Full Stack Developer Internship at PT Investree x Rakamin Academy
                    </p>

                    <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400 text-left">
                      Completed several dynamic web and REST API projects using Laravel 10 and related packages,
                      incorporating Laravel UI with React JS.
                    </p>

                    <div className="mt-3">
                      {/* Card */}
                      <a className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="#">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center overflow-hidden">
                          <div className="flex-shrink-0 w-full sm:w-32 md:w-48 h-24 sm:h-auto">
                            <Image
                              src={"/image/logo-investree.svg"}
                              width={192}
                              height={96}
                              alt="PT Investree"
                              className="w-full h-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-s-lg"
                            />
                          </div>

                          <div className="flex-1 p-4">
                            <div className="flex flex-col justify-center">
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
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      Jan 2022 - Juli 2022 · 6 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Back End Developer Internship at PT Tunas Idea Indonesia
                    </p>

                    <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400 text-left">
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
            <div className="mt-10 sm:mt-14 text-left">
              <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200 text-left">
                Education
              </h2>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">

                  <Image
                    src={"/image/logo-umrah.png"}
                    width={400}
                    height={400}
                    alt="Universitas Maritim Raja Ali Haji"
                    className="shrink-0 size-10 mb-3"
                  />

                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                    2023 - Present
                  </h3>

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                    Bachelor`s Degree in Informatics Engineering
                  </p>

                  <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400 text-left">
                    Universitas Maritim Raja Ali Haji
                  </p>

                  <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Current GPA: <span className="font-semibold text-gray-700 dark:text-neutral-300">3.72/4.00</span>
                  </p>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <Image
                    src={"/image/logo-smkn1.svg"}
                    width={400}
                    height={400}
                    alt="SMK Negeri 1 Bintan Timur"
                    className="shrink-0 size-10 mb-3"
                  />

                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                    2019 - 2023
                  </h3>

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                    High School Diploma in Software Engineering
                  </p>

                  <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400 text-left">
                    SMK Negeri 1 Bintan Timur
                  </p>

                  <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Final Grade: <span className="font-semibold text-gray-700 dark:text-neutral-300">91.8/100</span>
                  </p>
                </div>
              </div>
              {/* End Grid */}
            </div>
            {/* End Education */}

            {/* Certifications */}
            <div className="mt-10 sm:mt-14 text-left">
              <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200 text-left">
                Certifications
              </h2>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Certification Card 1 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-1">
                    Certified Developer Alibaba Cloud Certification
                  </p>
                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-3">
                    Alibaba Cloud
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Certificate ID: <span className="text-gray-700 dark:text-neutral-300">ACCD0173710100006451</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Expires: Jan 28, 2026
                    </p>
                  </div>
                </div>

                {/* Certification Card 2 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-1">
                    Pemateri Webinar Sharing is Caring &quot;Kebutuhan Talenta di Era Digital&quot; Politeknik Negeri Jakarta x Train4best x Lu kan Anak IT
                  </p>
                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-3">
                    Train4best
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Certificate ID: <span className="text-gray-700 dark:text-neutral-300">Not Included</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Expires: No Expiration
                    </p>
                  </div>
                </div>

                {/* Certification Card 3 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-1">
                    Pemateri Webinar Programming &quot;Cicip Programming Pemula: Fast build app with Laravel Vibe Coding&quot;
                  </p>
                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-3">
                    Batam Linux User Group
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Certificate ID: <span className="text-gray-700 dark:text-neutral-300">Not Included</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Expires: No Expiration
                    </p>
                  </div>
                </div>

                {/* Certification Card 4 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-1">
                    Offline Event Baparekraf Developer Day Yogyakarta, 2024
                  </p>
                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-3">
                    Kementerian Pariwisata dan Ekonomi Kreatif Republik Indonesia
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Certificate ID: <span className="text-gray-700 dark:text-neutral-300">Not Included</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Expires: No Expiration
                    </p>
                  </div>
                </div>

                {/* Certification Card 5 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-1">
                    Virtual Internship Full Stack Developer on PT Investree
                  </p>
                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-3">
                    Rakamin Academy
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Certificate ID: <span className="text-gray-700 dark:text-neutral-300">1986211APAGII462023</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Expires: No Expiration
                    </p>
                  </div>
                </div>

                {/* Certification Card 6 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-1">
                    Internship Junior Web Developer on PT Tunas Idea Indonesia
                  </p>
                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-3">
                    PT Tunas Idea Indonesia
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Certificate ID: <span className="text-gray-700 dark:text-neutral-300">Not Included</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Expires: No Expiration
                    </p>
                  </div>
                </div>

                {/* Certification Card 7 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-1">
                    Peserta Seminar IT-FEST &quot;Mengenal Lebih Dalam Tentang Web Developer&quot; di Institut Teknologi Adhi Tama, Surabaya 2020
                  </p>
                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-3">
                    Institut Teknologi Adhi Tama, Surabaya
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Certificate ID: <span className="text-gray-700 dark:text-neutral-300">130/WEBINAR/HMJ_SISFOKOM/ITATS/IX/2020</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Expires: No Expiration
                    </p>
                  </div>
                </div>

                {/* Certification Card 8 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-1">
                    Web Development Bootcamp Infinite Learning
                  </p>
                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-3">
                    Infinite Learning, Batam
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Certificate ID: <span className="text-gray-700 dark:text-neutral-300">0029/IL-FEBOOTCAMP/III/2024</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                      Expires: No Expiration
                    </p>
                  </div>
                </div>
              </div>
              {/* End Grid */}
            </div>
            {/* End Certifications */}

            {/* Awards */}
            <div className="mt-10 sm:mt-14 text-left">
              <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200 text-left">
                Awards
              </h2>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Award Card 1 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <AwardCarousel
                    images={[
                      "/image/award-bpi-1.jpg",
                      "/image/award-bpi-2.jpg",
                      "/image/award-bpi-3.jpg"
                    ]}
                    alt="Beasiswa Pendidikan Indonesia"
                  />

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-2">
                    Beasiswa Pendidikan Indonesia Awardee
                  </p>

                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-1">
                    Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
                  </p>

                  <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Year: 2023
                  </p>
                </div>

                {/* Award Card 2 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <AwardCarousel
                    images={[
                      "/image/award-graduate-1.jpg",
                      "/image/award-graduate-2.jpg"
                    ]}
                    alt="Best Graduate"
                  />

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-2">
                    Best Graduate in Informatics Engineering
                  </p>

                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-1">
                    Universitas Maritim Raja Ali Haji
                  </p>

                  <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Year: 2023
                  </p>
                </div>

                {/* Award Card 3 - Example */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <AwardCarousel
                    images={[
                      "/image/award-hackathon-1.jpg"
                    ]}
                    alt="Hackathon Winner"
                  />

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-2">
                    1st Place - National Hackathon Competition
                  </p>

                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-1">
                    Indonesian Tech Community
                  </p>

                  <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Year: 2024
                  </p>
                </div>
              </div>
              {/* End Grid */}
            </div>
            {/* End Awards */}

          </div>
        </main>
      </Main>
    </ClickSpark>
  );
}
