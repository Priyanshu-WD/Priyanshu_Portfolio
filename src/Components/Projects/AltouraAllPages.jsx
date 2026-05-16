import { motion } from "motion/react";
import { Header } from "../Header/Header";
import { Contact } from "../Contact/ContactDetails";
import { Footer } from "../Footer/Footer";

const Container = ({ children }) => (
  <div className="w-9/10  max-w-360 m-auto">{children}</div>
);
const ContainerWithBG = ({ children }) => (
  <div className="bg-[#080808]">
    <div className="w-9/10  max-w-360 m-auto">{children}</div>
  </div>
);

export const AltouraAllPages = () => {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Header />
      <main>
        {
          <>
            <ContainerWithBG>
              <section className="w-[90%] md:max-w-360 mx-auto  mt-10 md:mt-25">
                <div className="mb-5 md:mb-17.5">
                         <h1 className=" font-Instrument text-[40px] leading:12.5 md:text-[60.8px] md:leading-[70.8px] text-white md:w-88.75">
           <span className="text-sky-500 italic">Altoura</span> all pages.
        </h1>
                </div>
           
                 <div className="flex flex-wrap justify-between  m-auto">
          <motion.div
            whileHover="hovered"
            className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl relative overflow-hidden cursor-pointer"
          >
            <img
              className="mb-2 rounded-[5px]"
              src="/Priyanshu_Portfolio/images/Altoura Frontline.png"
              alt=""
            />
            <p className="text-white mb-3 font-Manrope ">
              Altoura Frontline
            </p>
            <p className="text-white text-[10px]">
              Tech Stack: HTML || CSS || JavaScript || Responsive
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
                href="https://www.altoura.com/migrate-dynamics-365-guides-hololens-altoura-frontline"
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
          <motion.div
            whileHover="hovered"
            className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl relative overflow-hidden cursor-pointer"
          >
            <img
              className="mb-2 rounded-[5px]"
              src="/Priyanshu_Portfolio/images/Altoura.png"
              alt=""
            />
            <p className="text-white mb-3 font-Manrope ">
              Aseptic VR Catalogue
            </p>
            <p className="text-white text-[10px]">
              Tech Stack: HTML || CSS || JavaScript || Responsive
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
                href="https://www.altoura.com/webinars/aseptic-vr-training-customization"
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
          <motion.div
            whileHover="hovered"
            className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl relative overflow-hidden cursor-pointer"
          >
            <img
              className="mb-2 rounded-[5px]"
              src="/Priyanshu_Portfolio/images/Surface.png"
              alt=""
            />
            <p className="text-white mb-3 font-Manrope ">
              Surface Cleaning
            </p>
            <p className="text-white text-[10px]">
              Tech Stack: HTML || CSS || JavaScript || Responsive
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
                href="https://www.altoura.com/aseptic-training/surface-cleaning-techniques"
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
          <div className="mt-10 flex  flex-wrap justify-between  m-auto">
          <motion.div
            whileHover="hovered"
            className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl relative overflow-hidden cursor-pointer"
          >
            <img
              className="mb-2 rounded-[5px]"
              src="/Priyanshu_Portfolio/images/Surface.png"
              alt=""
            />
            <p className="text-white mb-3 font-Manrope ">
              Surface Cleaning
            </p>
            <p className="text-white text-[10px]">
              Tech Stack: HTML || CSS || JavaScript || Responsive
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
                href="https://www.altoura.com/aseptic-training/surface-cleaning-techniques"
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
          <motion.div
            whileHover="hovered"
            className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl relative overflow-hidden cursor-pointer"
          >
            <img
              className="mb-2 rounded-[5px]"
              src="/Priyanshu_Portfolio/images/Hand Washing.png"
              alt=""
            />
            <p className="text-white mb-3 font-Manrope ">
              Hand Washing
            </p>
            <p className="text-white text-[10px]">
              Tech Stack: HTML || CSS || JavaScript || Responsive
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
                href="https://www.altoura.com/aseptic-training/hand-washing-techniques"
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
          <motion.div
            whileHover="hovered"
            className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl relative overflow-hidden cursor-pointer"
          >
            <img
              className="mb-2 rounded-[5px]"
              src="/Priyanshu_Portfolio/images/Gowning.png"
              alt=""
            />
            <p className="text-white mb-3 font-Manrope ">
              Gowning
            </p>
            <p className="text-white text-[10px]">
              Tech Stack: HTML || CSS || JavaScript || Responsive
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
                href="https://www.altoura.com/aseptic-training/gowning-procedures"
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
          <div></div>
       
              </section>
            </ContainerWithBG>
            <Container>
              <Contact />
            </Container>
          </>
        }
      </main>
      <Footer />
    </div>
  );
};
