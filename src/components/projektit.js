import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Projektit() {
  const projects = [
  {
    title: "To-Do List",
    description:
      "JavaScriptillä toteutettu yksinkertainen To-Do List, jossa voi lisätä, muokata, poistaa ja merkitä tehtäviä tehdyiksi. Lisäksi jokainen tehtävä saa oman aikaleiman, kun se lisätään.",
    image: process.env.PUBLIC_URL + "/projects/To-do-list.png",
    github: "https://github.com/MatiasMatikainen/To-do-list",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Booklist App",
    description:
      "Simppeli kirjahallintasovellus, jossa voi lisätä, muokata, etsiä, järjestää ja poistaa kirjoja.",
    image: process.env.PUBLIC_URL + "/projects/Booklist.png",
    github: "https://github.com/MatiasMatikainen/book-app",
    tech: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Portfoliosivusto",
    description: "Reactilla toteutettu oma portfoliosivusto.",
    image: process.env.PUBLIC_URL + "/projects/portfolio.png",
    github: "https://github.com/MatiasMatikainen/Portfolio",
    tech: ["HTML", "CSS", "JavaScript", "React"]
  }
];


  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[current];

  return (
    <section id="projektit" className="projektit">
      <h2>Projektit</h2>
      <div className="projektikaruselli">
        <button className="nuoli" onClick={prevProject}>
          <ChevronLeft size={32} />
        </button>

        <div className="kortti">
          <img
            src={project.image}
            alt={project.title}
            className="projektikuva"
            onClick={() => setIsOpen(true)}
          />
          <h3>{project.title}</h3>

          {/* 🔹 teknologiat */}
          <div className="tech-list">
            {project.tech.map((t) => (
              <span key={t} className={`tech-tag ${t.replace(/\s+/g, "-").toLowerCase()}`}>
                {t}
              </span>
            ))}
          </div>

          <p>{project.description}</p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projektilinkki"
          >
            Katso GitHubissa
          </a>
        </div>

        <button className="nuoli" onClick={nextProject}>
          <ChevronRight size={32} />
        </button>
      </div>

      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      )}
    </section>
  );
}