// The only JavaScript on the page: pick a random palette and hand it to CSS.
// CSS derives every other color from --c1..--c5, so any palette works.
const palettes = [
  ["#ff7477", "#e69597", "#ceb5b7", "#b5d6d6", "#9cf6f6"],
  ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
  ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"],
  ["#f72585", "#b5179e", "#7209b7", "#3a0ca3", "#4cc9f0"],
  ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"],
  ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"],
];

let current = -1;

function shuffle() {
  let next;
  do { next = Math.floor(Math.random() * palettes.length); }
  while (next === current && palettes.length > 1);
  current = next;
  palettes[next].forEach((hex, i) =>
    document.documentElement.style.setProperty(`--c${i + 1}`, hex));
}

shuffle();
document.querySelector("#shuffle")?.addEventListener("click", shuffle);
addEventListener("keydown", (e) => {
  if (e.code === "Space" && e.target === document.body) {
    e.preventDefault();
    shuffle();
  }
});
