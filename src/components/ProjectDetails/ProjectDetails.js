import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import { logClick } from "../../utils/analytics";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div className="fixed inset-0 z-[100] w-full h-full bg-[#030306]/70 backdrop-blur-md flex items-start justify-center overflow-y-auto transition-all duration-300 p-4 pt-12">
        <div className="relative max-w-[800px] w-full bg-slate-50 dark:bg-[#0C0C1E] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
          
          <button 
            onClick={() => setOpenModal({ state: false, project: null })} 
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white cursor-pointer select-none"
          >
            <CloseRounded />
          </button>

          {project?.image && (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full max-h-[350px] object-cover rounded-xl shadow-md border border-slate-200/20 dark:border-slate-800/20" 
            />
          )}

          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mt-2 leading-snug">
            {project?.title}
          </h2>
          
          <span className="text-xs md:text-sm text-slate-400 dark:text-slate-500 font-medium">
            {project?.date}
          </span>
          
          <div className="flex flex-wrap gap-1.5 items-center my-2">
            {project?.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 text-purple-600 dark:text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {project?.description}
          </p>

          <div className="flex justify-end gap-3 mt-6 border-t border-slate-200/40 dark:border-slate-800/40 pt-4">
            <a 
              href={project?.github} 
              target="_blank" 
              rel="noreferrer"
              onClick={() => logClick(`ProjectCode_${project?.title}`, project?.github)}
              className="w-full sm:w-auto text-center text-slate-700 dark:text-slate-200 font-semibold px-6 py-2.5 rounded-xl bg-slate-200/40 dark:bg-white/5 border border-slate-300/40 dark:border-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 cursor-pointer transition-all duration-200"
            >
              View Code
            </a>

            {project?.webapp && (
              <a 
                href={project.webapp} 
                target="_blank" 
                rel="noreferrer"
                onClick={() => logClick(`ProjectLive_${project?.title}`, project?.webapp)}
                className="w-full sm:w-auto text-center text-white font-semibold px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-accent-glow hover:translate-y-[-1px] cursor-pointer transition-all duration-300"
              >
                View Live
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
