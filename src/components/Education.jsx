// // EducationTimeline.js

// import React from "react";
// import { useSpring, animated } from "react-spring";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { FaGraduationCap } from "react-icons/fa";
// import { FaBuilding } from "react-icons/fa";
// import { FaSchool } from "react-icons/fa";
// import "react-vertical-timeline-component/style.min.css";

// const EducationTimeline = () => {
//   const props = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//   });

//   return (
//     <animated.div style={props} className="Education my-8 text-center">
//       <h2 className="text-3xl font-bold mb-4">Education</h2>
//       <div className="flex flex-col items-center space-y-6">
//         <VerticalTimeline lineColor="#000">
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education bg-gray-100 border border-gray-300 p-4 rounded-md"
//             iconStyle={{ background: "#000", color: "#fff" }}
//             icon={<FaGraduationCap />}
//           >
//             <div className="flex justify-around flex-col md:flex-row">
//               <h2 className="text-xl font-bold mb-2">
//                 {" "}
//                 G H Raisoni College Of Engineering, Nagpur
//               </h2>
//               <h2 className="text-xl font-bold mb-2"> 2024 (Expected)</h2>
//             </div>
//             <h2 className="text-lg mb-2">9.13 CGPA</h2>
//             <h3 className="text-gray-600">Nagpur, Maharashtra</h3>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education bg-gray-100 border border-gray-300 p-4 rounded-md"
//             iconStyle={{ background: "#000", color: "#fff" }}
//             icon={<FaBuilding />}
//           >
//             <div className="flex justify-around flex-col md:flex-row">
//               <h2 className="text-xl font-bold mb-2">
//                 {" "}
//                 Shri Shivaji Science College, Nagpur
//               </h2>
//               <h2 className="text-xl font-bold mb-2"> 2020</h2>
//             </div>
//             <h2 className="text-lg mb-2">80.46 %</h2>
//             <h3 className="text-gray-600">Nagpur, Maharashtra</h3>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education bg-gray-100 border border-gray-300 p-4 rounded-md"
//             iconStyle={{ background: "#000", color: "#fff" }}
//             icon={<FaSchool />}
//           >
//             <div className="flex justify-around flex-col md:flex-row">
//               <h2 className="text-xl font-bold mb-2"> Sanjuba High School</h2>
//               <h2 className="text-xl font-bold mb-2"> 2018</h2>
//             </div>
//             <h2 className="text-lg mb-2">90.40 %</h2>
//             <h3 className="text-gray-600">Nagpur, Maharashtra</h3>
//           </VerticalTimelineElement>
//         </VerticalTimeline>
//       </div>
//     </animated.div>
//     // </div>
//   );
// };

// export default EducationTimeline;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-scroll";

import { FaSchool, FaBuilding, FaGraduationCap } from "react-icons/fa";

export const experiences = [
  {
    title: "Sanjuba High School",
    location: "Nagpur",
    grade: "90.40 %",
    icon: <FaSchool />,
    iconBg: "lightGreen",
    date: "2018",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  },
  {
    title: "Shri Shivaji Science College",
    location: "Nagpur",
    grade: "80.46 %",
    icon: <FaBuilding />,
    iconBg: "skyBlue",
    date: "2020",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   // icon: shopify,
  //   iconBg: "#b7e4c7",
  //   date: "Jan 2022 - Jan 2023",
  //   // points: [
  //   //   "Developing and maintaining web applications using React.js and other related technologies.",
  //   //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //   //   "Implementing responsive design and ensuring cross-browser compatibility.",
  //   //   "Participating in code reviews and providing constructive feedback to other developers.",
  //   // ],
  // },
  {
    title: "G H Raisoni College Of Engineering",
    location: "Nagpur",
    grade: "9.13 CGPA",
    icon: <FaGraduationCap />,
    iconBg: "lightPink",
    date: "Present",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  },
];

const About = () => {
  return (
    <div className="Education lg:pl-40 lg:pr-24 lg:h-screen min-h-full text-black px-4 lg:px-0 mt-5 lg:mt-0">
      <div className="my-10">
        <h1 className="text-3xl heading lg:text-5xl xl:text-6xl font-bold text-center lg:text-left">
          Education
        </h1>
        <div>
          <VerticalTimeline lineColor="gray">
            {experiences.map((experience) => {
              return (
                <VerticalTimelineElement
                  key={experience.location}
                  date={
                    <div className=" text-lg md:text-xl">
                      {experience.date}
                    </div>
                  }
                  grade={experience.grade}
                  icon={
                    <div className="flex justify-center items-center w-full h-full rounded-full bg-gray-100 border border-gray-300">
                      {/* <img
                        src={experience.icon}
                        alt={"NA"}
                        className="w-[60%] h-[60%] object-contain"
                      /> */}
                      <p className="w-[60%] h-[60%] object-contain">
                        {experience.icon}
                      </p>
                    </div>
                  }
                  // iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "5px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-2xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <div className="flex justify-between font-semibold">
                      <h3 className="text-black-500 " style={{ margin: 0 }}>
                        {experience.location}
                      </h3>
                      <h3 className="text-black-500 " style={{ margin: 0 }}>
                        {experience.grade}
                      </h3>
                    </div>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default About;
