import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="w-full bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-xl hover:border-purple-500/30 hover:shadow-accent-glow/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3">
      {/* Top Header Section */}
      <div className="flex gap-3 items-start">
        <img 
          src={experience.img} 
          alt={experience.company} 
          className="h-12 w-12 rounded-lg bg-black object-contain p-1 border border-slate-200/20 dark:border-slate-800" 
        />
        <div className="flex flex-col">
          <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">
            {experience.role}
          </h3>
          <span className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400">
            {experience.company}
          </span>
          <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {experience.date}
          </span>
        </div>
      </div>

      {/* Description lines */}
      <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
        {experience?.desc && (
          <div className="flex flex-col gap-1.5">
            {experience.desc.split("\n").map((line, index) => (
              <p key={index} className="flex items-start gap-1">
                <span className="text-purple-500 dark:text-purple-400 font-bold select-none">•</span>
                <span>{line.trim()}</span>
              </p>
            ))}
          </div>
        )}
        
        {/* Skills Tags list */}
        {experience?.skills && (
          <div className="flex flex-wrap gap-1.5 items-center mt-3 pt-3 border-t border-slate-200/40 dark:border-slate-800/40">
            <span className="font-bold text-xs text-slate-700 dark:text-slate-300">Skills:</span>
            {experience.skills.map((skill, index) => (
              <span key={index} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 text-purple-600 dark:text-purple-300">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Document attachment if available */}
      {experience.doc && (
        <a 
          href={experience.doc} 
          target="_blank" 
          rel="noreferrer" 
          className="mt-2 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
        >
          View Attachment
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
