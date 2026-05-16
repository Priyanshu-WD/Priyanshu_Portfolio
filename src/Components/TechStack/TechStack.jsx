import { TechSkills } from "./TechSkills";
export const TechStack = () => {
  return (
    <section id="Skills">
      <div className="pt-10 md:pt-25 md:mb-[57.6px]">
        <span className="font-Manrope font-light text-[16.92px] text-[#ffffff61] tracking-[4.48px] uppercase">
          02-Skills
        </span>
      </div>
      <div className="mt-5 mb-5 md:mb-17.5">
        <h1 className="font-Instrument text-[40px] leading-12.5 md:text-[60.8px] md:leading-[70.8px] text-white md:w-88.75">
          The stack behind <span className="text-sky-500 italic">the craft.</span>
        </h1>
      </div>
      <TechSkills />
      <div className="pb-10 md:pb-25"></div>
    </section>
  );
};
