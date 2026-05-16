const skills = [
  {
    name: "HTML", src: "/Priyanshu_Portfolio/images/HTML5.svg"
  },
  {
    name: "CSS3", src: "/Priyanshu_Portfolio/images/CSS3.svg"
  },
  {
    name: "TailwindCSS", src: "/Priyanshu_Portfolio/images/Tailwind CSS.svg"
  },
  {
    name: "JS", src: "/Priyanshu_Portfolio/images/JavaScript.svg"
  },
  {
    name: "ReactJS", src: "/Priyanshu_Portfolio/images/React.svg"
  },
  {
    name: "Git", src: "/Priyanshu_Portfolio/images/Git.svg"
  },
  {
    name: "GitHub", src: "/Priyanshu_Portfolio/images/GitHub.svg"
  }
]

console.log(skills)


export const SkillSlider = () => {
  return (
    <div className="border-t border-b border-[#ffffff2d] p-[1.4rem] overflow-hidden">
      <div
        className="flex items-center animate-scroll"
        style={{ width: "max-content", gap: "5rem" }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="" aria-hidden={index >= skills.length}>
            <img className="h-12" src={skill.src} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};