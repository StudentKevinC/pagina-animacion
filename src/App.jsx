import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import QuickInfo from "./components/QuickInfo"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Packages from "./components/Packages"
import Gallery from "./components/Gallery"
import Steps from "./components/Steps"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff7fb] text-zinc-900">
      <Navbar />
      <Hero />
      <QuickInfo />
      <Services />
      <Experience />
      <Packages />
      <Gallery />
      <Steps />
      <Contact />
      <Footer />
    </div>
  )
}

export default App