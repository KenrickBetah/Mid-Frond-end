import Headers from "../components/Header";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Interests from "../components/Interests";
import Skills from "../components/Skills";
import Penghargaan from "../components/Penghargaan";

const Homepages = () => {
  return (
    <div>
      <Headers />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Penghargaan />
    </div>
  );
};

export default Homepages;
