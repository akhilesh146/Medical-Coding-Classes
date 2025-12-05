function Hero({ scrollToForm }) {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          {/* <div className="inline-block mb-6">
            <span className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              Starting from Today — Hurry up!
            </span>
          </div> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Disha Samarth's Medical Coding Classes
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            Instructor: Disha Samarth
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn medical coding from industry expert Disha Samarth. An experience and passionate medical coding trainer specialized in CPC exam preparation, anatomy, physiology and real-time coding scenarios.<br />
        
             Get industry-ready and clear any medical coding interview with our comprehensive online courses.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 hover-lift transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Enquire Now
            </button>
            <a
              href="tel:9623163402"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 hover-lift transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Call Now
            </a>
            <a
              href="mailto:dishasamarthmedco@gmail.com"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 hover-lift transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Email
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero

