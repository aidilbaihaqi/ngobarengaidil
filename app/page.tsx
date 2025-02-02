"use client";

import { BentoGridThirdDemo } from "./components/Layout/BentoGrid";
import InfiniteTestimonials from "./components/Layout/InfiniteTestimonials";
import Main from "./components/Layout/Main";
import { FlipWordsDemo } from "./components/Text/FlipWords";

export default function Home() {
  return (
    <Main>
      {/* Main Content */}
      <main id="content">
        <div className="w-full max-w-4xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
          {/* About */}
          <div className="md:text-center">
            <FlipWordsDemo />
            <p className="text-sm text-gray-600 dark:text-neutral-400 mt-3 leading-6">
              Passionate and results-driven Junior Programmer with over 3 years of experience in software engineering. Skilled in web development, mentoring junior developers, and delivering high-quality freelance projects for diverse clients, including individuals, businesses, and government organizations. Adept at team collaboration, agile methodologies, and leveraging modern tools to solve complex problems efficiently.
            </p>
          </div>
          {/* End About */}

          {/* Feature Section */}
          <div className="mt-16 md:text-center">
            <div className="mb-5">
              <h4 className="text-3xl md:text-4xl lg:leading-tight max-w-5xl mx-auto md:text-center tracking-tight font-medium text-black dark:text-white">
                What Can I Do For You
              </h4>

              <p className="text-sm text-gray-600 dark:text-neutral-400 leading-6">
              Some services or products that I can offer to you.
              </p>
            </div>
          </div>
          <BentoGridThirdDemo />
          {/* End Feature Section */}

          {/* Testimonials Section */}
          <div className="mt-16 md:text-center">
          <div className="mb-5">
              <h4 className="text-3xl md:text-4xl lg:leading-tight max-w-5xl mx-auto md:text-center tracking-tight font-medium text-black dark:text-white">
                What people say about my services
              </h4>

              <p className="text-sm text-gray-600 dark:text-neutral-400 leading-6">
                Some feedback from people who have used my services or products
              </p>
            </div>
          </div>
          <InfiniteTestimonials />
          {/* End Testimonials Section */}
        </div>
      </main>
    </Main>
  );
}
