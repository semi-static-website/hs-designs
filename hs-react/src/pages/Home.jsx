import Navbar from '../components/Navbar'
import Header from '../components/Header'
import GetTouch from '../components/GetTouch'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
      <Navbar />
      <Header />
      <GetTouch />
      <About />
      <Team />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
