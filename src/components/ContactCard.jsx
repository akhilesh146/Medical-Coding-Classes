function ContactCard() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg fade-in">
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Mobile No</h3>
                  <a href="tel:9623163402" className="text-primary-600 hover:text-primary-700 text-lg">
                    9623163402
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:dishasamarthmedco@gmail.com" className="text-primary-600 hover:text-primary-700 text-lg break-all">
                    dishasamarthmedco@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Enquiry Timing</h3>
                  <p className="text-gray-700 text-lg">
                    Monday to Saturday, 10:00 AM to 8:00 PM
                  </p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:9623163402"
                  className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg text-center font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Call Now
                </a>
                <a
                  href="mailto:dishasamarthmedco@gmail.com"
                  className="flex-1 bg-white text-primary-600 py-3 px-6 rounded-lg text-center font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCard

