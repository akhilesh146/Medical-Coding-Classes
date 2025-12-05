function WhoCanJoin() {
  const eligible = [
    "D.Pharma",
    "B.Pharma",
    "Any life-science graduate"
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Who Can Join?
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary-50 rounded-xl p-8 fade-in">
            <ul className="space-y-4">
              {eligible.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoCanJoin

