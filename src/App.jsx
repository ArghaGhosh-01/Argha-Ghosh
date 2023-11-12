import './App.css'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Uppersection from './components/uppersection';
import Skills from "./components/skills";
import TechIcons from "./components/techIcons";
import Particles from './components/particlebg';
import About from './components/about'
import ContactForm from './components/contact';
import Project from './components/project';
import Experience from './components/experience';

function App() {
  return (
    <div>
    <Particles />
      <Navbar />
      <Uppersection />
      <About />
      <Skills />
      <Experience />
      <Project />
      <div className='m-12 font-semibold'>
        <h1 className='flex items-center justify-center text-2xl font-bold  heading'>
          TECHNOLOGIES
        </h1>
        <TechIcons />
      </div>
     
      <div className='m-12 font-semibold'>
      <h1 className='flex items-center justify-center text-2xl font-bold  mb-10 mt-28 heading'>
          CONTACT ME
        </h1>
      <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default App
