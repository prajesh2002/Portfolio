import AboutMe from "./AboutMe";
import Contact from "./ContactMe";
import Education from "./Education";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import MySkills from "./MySkills";
import Navbar from "./Navbar";
import ScrollToTopButton from "./ScrollToTop";
import Footer from "./Footer";

export default function Home() {
  return (
    <> 
      {/* <Navbar/> */}
      <Header />
      <HeroSection />
      <AboutMe />
      <MySkills />
      <Education/>
      <Projects />
      <Contact />
      <ScrollToTopButton />
      <Footer/>
    </>
  );
}
