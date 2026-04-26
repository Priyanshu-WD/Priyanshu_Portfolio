import { WorkDeatils } from "./WorkDeatils";
import { motion, AnimatePresence } from "motion/react";
export const AboutMe = () => {
  return (
    <motion.section
        
    className="mt-10 md:mt-25" id="About">
      <div className="mb-5 md:mb-[57.6px] ">
        <span className="font-Manrope font-light text-[16.92px] text-[#ffffff35] tracking-[4.48px]">
          01-ABOUT
        </span>
      </div>
      <div className="mb-5 md:mb-17.5">
        <h1 className="font-Instrument text-[40px] leading-12.5 md:text-[60.8px] md:leading-[70.8px] text-white md:w-88.75">
          Building the web with{" "}
          <span className="opacity-35 italic">intent.</span>
        </h1>
      </div>
      <div className="md:flex justify-between">
        <div className="md:w-[40%]">
          <p className="text-white opacity-35 mb-7.5  font-Manrope font-light">
            Frontend developer with expertise in{" "}
            <span className="font-bold">
              HTML5, CSS3, JavaScript (ES6), Tailwind CSS
            </span>{" "}
            and <span className="font-bold">ReactJS 19</span>. I build responsive,
            accessible, and high-performance web applications with a focus on
            clean design and cross-device compatibility.
          </p>
          <p className="text-white opacity-35 mb-7.5 font-Manrope font-light">
            Experienced in translating client ideas into seamless, user-centric
            digital products — from the first wireframe to the final deployed
            build. Every pixel placed with purpose.
          </p>
          <p className="text-white opacity-35  font-Manrope font-light">
            Based in Noida, India. Open to freelance projects and full-time
            roles.
          </p>
        </div>
      <WorkDeatils />
      </div>
      <div className="mb-10 md:mb-25"></div>
    </motion.section>
  );
};
