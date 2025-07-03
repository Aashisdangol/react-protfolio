import '../styles/Skills.css';


const Skills = () => {
  return (
    <section id="skills">
      <center><h2>Skills</h2></center>
      <div className="skills-pop-container">
        <div className="skill" style={{ '--i': 1 }}><i className="fa-brands fa-html5"></i><p>HTML</p></div>
        <div className="skill" style={{ '--i': 2 }}><i className="fa-brands fa-css3-alt"></i><p>CSS</p></div>
        <div className="skill" style={{ '--i': 3 }}><i className="fa-brands fa-js"></i><p>JS</p></div>
        <div className="skill" style={{ '--i': 4 }}><i className="fa-brands fa-square-github"></i><p>Github</p></div>
        <div className="skill" style={{ '--i': 5 }}><i className="fa-brands fa-figma"></i><p>Figma</p></div>
      </div>
    </section>




  );
};

export default Skills;
