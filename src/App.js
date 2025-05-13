import React from "react";
import { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
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
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <ExperienceSection />
            <ProjectSection openModal={openModal} setOpenModal={setOpenModal} />
            <EducationSection />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
