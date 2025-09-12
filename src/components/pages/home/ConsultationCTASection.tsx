import {
  HiCalendar,
  HiCheckCircle,
  HiGlobe,
  HiAcademicCap,
} from "react-icons/hi";

export const ConsultationCTASection = () => (
  <section
    className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 py-12 px-6 lg:px-8"
    aria-label="Schedule a Free Consultation"
  >
    {/* Decorative background elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-full"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-sky-300 rounded-full"></div>
      <div className="absolute bottom-40 right-10 w-8 h-8 bg-white rounded-full"></div>
    </div>

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

    <div className="relative max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
          <HiCalendar className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Transform Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
            Financial Future?
          </span>
        </h2>

        <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
          Get a{" "}
          <span className="font-bold text-yellow-300">
            free 30-minute consultation
          </span>{" "}
          with our licensed CPAs. We serve individuals, businesses, and
          nonprofits nationwide with both virtual and in-person options.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mb-8">
        <a
          href="/schedule"
          className="group inline-flex items-center gap-3 bg-white text-sky-700 font-bold text-lg px-10 py-5 rounded-2xl hover:bg-sky-50 hover:scale-105 focus:ring-4 focus:ring-white/30 transition-all duration-300 shadow-2xl hover:shadow-white/20"
        >
          <HiCalendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          Schedule Your Free Consultation
        </a>
      </div>

      {/* Trust indicators with modern card design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
          <HiAcademicCap className="w-6 h-6 text-yellow-300 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-semibold text-white mb-1">Licensed CPA</h3>
          <p className="text-sky-100 text-sm">
            Certified professional expertise
          </p>
        </div>

        <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
          <HiGlobe className="w-6 h-6 text-yellow-300 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-semibold text-white mb-1">Flexible Service</h3>
          <p className="text-sky-100 text-sm">Virtual & in-office visits</p>
        </div>

        <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
          <HiCheckCircle className="w-6 h-6 text-yellow-300 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-semibold text-white mb-1">No Obligation</h3>
          <p className="text-sky-100 text-sm">Zero-pressure consultation</p>
        </div>

        <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
          <div className="text-xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
            🌐
          </div>
          <h3 className="font-semibold text-white mb-1">Bilingual</h3>
          <p className="text-sky-100 text-sm">
            English & Arabic • نتحدث العربية
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="text-center mt-6">
        <p className="text-sky-200 text-sm">
          Trusted by hundreds of clients nationwide
        </p>
      </div>
    </div>
  </section>
);
