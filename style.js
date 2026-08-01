// ===============================
// Romantic Proposal Website
// Part 1
// ===============================

// Elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const letter = document.getElementById("letter");
const music = document.getElementById("music");
const dateBtn = document.getElementById("dateBtn");
const dateCard = document.getElementById("dateCard");
const question = document.querySelector(".question");

// Romantic date ideas
const dateIdeas = [
  "🍕 Romantic Dinner",
  "🎬 Movie Night",
  "🍦 Ice Cream Date",
  "🌃 Long Drive",
  "🌅 Sunset Walk",
  "☕ Coffee Date",
  "🎡 Amusement Park",
  "🛍 Shopping Together",
  "🌊 Beach Walk",
  "📸 Couple Photoshoot",
  "🍫 Chocolate Café",
  "🚗 Road Trip",
  "🌸 Botanical Garden",
  "🎨 Paint Together",
  "🎤 Karaoke Night",
];

// ===============================
// YES BUTTON
// ===============================

yesBtn.addEventListener("click", () => {
  // Confetti
  confetti({
    particleCount: 250,
    spread: 180,
    origin: { y: 0.6 },
  });

  // Play music
  music.play();

  // Change question
  question.innerHTML =
    "Yay Barasha ❤️ You just made me the happiest person alive!";

  // Hide buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Show love letter
  setTimeout(() => {
    letter.style.display = "block";
  }, 1500);
});

// ===============================
// RUNNING NO BUTTON
// ===============================

function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 50;

  const maxY = window.innerHeight - noBtn.offsetHeight - 50;

  const randomX = Math.random() * maxX;

  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";

  noBtn.style.left = randomX + "px";

  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("click", moveButton);

// ===============================
// DATE BUTTON
// ===============================

dateBtn.addEventListener("click", () => {
  dateCard.style.display = "block";

  const randomIdea = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];

  dateCard.innerHTML = `

<h2>❤️ Our First Date ❤️</h2>

<p style="font-size:22px;margin-top:20px;">

${randomIdea}

</p>

`;
});
// ===============================
// PART 2 - HEARTS & PHOTO BUBBLES
// ===============================

// Your photos
const photos = [
  "images/barasha1.jpg",
  "images/barasha2.jpg",
  "images/barasha3.jpg",
  "images/barasha4.jpg",
];

// ===============================
// FLOATING HEARTS
// ===============================

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";

  const emojis = ["❤️", "💖", "💕", "💘", "💝"];

  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 20 + Math.random() * 25 + "px";

  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Create a heart every 500ms
setInterval(createHeart, 500);
// Replay Barasha images popup animation

window.addEventListener("load", () => {
  const images = document.querySelectorAll(".barasha-img");

  images.forEach((img) => {
    img.addEventListener("animationend", () => {
      img.remove();
    });
  });
});

// ===============================
// FLOATING PHOTO BUBBLES
// ===============================

function createBubblePhoto() {
  const img = document.createElement("img");

  img.className = "bubble-photo";

  img.src = photos[Math.floor(Math.random() * photos.length)];

  img.style.left = Math.random() * 100 + "vw";

  img.style.width = 60 + Math.random() * 40 + "px";

  img.style.height = img.style.width;

  img.style.animationDuration = 6 + Math.random() * 4 + "s";

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 10000);
}

// Create a floating image every second
setInterval(createBubblePhoto, 1000);

// ===============================
// SPARKLES
// ===============================

function createSparkle() {
  const sparkle = document.createElement("div");

  sparkle.innerHTML = "✨";

  sparkle.style.position = "fixed";

  sparkle.style.left = Math.random() * window.innerWidth + "px";

  sparkle.style.top = Math.random() * window.innerHeight + "px";

  sparkle.style.fontSize = 10 + Math.random() * 15 + "px";

  sparkle.style.pointerEvents = "none";

  sparkle.style.zIndex = "999";

  sparkle.style.opacity = "1";

  sparkle.style.transition = "all 2s ease";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.opacity = "0";
    sparkle.style.transform = "scale(2)";
  }, 100);

  setTimeout(() => {
    sparkle.remove();
  }, 2200);
}

setInterval(createSparkle, 800);

// ===============================
// PAGE TITLE ANIMATION
// ===============================

const titles = [
  "❤️ For Barasha ❤️",

  "🥰 Thinking of You",

  "💖 You Make Me Smile",

  "🌹 My Favorite Person",
];

let titleIndex = 0;

setInterval(() => {
  document.title = titles[titleIndex];

  titleIndex++;

  if (titleIndex >= titles.length) {
    titleIndex = 0;
  }
}, 2500);

// =====================================
// PART 3 - FINAL MAGIC ✨
// =====================================

// Fireworks Effect
function fireworkBurst() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { x: Math.random(), y: Math.random() - 0.2 },
  });
}

// Multiple Fireworks
function celebrate() {
  let count = 0;

  const interval = setInterval(() => {
    fireworkBurst();

    count++;

    if (count >= 8) {
      clearInterval(interval);
    }
  }, 500);
}

// Trigger fireworks after clicking YES
yesBtn.addEventListener("click", () => {
  setTimeout(() => {
    celebrate();
  }, 500);
});

// ===============================
// Typing Animation
// ===============================

const message = `

Dear Barasha ❤️

Every moment with you makes me smile.

You are one of the most beautiful parts of my life.

Thank you for always being amazing.

I hope this is just the beginning of many beautiful memories together.

❤️

`;

function typeLetter() {
  const paragraph = document.querySelector("#letter p");

  if (!paragraph) return;

  paragraph.innerHTML = "";

  let index = 0;

  const typing = setInterval(() => {
    paragraph.innerHTML += message.charAt(index);

    index++;

    if (index >= message.length) {
      clearInterval(typing);
    }
  }, 35);
}

// Start typing after opening the letter
yesBtn.addEventListener("click", () => {
  setTimeout(typeLetter, 1700);
});

// ===============================
// Random Romantic Quotes
// ===============================

const quotes = [
  "❤️ Every love story is beautiful, but ours will be my favorite.",

  "🌹 You are my today and all my tomorrows.",

  "🥰 Every moment with you is a beautiful memory.",

  "💖 Happiness is being with you.",

  "💕 I still smile every time I think about you.",
];

setInterval(() => {
  const subtitle = document.querySelector(".subtitle");

  if (subtitle) {
    subtitle.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
  }
}, 5000);

// ===============================
// Background Color Animation
// ===============================

const colors = ["#ffd6e8", "#ffe8f2", "#ffe4ec", "#fff0f6", "#ffdbe9"];

let colorIndex = 0;

setInterval(() => {
  document.body.style.transition = "2s";

  document.body.style.background = colors[colorIndex];

  colorIndex++;

  if (colorIndex >= colors.length) colorIndex = 0;
}, 7000);

// ===============================
// Floating Rose Petals
// ===============================

function createRose() {
  const rose = document.createElement("div");

  rose.innerHTML = "🌹";

  rose.style.position = "fixed";

  rose.style.left = Math.random() * 100 + "vw";

  rose.style.top = "-50px";

  rose.style.fontSize = 20 + Math.random() * 20 + "px";

  rose.style.transition = "all 8s linear";

  rose.style.pointerEvents = "none";

  rose.style.zIndex = "999";

  document.body.appendChild(rose);

  setTimeout(() => {
    rose.style.top = "110vh";

    rose.style.transform = `rotate(${Math.random() * 360}deg)`;
  }, 100);

  setTimeout(() => {
    rose.remove();
  }, 8500);
}

setInterval(createRose, 1200);

// ===============================
// Final Surprise Popup
// ===============================

setTimeout(() => {
  const popup = document.createElement("div");

  popup.innerHTML = `

<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background:white;
padding:30px;
border-radius:20px;
box-shadow:0 10px 40px rgba(0,0,0,.25);
text-align:center;
z-index:9999;
max-width:350px;
">

<h2 style="color:#ff2d75;">
❤️ Surprise ❤️
</h2>

<p style="margin:20px 0;">
Thank you for visiting this little surprise.
I hope it made you smile.
🌹
</p>

<button id="closePopup"
style="
padding:12px 25px;
border:none;
border-radius:30px;
background:#ff2d75;
color:white;
cursor:pointer;
">
Close
</button>

</div>

`;

  document.body.appendChild(popup);

  document.getElementById("closePopup").onclick = () => popup.remove();
}, 60000);

// ===============================
// END
// ===============================

console.log("❤️ Website Loaded Successfully ❤️");
