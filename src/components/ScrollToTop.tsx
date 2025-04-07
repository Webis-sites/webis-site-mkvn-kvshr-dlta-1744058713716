'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-8
        left-8
        z-50
        p-3
        rounded-full
        bg-primary
        text-white
        shadow-lg
        hover:bg-opacity-90
        focus:outline-none
        focus:ring-2
        focus:ring-primary
        focus:ring-opacity-50
        transition-all
        duration-300
        ease-in-out
        transform
        hover:scale-110
        rtl:left-8
        rtl:right-auto
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="חזרה לראש העמוד"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default ScrollToTop;