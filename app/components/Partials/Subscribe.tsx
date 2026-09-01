export default function Subscribe() {
  return (
    <>
      {/* Subscribe */}
      <div className="my-10 sm:my-14">
        <h2 className="mb-5 font-medium text-ink">Subscribe</h2>

        {/* Input */}
        <form>
          <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-rule rounded-lg">
            <div className="relative w-full">
              <label htmlFor="hero-input" className="sr-only">
                Subscribe
              </label>
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                <svg
                  className="shrink-0 size-4 text-muted"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="py-2 ps-9 pe-3 block w-full border-transparent rounded-lg text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:placeholder-neutral-500"
                placeholder="Enter your email"
              />
            </div>
            <a
              className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-ink text-ground hover:bg-signal-ink focus:outline-none focus:bg-signal-ink disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Join
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <p className="mt-2 text-xs text-muted">
            No spam, unsubscribe at any time.
          </p>
        </form>
        {/* End Input */}
      </div>
      {/* End Subscribe */}
    </>
  );
}
