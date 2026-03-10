import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About' // Ajoute ça
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-8 pt-20">
        <Hero />
        <About /> {/* Et ça */}
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
export default App