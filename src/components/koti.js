export default function Koti() {
  return (
    <section id="koti" className="koti">
      <div className="koti-content">
        <div className="koti-text">
          <h1 className="typewriter">Matias Matikainen</h1>
          <p>
            Moi, Olen web-kehityksestä kiinnostunut tietojenkäsittelyn opiskelija, joka on motivoitunut kehittämään taitojaan ja oppimaan uusia teknologioita. Tälle sivustolle olen koonnut joitakin omia projektejani.
          </p>
        </div>
        <div className="koti-image">
          <div className="orbit-container">
            <img src="/profiili.jpg" alt="Profiilikuva" className="profile" />
            <img src="/icons/react.svg" alt="React" className="orbit-logo logo1" />
            <img src="/icons/git.svg" alt="JS" className="orbit-logo logo2" />
            <img src="/icons/css3.svg" alt="CSS" className="orbit-logo logo3" />
            <img src="/icons/html5.svg" alt="HTML" className="orbit-logo logo4" />
          </div>
        </div>
      </div>
    </section>
  );
}