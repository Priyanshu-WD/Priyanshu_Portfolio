
import { motion } from "motion/react";
import { PreLoader } from "./Components/Preloader/Pre-loader";
import { HeroSection } from "./Components/Header/HeroSection";
import { SkillSlider } from "./Components/SkillSlider/SkillSlider";
import { AboutMe } from "./Components/About/About";
import { TechStack } from "./Components/TechStack/TechStack";
import { WorkExperience } from "./Components/Experience/WorkExperience";
import { Projects } from "./Components/Projects/Projects";
import { AltouraAllPages } from "./Components/Projects/AltouraAllPages";
import { Contact } from "./Components/Contact/ContactDetails";
import { Footer } from "./Components/Footer/Footer";

const Container = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="w-9/10  max-w-360 m-auto"
  >
    {children}
  </motion.div>
);

const Container_1 = ({ children }) => (
  <div className="bg-[#080808]">
    <div className="w-9/10  max-w-360 m-auto">{children}</div>
  </div>
);

export const LayOut = () => {

  return (
    <>
      <PreLoader>
        <Container>
          <HeroSection />
        </Container>
        <SkillSlider />
        <Container>
          <AboutMe />
        </Container>
        <Container_1>
          <TechStack />
        </Container_1>
        <Container>
          <WorkExperience />
        </Container>
        <Container_1>
          <Projects />
        </Container_1>
        <Container>
          <Contact />
        </Container>
        <Footer />
      </PreLoader>
    </>
  );
};
