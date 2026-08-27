import React, { useState } from 'react'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constant'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectSection = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'ml app', label: 'ML' },
    { value: 'ai app', label: 'AI' },
    { value: 'Full Stack', label: 'Full Stack' },
    { value: 'web app', label: 'WEB APP\'S' }
  ];

  return (
    <div id="projects" className="h-full">
      <div className="h-full bg-white/60 dark:bg-darkCard backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-accent-glow/20 hover:border-purple-500/30 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center md:text-left">Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 text-center md:text-left">
            I have worked on a wide range of projects. From ML models to backend APIs and AI agents. Here are some of my works.
          </p>

          {/* Toggle Categories list */}
          <div className="flex flex-wrap border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs md:text-sm rounded-xl font-medium my-6 select-none bg-white/30 dark:bg-slate-950/20 max-w-max mx-auto overflow-hidden">
            {categories.map((cat, idx) => (
              <button
                key={cat.value}
                onClick={() => setToggle(cat.value)}
                className={`px-4 py-2 cursor-pointer transition-all duration-200 outline-none border-r border-purple-500/30 last:border-0 ${
                  toggle === cat.value
                    ? 'bg-purple-600/10 text-purple-700 dark:text-purple-300 font-bold'
                    : 'hover:bg-purple-500/5 text-slate-600 dark:text-slate-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 flex-1">
            <AnimatePresence>
              {projects
                .filter((item) => toggle === 'all' || item.category === toggle)
                .map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} setOpenModal={setOpenModal} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectSection;