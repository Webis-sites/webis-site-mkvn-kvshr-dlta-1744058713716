'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

interface NavItem {
  id: string;
  label: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'services', label: t('services') },
    { id: 'gallery', label: t('gallery') },
    { id: 'booking', label: t('booking') },
    { id: 'faq', label: t('faq') },
    { id: 'contact', label: t('contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find active section
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary">
            <span className="text-secondary">מכון כושר</span> דלתא
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer text-lg font-medium hover:text-secondary transition-colors duration-300 ${
                    activeSection === item.id ? 'text-secondary' : 'text-gray-800'
                  }`}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        dir="rtl"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className={`block py-2 text-xl font-medium hover:text-secondary transition-colors duration-300 ${
                    activeSection === item.id ? 'text-secondary' : 'text-gray-800'
                  }`}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;