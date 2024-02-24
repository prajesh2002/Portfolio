// import React from "react";
// import html from "../assets/skills/html.png";
// import css from "../assets/skills/css.png";
// import javascript from "../assets/skills/javascript.png";
// import react from "../assets/skills/react.png";
// import tailwind from "../assets/skills/tailwind.png";
// import mysql from "../assets/skills/mysql.png";
// import c from "../assets/skills/c.png";
// import cpp from "../assets/skills/c++.png";
// import java from "../assets/skills/java.png";
// import github from "../assets/skills/github.png";

// const MySkills = () => {
//   const techs = [
//     {
//       id: 1,
//       src: html ,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 4,
//       src: react,
//       title: "React",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 5,
//       src:tailwind,
//       title: "Tailwind",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 6,
//       src:mysql,
//       title: "MySql",
//       style: "shadow-gray-400",
//     },
//     {
//       id: 7,
//       src: c,
//       title: "C",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 8,
//       src: cpp,
//       title: "C++",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 9,
//       src: java,
//       title: "Java",
//       style: "shadow-orange-400",
//     },
//     {
//       id: 10,
//       src: github,
//       title: "GitHub",
//       style: "shadow-gray-400",
//     },
//   ];

//   return (
//     <div
//       name="experience"
//       // className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
//       className="Skills bg-gradient-to-b from-gray-700 to-gray-900 w-full min-h-full pt-10 mb-8"
//     >
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Skills
//           </p>
//           <p className="py-6 lg:text-2xl md:text-xl">Technologies I know</p>
//         </div>

//         <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-3 gap-8 text-center py-8  px-5 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
//             >
//               <img src={src} alt="" className="w-20 mx-auto" />
//               <p className="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MySkills;

// // --------------2ND MAIN-----
// import React from "react";
// import html from "../assets/skills/html.png";
// import css from "../assets/skills/css.png";
// import javascript from "../assets/skills/javascript.png";
// import react from "../assets/skills/react.png";
// import tailwind from "../assets/skills/tailwind.png";
// import mysql from "../assets/skills/mysql.png";
// import c from "../assets/skills/c.png";
// import cpp from "../assets/skills/c++.png";
// import java from "../assets/skills/java.png";
// import github from "../assets/skills/github.png";

// const MySkills = () => {
//   const techs = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 4,
//       src: react,
//       title: "React",
//       style: "shadow-sky-500",
//     },
//     {
//       id: 5,
//       src: tailwind,
//       title: "Tailwind",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 6,
//       src: mysql,
//       title: "MySql",
//       style: "shadow-gray-900",
//     },
//     {
//       id: 7,
//       src: c,
//       title: "C",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 8,
//       src: cpp,
//       title: "C++",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 9,
//       src: java,
//       title: "Java",
//       style: "shadow-red-400",
//     },
//     {
//       id: 10,
//       src: github,
//       title: "GitHub",
//       style: "shadow-gray-900",
//     },
//   ];

//   return (
//     <div className="Skills flex flex-col gap-10 lg:px-44 lg:h-auto min-h-full">
//       {/* <div> */}
//         <p className="heading text-3xl lg:text-5xl xl:text-6xl font-bold my-4 text-center lg:text-left">
//           Skills
//         </p>
//         {/* <p className="py-6 lg:text-2xl md:text-xl">Technologies I know</p> */}
//       {/* </div> */}
//       <div className="flex flex-col min-h-full w-full">
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center mx-5 lg:mx-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} `}
//             >
//               <img src={src} alt="" className="w-20 mx-auto min-h-20" />
//               <p className="mt-4 text-lg font-semibold">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MySkills;

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import mysql from "../assets/skills/mysql.png";
import c from "../assets/skills/c.png";
import cpp from "../assets/skills/c++.png";
import java from "../assets/skills/java.png";
import github from "../assets/skills/github.png";
import { motion } from "framer-motion";

const MySkills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: mysql,
      title: "MySql",
      style: "shadow-gray-900",
    },
    {
      id: 7,
      src: c,
      title: "C",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: java,
      title: "Java",
      style: "shadow-red-400",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-900",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="Skills flex flex-col gap-10 lg:px-44 lg:min-h-full min-h-full lg:mb-24"
    >
      <h2 className="heading text-3xl lg:text-5xl xl:text-6xl font-bold my-4 md:my-0 text-center lg:text-left">
        Skills
      </h2>
      <div className="flex flex-col min-h-full w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center mx-5 lg:mx-0">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} bg-gray-50`}
              initial={{ opacity: 0, y: -50 }}
              animate={
                isAnimated
                  ? { opacity: 1, y: 0, x: 0 }
                  : { opacity: 0, y: -50, x: 0 }
              }
              transition={{ duration: 0.8, delay: id * 0.1 }}
              // style={{ gridRow: `span ${Math.ceil(id / 5)}` }}
            >
              <img
                src={src}
                alt=""
                className={`w-20 mx-auto min-h-20 ${
                  title === "MySql" ? "md:w-24 lg:w-32 xl:w-40" : ""
                }`}
              />
              <p className="mt-4 text-lg font-semibold">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
