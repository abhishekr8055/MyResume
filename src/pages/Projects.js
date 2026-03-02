import { useNavigate, Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/')}>it's me</div>
        <Link to="/contact_me" className="contact-link">Let's Talk</Link>
      </nav>
      
      <section className="projects-content">
        <h1>My Projects</h1>
        
        <div className="projects-grid">
          <a 
            href="https://github.com/abhishekr8055/agrilinkAI.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src="/AgrilinkAI.png" alt="AgrilinkAI" className="project-image" />
            <div className="project-header">
              <h2>AgrilinkAI</h2>
              <span className="project-icon">🌾</span>
            </div>
            <p className="project-description">
              AI-powered agricultural solution connecting farmers with technology for better crop management and decision making.
            </p>
            <div className="project-tech">
              <span className="tech-tag">AI/ML</span>
              <span className="tech-tag">Agriculture</span>
              <span className="tech-tag">Full Stack</span>
            </div>
            <div className="project-link">
              View on GitHub →
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
