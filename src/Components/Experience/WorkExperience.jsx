import { Experience } from "./Experience";

export const WorkExperience = () => {
  return (
    <section className="mt-10 md:mt-25" id="Experience">
      <div className="mb-5 md:mb-[57.6px] ">
        <span className="font-Manrope font-light text-[16.92px] text-[#ffffff61] tracking-[4.48px]">
          03 — Experience
        </span>
      </div>
      <div className="mb-5 md:mb-17.5">
        <h1 className="font-Instrument text-[40px] leading-12.5 md:text-[60.8px] md:leading-[70.8px] text-white md:w-88.75">
          Where I've <span className="text-sky-500 italic">made my mark.</span>
        </h1>
      </div>
      <Experience />
      <div className="mb-10 md:mb-25"></div>
    </section>
  );
};
