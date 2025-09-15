import {
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
  HiOutlineLightningBolt,
  HiOutlineHeart,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
/**
 * VisionSection with modern design showcasing TaxAdvin's future aspirations
 * through interactive cards and visual elements.
 */
export const VisionSection = () => {
  return (
    <section className="py-10 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm font-medium mb-6">
              Looking Forward
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 dark:text-yellow-300 mb-6">
              Our Vision
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Building the future of financial advisory services in Florida
              through innovation, growth, and unwavering commitment to client
              success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  At TaxAdvin, we are excited to grow alongside our community.
                  Our vision is to expand our team, extend our services and
                  continually adapt to meet the evolving needs of Florida&apos;s
                  individuals, small businesses and nonprofits.
                </p>
                <p>
                  With each year we aim to deepen our impact, helping more
                  neighbours navigate the complexities of tax, bookkeeping and
                  financial management. We see a future where proactive planning
                  and innovative solutions empower our clients to achieve
                  lasting financial success.
                </p>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Join Our Vision
                  <HiOutlineArrowNarrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Vision Goals */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-2xl">
                <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlineUserGroup className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Expand Our Team
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Growing with skilled professionals to serve more clients
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlineOfficeBuilding className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Extend Services
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Continuously expanding our offerings to meet client needs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl">
                <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlineLightningBolt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Innovation Focus
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Leveraging technology for better client experiences
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiOutlineHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Community Impact
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Deepening our positive impact on Florida&apos;s economy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
