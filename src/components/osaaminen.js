export default function Osaaminen() {
  const skills = [
    { name: "HTML", icon: "/icons/html5.svg" },
    { name: "CSS", icon: "/icons/css3.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "Git", icon: "/icons/git.svg" }
  ];

  return (
    <section id="osaaminen" className="osaaminen">
      <h2>Osaaminen</h2>
      <ul className="skill-list">
        {skills.map((s) => (
          <li key={s.name} className="skill-item">
            <img src={s.icon} alt={`${s.name} logo`} />
            <span>{s.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}