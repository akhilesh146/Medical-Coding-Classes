import { courses } from '../data/courses'

function Courses({ scrollToForm }) {
  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Courses
        </h2>
        <p className="text-center text-gray-600 mb-2">Mode: <span className="font-semibold">Online</span></p>
        <p className="text-center text-sm text-amber-600 mb-12 font-medium">
          Extra charges will be applicable for books
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-2xl font-bold text-primary-600">Rs {course.discountedFee}</span>
                  <span className="text-lg text-gray-500 line-through">Rs {course.fee}</span>
                  <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">
                    Save Rs {course.fee - course.discountedFee}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {course.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              {/* <button
                onClick={scrollToForm}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Enquire Now
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses

