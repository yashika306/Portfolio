import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constant';

function Footer() {
  return (
    <footer className="w-full py-8 flex justify-center bg-slate-100/50 dark:bg-[#0C0C1E]/20 border-t border-slate-200/50 dark:border-slate-800/50 mt-12 transition-colors duration-300">
      <div className="w-full max-w-[1200px] flex flex-col gap-4 items-center px-4 text-slate-800 dark:text-slate-200">
        
        <h1 className="font-semibold text-lg text-purple-600 dark:text-purple-400">
          Yashika Duthuluru
        </h1>

        <nav className="w-full max-w-[800px] mt-2 flex flex-row gap-8 justify-center flex-wrap text-sm md:text-base">
          <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium">About</a>
          <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium">Skills</a>
          <a href="#experience" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium">Experience</a>
          <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium">Projects</a>
          <a href="#education" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium">Education</a>
        </nav>

        <div className="flex mt-4 gap-4">
          <a href={Bio.facebook} target="display" className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-all duration-200 hover:scale-110">
            <FacebookIcon fontSize="medium" />
          </a>
          <a href={Bio.linkedin} target="display" className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-all duration-200 hover:scale-110">
            <LinkedInIcon fontSize="medium" />
          </a>
          <a href={Bio.insta} target="display" className="text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-all duration-200 hover:scale-110">
            <InstagramIcon fontSize="medium" />
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500 dark:text-slate-500 text-center">
          &copy; 2026 Yashika Duthuluru. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;