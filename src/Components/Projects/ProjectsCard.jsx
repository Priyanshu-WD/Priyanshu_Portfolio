import { AltouraAllPages } from "./AltouraAllPages";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
export const ProjectCard = () => {
  return (
    <div className="md:mt-18.5  w-[90%] m-auto">
      {/* Cards_Part1 */}
      <div className="md:mb-6 gap-6 flex items-center justify-between md:justify-center lg:justify-between flex-wrap lg:flex-nowrap">
        {/* SunnySideCard */}
        <div>
          <motion.div
            whileHover="hovered"
            className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl relative overflow-hidden cursor-pointer"
          >
            <img
              className="mb-3 rounded-[5px]"
              src="/Priyanshu_Portfolio/images/SunnySide.png"
              alt="Sunnyside Thumbnail"
            />
          
            <div className="grid justify-end mb-3">
                  <span className="border border-green-500 rounded p-[var(--paddingStatus)]">
              <span className="text-green-500 ">Live</span>
            </span>
            </div>
            

            <p className="text-white mb-3 font-Manrope ">
              SunnySide Landing Page
            </p>
            <p className="text-white text-[10px]">
              Tech Stack: ReactJs || TailwindCSS || Responsive
            </p>
            <div></div>
            <motion.div
              variants={{
                hovered: { scaleY: 1 },
              }}
              initial={{ scaleY: 0 }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "bottom" }}
              className="bg-white opacity-45 flex items-center justify-center absolute inset-0 z-10 "
            >
              <a
                href="https://priyanshu-wd.github.io/Sunnyside-agency-landing-page/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-16"
                  src="/Priyanshu_Portfolio/images/redirect-icon.png"
                  alt="redirectIcon"
                />
              </a>
            </motion.div>
          </motion.div>
          <div></div>
        </div>

        {/* SunnySideCard_End */}

        {/* AltouraCard */}
        <div>
          <Link to="/project/AltouraAllPages">
            <motion.div
              whileHover="hovered"
              className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl relative overflow-hidden cursor-pointer"
            >
              <img
                className="mb-3 rounded-[5px]"
                src="/Priyanshu_Portfolio/images/Altoura.png"
                alt=""
              />
              <div className="grid justify-end mb-3">
                  <span className="border border-green-500 rounded p-[var(--paddingStatus)]">
              <span className="text-green-500 ">Live</span>
            </span>
            </div>
              <p className="text-white mb-3">Altoura Freelancing Pages</p>
              <p className="text-white text-[10px]">
                Tech Stack: HTML5 || CSS || JavaScript || Responsive
              </p>
              <motion.div
                variants={{
                  hovered: { scaleY: 1 },
                }}
                initial={{ scaleY: 0 }}
                transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: "bottom" }}
                className="bg-white opacity-45 flex items-center justify-center absolute inset-0 z-10 "
              >
                <img
                  className="w-16"
                  src="/Priyanshu_Portfolio/images/share.svg"
                  alt="redirectIcon"
                />
              </motion.div>
              <div></div>
            </motion.div>
          </Link>
        </div>

        {/* AltouraCard_End */}

        {/* FittingCache */}
        <div>
          <motion.div
            whileHover="hovered"
            className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl relative overflow-hidden cursor-pointer"
          >
            <img
              className="mb-3 rounded-[5px]"
              src="/Priyanshu_Portfolio/images/Fitting Cache.png"
              alt="FittingThumbnail"
            />
            <div className="grid justify-end mb-3">
                  <span className="border border-green-500 rounded p-[var(--paddingStatus)]">
              <span className="text-green-500 ">Live</span>
            </span>
            </div>
            <p className="text-white mb-3">Fitting Cache Freelancing Project</p>
            <p className="text-white text-[10px]">
              Tech Stack: Shopify || HTML || CSS || JavaScript || Responsive
            </p>
            <motion.div
              variants={{
                hovered: { scaleY: 1 },
              }}
              initial={{ scaleY: 0 }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: "bottom" }}
              className="bg-white opacity-45 flex items-center justify-center absolute inset-0 z-10 "
            >
              <a
                href="https://fittingcache.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-16"
                  src="/Priyanshu_Portfolio/images/redirect-icon.png"
                  alt="redirectIcon"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* FittingCache_End */}
      </div>
      {/* Cards_Part!_End */}
      {/* Cards_Part2 */}
      {/* <div className="mt-6 gap-6 flex items-center justify-between md:justify-center lg:justify-between flex-wrap lg:flex-nowrap">
        <div className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl">
          <img
            className="mb-2 rounded-[5px]"
            src="/images/Altoura.png"
            alt=""
          />
          <p className="text-white mb-3">Blog Page</p>
          <p className="text-white text-[10px]">
            Tech Stack: ReactJs || TailwindCSS || API || Responsive
          </p>
          <div></div>
        </div>
        
        <div className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl">
          <img
            className="mb-2 rounded-[5px]"
            src="/images/Fitting Cache.png"
            alt=""
          />
          <p className="text-white mb-3">Chat App</p>
          <p className="text-white text-[10px]">
            Tech Stack: Shopify || HTML || CSS || JavaScript || Responsive
          </p>
          <div></div>
        </div>
      </div> */}
    </div>
  );
};
