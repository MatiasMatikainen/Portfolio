export default function Osaaminen() {
  const skills = [
    { name: "HTML", icon: process.env.PUBLIC_URL + "/icons/html5.svg" },
    { name: "CSS", icon: process.env.PUBLIC_URL + "/icons/css3.svg" },
    { name: "JavaScript", icon: process.env.PUBLIC_URL + "/icons/javascript.svg" },
    { name: "React", icon: process.env.PUBLIC_URL + "/icons/react.svg" },
    { name: "GitHub", icon: process.env.PUBLIC_URL + "/icons/github.svg" },
    { name: "Git", icon: process.env.PUBLIC_URL + "/icons/git.svg" }
  ];

  return (
    <section id="osaaminen" className="osaaminen">
      <h2>Osaaminen</h2>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}