import React from "react";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constant";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <div id="experience" className="h-full">
      <div className="h-full bg-white/60 dark:bg-darkCard backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-accent-glow/20 hover:border-purple-500/30 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center md:text-left">Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 text-center md:text-left">
            My work experience as a software engineer and working with different companies and teams.
          </p>
          
          <div className="relative pl-6 md:pl-8 border-l border-purple-500/30 flex flex-col gap-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Pulsing Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-[3px] border-purple-600 dark:border-purple-400 bg-slate-50 dark:bg-darkBg shadow-accent-glow animate-pulse"></div>
                
                {/* Experience Card */}
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
