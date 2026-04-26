const skills = [
  {
    name: "HTML", src: "/images/HTML5.svg"
  },
  {
    name: "CSS3", src: "/images/CSS3.svg"
  },
  {
    name: "TailwindCSS", src: "/images/Tailwind CSS.svg"
  },
  {
    name: "JS", src: "/images/JavaScript.svg"
  },
  {
    name: "ReactJS", src: "/images/React.svg"
  },
  {
    name: "Git", src: "/images/Git.svg"
  },
  {
    name: "GitHub", src: "/images/GitHub.svg"
  }
]

console.log(skills)


export const SkillSlider = () => {
  return (
    <div className="border-t border-b border-[#ffffff14] p-[1.4rem] overflow-hidden">
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