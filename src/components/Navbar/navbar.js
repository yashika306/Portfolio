import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LightMode, DarkMode } from '@mui/icons-material';
import { Bio } from "../../data/constant";
import { logClick } from "../../utils/analytics";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-20 w-full flex items-center justify-center bg-white/75 dark:bg-[#07070F]/75 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="flex justify-between items-center h-16 w-full max-w-[1200px] px-6">
        
        {/* Logo */}
        <LinkS to="about" spy={true} smooth={true} offset={-80} duration={500} className="flex items-center text-slate-900 dark:text-white cursor-pointer select-none">
          <DiCssdeck size="2.5rem" className="text-purple-600 dark:text-purple-400" />
          <span className="font-bold text-lg tracking-wide pl-1">Portfolio</span>
        </LinkS>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center text-slate-800 dark:text-slate-100 text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex items-center justify-center gap-6 list-none">
          {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
            <li key={item}>
              <LinkS
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium cursor-pointer transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/40 capitalize"
                activeClass="!text-purple-600 dark:!text-purple-400 bg-slate-100/80 dark:bg-slate-800/60"
              >
                {item}
              </LinkS>
            </li>
          ))}
        </ul>

        {/* Action Buttons Container */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light/Dark Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/40 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500/20 cursor-pointer transition-all duration-300 hover:shadow-accent-glow"
          >
            {darkMode ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
          </button>
          
          {/* Social Icons */}
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() => logClick("LinkedIn_Desktop", Bio.linkedin)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#854CE6] text-white hover:bg-white hover:text-[#854CE6] border border-transparent hover:border-[#854CE6] cursor-pointer transition-all duration-300 hover:shadow-accent-glow"
          >
            <FaLinkedin size={18} />
          </a>
          
          <a
            href={Bio.Leetcode}
            target="_blank"
            rel="noreferrer"
            onClick={() => logClick("Leetcode_Desktop", Bio.Leetcode)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#854CE6] text-white hover:bg-white hover:text-[#854CE6] border border-transparent hover:border-[#854CE6] cursor-pointer transition-all duration-300 hover:shadow-accent-glow"
          >
            <SiLeetcode size={18} />
          </a>
          
          <a
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => logClick("Github_Desktop", Bio.github)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#854CE6] text-white hover:bg-white hover:text-[#854CE6] border border-transparent hover:border-[#854CE6] cursor-pointer transition-all duration-300 hover:shadow-accent-glow"
          >
            <FaGithub size={18} />
          </a>
        </div>

        {/* Mobile menu modal */}
        {isOpen && (
          <div className="absolute top-20 right-0 left-0 w-full bg-white/95 dark:bg-[#0C0C1E]/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800/80 rounded-b-2xl py-6 px-10 flex flex-col items-center gap-5 transition-all duration-300 md:hidden z-40">
            {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
              <LinkS
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium cursor-pointer transition-colors duration-200 text-lg capitalize w-full text-center"
              >
                {item}
              </LinkS>
            ))}
            
            <div className="flex gap-4 items-center justify-center mt-2 w-full pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => { setDarkMode(!darkMode); setIsOpen(false); }}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/40 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-200"
              >
                {darkMode ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
              </button>
              
              <a
                href={Bio.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => logClick("Github_Mobile", Bio.github)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={Bio.Leetcode}
                target="_blank"
                rel="noreferrer"
                onClick={() => logClick("Leetcode_Mobile", Bio.Leetcode)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white"
              >
                <SiLeetcode size={18} />
              </a>

              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => logClick("LinkedIn_Mobile", Bio.linkedin)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
