export const Contact = () => {
  return (
    <section className="mt-10 md:mt-25"  id="contact">
      <div>
        <div>
          <div className="mb-5 md:mb-[57.6px] ">
            <span className="font-Manrope font-light text-[16.92px] text-[#ffffff35] tracking-[4.48px]">
              05-CONTACT
            </span>
          </div>
          <div className="md:flex">
            <div className="mb-5 md:mb-17.5 md:w-[50%]">
              <h1 className="font-Instrument text-[40px] leading-12.5 md:text-[60.8px] md:leading-[70.8px] text-white  md:w-88.75">
                Let's build <span className="opacity-35 italic">intent.</span>{" "}
                together.
              </h1>
            </div>

            <div className=" w-full md:w-[50%] flex flex-col justify-between">
              <div className="flex flex-col mb-2.5">
                <span className="uppercase text-[#ffffff35] font-Manrope text-[16px] tracking-[2.11px] font-light">
                  Email
                </span>
                <span className="text-white font-Instrument italic  text-[20px] md:text-[25px] mt-2.5">
                  priyanshu1998@aol.com
                </span>
              </div>
              <div className="flex flex-col mb-2.5">
                <span className="uppercase text-[#ffffff35] font-Manrope text-[16px] tracking-[2.11px] font-light">
                  phone
                </span>
                <span className="text-white font-Instrument italic text-[20px]  md:text-[25px] mt-2.5">
                  +917992394857
                </span>
              </div>
              <div className="text-end  w-full">
                <span className="uppercase text-[#ffffff35] font-Manrope font-light text-[16px] mb-[9.6px]">online</span>
                <div className="flex gap-6 justify-end mt-[9.6px] text-right">
                  <a target="blank" rel="noopener noreferrer" className="uppercase text-[#ffffff35] font-Manrope font-light text-[14px] md:text-[18px]" href="https://www.linkedin.com/in/priyanshu-pramanik-28a34a226">LinkedIn ↗</a>
                  <a target="blank" rel="noopener noreferrer" className="uppercase text-[#ffffff35] font-Manrope font-light text-[14px] md:text-[18px]" href="https://github.com/Priyanshu-WD">GitHub ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 md:pb-25"></div>
    </section>
  );
};
