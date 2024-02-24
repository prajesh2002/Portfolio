import { Link } from "react-scroll";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-500 text-white p-6 px-0 md:px-20 transition-all duration-500 ease-in-out">
      <div className="flex flex-col md:flex-row items-center justify-around font-semibold">
        <p className="text-lg ">
          {" "}
          <span>{"  "}</span>Made by Prajesh
        </p>
        <div className="md:ml-auto flex gap-4">
          <a
            href="https://www.linkedin.com/in/prajesh-dhande-29368b24b"
            className="text-white hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://www.github.com/prajesh2005"
            className="text-white hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/prajesh_2005?igsh=d2JzdTNwYXlrMjlj "
            className="text-white hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
