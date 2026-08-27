import React from "react";
import HeroImg from "../../images/yash-Pic.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constant";
import { motion } from "framer-motion";
import { logClick } from "../../utils/analytics";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const HeroSection = () => {
  return (
    <div id="about" className="h-full">
      <div className="h-full bg-white/60 dark:bg-darkCard backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-accent-glow/20 hover:border-purple-500/30 transition-all duration-300 flex items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-8 w-full"
        >
          {/* Left Text Column */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Hi, I am <br />
                <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
                  {Bio.name}
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-2 text-xl md:text-2xl font-semibold flex gap-2 items-center text-slate-800 dark:text-slate-200">
              <span>I am a</span>
              <span className="text-purple-600 dark:text-purple-400 font-bold">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-4 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-[500px]">
              {Bio.description}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6">
              <a
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => logClick("Resume_Hero", Bio.resume)}
                className="inline-block text-center text-white font-semibold text-sm md:text-base px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#6366F1] hover:shadow-accent-glow hover:translate-y-[-2px] transition-all duration-300 cursor-pointer select-none"
              >
                Resume
              </a>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center items-center">
            <motion.div 
              variants={itemVariants}
              className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] p-1.5 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 shadow-md hover:shadow-accent-glow-strong/40 transition-all duration-500"
            >
              <img 
                src={HeroImg} 
                alt="Yashika Duthuluru" 
                className="w-full h-full object-cover rounded-full border-[3px] border-white dark:border-[#07070F]"
              />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
