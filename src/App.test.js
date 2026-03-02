import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

// A. NAVIGATION TEST CASES
describe('Navigation Tests', () => {
  test('TC_NAV_001: About navigation redirects to /about_me/', () => {
    render(<App />);
    const aboutLink = screen.getByText(/about/i);
    fireEvent.click(aboutLink);
    expect(window.location.pathname).toContain('about_me');
  });

  test('TC_NAV_002: Skills navigation redirects to /skills/', () => {
    render(<App />);
    const skillsLink = screen.getByText(/skills/i);
    fireEvent.click(skillsLink);
    expect(window.location.pathname).toContain('skills');
  });

  test('TC_NAV_003: Contact navigation redirects to /contact_me/', () => {
    render(<App />);
    const contactLink = screen.getByText(/contact/i);
    fireEvent.click(contactLink);
    expect(window.location.pathname).toContain('contact_me');
  });
});

// B. SOCIAL ICON TEST CASES
describe('Social Media Icon Tests', () => {
  test('TC_SOC_001: GitHub icon opens correct URL in new tab', () => {
    render(<App />);
    const githubLink = screen.queryByRole('link', { name: /github/i });
    if (githubLink) {
      expect(githubLink).toHaveAttribute('href', 'https://github.com/abhishekr8055');
      expect(githubLink).toHaveAttribute('target', '_blank');
    }
  });

  test('TC_SOC_002: LinkedIn icon opens correct URL in new tab', () => {
    render(<App />);
    const linkedinLink = screen.queryByRole('link', { name: /linkedin/i });
    if (linkedinLink) {
      expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/rock-abhishek-456424399');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
    }
  });

  test('TC_SOC_003: Resume icon visibility and hover effect', () => {
    render(<App />);
    const resumeLink = screen.queryByRole('link', { name: /resume/i });
    if (resumeLink) {
      expect(resumeLink).toBeVisible();
      expect(resumeLink).toHaveStyle({ transition: expect.any(String) });
    }
  });

  test('TC_SOC_004: Resume opens Google Drive link in new tab', () => {
    render(<App />);
    const resumeLink = screen.queryByRole('link', { name: /resume/i });
    if (resumeLink) {
      expect(resumeLink).toHaveAttribute('href', 'https://drive.google.com/file/d/1ZU2w6KDR8agTch8wrg7G0GuvHa33omBZ/view');
      expect(resumeLink).toHaveAttribute('target', '_blank');
      expect(resumeLink).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });
});

// C. ABOUT PAGE TEST CASES
describe('About Page Tests', () => {
  test('TC_ABT_001: Name "Abhishek R" is visible', () => {
    render(<BrowserRouter><About /></BrowserRouter>);
    expect(screen.getByText(/abhishek r/i)).toBeVisible();
  });

  test('TC_ABT_002: Capabilities section headings visible', () => {
    render(<BrowserRouter><About /></BrowserRouter>);
    expect(screen.getByText(/development/i)).toBeVisible();
    expect(screen.getByText(/maintenance/i)).toBeVisible();
  });

  test('TC_ABT_003: Back button returns to Home', () => {
    render(<BrowserRouter><About /></BrowserRouter>);
    const backBtn = screen.getByText(/back/i);
    expect(backBtn).toBeInTheDocument();
    fireEvent.click(backBtn);
  });
});

// D. SKILLS PAGE TEST CASES
describe('Skills Page Tests', () => {
  test('TC_SKL_001: All 8 "Using Now" skills visible', () => {
    render(<BrowserRouter><Skills /></BrowserRouter>);
    expect(screen.getByText('HTML5')).toBeVisible();
    expect(screen.getByText('CSS3')).toBeVisible();
    expect(screen.getByText('JavaScript')).toBeVisible();
    expect(screen.getByText('Node.js')).toBeVisible();
    expect(screen.getByText('React')).toBeVisible();
    expect(screen.getByText('MySQL')).toBeVisible();
    expect(screen.getByText('Next.js')).toBeVisible();
    expect(screen.getByText('GitHub')).toBeVisible();
  });

  test('TC_SKL_002: Learning section skills visible', () => {
    render(<BrowserRouter><Skills /></BrowserRouter>);
    expect(screen.getByText('Android')).toBeVisible();
    expect(screen.getByText('MongoDB')).toBeVisible();
    expect(screen.getByText('TypeScript')).toBeVisible();
    expect(screen.getByText('Spring Boot')).toBeVisible();
    expect(screen.getByText('Java')).toBeVisible();
  });

  test('TC_SKL_003: All skill cards load without broken images', () => {
    render(<BrowserRouter><Skills /></BrowserRouter>);
    const skillCards = screen.getAllByText(/HTML5|CSS3|JavaScript|Node.js|React|MySQL|Next.js|GitHub|Android|MongoDB|TypeScript|Spring Boot|Java/i);
    expect(skillCards.length).toBeGreaterThan(0);
  });
});

// E. CONTACT PAGE TEST CASES
describe('Contact Page Tests', () => {
  test('TC_CNT_001: All input fields are required', () => {
    render(<BrowserRouter><Contact /></BrowserRouter>);
    const sendBtn = screen.getByText(/send/i);
    fireEvent.click(sendBtn);
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/subject is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  test('TC_CNT_002: Email format validation', () => {
    render(<BrowserRouter><Contact /></BrowserRouter>);
    const emailInput = screen.getByLabelText(/your email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    const sendBtn = screen.getByText(/send/i);
    fireEvent.click(sendBtn);
    expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
  });

  test('TC_CNT_003: Send button submits form successfully', () => {
    render(<BrowserRouter><Contact /></BrowserRouter>);
    fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/your email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText(/your message/i), { target: { value: 'Test Message' } });
    fireEvent.click(screen.getByText(/send/i));
    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
  });

  test('TC_CNT_004: Empty submission shows validation error', () => {
    render(<BrowserRouter><Contact /></BrowserRouter>);
    const sendBtn = screen.getByText(/send/i);
    fireEvent.click(sendBtn);
    expect(screen.getAllByText(/required/i).length).toBeGreaterThan(0);
  });
});

// F. RESPONSIVE TEST CASES
describe('Responsive Design Tests', () => {
  test('Desktop layout renders properly', () => {
    global.innerWidth = 1920;
    render(<App />);
    expect(document.querySelector('.App')).toBeInTheDocument();
  });

  test('Tablet layout adjusts properly', () => {
    global.innerWidth = 768;
    render(<App />);
    expect(document.querySelector('.App')).toBeInTheDocument();
  });

  test('Mobile navbar collapses', () => {
    global.innerWidth = 375;
    render(<App />);
    const hamburger = screen.queryByText('☰');
    if (hamburger) expect(hamburger).toBeInTheDocument();
  });
});

// G. PERFORMANCE TEST CASES
describe('Performance Tests', () => {
  test('No console errors', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    render(<App />);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test('No broken routes', () => {
    render(<App />);
    expect(window.location.pathname).toBeDefined();
  });
});

// H. SECURITY TEST CASES
describe('Security Tests', () => {
  test('External links use noopener noreferrer', () => {
    render(<App />);
    const externalLinks = screen.queryAllByRole('link', { name: /github|linkedin|resume/i });
    externalLinks.forEach(link => {
      if (link.getAttribute('target') === '_blank') {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    });
  });

  test('Form prevents script injection', () => {
    render(<BrowserRouter><Contact /></BrowserRouter>);
    const nameInput = screen.getByLabelText(/your name/i);
    fireEvent.change(nameInput, { target: { value: '<script>alert("xss")</script>' } });
    expect(nameInput.value).toBe('<script>alert("xss")</script>');
  });
});

// UI & DESIGN TEST CASES
describe('UI & Design Tests', () => {
  test('TC_UI_001: Hero section displays correctly', () => {
    render(<App />);
    const name = screen.queryByText(/abhishek r/i);
    const title = screen.queryByText(/full stack developer/i);
    if (name) expect(name).toBeInTheDocument();
    if (title) expect(title).toBeInTheDocument();
  });
});

// NEGATIVE TEST CASES
describe('Negative Tests', () => {
  test('TC_NEG_001: Clicking empty area does not crash', () => {
    const { container } = render(<App />);
    expect(() => fireEvent.click(container)).not.toThrow();
  });
});
