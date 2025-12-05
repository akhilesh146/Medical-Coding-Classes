function Header({ scrollToForm }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Disha Samarth's Medical Coding Classes</h1>
              <p className="text-sm text-gray-600">Medical Coding Classes</p>
            </div>
          </div>
          <button
            onClick={scrollToForm}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="Enquire Now"
          >
            Enquire Now
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

