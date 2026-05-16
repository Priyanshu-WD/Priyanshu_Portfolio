import { motion } from "motion/react";

export const TechSkills = () => {
  return (
    <div className="w-full border border-[#ffffff39] grid grid-cols-2 md:grid-cols-3">
      <motion.div
        initial={{ color: "#ffffff" }}
        whileHover="hovered"
        className="border-r border-b border-[#ffffff39] p-8 relative overflow-hidden"
      >
        {/* fill layer */}
        <motion.span
          variants={{
            hovered: { scaleY: 1 },
          }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "bottom" }}
          className="absolute inset-0 bg-white z-0"
        />

        {/* content layer */}
        <motion.div
          variants={{
            hovered: { color: "#000000" },
          }}
          initial={{ color: "#ffffff" }}
          transition={{ duration: 0.15, delay: 0.1 }}
          className="relative z-10"
        >
          <span className="font-Instrument italic mb-8 text-[12px] leading-5.5 text-inherit">
            01
          </span>
          <p className="text-inherit mt-8 text-[20px] leading-7.5 font-Manrope font-normal tracking-[-0.168px]">
            HTML5
          </p>
          <p className="text-inherit font-light uppercase text-[12px] leading-6 tracking-[0.15em]">
            Markup
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ color: "#ffffff" }}
        whileHover="hovered"
        className="border-r border-b border-[#ffffff39] p-8 relative overflow-hidden"
      >
        {/* fill layer */}
        <motion.span
          variants={{
            hovered: { scaleY: 1 },
          }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "bottom" }}
          className="absolute inset-0 bg-white z-0"
        />

        {/* content layer */}
        <motion.div
          variants={{
            hovered: { color: "#000000" },
          }}
          initial={{ color: "#ffffff" }}
          transition={{ duration: 0.15, delay: 0.1 }}
          className="relative z-10"
        >
          <span className="font-Instrument italic mb-8 text-[12px] leading-5.5 text-inherit">
            02
          </span>
          <p className="text-inherit mt-8 text-[20px] leading-7.5 font-Manrope font-normal tracking-[-0.168px]">
            CSS3
          </p>
          <p className="text-inherit font-light uppercase text-[12px] leading-6 tracking-[0.15em]">
            Styling
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ color: "#ffffff" }}
        whileHover="hovered"
        className="border-r border-b border-[#ffffff39] p-8 relative overflow-hidden"
      >
        {/* fill layer */}
        <motion.span
          variants={{
            hovered: { scaleY: 1 },
          }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "bottom" }}
          className="absolute inset-0 bg-white z-0"
        />

        {/* content layer */}
        <motion.div
          variants={{
            hovered: { color: "#000000" },
          }}
          initial={{ color: "#ffffff" }}
          transition={{ duration: 0.15, delay: 0.1 }}
          className="relative z-10"
        >
          <span className="font-Instrument italic mb-8 text-[12px] leading-5.5 text-inherit">
            03
          </span>
          <p className="text-inherit mt-8 text-[20px] leading-7.5 font-Manrope font-normal tracking-[-0.168px]">
            JavaScript ES6
          </p>
          <p className="text-inherit font-light uppercase text-[12px] leading-6 tracking-[0.15em]">
            language
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ color: "#ffffff" }}
        whileHover="hovered"
        className="border-r border-b border-[#ffffff39] p-8 relative overflow-hidden"
      >
        {/* fill layer */}
        <motion.span
          variants={{
            hovered: { scaleY: 1 },
          }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "bottom" }}
          className="absolute inset-0 bg-white z-0"
        />

        {/* content layer */}
        <motion.div
          variants={{
            hovered: { color: "#000000" },
          }}
          initial={{ color: "#ffffff" }}
          transition={{ duration: 0.15, delay: 0.1 }}
          className="relative z-10"
        >
          <span className="font-Instrument italic mb-8 text-[12px] leading-5.5 text-inherit">
            04
          </span>
          <p className="text-inherit mt-8 text-[20px] leading-7.5 font-Manrope font-normal tracking-[-0.168px]">
            Reactjs 19
          </p>
          <p className="text-inherit font-light uppercase text-[12px] leading-6 tracking-[0.15em]">
            framework
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ color: "#ffffff" }}
        whileHover="hovered"
        className="border-r border-b border-[#ffffff39] p-8 relative overflow-hidden"
      >
        {/* fill layer */}
        <motion.span
          variants={{
            hovered: { scaleY: 1 },
          }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "bottom" }}
          className="absolute inset-0 bg-white z-0"
        />

        {/* content layer */}
        <motion.div
          variants={{
            hovered: { color: "#000000" },
          }}
          initial={{ color: "#ffffff" }}
          transition={{ duration: 0.15, delay: 0.1 }}
          className="relative z-10"
        >
          <span className="font-Instrument italic mb-8 text-[12px] leading-5.5 text-inherit">
            05
          </span>
          <p className="text-inherit mt-8 text-[20px] leading-7.5 font-Manrope font-normal tracking-[-0.168px]">
            TailwindCSS
          </p>
          <p className="text-inherit font-light uppercase text-[12px] leading-6 tracking-[0.15em]">
            utility css
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ color: "#ffffff" }}
        whileHover="hovered"
        className="border-r border-b border-[#ffffff39] p-8 relative overflow-hidden"
      >
        {/* fill layer */}
        <motion.span
          variants={{
            hovered: { scaleY: 1 },
          }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "bottom" }}
          className="absolute inset-0 bg-white z-0"
        />

        {/* content layer */}
        <motion.div
          variants={{
            hovered: { color: "#000000" },
          }}
          initial={{ color: "#ffffff" }}
          transition={{ duration: 0.15, delay: 0.1 }}
          className="relative z-10"
        >
          <span className="font-Instrument italic mb-8 text-[12px] leading-5.5 text-inherit">
            06
          </span>
          <p className="text-inherit mt-8 text-[20px] leading-7.5 font-Manrope font-normal tracking-[-0.168px]">
            Unbounce
          </p>
          <p className="text-inherit font-light uppercase text-[12px] leading-6 tracking-[0.15em]">
            landing pages
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
