import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import HeroSection from "./components/HeroSection/heroSection";
import Skills from "./components/Skills/tecTkills";
import ExperienceSection from "./components/Experience/experienceSection";
import ProjectSection from "./components/Project/projectSection";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Contact from "./components/Contact/contact";
import EducationSection from "./components/Education/education";
import Footer from "./components/Footer/Footer";
import { initGA, logPageView } from "./utils/analytics";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  // Initialize GA and track initial pageview
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  // Toggle 'dark' class on HTML document root for Tailwind dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-darkBg text-slate-800 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
        {/* Background Ambient Glow Elements */}
        <div className="absolute top-[8%] -left-[10%] w-[380px] h-[380px] md:w-[480px] md:h-[480px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8000ms]"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[420px] h-[420px] md:w-[550px] md:h-[550px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[10000ms]"></div>

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="max-w-[1200px] mx-auto px-4 py-8 md:py-16 relative z-10">
          {/* Main Page Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Hero Card: Spans 2 cols on desktop */}
            <div className="md:col-span-2">
              <HeroSection />
            </div>

            {/* Quick Contact Box: Spans 1 col */}
            <div className="md:col-span-1">
              <Contact />
            </div>

            {/* Skills grid: Spans 2 cols */}
            <div className="md:col-span-2">
              <Skills />
            </div>

            {/* Education timeline: Spans 1 col */}
            <div className="md:col-span-1">
              <EducationSection />
            </div>

            {/* Experience details: Full width */}
            <div className="md:col-span-3">
              <ExperienceSection />
            </div>

            {/* Projects gallery: Full width */}
            <div className="md:col-span-3">
              <ProjectSection openModal={openModal} setOpenModal={setOpenModal} />
            </div>

          </div>
        </main>

        <Footer />

        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </Router>
  );
}

export default App;
