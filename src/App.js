import Home from "./components/home";
import Navbar from "./components/Navbar";
import About from "./components/about"
import Skills from "./components/skills"
import Hobby from "./components/hobby"
import Contact from "./components/contact"



function App() {
  return (
    <div >
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Hobby/>
     <Contact/>

       
    </div>
  );
}

export default App;
