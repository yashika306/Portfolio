import React from "react";
import { motion } from "framer-motion";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HighlightedName,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyledComponent";
import HeroBgAnimation from '../HeroBgAnimation';
import HeroImg from "../../images/Snap_pic.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constant";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> 
              <HighlightedName>{Bio.name}</HighlightedName>
            </Title>

            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>{Bio.description}</SubTitle>

            <ResumeButton
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              aria-label="View Resume"
            >
            Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroBg>
            <HeroBgAnimation/>
          </HeroBg>
          <HeroRightContainer id="Right">
            <div className="image-wrapper">
              <Img src={HeroImg} alt="Yashika Duthuluru - Profile Image" />
            </div>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
