import {
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const StorySection = () => {
  return (
    <section id="story" className="py-10 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Modern Card Layout with Responsive Float */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200 text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-600 dark:text-yellow-300 mb-6">
              Our Story
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Content */}
            <div className="flex-1">
              {/* Content */}
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  TaxAdvin was born from a simple idea: to provide individuals,
                  small businesses and nonprofits across the United States with
                  trustworthy, proactive guidance in the ever-changing world of
                  tax and finance.
                </p>
                <p>
                  After more than two decades of working across public and
                  private sectors, our founder, Ashraf Abdeltawab, saw the need
                  for a firm that couples deep technical expertise with genuine
                  care for clients&apos; financial wellbeing.
                </p>
                <p>
                  Today TaxAdvin serves clients nationwide from our Florida
                  headquarters, maintaining the same principles on which it was
                  founded: professionalism, responsiveness, integrity and
                  innovation.
                </p>
              </div>
            </div>

            {/* Visual Element floats right on lg+, stacks below on mobile */}
            <div className="w-full lg:w-1/3 lg:max-w-xs mt-8 lg:mt-0 lg:ml-auto">
              <div className="bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <HiOutlineOfficeBuilding className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Establishment</h3>
                      <p className="text-white/80">Professional Excellence</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <HiOutlineLocationMarker className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-white/80">Florida-based, USA-wide</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <HiOutlineUserGroup className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mission</h3>
                      <p className="text-white/80">Your Financial Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
