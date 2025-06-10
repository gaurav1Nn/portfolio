import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Animate header on load
    gsap.fromTo('.header', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3, ease: 'power2.out' }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    gsap.to('.mobile-menu', {
      x: '100%',
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <>
      <header className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-medium">
            <span className="text-gray-500">Full-Stack Developer & CS Student</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-0 right-0 w-full h-screen bg-black text-white z-40 transform translate-x-full">
        <div className="flex flex-col justify-center items-center h-full space-y-8 text-2xl">
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;