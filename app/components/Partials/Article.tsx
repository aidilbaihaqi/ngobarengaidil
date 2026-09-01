export default function Article() {
  return (
    <>
      {/* Articles */}
      <div className="my-10 sm:my-14">
        <h2 className="mb-5 font-medium text-ink">Articles</h2>

        {/* List */}
        <ul className="space-y-10">
          <li>
            <p className="mb-2 text-sm text-muted">2024</p>
            <h5 className="font-medium text-sm text-ink">
              The complete guide to OKRs
            </h5>
            <p className="mt-1 text-sm text-muted">
              How to make objectives and key results work for your company.
            </p>
            <p className="mt-1">
              <a
                className="text-sm text-muted underline hover:text-ink hover:decoration-2 focus:outline-none focus:decoration-2"
                href="#"
              >
                Continue reading
              </a>
            </p>
          </li>

          <li>
            <p className="mb-2 text-sm text-muted">2024</p>
            <h5 className="font-medium text-sm text-ink">
              Enhancement in Customer Engagement
            </h5>
            <p className="mt-1 text-sm text-muted">
              With the aim of optimizing customer interactions and boosting
              brand loyalty, the team at Preline leveraged Mailchimps powerful
              tools and expertise to deliver exceptional results.
            </p>
            <p className="mt-1">
              <a
                className="text-sm text-muted underline hover:text-ink hover:decoration-2 focus:outline-none focus:decoration-2"
                href="#"
              >
                Continue reading
              </a>
            </p>
          </li>

          <li>
            <p className="mb-2 text-sm text-muted">2023</p>
            <h5 className="font-medium text-sm text-ink">
              How Google Assistant now helps you record stories for kids
            </h5>
            <p className="mt-1 text-sm text-muted">
              Google is constantly updating its consumer AI, Google Assistant,
              with new features.
            </p>
            <p className="mt-1">
              <a
                className="text-sm text-muted underline hover:text-ink hover:decoration-2 focus:outline-none focus:decoration-2"
                href="#"
              >
                Continue reading
              </a>
            </p>
          </li>
        </ul>
        {/* End List */}
      </div>
      {/* End Articles */}
    </>
  );
}
