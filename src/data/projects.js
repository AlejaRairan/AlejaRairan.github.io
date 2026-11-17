// To add a new project, add an object to this list. The page updates automatically.
export const projects = [
  {
    id: "countries-explorer",
    title: "CountriesExplorer: discover your next destination",
    overview:
      "A full stack travel app where users can search for countries, browse landscape photo cards, open a detail page with travel information, and save their favorite countries to their account.",
    tools: [
      "Built the frontend with React and Vite, using React Router for the search and country detail pages.",
      "Implemented sign up and sign in with JWT authentication and protected routes.",
      "Developed a REST API with Node.js and Express, storing users and saved countries in MongoDB Atlas.",
      "Integrated the Wikimedia Commons API for landscape photos and linked travel content from Wikivoyage and Wikipedia.",
      "Deployed the frontend and API on a Google Cloud VM over HTTPS.",
    ],
    summary:
      "My capstone project at TripleTen, designed and built end to end, from a Figma design to a deployed full stack application.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    images: [
      { file: "countries-home.webp", alt: "CountriesExplorer search page" },
      { file: "countries-detail.webp", alt: "Country detail page with travel information" },
      { file: "countries-saved.webp", alt: "Saved countries page" },
    ],
    links: [
      { label: "Visit website", url: "https://wtwrr.chickenkiller.com" },
      { label: "Frontend code", url: "https://github.com/AlejaRairan/final-project-frontend" },
      { label: "Backend code", url: "https://github.com/AlejaRairan/final-project-backend" },
    ],
  },
  {
    id: "around-the-us",
    title: "Share the best pics of your trip with your family!",
    overview:
      "This website allows users to upload and display their favorite travel photos in one place, making it easy to share memories with family and friends. Users can personalize not only the images, but also the website's title and description, creating a customized and meaningful visual experience based on their trips.",
    tools: [
      "Built the project from scratch using HTML to create a clear, semantic, and well-structured layout.",
      "Designed a clean, responsive, and visually appealing interface using CSS.",
      "Implemented JavaScript to add interactivity, handle user actions, manage form submissions, and dynamically update content.",
      "Integrated REST APIs to simulate real-world application behavior, enabling data storage, retrieval, and updates.",
      "Used Git and GitHub for version control to track changes, organize the codebase, and follow best development practices throughout the project.",
    ],
    summary:
      "This project demonstrates my ability to build a complete front-end application, combine structure, design, and logic, and work with APIs to manage data.",
    tags: ["JavaScript", "OOP", "REST API", "CSS"],
    images: [
      { file: "change-profilepicture.webp", alt: "Edit profile form" },
      { file: "change-newplace.webp", alt: "Add new place form" },
      { file: "fullimage.webp", alt: "Full-size photo view" },
    ],
    links: [
      { label: "Visit website", url: "https://alejarairan.github.io/web_project_around/" },
      { label: "View on GitHub", url: "https://github.com/AlejaRairan/web_project_around" },
    ],
  },
  {
    id: "coffee-shop",
    title: "Grab a drink and enjoy the experience!",
    overview:
      "This project is a cafeteria website designed to allow users to explore healthy recipes and baking ideas they can recreate at home. Visitors can also book a table by registering through a form and easily access the cafeteria's main website through integrated external links.",
    tools: [
      "Built the website from scratch using HTML to create a clear, semantic structure.",
      "Used CSS and Flexbox to design a responsive layout with improved alignment and spacing across different screen sizes.",
      "Embedded videos from external pages to enrich content and improve the user experience.",
      "Developed an interactive form to support user interaction and data input.",
      "Used GitHub for version control, tracking changes and maintaining an organized codebase throughout the project.",
    ],
    summary:
      "This project demonstrates my ability to build an interactive and responsive website that connects multiple pages and external resources, including video content.",
    tags: ["HTML", "CSS", "Flexbox", "Responsive design"],
    images: [
      { file: "cafeteria.webp", alt: "Cafeteria landing page" },
      { file: "cafeteria-form.webp", alt: "Table booking form" },
    ],
    video: "Video Project.mp4",
    links: [
      { label: "Visit website", url: "https://alejarairan.github.io/web_project_coffeeshop/" },
      { label: "View on GitHub", url: "https://github.com/AlejaRairan/web_project_coffeeshop" },
    ],
  },
];
