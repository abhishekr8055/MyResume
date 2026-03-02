import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">it's me</div>
        <div className="nav-links">
          <a href="https://github.com/abhishekr8055" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/rock-abhishek-456424399" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about_me">About</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="greeting">👋</div>
            <h1>Hello! <span className="highlight">I'm Abhishek R</span></h1>
            <p className="subtitle">Full Stack Developer ✦</p>
            
            <div className="taglines">
              <p className="tagline">💡 I build scalable web applications that solve real-world problems.</p>
              <p className="tagline">🚀 Turning ideas into powerful digital experiences.</p>
              <p className="tagline">⚡ Clean code. Smart logic. Modern design</p>
            </div>

            <div className="cta-buttons">
              <Link to="/contact_me" className="btn-primary">Let's Talk</Link>
              <a href="https://drive.google.com/file/d/1ZU2w6KDR8agTch8wrg7G0GuvHa33omBZ/view" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download CV ↓</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-image-container">
              <img src="/abhihomeimage.png" alt="Abhishek R" className="profile-image" />
              <div className="hello-badge">Hello!</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
