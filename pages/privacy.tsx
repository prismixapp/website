import { Layout } from "../components/Layout";

export default function Privacy() {
  return (
    <Layout title="Privacy Policy">
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Legal
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Privacy Policy
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <h2>Summary</h2>
            <p>
              While we would love you to read the whole policy, we know that not
              everyone has time for it. So we have made a summary with some of
              the most important things.
            </p>
            <ul>
              <li>
                Prismix won&apos;t sell your personal data to third parties for
                any reason.
              </li>
              <li>
                You have total control of the data you submit or upload to
                Prismix.
              </li>
              <li>
                All data exchanged between you and Prismix&apos;s servers is
                encrypted.
              </li>
            </ul>
            <h2>Our business model</h2>
            <p>
              Prismix&apos;s business does not take any interest in your
              personal data. We make our revenue by user&apos;s donations.
            </p>
            <h2>What personal data do we collect?</h2>
            <p>
              <span className="font-semibold">Account:</span> We collect and
              store the information you provide to us, such as your display
              name, email, username, and photo.
            </p>
            <p>
              <span className="font-semibold">Files and images:</span> When you
              upload files or images to Prismix, it is sent to a Google Cloud
              Storage bucket and encrypted using Google-managed encryption keys.
              When you delete a file or image, we send a deletion request to
              Google Cloud Storage for all files attached.
            </p>
            <h2>Who is this information shared with?</h2>
            <p>
              <span className="font-semibold">Service providers:</span> We use
              the following service providers to process your data:
            </p>
            <ul>
              <li>
                <a
                  href="https://cloud.google.com/"
                  className="text-indigo-500 font-semibold"
                >
                  Google Cloud Platform
                </a>{" "}
                for content storage
              </li>
              <li>
                <a
                  href="https://vercel.com/"
                  className="text-indigo-500 font-semibold"
                >
                  Vercel
                </a>{" "}
                for website hosting
              </li>
            </ul>
            <p>
              <span className="font-semibold">Law & Order:</span> We disclose
              your information to third parties if we determine that such
              disclosure is reasonably necessary to: (a) comply with a valid
              legal process; (b) protect any person from death or serious
              injury; (c) prevent fraud or abuse; or (d) protect our rights,
              property, safety or interest.
            </p>
            <h2>Where do we store your information?</h2>
            <p>
              The information above is processed in Portugal only. Exceptions to
              this are our RTC servers which provide voice & video calls that
              are hosted in different parts of the world to provide a low
              latency experience.
            </p>
            <h2>Other questions?</h2>
            <p>
              If you have any questions, don&apos;t hesitate to email us at{" "}
              <a
                className="text-indigo-500 font-semibold"
                href="mailto:support@prismix.app"
              >
                support@prismix.app
              </a>{" "}
              we typically reply within 7 days.
            </p>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Last revised: February 2nd, 2022
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
