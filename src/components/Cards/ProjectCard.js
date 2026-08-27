import React from "react";

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div 
      onClick={() => setOpenModal({ state: true, project: project })}
      className="w-full h-[460px] bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-xl flex flex-col gap-3.5 cursor-pointer hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-accent-glow/15 transition-all duration-300 overflow-hidden"
    >
      {/* Zoomable Image frame */}
      <div className="w-full h-[180px] rounded-lg overflow-hidden shadow-sm relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full bg-slate-200/30 dark:bg-slate-800/30 flex items-center justify-center text-xs text-slate-400 dark:text-slate-550">
            No Preview Available
          </div>
        )}
      </div>

      {/* Tags list */}
      <div className="flex flex-wrap gap-1.5 items-center">
        {project.tags?.map((tag, index) => (
          <span 
            key={index} 
            className="text-[10px] font-medium px-2 py-0.5 rounded bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 text-purple-650 dark:text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description details */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-105 line-clamp-2 leading-tight">
          {project.title}
        </h3>
        <span className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500">
          {project.date}
        </span>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed mt-1">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
