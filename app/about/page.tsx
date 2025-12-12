"use client";

import Main from "@/app/components/Layout/Main";
import Image from "next/image";
import dynamic from "next/dynamic";
import { TypewriterEffectSmoothDemo } from "@/app/components/Text/TypewriterEffectSmooth";
import { Suspense, memo } from "react";

// Lazy load heavy components
const ClickSpark = dynamic(() => import("@/app/components/ui/ClickSpark"), {
  ssr: false,
  loading: () => <div className="contents" />,
});

const AwardCarousel = dynamic(() => import("@/app/components/ui/AwardCarousel"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-neutral-200 dark:bg-neutral-800 rounded-xl animate-pulse" />
  ),
});

// Memoized skill icon component for better performance
const SkillIcon = memo(function SkillIcon({ icon, name }: { icon: string; name: string }) {
  return (
    <li className="me-1 after:content-[','] last:after:content-[''] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
      <Image 
        width={15} 
        height={15} 
        alt={name} 
        className="me-1" 
        src={`https://skillicons.dev/icons?i=${icon}`}
        loading="lazy"
        unoptimized
      />
      {name}
    </li>
  );
});

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
                  src={"/image-optimized/aidilbaihaqi.webp"}
                  alt="Aidil Baihaqi"
                  width={64}
                  height={64}
                  className="shrink-0 size-16 rounded-full"
                  priority
                  quality={80}
                />
              </div>

              <div className="grow text-left">
                <TypewriterEffectSmoothDemo />
                <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left">
                  Full Stack Engineer | Data Science and Machine Learning Enthusiast Focused on Bioinformatics | IT and Web Mentor
                </p>
              </div>
            </div>
            {/* End Profile */}

            {/* About */}
            <div className="mt-8 text-left">
              <p className="text-sm text-gray-600 dark:text-neutral-400 leading-6 text-left">
                Passionate and results-driven programmer with strong experience in software engineering,specializing in backend development, data-driven systems, and AI-based applications.Experienced in building scalable web systems, collaborating in multidisciplinary teams, and delivering high-quality projects for academic, community, and organizational needs.Proficient in modern development tools and agile workflows to solve complex problems efficiently.
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
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Frontend:</span>
                  </dt>
                  <dd>
                    <ul>
                      <SkillIcon icon="react" name="React" />
                      <SkillIcon icon="nextjs" name="Next.js" />
                      <SkillIcon icon="tailwind" name="TailwindCSS" />
                      <SkillIcon icon="html" name="HTML" />
                      <SkillIcon icon="css" name="CSS" />
                      <SkillIcon icon="js" name="JavaScript" />
                      <SkillIcon icon="ts" name="TypeScript" />
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Backend:</span>
                  </dt>
                  <dd>
                    <ul>
                      <SkillIcon icon="go" name="Go (Gin)" />
                      <SkillIcon icon="fastapi" name="FastAPI" />
                      <SkillIcon icon="flask" name="Flask" />
                      <SkillIcon icon="nodejs" name="Node.js" />
                      <SkillIcon icon="laravel" name="Laravel" />
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Database:</span>
                  </dt>
                  <dd>
                    <ul>
                      <SkillIcon icon="postgres" name="PostgreSQL" />
                      <SkillIcon icon="mysql" name="MySQL" />
                      <SkillIcon icon="sqlite" name="Sqlite" />
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">DevOps:</span>
                  </dt>
                  <dd>
                    <ul>
                      <SkillIcon icon="docker" name="Docker" />
                      <SkillIcon icon="linux" name="WSL" />
                      <SkillIcon icon="nginx" name="Nginx" />
                      <SkillIcon icon="linux" name="Linux Server" />
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Design Tools:</span>
                  </dt>
                  <dd>
                    <ul>
                      <SkillIcon icon="figma" name="Figma" />
                      <li className="me-1 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        Canva
                      </li>
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Version Control:</span>
                  </dt>
                  <dd>
                    <ul>
                      <SkillIcon icon="git" name="Git" />
                      <SkillIcon icon="github" name="GitHub" />
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1 justify-start">
                  <dt className="min-w-40 text-left">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500 text-left">Data & AI:</span>
                  </dt>
                  <dd>
                    <ul>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        Pandas, Matplotlib, Scikit-Learn, TensorFlow, HuggingFace, Tableau, Google Spreadsheet, MS. Excel
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
                {/* <div className="group relative flex gap-x-5">
                  
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
                  
                </div> */}
                {/* End Item */}

                {/* Item - UmbiTeams */}
                <div className="group relative flex gap-x-5">
                  {/* Icon */}
                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <Image
                        src={"/image-optimized/logo-umbiteams.webp"}
                        alt="UmbiTeams"
                        width={32}
                        height={32}
                        className="shrink-0 size-6 rounded-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* End Icon */}

                  {/* Right Content */}
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      Oct 2025 - Present
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Co-Founder | Backend Developer & ML Engineer at UmbiTeams
                    </p>

                    <ul className="list-disc ms-6 mt-3 space-y-1.5">
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Designed and developed backend systems, including APIs, database architecture, and server-side logic for client projects.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Implemented machine learning solutions to support intelligent features such as data processing, prediction, and automation.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Collaborated with frontend developers and UI/UX designers to deliver cohesive, user-centric digital products.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Managed end-to-end project development from initial requirements analysis to deployment and maintenance.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Ensured system scalability, performance, and maintainability using modern development tools and best practices.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Supported freelance project delivery for various clients, adapting solutions to diverse business and organizational needs.
                      </li>
                    </ul>

                    <div className="mt-3">
                      {/* Card */}
                      <a className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="#">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center overflow-hidden">
                          <div className="hidden sm:flex flex-shrink-0 sm:w-32 md:w-48 h-24 sm:h-auto">
                            <Image
                              src={"/image-optimized/logo-umbiteams.webp"}
                              width={192}
                              height={96}
                              alt="Logo UmbiTeams"
                              className="w-full h-full object-cover rounded-t-lg sm:rounded-t-none sm:rounded-s-lg"
                              loading="lazy"
                            />
                          </div>

                          <div className="flex-1 p-4">
                            <div className="flex flex-col justify-center">
                              <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                                UmbiTeams
                              </h3>
                              <p className="leading-6 mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                UmbiTeams is a freelance-based technology team that focuses on providing end-to-end digital solutions, ranging from website and backend system development to UI/UX design and data-driven solutions. UmbiTeams helps individuals, businesses, and organizations build efficient, scalable digital products that meet user needs, with a collaborative approach focused on technical quality and real impact.
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

                {/* Item - SMAN 1 Tanjungpinang Bioinformatics Mentor */}
                <div className="group relative flex gap-x-5">
                  {/* Icon */}
                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <Image
                        src={"/image-optimized/logo-sman1tpi.svg"}
                        alt="SMAN 1 Tanjungpinang"
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
                      Jul 2025 - Nov 2025 · 5 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Bioinformatics Mentor - Contract / Competition Program at SMAN 1 Tanjungpinang
                    </p>

                    <p className="leading-6 mt-1 text-sm text-gray-600 dark:text-neutral-400 text-left">
                      Mentored the informatics team for the National Bioinformatics and Synthetic Biology Competition, focusing on 3D web visualization for genomics, sequence analysis, and ML-based data interpretation.
                    </p>

                    <ul className="list-disc ms-6 mt-3 space-y-1.5">
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Mentored the informatics team for the National Bioinformatics and Synthetic Biology Competition, focusing on 3D web visualization for genomics, sequence analysis, and ML-based data interpretation.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Guided students in developing an interactive 3D website to present genomic and analytical insights using modern web technologies.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Designed an IoT-based prototype for a smart sprayer and early detection system for <i>Ralstonia solanacearum</i>, integrating sensor data flow and conceptual ML-driven alerts.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Provided technical direction and structured learning materials to strengthen students&apos; understanding of bioinformatics application in digital and IoT-driven solutions.
                      </li>
                    </ul>
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
                        src={"/image-optimized/logo-ads.webp"}
                        alt="PT Arus Digital Sinergi"
                        width={32}
                        height={32}
                        loading="lazy"
                        className="shrink-0 size-6 rounded-full"
                      />
                    </div>
                  </div>
                  {/* End Icon */}

                  {/* Right Content */}
                  <div className="grow pb-8 group-last:pb-0 text-left">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400 text-left">
                      Mar 2025 - September 2025 · 8 mos
                    </h3>

                    <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left">
                      Full Stack Developer at PT Arus Digital Sinergi
                    </p>

                    <ul className="mt-2 text-sm text-gray-600 dark:text-neutral-400 list-disc list-inside space-y-1 text-left">
                      <li>
                        Developed and delivered full-stack solutions including company profile websites,
                        ERP systems, MVPs, and enterprise-scale applications.
                      </li>
                      <li>
                        Managed end-to-end development processes from requirements gathering,
                        system design, implementation, to deployment.
                      </li>
                      <li>
                        Built scalable and user-centric web and mobile applications using modern
                        web technologies and frameworks.
                      </li>
                      <li>
                        Collaborated closely with cross-functional teams to translate business
                        requirements into effective technical solutions.
                      </li>
                      <li>
                        Ensured code quality, performance, and maintainability through structured
                        development workflows and best practices.
                      </li>
                    </ul>

                    <div className="mt-3">
                      {/* Card */}
                      <a className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="#">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center overflow-hidden">
                          <div className="hidden sm:flex flex-shrink-0 sm:w-32 md:w-48 h-24 sm:h-auto">
                            <Image
                              src={"/image-optimized/banner-ads.webp"}
                              width={192}
                              height={96}
                              loading="lazy"
                              alt="PT Arus Digital Sinergi"
                              className="w-full h-full object-cover sm:rounded-s-lg"
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

                {/* Item - Risalah Maritim */}
                <div className="group relative flex gap-x-5">
                  {/* Icon */}
                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <Image
                        src={"/image-optimized/logo-risalahmaritim.svg"}
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
                        src={"/image-optimized/logo-sma1.svg"}
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
                        src={"/image-optimized/logo-lukananakit.svg"}
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
                        src={"/image-optimized/logo-rakamin.webp"}
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
                          <div className="hidden sm:flex flex-shrink-0 sm:w-32 md:w-48 h-24 sm:h-auto">
                            <Image
                              src={"/image-optimized/logo-investree.svg"}
                              width={192}
                              height={96}
                              alt="PT Investree"
                              className="w-full h-full object-cover sm:rounded-s-lg"
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
                        src={"/image-optimized/logo-tunas.svg"}
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
                    src={"/image-optimized/logo-umrah.webp"}
                    width={400}
                    height={400}
                    loading="lazy"
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
                    src={"/image-optimized/logo-smkn1.svg"}
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
                      "/image-optimized/awards/bio1.webp",
                      "/image-optimized/awards/bio2.webp",
                      "/image-optimized/awards/bio3.webp"
                    ]}
                    alt="Bioinformatics Competition"
                  />

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-2">
                    Gold Medal - National Bioinformatics & Synthetic Biology Competition, Institue Technology of Bandung
                  </p>

                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-1">
                    Institut Teknologi Bandung
                  </p>

                  <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Year: 2025
                  </p>
                </div>

                {/* Award Card 2 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <AwardCarousel
                    images={[
                      "/image-optimized/awards/1st Place – AI Entrepreneurship Competition_1.webp",
                      "/image-optimized/awards/1st Place – AI Entrepreneurship Competition_2.webp"
                    ]}
                    alt="AI Entrepreneurship Competition"
                  />

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-2">
                    1st Place – AL Ahmadi International Youthpreneurship Competition, Batam
                  </p>

                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-1">
                    Universitas Maritim Raja Ali Haji
                  </p>

                  <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Year: 2025
                  </p>
                </div>

                {/* Award Card 3 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <AwardCarousel
                    images={[
                      "/image-optimized/awards/Finalist – ID Fest Developer Day, Jakarta_1.webp",
                      "/image-optimized/awards/Finalist – ID Fest Developer Day, Jakarta_2.webp"
                    ]}
                    alt="ID Fest Developer Day"
                  />

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-2">
                    Finalist – ID Fest Developer Day, Jakarta
                  </p>

                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-1">
                    Kementerian Komunikasi dan Digital Republik Indonesia
                  </p>

                  <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Year: 2025
                  </p>
                </div>

                {/* Award Card 4 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <AwardCarousel
                    images={[
                      "/image-optimized/awards/1st Place - Festival Open Source Software, Batam, Batam Linux User Group, Politeknik Negeri Batam, 2025.webp"
                    ]}
                    alt="Festival Open Source Software 2025"
                  />

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-2">
                    1st Place - Festival Open Source Software, Batam
                  </p>

                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-1">
                    Batam Linux User Group, Politeknik Negeri Batam
                  </p>

                  <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Year: 2025
                  </p>
                </div>

                {/* Award Card 5 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <AwardCarousel
                    images={[
                      "/image-optimized/awards/2nd Place – Festival Open Source Software, Batam_1.webp",
                      "/image-optimized/awards/2nd Place – Festival Open Source Software, Batam_2.webp",
                      "/image-optimized/awards/2nd Place – Festival Open Source Software, Batam_3.webp",
                      "/image-optimized/awards/2nd Place – Festival Open Source Software, Batam_4.webp",
                      "/image-optimized/awards/2nd Place – Festival Open Source Software, Batam_5.webp",
                    ]}
                    alt="Festival Open Source Software 2024"
                  />

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-2">
                    2nd Place – Festival Open Source Software, Batam
                  </p>

                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-1">
                    Batam Linux User Group, Politeknik Negeri Batam
                  </p>

                  <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Year: 2024
                  </p>
                </div>

                {/* Award Card 6 */}
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700 text-left">
                  <AwardCarousel
                    images={[
                      "/image-optimized/awards/1 of 1100 programmers invited to the Baparekraf Developer Day, Yogyakarta_1.webp",
                      "/image-optimized/awards/1 of 1100 programmers invited to the Baparekraf Developer Day, Yogyakarta_2.webp",
                      "/image-optimized/awards/1 of 1100 programmers invited to the Baparekraf Developer Day, Yogyakarta_3.webp",
                    ]}
                    alt="Baparekraf Developer Day"
                  />

                  <p className="leading-6 font-semibold text-sm text-gray-800 dark:text-neutral-200 text-left mb-2">
                    1 of 1100 programmers invited to the Baparekraf Developer Day, Yogyakarta
                  </p>

                  <p className="leading-6 text-sm text-gray-600 dark:text-neutral-400 text-left mb-1">
                    Kementerian Pariwisata dan Ekonomi Kreatif
                  </p>

                  <p className="text-xs text-gray-500 dark:text-neutral-500 text-left">
                    Year: 2024
                  </p>
                </div>
              </div>
              {/* End Grid */}
            </div>
            {/* End Awards */}

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
                    Webinar Speaker - Sharing is Caring &quot;Talent Needs in the Digital Era&quot; Politeknik Negeri Jakarta x Train4best x Lu kan Anak IT
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
                    Programming Webinar Speaker &quot;Beginner Programming Taste: Fast Build App with Laravel Vibe Coding&quot;
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
                    Ministry of Tourism and Creative Economy of the Republic of Indonesia
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
                    IT-FEST Seminar Participant &quot;Getting to Know Web Developer in Depth&quot; at Institut Teknologi Adhi Tama, Surabaya 2020
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

          </div>
        </main>
      </Main>
    </ClickSpark>
  );
}
