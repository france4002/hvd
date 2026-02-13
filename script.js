const yesBtn = document.getElementById("yesBtn");
const surprise = document.getElementById("surpriseSection");

const emojis = ["❤️", "💖", "💘", "💕", "🌸", "✨"];

yesBtn.addEventListener("click", () => {
  surprise.classList.add("show");

  surprise.scrollIntoView({ behavior: "smooth" });

  burstEmojis();
});

/* Floating Emojis */
function spawnEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "floating-emoji";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = 1.2 + Math.random() * 1.5 + "rem";
  emoji.style.animationDuration = 6 + Math.random() * 4 + "s";

  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 10000);
}

function burstEmojis() {
  for (let i = 0; i < 15; i++) {
    setTimeout(spawnEmoji, i * 120);
  }
}

/* Continuous gentle floating */
setInterval(spawnEmoji, 900);
