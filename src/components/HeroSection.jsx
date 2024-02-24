// import { useEffect, useState } from "react";
// // import profile from "../assets/about-me-new.jpg";
// // import profile from "../assets/hero.avif";
// // import profile from "../assets/day13-it-girl.svg";
// // import profile from "../assets/new-hero.png";
// import profile from "../assets/hero.gif";

// import resume from "../assets/resume/Prajesh_Dhande_Resume.pdf";
// import TrackVisibility from "react-on-screen";
// import { Link } from "react-scroll";

// const downloadResume = () => {
//   const link = document.createElement("a");
//   link.href = resume;
//   link.download = "Prajesh_Resume.pdf";
//   window.open(resume, "_blank");
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

// export default function HeroSection() {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState("");
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = ["Web Developer", "Web Designer", "Coder", "Programmer"];
//   const period = 500;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => {
//       clearInterval(ticker);
//     };
//   }, [text]);

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting
//       ? fullText.substring(0, text.length - 1)
//       : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta((prevDelta) => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex((prevIndex) => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === "") {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   return (
//     <div className="heroSection flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-4 lg:px-20 lg:h-screen h-full bg-gradient-to-br mb-10 lg:mb-0 transition-all duration-500 ease-in-out lg:pl-40 lg:pr-24 ">
//       <div className="lg:w-1/2 lg:pr-10">
//         <TrackVisibility>
//           {({ isVisible }) => (
//             <div
//               className={`animate__animated ${
//                 isVisible ? "animate__fadeIn" : ""
//               }`}
//             >
//               <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
//                 Hello!
//               </h1>
//               <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-gray-800 ">
//                 I'm{" "}
//                 <span className="blue-gradient_text font-semibold drop-shadow font-serif">
//                   Prajesh
//                 </span>
//                 <br />
//                 <span className="txt-rotate">
//                   <span className="wrap text-pink-500">A {text}</span>
//                 </span>
//               </h1>
//             </div>
//           )}
//         </TrackVisibility>
//         <p className="text-sm lg:text-base mb-4 text-gray-600 text-justify">
//           A passionate and creative Web Developer and Designer. With a sharp
//           attention to detail and a passion for creating impactful digital
//           experiences, I transform ideas into reality through coding and design.
//         </p>
//         <button className="btn md:mr-4 my-2 md:my-0">
//           <Link
//             activeClass=""
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             to="Contact"
//           >
//             {" "}
//             Let's Connect
//           </Link>
//         </button>
//         <button
//           activeClass=""
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//           to="Contact"
//           className="btn2"
//           onClick={downloadResume}
//         >
//           Resume
//         </button>
//       </div>
//       <div className="lg:w-1/2 overflow-hidden transition-all duration-500 ease-in-out transform p-5 md:p-8 lg:p-0">
//         <img
//           className="w-full h-auto rounded-3xl my-5 lg:my-0 transition-all duration-300 ease-in-out"
//           src={profile}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }

// // // ------------
// // import React, { useEffect, useState } from "react";
// // import profile from "../assets/hero.gif";
// // import resume from "../assets/resume/Prajesh_Dhande_Resume.pdf";
// // import TrackVisibility from "react-on-screen";
// // import { Link } from "react-scroll";

// // const downloadResume = () => {
// //   const link = document.createElement("a");
// //   link.href = resume;
// //   link.download = "Prajesh_Resume.pdf";
// //   window.open(resume, "_blank");
// //   document.body.appendChild(link);
// //   link.click();
// //   document.body.removeChild(link);
// // };

// // const GifComponent = () => {
// //   const [isPaused, setIsPaused] = useState(false);

// //   useEffect(() => {
// //     const timeoutId = setTimeout(() => {
// //       setIsPaused(true);
// //     }, 1000);

// //     return () => clearTimeout(timeoutId);
// //   }, []);
// //   return (
// //     <img
// //       src={profile}
// //       alt="Animated GIF"
// //       style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
// //     />
// //   );
// // };

// // export default function HeroSection() {
// //   const [loopNum, setLoopNum] = useState(0);
// //   const [isDeleting, setIsDeleting] = useState(false);
// //   const [text, setText] = useState("");
// //   const [delta, setDelta] = useState(300 - Math.random() * 100);
// //   const [index, setIndex] = useState(1);
// //   const toRotate = ["Web Developer", "Web Designer", "Coder", "Programmer"];
// //   const period = 500;

// //   useEffect(() => {
// //     let ticker = setInterval(() => {
// //       tick();
// //     }, delta);

// //     return () => {
// //       clearInterval(ticker);
// //     };
// //   }, [text]);

// //   const tick = () => {
// //     let i = loopNum % toRotate.length;
// //     let fullText = toRotate[i];
// //     let updatedText = isDeleting
// //       ? fullText.substring(0, text.length - 1)
// //       : fullText.substring(0, text.length + 1);

// //     setText(updatedText);

// //     if (isDeleting) {
// //       setDelta((prevDelta) => prevDelta / 2);
// //     }

// //     if (!isDeleting && updatedText === fullText) {
// //       setIsDeleting(true);
// //       setIndex((prevIndex) => prevIndex - 1);
// //       setDelta(period);
// //     } else if (isDeleting && updatedText === "") {
// //       setIsDeleting(false);
// //       setLoopNum(loopNum + 1);
// //       setIndex(1);
// //       setDelta(500);
// //     } else {
// //       setIndex((prevIndex) => prevIndex + 1);
// //     }
// //   };

// //   return (
// //     <div className="heroSection flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-4 lg:px-20 lg:h-screen h-full bg-gradient-to-br from-gray-100 to-gray-300 mb-10 lg:mb-0 transition-all duration-500 ease-in-out">
// //       <div className="lg:w-1/2 lg:pr-10">
// //         <TrackVisibility>
// //           {({ isVisible }) => (
// //             <div
// //               className={`animate__animated ${
// //                 isVisible ? "animate__fadeIn" : ""
// //               }`}
// //             >
// //               <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
// //                 Hello!
// //               </h1>
// //               <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-gray-800">
// //                 I'm <span className="text-pink-600">Prajesh</span>
// //                 <br />
// //                 <span className="txt-rotate">
// //                   <span className="wrap text-amber-500">{text}</span>
// //                 </span>
// //               </h1>
// //               <p className="text-sm lg:text-base mb-4 text-gray-600 text-justify">
// //                 A passionate and creative Web Developer and Designer. With a
// //                 sharp attention to detail and a passion for creating impactful
// //                 digital experiences, I transform ideas into reality through
// //                 coding and design.
// //               </p>
// //             </div>
// //           )}
// //         </TrackVisibility>
// //         <button className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:bg-gradient-to-r hover:scale-110 transition-all duration-300 ease-in-out my-5">
// //           <Link
// //             activeClass=""
// //             spy={true}
// //             smooth={true}
// //             offset={-70}
// //             duration={500}
// //             to="Contact"
// //           >
// //             {" "}
// //             Let's Connect
// //           </Link>
// //         </button>
// //         <button
// //           activeClass=""
// //           spy={true}
// //           smooth={true}
// //           offset={-70}
// //           duration={500}
// //           to="Contact"
// //           className="p-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 ease-in-out ml-4 hover:scale-110 text-white"
// //           onClick={downloadResume}
// //         >
// //           Resume
// //         </button>
// //       </div>
// //       <div className="lg:w-1/2 overflow-hidden transition-all duration-500 ease-in-out transform p-5 md:p-8 lg:p-0">
// //         <GifComponent />
// //       </div>
// //     </div>
// //   );
// // }
// // // -------------


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import about from "../assets/new.gif";
import about from "../assets/hero.gif";
import resume from "../assets/resume/Prajesh_Dhande_Resume.pdf";
import TrackVisibility from "react-on-screen";
import { Link } from "react-scroll";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resume;
  link.download = "Prajesh_Resume.pdf";
  window.open(resume, "_blank");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function HeroSection() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Coder", "Programmer"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: "80%" },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, delay: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="heroSection flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-4 xl:pl-40 xl:pr-28 lg:pl-10 lg:h-screen h-full bg-gradient-to-br mb-10 lg:mb-0 transition-all duration-500 ease-in-out "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="left lg:w-1/2 lg:pr-10"
        variants={textVariants}
      >
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={`animate__animated ${
                isVisible ? "animate__fadeIn" : ""
              }`}
            >
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
                Hello!
              </h1>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-gray-800">
                I'm{" "}
                <span className="blue-gradient_text font-semibold drop-shadow font-serif">
                  Prajesh
                </span>
                <br />
                <span className="txt-rotate">
                  <span className="wrap  pink-gradient_text">A {text}</span>
                </span>
              </h1>
            </div>
          )}
        </TrackVisibility>
        <p className="text-sm lg:text-base mb-4 text-gray-600 text-justify">
          A passionate and creative Web Developer and Designer. With a sharp
          attention to detail and a passion for creating impactful digital
          experiences, I transform ideas into reality through coding and design.
        </p>
        <button className="btn md:mr-4 my-2 md:my-0 mr-2">
          <Link
            activeClass=""
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
          >
            {" "}
            Let's Connect
          </Link>
        </button>
        <button
          activeClass=""
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn2"
          onClick={downloadResume}
        >
          Resume
        </button>
      </motion.div>
      <div
        className="right lg:w-1/2 overflow-hidden transition-all duration-500 ease-in-out transform p-5 md:p-8 lg:p-0"
        // variants={imageVariants}
      >
        <img
          className="w-full h-auto rounded-3xl my-5 lg:my-0 transition-all duration-300 ease-in-out"
          src={about}
          alt=""
        />
      </div>
    </motion.div>
  );
}
