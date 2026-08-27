import React from 'react'
import { skills } from '../../data/constant'
import { motion } from 'framer-motion'

const TechSkills = () => {
  return (
    <div id="skills" className="h-full">
      <div className="h-full bg-white/60 dark:bg-darkCard backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-accent-glow/20 hover:border-purple-500/30 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center md:text-left">Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 text-center md:text-left">
            Here are some of my core technical skills that I have developed over the past 2 years.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {skills.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className="bg-slate-50/50 dark:bg-slate-900/35 border border-slate-200/50 dark:border-slate-800/50 rounded-xl p-5 hover:border-purple-500/20 hover:shadow-accent-glow/10 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-200/60 dark:border-slate-800 pb-2">{skill.title}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skill.skills.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="flex items-center gap-2 px-3 py-2 border border-slate-200/40 dark:border-slate-800/40 bg-white/40 dark:bg-slate-900/40 rounded-lg hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-200 cursor-default"
                    >
                      <img src={item.image} alt={item.name} className="w-5 h-5 object-contain" />
                      <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TechSkills;