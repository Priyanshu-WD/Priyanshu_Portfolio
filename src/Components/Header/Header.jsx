import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { PreLoader } from "../Preloader/Pre-loader";

export const Header = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    <PreLoader />;
  };

  const scrollToAbout = () => {
    document.getElementById("About").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrolltoSkill = () => {
    document.getElementById("Skills").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrolltoExperience = () => {
    document.getElementById("Experience").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrolltoWorks = () => {
    document.getElementById("Works").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className="w-9/10  m-auto pt-4 ">
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-white text-[16.8px] font-Instrument">
          Priyanshu Pramanik
        </Link>

        <ul className="hidden text-right md:flex flex-col md:flex-row  text-black  md:items-center gap-[35.01px] md:text-[10.9px] font-Manrope opacity-65 md:text-white">
          <motion.li
            onClick={scrollToAbout}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#About">ABOUT</Link>
          </motion.li>

          <motion.li
            onClick={scrolltoSkill}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#Skills">SKILLS</Link>
          </motion.li>
          <motion.li
            onClick={scrolltoExperience}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#Experience">EXPERIENCE</Link>
          </motion.li>
          <motion.li
            onClick={scrolltoWorks}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#Works">WORK</Link>
          </motion.li>
          <motion.li
            onClick={scrollToContact}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#contact">CONTACT</Link>
          </motion.li>
        </ul>
        <div>
          <div className="text-green-500 text-[12.9px] tracking-wider ">
            &middot; Available
          </div>
        </div>
      </nav>
    </header>
  );
};
