import Image from "next/image";
import { HiOutlineCheckCircle, HiOutlineHeart } from "react-icons/hi";

import Ashraf from "@/assets/images/ashraf.jpg";

export const FounderSection = () => {
  return (
    <section className="py-10 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl p-8 text-white text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white/20">
                  <Image
                    src={Ashraf}
                    alt="Ashraf Abdeltawab, CPA"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Ashraf Abdeltawab</h3>
                <p className="text-sky-100 mb-4">CPA, Founder</p>

                {/* Credentials */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <HiOutlineCheckCircle className="w-4 h-4" />
                    <span>CPA Licensed 2008</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <HiOutlineCheckCircle className="w-4 h-4" />
                    <span>20+ Years Experience</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <HiOutlineCheckCircle className="w-4 h-4" />
                    <span>GAAP Expert</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <HiOutlineCheckCircle className="w-4 h-4" />
                    <span>Certified in ND</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200 text-sm font-medium mb-6">
                Meet Our Founder
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                About Our Founder
              </h2>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Ashraf Abdeltawab, CPA, is the driving force behind TaxAdvin.
                  He began his accounting journey in the early 2000s and earned
                  his CPA credentials after passing the California Board of
                  Accountancy&apos;s exams in 2008 and obtaining licensure in
                  North Dakota in 2016.
                </p>
                <p>
                  Over more than two decades he has honed expertise in GAAP,
                  financial accounting and strategic budgeting, planning and
                  forecasting. His career spans roles in corporations,
                  nonprofits and public accounting, giving him a broad
                  perspective on financial challenges.
                </p>
                <p>
                  Beyond numbers, Ashraf values relationships. He prioritises
                  trust, accuracy and open communication, aiming to understand
                  your goals so he can deliver the most effective solutions.
                </p>
              </div>

              {/* Key Values */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-sky-50 dark:bg-sky-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-sky-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <HiOutlineHeart className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Trust
                  </h4>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <HiOutlineCheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Accuracy
                  </h4>
                </div>
                <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Communication
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
