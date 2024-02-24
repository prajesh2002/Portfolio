import { useState } from "react";
import contactImg from "../assets/contact-img.svg";
import TrackVisibility from "react-on-screen";
import img from "../assets/contact.jpg";
import "animate.css/animate.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="Contact">
        {/* <h2 className="heading text-3xl lg:text-5xl xl:text-6xl font-bold mt-4 text-center lg:text-left md:text-3xl lg:pl-44">
          Let's Connect
        </h2>{" "} */}
        <div className="flex flex-col md:flex-row items-center md:space-y-0 md:gap-x-20  min-h-screen justify-evenly mx-auto">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 lg:pl-2 px-4 pt-5 md:px-0 md:pt-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 lg:pr-8 px-4">
            <h2 className="heading text-3xl lg:text-5xl xl:text-6xl font-bold mt-4 text-center lg:text-left md:text-3xl mb-5 lg:mb-10">
              Let's Connect
            </h2>{" "}
            <div>
              <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="user_name"
                    value={formDetails.firstName}
                    placeholder="Enter Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    className="w-full px-3 py-2 border-2 rounded-md focus:outline-none border-t-0 border-r-0 border-l-0 bg-gray-50 focus:border-blue-300 border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="user_email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    className="w-full px-3 py-2 border-2 rounded-md focus:outline-none border-t-0 border-r-0 border-l-0 bg-gray-50 focus:border-blue-300 border-blue-300"
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    rows="6"
                    name="message"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className="w-full px-3 py-2 border-2 rounded-md focus:outline-none border-t-0 border-r-0 border-l-0 bg-gray-50 focus:border-blue-300 border-b-blue-300"
                  ></textarea>
                </div>
                <div className="mb-4 text-center">
                  <button className="btn mb-6 lg:mb-0">Send Message</button>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//
// import { useState } from "react";
// import contactImg from "../assets/contact-img.svg";
// import TrackVisibility from "react-on-screen";
// import img from "../assets/contact.jpg";
// import "animate.css/animate.min.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contact() {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         form.current,
//         {
//           publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
//         }
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//           toast.success("Message sent successfully!");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div
//       className="Contact bg-cover bg-center bg-no-repeat min-h-screen flex items-center p-5 lg:p-0 mx-auto justify-center opacity-90 py-10"
//       style={{
//         backgroundImage: `url(${img})`,
//       }}
//     >
//       <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
//         <div className="flex flex-col md:flex-row items-center mx-auto space-y-4 md:space-y-0 md:space-x-4 justify-center">
//           {/* Form Column */}
//           <div className="w-full md:w-1/2">
//             <div>
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
//                 Let's Connect
//               </h2>
//               <form className="space-y-4" ref={form} onSubmit={sendEmail}>
//                 {/* Form Inputs */}
//                 <div className="mb-4">
//                   <input
//                     type="text"
//                     name="user_name"
//                     value={formDetails.firstName}
//                     placeholder="Enter Name"
//                     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <input
//                     type="email"
//                     name="user_email"
//                     value={formDetails.email}
//                     placeholder="Email Address"
//                     onChange={(e) => onFormUpdate("email", e.target.value)}
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <textarea
//                     rows="6"
//                     name="message"
//                     value={formDetails.message}
//                     placeholder="Message"
//                     onChange={(e) => onFormUpdate("message", e.target.value)}
//                     className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                   ></textarea>
//                 </div>
//                 <div className="mb-4 text-center">
//                   <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//                     Send Message
//                   </button>
//                   <ToastContainer
//                     position="top-right"
//                     autoClose={5000}
//                     hideProgressBar={false}
//                     newestOnTop
//                     closeOnClick
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// //
