# Alejandra Rairan | Portfolio

Personal portfolio of Alejandra Rairan, Full Stack Developer (React, Node.js, Express, MongoDB).

🔗 Live: https://alejarairan.github.io/

## Built with
- **React 19** with reusable components (`ProjectCard`, `ContactForm`, ...)
- **Vite** for development and production builds
- **CSS** with BEM methodology and CSS variables for the color palette
- **Contact form** connected to my own REST API ([portfolio-api](https://github.com/AlejaRairan/portfolio-api)), with client-side validation and loading, success and error states
- **GitHub Actions** to build and deploy to GitHub Pages on every push

## Project structure
```
src/
├── components/   # App, Header, Projects, ProjectCard, Frameworks, AboutMe, Contact, ContactForm, Footer, ContactFab
├── data/         # projects.js and technologies.js: edit these to update the content
└── utils/        # assets.js: loads images by file name
blocks/           # CSS by BEM block
images/           # images and logos
```

## Run locally
```bash
npm install
npm run dev
```

## Add a new project
Add an object to `src/data/projects.js` and put its screenshots in `images/`.
