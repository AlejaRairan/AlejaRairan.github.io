// Loads the images the site uses so components can use them by file name.
// Only these patterns are included in the build, so unused originals (big PNGs) are left out.
// Vite adds a hash to each file name when building, so links never go stale.
const images = import.meta.glob(
  ["../../images/*.{webp,svg,mp4}", "../../images/*logo.png", "../../images/alejaimage-small.jpg"],
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

export function getImage(fileName) {
  return images[`../../images/${fileName}`];
}
