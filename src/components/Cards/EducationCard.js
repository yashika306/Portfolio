import React from 'react';

const EducationCard = ({ education }) => {
  return (
    <div className="w-full bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-xl hover:border-purple-500/30 hover:shadow-accent-glow/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3">
      {/* Top Header Section */}
      <div className="flex gap-3 items-start">
        <img 
          src={education.image} 
          alt={education.school} 
          className="h-12 w-12 rounded-lg bg-black object-contain p-1 border border-slate-200/20 dark:border-slate-800" 
        />
        <div className="flex flex-col">
          <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">
            {education.school}
          </h3>
          <span className="text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400">
            {education.degree}
          </span>
          <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {education.date}
          </span>
        </div>
      </div>

      {/* Grade and details */}
      <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
        <span className="font-semibold">Grade: </span>
        <span className="text-purple-600 dark:text-purple-400 font-bold">{education.grade}</span>
      </div>
    </div>
  );
};

export default EducationCard;