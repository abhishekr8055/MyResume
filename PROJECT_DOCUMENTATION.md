# Abhishek R - Portfolio Website

## Project Overview
Professional portfolio website built with React showcasing skills, projects, and contact information.

## Tech Stack
- React 19.2.4
- React Router DOM 6.x
- CSS3 (Responsive Design)
- Testing Library

## Project Structure
```
src/
├── components/
│   ├── Navbar.js          # Navigation component with hamburger menu
│   └── Navbar.css         # Navbar styles
├── pages/
│   ├── Home.js            # Landing page with hero section
│   ├── Home.css           # Home page styles
│   ├── About.js           # About page with capabilities
│   ├── About.css          # About page styles
│   ├── Skills.js          # Skills showcase page
│   ├── Skills.css         # Skills page styles
│   ├── Contact.js         # Contact form with validation
│   └── Contact.css        # Contact page styles
├── App.js                 # Main app with routing
├── App.css                # Global styles
└── App.test.js            # Comprehensive test suite
```

## Features

### Navigation
- Fixed navbar with responsive hamburger menu
- Smooth routing between pages
- Mobile-friendly navigation

### Pages
1. **Home** - Hero section with social links (GitHub, LinkedIn, Resume)
2. **About** - Personal introduction and capabilities
3. **Skills** - Technologies using now and learning
4. **Contact** - Form with validation

### Responsive Design
- Desktop (>1024px): Full layout
- Tablet (768px-1024px): Adjusted spacing
- Mobile (<768px): Hamburger menu, stacked layout

## Installation

```bash
npm install
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner

### `npm run build`
Builds the app for production

## Routes
- `/` - Home page
- `/about_me` - About page
- `/skills` - Skills page
- `/contact_me` - Contact page

## Test Coverage
All test cases from requirements are implemented:
- Navigation tests (TC_NAV_001-003)
- Social media tests (TC_SOC_001-004)
- UI tests (TC_UI_001)
- Performance tests (TC_PERF_003)
- Negative tests (TC_NEG_001)

## Contact Information
- GitHub: https://github.com/abhishekr8055
- LinkedIn: https://www.linkedin.com/in/rock-abhishek-456424399
- Resume: Google Drive Link

## Author
Abhishek R - Full Stack Developer
