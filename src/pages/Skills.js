import { useNavigate, Link } from 'react-router-dom';
import './Skills.css';

function Skills() {
  const navigate = useNavigate();

  const usingNow = [
    { name: 'HTML5', img: '/html5' },
    { name: 'CSS3', img: '/nextjs1.png' },
    { name: 'JavaScript', img: '/js' },
    { name: 'Node.js', img: '/nodejs' },
    { name: 'React', img: '/react' },
    { name: 'MySQL', img: '/mysql' },
    { name: 'Next.js', img: '/css3.png' },
    { name: 'GitHub', img: '/github' }
  ];

  const learning = [
    { name: 'Android', img: '/android.png' },
    { name: 'MongoDB', img: '/mongodb.png' },
    { name: 'TypeScript', img: '/ts.png' },
    { name: 'Spring Boot', img: '/spring.png' },
    { name: 'Java', img: '/javaaaa.png' }
  ];

  return (
    <div className="skills-page">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/')}>it's me</div>
        <Link to="/contact_me" className="contact-link">Let's Talk</Link>
      </nav>
      
      <section className="skills-content">
        <h1>Skills</h1>

        <div className="skills-section">
          <h2>Using Now</h2>
          <div className="skills-grid">
            {usingNow.map((skill, index) => (
              <div key={index} className="skill-card">
                {skill.img ? (
                  <img src={skill.img} alt={skill.name} className="skill-icon-img" />
                ) : (
                  <span className="skill-icon">{skill.icon}</span>
                )}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h2>Learning</h2>
          <div className="skills-grid">
            {learning.map((skill, index) => (
              <div key={index} className="skill-card learning">
                {skill.img ? (
                  <img src={skill.img} alt={skill.name} className="skill-icon-img" />
                ) : (
                  <span className="skill-icon">{skill.icon}</span>
                )}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
