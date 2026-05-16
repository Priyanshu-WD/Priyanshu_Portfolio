import { ProjectCard } from "./ProjectsCard";
export const Projects = () => {
  return (
    <section className="pt-10 md:pt-25" id="Works">
      <div className="mb-5 md:mb-[57.6px] ">
        <span className="font-Manrope font-light text-[16.92px] text-[#ffffff61] tracking-[4.48px]">
          04 — Work
        </span>
      </div>
      <div className="mb-5 md:mb-17.5">
        <h1 className=" font-Instrument text-[40px] leading:12.5 md:text-[60.8px] md:leading-[70.8px] text-white md:w-88.75">
          Selected <span className="text-sky-500 italic">projects.</span>
        </h1>
      </div>
      <ProjectCard />
      <div className="pb-10 md:pb-25"></div>
    </section>
  );
};
