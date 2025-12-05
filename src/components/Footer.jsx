function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Disha Samarth's Medical Coding Classes</h3>
            <p className="text-sm">Medical Coding Classes</p>
            <p className="text-sm mt-2">Instructor: Disha Samarth</p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:9623163402" className="text-primary-400 hover:text-primary-300">
                  9623163402
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:dishasamarthmedco@gmail.com" className="text-primary-400 hover:text-primary-300 break-all">
                  dishasamarthmedco@gmail.com
                </a>
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium">Enquiry Timing:</span> Monday to Saturday, 10:00 AM to 8:00 PM
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#courses" className="block text-primary-400 hover:text-primary-300">
                Courses
              </a>
              {/* <a href="#enquiry-form" className="block text-primary-400 hover:text-primary-300">
                Enquiry Form
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {currentYear} Disha Samarth's Medical Coding Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

