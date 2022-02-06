import { SparklesIcon } from "@heroicons/react/outline";

import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="bg-white">
        <main>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-400 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Explore the web</span>
                    <span className="block text-indigo-200">with anyone</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pt-16 pb-32 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div className="relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                        <SparklesIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Prismix puts people over profit
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        From hosting movie nights, watching memes to watching
                        anime with friends.
                      </p>
                      <div className="mt-6">
                        <a
                          href="/app"
                          className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                        >
                          Launch
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          &ldquo;Our aim is to make being with friends online
                          better than being with them IRL.&rdquo;
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-6 w-6 rounded-full"
                              src="https://github.com/okaydiogo.png"
                            />
                          </div>
                          <div className="text-base font-medium text-gray-700">
                            Diogo, Founder
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                {/*<div className='mt-12 sm:mt-16 lg:mt-0'>
                <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                  <img
                    className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                    src='/assets/app_preview.png'
                  />
                </div>
          </div>*/}
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Create an account.
                </span>
              </h2>
              <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                <a
                  href="/app"
                  className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Launch
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
