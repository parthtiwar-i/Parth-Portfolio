import GithubDetails from "./Components/GithubDetails";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <>
        <div className="pt-20 overflow-hidden ">
          <Header />
          <Hero />
          <GithubDetails />
          <Projects />
          <Skills />
          <Contact />
          <Footer/>
        </div>
        <ButtonGradient />
      </>
    </Router>
  );
}

export default App;
