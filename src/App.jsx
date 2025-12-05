import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Features from './components/Features'
import WhoCanJoin from './components/WhoCanJoin'
import ContactCard from './components/ContactCard'
import EnquiryForm from './components/EnquiryForm'
import Footer from './components/Footer'

function App() {
  const [showFloatButton, setShowFloatButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatButton(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Header scrollToForm={scrollToForm} />
      <main>
        <Hero scrollToForm={scrollToForm} />
        <Courses scrollToForm={scrollToForm} />
        <Features />
        <WhoCanJoin />
        <ContactCard />
        {/* <EnquiryForm /> */}
      </main>
      <Footer />
      
      {/* Floating Contact Button */}
      {showFloatButton && (
        <div className="fixed bottom-6 right-6 z-50 fade-in">
          <div className="flex flex-col gap-2">
            <a
              href="tel:9623163402"
              className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 hover-lift transition-colors"
              aria-label="Call Now"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a
              href="mailto:dishasamarthmedco@gmail.com"
              className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 hover-lift transition-colors"
              aria-label="Email Now"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

