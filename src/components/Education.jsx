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
    <div className="Education lg:min-h-full min-h-full lg:mb-24">
      <div className="my-10">
        <h1 className="heading text-3xl lg:text-5xl xl:text-6xl font-bold my-4 md:my-0 text-center lg:text-left xl:pl-44 lg:pl-10 mb">
          Education
        </h1>
        <div className=" lg:pr-10 lg:pl-8 xl:px-0 md:mt-10">
          <VerticalTimeline lineColor="gray">
            {experiences.map((experience) => {
              return (
                <VerticalTimelineElement
                  key={experience.title}
                  date={
                    <div className=" text-lg md:text-xl">{experience.date}</div>
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
