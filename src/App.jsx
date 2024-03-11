import GithubDetails from "./Components/GithubDetails";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <div className="py-20 overflow-hidden ">
          <Header />
          <Hero />
          <GithubDetails />
          <Skills />
        </div>
        <ButtonGradient />
      </>
    </Router>
  );
}

export default App;
