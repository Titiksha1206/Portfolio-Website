import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Qualification from "./Components/Qualification";
import Footer from "./Components/Footer";
import ScrollUp from "./Components/ScrollUp";
import Certification from "./Components/Certification";
import Projects from "./Components/Projects";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Certification />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
