// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-4 right-4 transition-opacity duration-300 ease-in-out`}
    >
      <button
        className="bg-black text-white p-2 rounded-full focus:outline-none hover:scale-110"
        onClick={scrollToTop}
      >
        <HiArrowUp size={20} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
