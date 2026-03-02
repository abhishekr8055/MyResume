import { useNavigate, Link } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <nav className="navbar">
        <Link to="/contact_me" className="contact-link">Let's Talk</Link>
      </nav>
      
      <section className="about-content">
        <div className="about-header">
          <h1>About Me</h1>
        </div>

        <div className="about-intro">
          <p className="intro-text">
            I am a 2nd-year Computer Science Engineering student at Vidyavardhaka College of Engineering with a strong interest in Full Stack Development.
          </p>
          <p>
            I build real-world web applications that solve practical problems for farmers and students.
          </p>
          <p>
            I am skilled in React.js, Node.js, Express, and MySQL.
          </p>
          <p>
            I enjoy turning ideas into functional and user-friendly digital solutions.
          </p>
          <p>
            My goal is to use technology to create impactful and meaningful projects for society.
          </p>
        </div>

        <div className="capabilities-section">
          <h2>Capabilities</h2>
          
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">💻</div>
              <h3>DEVELOPMENT</h3>
              <p>I can build web applications from scratch and also develop based on client requirements using modern technologies.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">🔧</div>
              <h3>MAINTENANCE</h3>
              <p>I ensure smooth system performance through monitoring, debugging, optimization, and regular updates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
