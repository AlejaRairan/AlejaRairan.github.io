const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// "file" = logo in /images, "url" = logo from the Devicon CDN.
// "invert" turns dark logos white so they show on the dark background.
export const technologies = [
  { name: "HTML", file: "HTMl logo.png" },
  { name: "CSS", file: "CSS logo.png" },
  { name: "JavaScript", file: "JS logo.png" },
  { name: "React", file: "React logo.png" },
  { name: "Node.js", file: "node logo.png" },
  { name: "Express", url: `${DEVICON}/express/express-original.svg`, invert: true },
  { name: "MongoDB", url: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: "Vite", file: "vite logo.png" },
  { name: "Figma", file: "figma logo.png" },
  { name: "Git", url: `${DEVICON}/git/git-original.svg` },
  { name: "GitHub", url: `${DEVICON}/github/github-original.svg`, invert: true },
];
