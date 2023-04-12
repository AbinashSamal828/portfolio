import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Link } from "react-scroll";
function App() {
  return (
    <div>
      <Navbar/>
      <div name="home"><Home /></div> 
      <div name="about"><About /></div> 
      <div name="skills"><Skills /></div> 
      <div name="projects"><Projects /></div> 
      <div name="contact"><Contact /></div>
    </div>
  );
}

export default App;
