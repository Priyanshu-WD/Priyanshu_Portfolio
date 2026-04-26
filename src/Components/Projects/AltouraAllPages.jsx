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
              <section className="w-[90%] md:max-w-360 mx-auto md:py-12 mt-10 md:mt-25">
                <div className="pb-25">
                  <motion.div
                    initial={{ color: "#ffffff" }}
                    whileHover="hovered"
                  ></motion.div>
                  <motion.span
                    variants={{
                      hovered: { scaleY: 1 },
                    }}
                    initial={{ scaleY: 0 }}
                    transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
                    style={{ transformOrigin: "bottom" }}
                    className="absolute inset-0 bg-white z-0"
                  />
                  <motion.div
                    variants={{
                      hovered: { color: "#000000" },
                    }}
                    initial={{ color: "#ffffff" }}
                    transition={{ duration: 0.15, delay: 0.1 }}
                    className="relative z-10"
                    className="border border-[#ffffff14] w-full md:w-90.5 p-4 rounded-2xl"
                  >
                    <img
                      className="mb-2 rounded-[5px]"
                      src="/images/Altoura.png"
                      alt=""
                    />
                    <p className="text-white mb-3">Altoura Freelancing Pages</p>
                    <p className="text-white text-[10px]">
                      Tech Stack: HTML5 || CSS || JavaScript || Responsive
                    </p>
                    <div></div>
                  </motion.div>
                </div>
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
