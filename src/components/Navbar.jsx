import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""} `}>
      <div>
        <h2 style={{ fontFamily: "URW Chancery L, cursive" }}>Prajesh</h2>
      </div>
      <h2
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <i class="fa-solid fa-bars"></i>
      </h2>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li className="hover:scale-105 my-auto">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li className=" hover:scale-105 my-auto">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li className=" hover:scale-105 my-auto">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>

          <li className="hover:scale-105 my-auto">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="btn btn-outline-primary hover:bg-purple-600 hover:text-white bg-white text-purple-600 hover:outline-none border-2 border-solid border-purple-500"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

// //
// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";

// function Navbar() {
//   const [navActive, setNavActive] = useState(false);

//   const toggleNav = () => {
//     setNavActive(!navActive);
//   };

//   const closeMenu = () => {
//     setNavActive(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 500) {
//         closeMenu();
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <nav className="md:flex md:justify-between md:items-center md:px-8 md:py-4 bg-white shadow-md fixed top-0 w-screen">
//       <div className="flex items-center">
//         <h2
//           className="text-lg font-cursive"
//           style={{ fontFamily: "URW Chancery L, cursive" }}
//         >
//           Prajesh
//         </h2>
//       </div>
//       <div className="md:hidden cursor-pointer" onClick={toggleNav}>
//         <span
//           className={`block h-2 w-6 border-t border-darkblue mb-1 transform transition-all duration-300 ${
//             navActive ? "rotate-45 translate-y-1.5" : ""
//           }`}
//         ></span>
//         <span
//           className={`block h-2 w-6 border-t border-darkblue mb-1 opacity-0 ${
//             navActive ? "opacity-0" : "opacity-100"
//           }`}
//         ></span>
//         <span
//           className={`block h-2 w-6 border-t border-darkblue ${
//             navActive ? "-rotate-45 translate-y-1.5" : ""
//           }`}
//         ></span>
//       </div>
//       <div className={`md:flex md:items-center space-x-8 ${navActive ? "flex flex-col" : "hidden"}`}>
//         <Link
//           onClick={closeMenu}
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           to="heroSection"
//           className="navbar--content hover:underline cursor-pointer"
//         >
//           Home
//         </Link>
//         <Link
//           onClick={closeMenu}
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           to="AboutMe"
//           className="navbar--content hover:underline cursor-pointer"
//         >
//           About Me
//         </Link>
//         <Link
//           onClick={closeMenu}
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           to="MyPortfolio"
//           className="navbar--content hover:underline cursor-pointer"
//         >
//           Portfolio
//         </Link>
//         <Link
//           onClick={closeMenu}
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           to="testimonial"
//           className="navbar--content hover:underline cursor-pointer"
//         >
//           Testimonials
//         </Link>
//         <Link
//           onClick={closeMenu}
//           activeClass="navbar--active-content"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           to="Contact"
//           className="navbar--content hover:underline cursor-pointer"
//         >
//           Contact Me
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

//
