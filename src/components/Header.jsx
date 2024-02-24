import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import resume from "../assets/resume/Prajesh_Dhande_Resume.pdf";

function Header() {
  const [navActive, setNavActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const closeMenu = () => {
    setNavActive(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: "white",
    zIndex: 1000,
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Prajesh_Resume.pdf";
    window.open(resume, "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeClick = () => {
    closeMenu();
    downloadResume();
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row lg:justify-around pl-5 lg:pl-0 fixed w-full py-4 uppercase"
        style={headerStyle}
      >
        <div className="font-semibold md:text-xl flex items-center">
          {" "}
          <h2 className="font-serif italic">Prajesh</h2>
        </div>
        <div className="hidden lg:flex items-center gap-x-10">
          <Link
            onClick={closeMenu}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="heroSection"
            className="cursor-pointer hover:scale-110"
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="AboutMe"
            className="cursor-pointer hover:scale-110"
          >
            About
          </Link>
          <Link
            onClick={closeMenu}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Skills"
            className="cursor-pointer hover:scale-110"
          >
            Skills
          </Link>
          <Link
            onClick={closeMenu}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Education"
            className="cursor-pointer hover:scale-110"
          >
            Education
          </Link>
          {/* <Link
            onClick={closeMenu}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Education"
            className="cursor-pointer hover:scale-110"
          >
            Education
          </Link> */}

          <Link
            onClick={closeMenu}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Projects"
            className="cursor-pointer hover:scale-110"
          >
            Projects
          </Link>
          {/* <Link
            onClick={closeMenu}
            activeClass=""
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="py-1 px-2 rounded-lg mx-auto hover:bg-purple-600 hover:text-white bg-white text-purple-600 hover:outline-none border-2 border-solid border-purple-500 cursor-pointer hover:scale-110"
          >
            Contact Me
          </Link>
          <Link
            activeClass=""
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="py-1 px-2 rounded-lg mx-auto hover:bg-green-600 hover:text-white bg-white text-green-600 hover:outline-none border-2 border-solid border-green-500 cursor-pointer hover:scale-110"
            onClick={handleResumeClick}
          >
            Resume
          </Link> */}
          <Link
            onClick={closeMenu}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn"
          >
            Contact
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn2"
            onClick={handleResumeClick}
          >
            Resume
          </Link>
        </div>
        <div className="lg:hidden flex flex-col items-end absolute top-4 right-4 my-2">
          <button onClick={toggleMenu}>
            <i class="fa-solid fa-bars fa-xl"></i>
          </button>
          {isMenuOpen && (
            <div className="flex flex-col space-y-2 mt-2 bg-white px-20 w-screen py-2 lg:py-0 items-center">
              <Link
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="cursor-pointer hover:scale-110"
              >
                Home
              </Link>
              <Link
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="cursor-pointer hover:scale-110"
              >
                About
              </Link>
              <Link
                onClick={closeMenu}
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                to="Skills"
                className="cursor-pointer hover:scale-110"
              >
                Skills
              </Link>
              <Link
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Education"
                className="cursor-pointer hover:scale-110"
              >
                Education
              </Link>
              {/* <Link
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Education"
                className="cursor-pointer hover:scale-110"
              >
                Education
              </Link> */}
              <Link
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Projects"
                className="cursor-pointer hover:scale-110"
              >
                Projects
              </Link>
              <Link
                onClick={closeMenu}
                activeClass=""
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="btn"
              >
                Contact
              </Link>
              <Link
                activeClass=""
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn2"
                onClick={handleResumeClick}
              >
                Resume
              </Link>{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
