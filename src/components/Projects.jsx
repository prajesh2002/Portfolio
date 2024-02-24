// import React from "react";
// import Maa from "../assets/projects/maa.png";
// import ShopCart from "../assets/projects/shopcart.png";
// import Konato from "../assets/projects/konato.png";
// import MovieSpace from "../assets/projects/moviespace.png";
// import DesignTask from "../assets/projects/design-task.png";

// // https://shop-cart-007.netlify.app/
// // https://github.com/prajesh2005/shopcart

// // https://maa-association-nagpur.netlify.app/
// // https://github.com/prajesh2005/Maa.github.io

// // https://prajesh2005.github.io/MovieSpace/
// // https://github.com/prajesh2005/MovieSpace

// // https://design-task-liart.vercel.app/
// // https://github.com/prajesh2002/Design_Task

// // https://konato.vercel.app/
// // https://github.com/prajesh2002/konato

// const Projects = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: Konato,
//       code: "https://github.com/prajesh2002/konato",
//       demo: "https://konato.vercel.app/",
//     },
//     {
//       id: 2,
//       src: Maa,
//       code: "https://github.com/prajesh2005/Maa.github.io",
//       demo: "https://maa-association-nagpur.netlify.app/",
//     },
//     {
//       id: 3,
//       src: DesignTask,
//       code: "https://github.com/prajesh2002/Design_Task",
//       demo: "https://design-task-liart.vercel.app/",
//     },
//     {
//       id: 4,
//       src: MovieSpace,
//       code: "https://github.com/prajesh2005/MovieSpace",
//       demo: "https://prajesh2005.github.io/MovieSpace/",
//     },
//     {
//       id: 5,
//       src: ShopCart,
//       code: "https://github.com/prajesh2005/shopcart",
//       demo: "https://shop-cart-007.netlify.app/",
//     },
//     // {
//     //   id: 6,
//     //   src: Konato,
//     //   code: "https://github.com/prajesh2002/konato",
//     //   demo: "https://konato.vercel.app/",
//     // },
//   ];

//   const openDemo = (demoLink) => {
//     window.open(demoLink, "_blank");
//   };

//   const openCode = (codeLink) => {
//     window.open(codeLink, "_blank");
//   };
//   return (
//     <div
//       name="portfolio"
//       className="Projects bg-gradient-to-b from-gray-700 to-black w-full min-h-screen text-white my-5 py-10"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Projects
//           </p>
//           <p className="py-6">Some Of My Work</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-auto sm:px-0 cursor-pointer">
//           {portfolios.map(({ id, src, code, demo }) => (
//             <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//                 onClick={() => {
//                   openDemo(demo);
//                 }}
//               />
//               <div className="flex items-center justify-center">
//                 <button
//                   className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
//                   onClick={() => openDemo(demo)}
//                 >
//                   Demo
//                 </button>
//                 <button
//                   className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
//                   onClick={() => openCode(code)}
//                 >
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import Maa from "../assets/projects/maa.png";
import ShopCart from "../assets/projects/shopcart.png";
import Konato from "../assets/projects/konato.png";
import MovieSpace from "../assets/projects/moviespace.png";
import DesignTask from "../assets/projects/design-task.png";
import QloronERP from "../assets/projects/QloronERP.png";
import QloronHome from "../assets/projects/QloronHome.png";
import { FaGithub, FaUps } from "react-icons/fa";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: Konato,
      code: "https://github.com/prajesh2002/konato",
      demo: "https://konato.vercel.app/",
    },
    {
      id: 2,
      src: Maa,
      code: "https://github.com/prajesh2005/Maa.github.io",
      demo: "https://maa-association-nagpur.netlify.app/",
    },
    {
      id: 3,
      src: DesignTask,
      code: "https://github.com/prajesh2002/Design_Task",
      demo: "https://design-task-liart.vercel.app/",
    },
    {
      id: 4,
      src: MovieSpace,
      code: "https://github.com/prajesh2005/MovieSpace",
      demo: "https://prajesh2005.github.io/MovieSpace/",
    },
    {
      id: 5,
      src: ShopCart,
      code: "https://github.com/prajesh2005/shopcart",
      demo: "https://shop-cart-007.netlify.app/",
    },
    {
      id: 6,
      src: QloronERP,
      code: "https://github.com/prajesh2002/Qloron-ERP-Page",
      demo: "https://qloron-erp-page-green.vercel.app/",
    },
    {
      id: 7,
      src: QloronHome,
      code: "https://github.com/prajesh2002/Qloron-Home-Page",
      demo: "https://qloron-home-page-beige.vercel.app/",
    },
  ];

  const openDemo = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const openCode = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div className="Projects  bg-gradient-to-b  w-full min-h-screen text-gray-800 lg:pl-44 lg:pr-44 mb-10 lg:mb-0">
      <p className="heading text-3xl lg:text-5xl xl:text-6xl font-bold my-4 text-center lg:text-left mb-10">
        Projects
      </p>
      <div className="flex flex-col min-h-full w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0 cursor-pointer mx-1 md:mx-4 lg:mx-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div
              key={id}
              className="shadow-md rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105 font-semibold"
            >
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover hover:opacity-70"
                onClick={() => {
                  openDemo(demo);
                }}
              />
              <div className="flex items-center justify-around">
                <button
                  className="px-6 py-3 m-4 duration-200 hover:scale-110"
                  onClick={() => openDemo(demo)}
                >
                  {/* Demo */}
                  <i className="fa-solid fa-arrow-up-right-from-square fa-lg"></i>{" "}
                </button>
                <button
                  className="px-6 py-3 m-4 duration-200 hover:scale-110"
                  onClick={() => openCode(code)}
                >
                  {/* Code */}
                  <FaGithub className="fa-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
