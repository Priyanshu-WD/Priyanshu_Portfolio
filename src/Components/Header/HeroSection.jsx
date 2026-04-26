import { motion } from "motion/react";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="mt-10 md:mt-25">
      <h1 className="text-white font-Instrument text-[80px] leading-20.5 md:text-[152px] w-[90%] md:w-full lg:w-[50%] md:leading-35.5">
        Crafting <span className="opacity-35 italic ">interfaces</span> people
        feel
      </h1>
      <div className="flex flex-col md:flex-row  md:items-center gap-10 justify-between mt-10 md:mt-15">
        <div>
            <p className="font-Manrope font-light text-white opacity-35 w-full  md:w-89.25">
          Frontend developer with a focus on clean design, responsive builds,
          and user-centric digital experiences that work flawlessly across every
          device.
        </p>
        </div>
        
        <div className="flex gap-9">
          <motion.button
            whileHover={{
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="border border-[rgb(255 255 255 / 20%)] bg-transparent text-[white] font-Manrope  p-(--customPadding) cursor-pointer"
          >
            <a
              href="/Resume/Priyanshu Pramanik.pdf"
              className="inline-flex gap-4 items-center text-[11.9px] md:text-[12.9px] transition"
              download={"Priyanshu Pramanik.pdf"}
            >
              RESUME <span className="text-[13.6px] rotate-134">↗</span>
            </a>
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            whileHover={{
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="border border-[rgb(255 255 255 / 20%)] bg-transparent text-[white] font-Manrope  p-(--customPadding) cursor-pointer"
          >
            <a
              href="#"
              className="inline-flex gap-4 items-center text-[11.9px] md:text-[12.9px] transition"
            >
              GET IN TOUCH <span className="text-[13.6px]">↗</span>
            </a>
          </motion.button>
        </div>
      </div>
      <div className="mb-10 md:pb-25"></div>
    </section>
  );
};
