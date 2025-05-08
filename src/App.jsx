import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main className="p-0 pt-16 w-full m-0 bg-stone-200">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}


export default App
