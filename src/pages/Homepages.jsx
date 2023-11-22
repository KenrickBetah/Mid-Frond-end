import Headers from "../components/Header";
import About from "../components/About";
import Awards from "../components/awards";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Interests from "../components/Interests";
import Skills from "../components/Skills";
const Homepages = () => {
  return (
    <div>
      <Headers />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Awards />
    </div>
  );
};

export default Homepages;
