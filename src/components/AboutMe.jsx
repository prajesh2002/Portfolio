//// -----------2nd main----------
// import React from "react";
// import { motion } from "framer-motion";
// import about from "../assets/about-me-new.jpg";

// const AboutMe = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 1 } },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8, x: "80%" },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       x: 0,
//       transition: { duration: 1, delay: 1 },
//     },
//   };

//   return (
//     <motion.div
//       className="AboutMe heading flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-4 xl:pl-40 xl:pr-28 lg:pl-10 lg:h-auto min-h-full mb-10 md:gap-20 overflow-hidden"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.div
//         className="left lg:w-1/2 mt-5 lg:mt-0"
//         variants={textVariants}
//       >
//         <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-4">
//           About Me
//         </h2>
//         <p className="text-sm lg:text-base mb-4 text-gray-600 text-justify px-2 md:-px-0">
//         Hello, I'm Prajesh Dhande, a budding enthusiast in the vast landscape
//           of technology. As a beginner in the world of Information Technology,
//           my journey is characterized by a genuine passion for learning and a
//           curiosity about all things tech. I'm currently exploring the exciting
//           realms of web development and designing, finding joy in unraveling the
//           mysteries of coding and the limitless possibilities it offers. <br />
//           Beyond the screen, you'll often find me outdoors, cricket bat in hand,
//           indulging in the excitement of the game. Whether it's the rhythm of
//           music or the thrill of sports, these passions not only add a
//           delightful balance to my tech pursuits but also inspire a holistic
//           approach to life.
//           {/* I'm here to connect with fellow enthusiasts, learn
//           from the experienced, and share the joy of the beginner's journey. */}
//           Let's navigate this exciting path of discovery together!

//         </p>
//       </motion.div>
//       <motion.div className="right lg:w-1/2 lg:pr-10" variants={imageVariants}>
//         <img
//           src={about}
//           alt="About Me"
//           className="max-w-full h-auto lg:max-w-2xl lg:h-auto mt-5 p-5"
//           style={{
//             maxWidth: "100%",
//             height: "auto",
//             borderRadius: "3rem",
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AboutMe;

// -----------3rd------
// import React from "react";
// import { motion } from "framer-motion";
// import about from "../assets/about-me-new.jpg";

// const AboutMe = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 1 } },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1, delay: 0.5, ease: "easeOut" },
//     },
//   };

//   const headingVariants = {
//     hidden: { scale: 0.8 },
//     visible: {
//       scale: 1,
//       transition: { duration: 0.7, delay: 0.5, ease: "easeInOut" },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8, x: "80%" },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       x: 0,
//       transition: { duration: 1, delay: 1, ease: "easeOut" },
//     },
//   };

//   return (
//     <motion.div
//       className="AboutMe heading flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-4 lg:pl-40 lg:pr-28 lg:h-auto min-h-full mb-10 md:gap-20"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.div
//         className="left lg:w-1/2 mt-5 lg:mt-0"
//         variants={textVariants}
//       >
//         <motion.h2
//           className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-4"
//           variants={headingVariants}
//         >
//           About Me
//         </motion.h2>
//         <p className="text-sm lg:text-base mb-4 text-gray-600 text-justify">
//           Hello, I'm Prajesh Dhande, a budding enthusiast in the vast landscape
//           of technology. As a beginner in the world of Information Technology,
//           my journey is characterized by a genuine passion for learning and a
//           curiosity about all things tech. I'm currently exploring the exciting
//           realms of web development and designing, finding joy in unraveling the
//           mysteries of coding and the limitless possibilities it offers. <br />
//           Beyond the screen, you'll often find me outdoors, cricket bat in hand,
//           indulging in the excitement of the game. Whether it's the rhythm of
//           music or the thrill of sports, these passions not only add a
//           delightful balance to my tech pursuits but also inspire a holistic
//           approach to life. I'm here to connect with fellow enthusiasts, learn
//           from the experienced, and share the joy of the beginner's journey.
//           Let's navigate this exciting path of discovery together!
//         </p>
//       </motion.div>
//       <motion.div className="right lg:w-1/2 lg:pr-10" variants={imageVariants}>
//         <img
//           src={about}
//           alt="About Me"
//           className="max-w-full h-auto lg:max-w-2xl lg:h-auto mt-5 p-5"
//           style={{
//             maxWidth: "100%",
//             height: "auto",
//             borderRadius: "3rem",
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AboutMe;

// // -------main-----------
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import about from "../assets/about-me-new.jpg";
import TrackVisibility from "react-on-screen";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: "80%" },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, delay: 1 },
    },
  };

  useEffect(() => {
    // if (isVisible) console.log("section visible");
  }, []);

  return (
    <TrackVisibility partialVisibility>
      {({ isVisible }) => (
        <>
          <div className="AboutMe flex flex-col gap-10 lg:min-h-full min-h-full lg:mb-10">
            <h2
              className="heading text-3xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left xl:pl-40 xl:pr-28 lg:pl-10 
            lg:mb-[-60px] mb-[-30px]"
            >
              About Me
            </h2>

            <motion.div
              className="flex flex-col-reverse lg:flex-row items-center text-center lg:text-left px-4 xl:pl-40 xl:pr-28 lg:pl-10 lg:h-auto min-h-full mb-10 lg:gap-x-20 overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div
                className="left lg:w-1/2 mt-5 lg:mt-0"
                variants={textVariants}
              >
                {/* <h2 className="heading text-3xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left xl:pl-40 xl:pr-28 lg:pl-10 mb-10">
                  About Me
                </h2> */}
                <p className="text-sm lg:text-base lg:mb-0 text-gray-600 text-justify px-2 md:-px-0">
                  Hello, I'm Prajesh Dhande, a budding enthusiast in the vast
                  landscape of technology. As a beginner in the world of
                  Information Technology, my journey is characterized by a
                  genuine passion for learning and a curiosity about all things
                  tech. I'm currently exploring the exciting realms of web
                  development and designing, finding joy in unraveling the
                  mysteries of coding and the limitless possibilities it offers.{" "}
                  <br />
                  Beyond the screen, you'll often find me outdoors, cricket bat
                  in hand, indulging in the excitement of the game. Whether it's
                  the rhythm of music or the thrill of sports, these passions
                  not only add a delightful balance to my tech pursuits but also
                  inspire a holistic approach to life.
                  {/* I'm here to connect with fellow enthusiasts, learn
          from the experienced, and share the joy of the beginner's journey. */}
                  Let's navigate this exciting path of discovery together!
                </p>
              </motion.div>
              <motion.div
                className="right lg:w-1/2 lg:pr-10"
                variants={imageVariants}
              >
                <img
                  src={about}
                  alt="About Me"
                  className="max-w-full h-auto lg:max-w-2xl lg:h-auto p-5"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "3rem",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </TrackVisibility>
  );
};

export default AboutMe;
