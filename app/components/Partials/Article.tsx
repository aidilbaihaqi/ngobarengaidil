export default function Article() {
  return (
    <>
      {/* Articles */}
      <div className="my-10 sm:my-14">
        <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
          Articles
        </h2>

        {/* List */}
        <ul className="space-y-10">
          <li>
            <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
              2024
            </p>
            <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
              The complete guide to OKRs
            </h5>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              How to make objectives and key results work for your company.
            </p>
            <p className="mt-1">
              <a className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                Continue reading
              </a>
            </p>
          </li>

          <li>
            <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
              2024
            </p>
            <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
              Enhancement in Customer Engagement
            </h5>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              With the aim of optimizing customer interactions and boosting brand loyalty, the team at Preline leveraged Mailchimps powerful tools and expertise to deliver exceptional results.
            </p>
            <p className="mt-1">
              <a className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                Continue reading
              </a>
            </p>
          </li>

          <li>
            <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
              2023
            </p>
            <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
              How Google Assistant now helps you record stories for kids
            </h5>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              Google is constantly updating its consumer AI, Google Assistant, with new features.
            </p>
            <p className="mt-1">
              <a className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                Continue reading
              </a>
            </p>
          </li>
        </ul>
        {/* End List */}
      </div>
      {/* End Articles */}
    </>
  )
}