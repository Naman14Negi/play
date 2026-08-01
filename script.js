/* ==========================================
        FOR BARASHA ❤️
        VERSION 3
========================================== */

// --------------------
// ELEMENTS
// --------------------

const proposalPage = document.getElementById("proposalPage");
const introScene = document.getElementById("introScene");
const togetherScene = document.getElementById("togetherScene");
const letterSection = document.getElementById("letterSection");
const dateSection = document.getElementById("dateSection");
const gallerySection = document.getElementById("gallerySection");
const endingSection = document.getElementById("endingSection");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const continueBtn = document.getElementById("continueBtn");
const galleryBtn = document.getElementById("galleryBtn");
const endingBtn = document.getElementById("endingBtn");

const me = document.getElementById("me");
const barasha = document.getElementById("barasha");

const together = document.getElementById("together");

const collisionHeart = document.getElementById("collisionHeart");

const perfectMusic = document.getElementById("perfectMusic");
const introMusic = document.getElementById("introMusic");
const collideMusic = document.getElementById("collideMusic");

const sparkleContainer = document.getElementById("sparkleContainer");
const heartContainer = document.getElementById("heartContainer");

// ==========================================
// START WEBSITE
// ==========================================

window.addEventListener("load", () => {
  hideAllScenes();

  proposalPage.style.display = "flex";
});

// ==========================================
// HIDE SCENES
// ==========================================

function hideAllScenes() {
  proposalPage.style.display = "none";

  introScene.style.display = "none";

  togetherScene.style.display = "none";

  letterSection.style.display = "none";

  dateSection.style.display = "none";

  gallerySection.style.display = "none";

  endingSection.style.display = "none";
}

// ==========================================
// PLAY PERFECT SONG
// ==========================================

let musicStarted = false;

document.body.addEventListener("click", () => {
  if (musicStarted) return;

  musicStarted = true;

  perfectMusic.volume = 0.45;

  perfectMusic.play().catch(() => {});
});

// ==========================================
// YES BUTTON
// ==========================================

yesBtn.addEventListener("click", () => {
  startStory();
});

// ==========================================
// NO BUTTON
// ==========================================

let noCount = 0;

noBtn.addEventListener("mouseenter", moveNoButton);

function moveNoButton() {
  noCount++;

  const maxX = window.innerWidth - noBtn.offsetWidth - 30;

  const maxY = window.innerHeight - noBtn.offsetHeight - 30;

  const x = Math.random() * maxX;

  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";

  noBtn.style.left = x + "px";

  noBtn.style.top = y + "px";

  noBtn.style.transition = ".35s";

  if (noCount == 5) {
    noBtn.innerHTML = "Are you sure? 🥺";
  }

  if (noCount == 10) {
    noBtn.innerHTML = "Please ❤️";
  }
}

// ==========================================
// FLOATING HEARTS
// ==========================================

setInterval(createHeart, 700);

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 20 + Math.random() * 25 + "px";

  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// ==========================================
// MUSIC HELPERS
// ==========================================

function fadeOut(audio) {
  let volume = audio.volume;

  const fade = setInterval(() => {
    volume -= 0.05;

    if (volume <= 0) {
      clearInterval(fade);

      audio.pause();

      audio.currentTime = 0;
    }

    audio.volume = Math.max(volume, 0);
  }, 100);
}

function fadeIn(audio, target = 0.5) {
  audio.volume = 0;

  audio.play().catch(() => {});

  let volume = 0;

  const fade = setInterval(() => {
    volume += 0.05;

    audio.volume = Math.min(volume, target);

    if (volume >= target) {
      clearInterval(fade);
    }
  }, 100);
}
/* ==========================================
        STORY START
========================================== */

function startStory() {
  // Disable buttons
  yesBtn.disabled = true;
  noBtn.disabled = true;

  // Fade proposal music
  fadeOut(perfectMusic);

  // Fade proposal page
  proposalPage.classList.add("fadeOut");

  setTimeout(() => {
    proposalPage.style.display = "none";

    startIntro();
  }, 800);
}

/* ==========================================
        INTRO
========================================== */

function startIntro() {
  introScene.style.display = "flex";

  introScene.classList.add("fadeIn");

  fadeIn(introMusic, 0.5);

  // Reset positions
  me.style.left = "-280px";
  barasha.style.right = "-280px";

  collisionHeart.style.opacity = "0";
  collisionHeart.style.transform = "translate(-50%,-50%) scale(0)";

  // Small delay before movement
  setTimeout(() => {
    me.style.left = "calc(50% - 250px)";

    barasha.style.right = "calc(50% - 250px)";
  }, 400);

  // Collision after movement
  setTimeout(collision, 2500);
}

/* ==========================================
        COLLISION
========================================== */

function collision() {
  // Heart animation
  collisionHeart.style.opacity = "1";

  collisionHeart.style.transform = "translate(-50%,-50%) scale(1.5)";

  // Screen shake
  shakeScreen();

  // Sparkles
  createSparkles();

  // Confetti
  confetti({
    particleCount: 220,

    spread: 130,

    origin: { y: 0.55 },
  });

  // Music transition
  fadeOut(introMusic);

  setTimeout(() => {
    fadeIn(collideMusic, 0.6);
  }, 1200);

  // Show together scene
  setTimeout(showTogetherScene, 1800);
}

/* ==========================================
        SCREEN SHAKE
========================================== */

function shakeScreen() {
  document.body.animate(
    [
      { transform: "translateX(0px)" },

      { transform: "translateX(-8px)" },

      { transform: "translateX(8px)" },

      { transform: "translateX(-5px)" },

      { transform: "translateX(5px)" },

      { transform: "translateX(0px)" },
    ],

    {
      duration: 500,
    },
  );
}

/* ==========================================
        SPARKLES
========================================== */

function createSparkles() {
  for (let i = 0; i < 35; i++) {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = Math.random() > 0.5 ? "✨" : "💖";

    sparkle.style.left =
      window.innerWidth / 2 + (Math.random() * 300 - 150) + "px";

    sparkle.style.top =
      window.innerHeight / 2 + (Math.random() * 300 - 150) + "px";

    sparkle.style.fontSize = 20 + Math.random() * 25 + "px";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1200);
  }
}

/* ==========================================
        TOGETHER SCENE
========================================== */

function showTogetherScene() {
  introScene.style.display = "none";

  togetherScene.style.display = "flex";

  together.classList.add("collideAnimation");

  setTimeout(() => {
    together.classList.add("disappear");
  }, 5000);

  setTimeout(() => {
    showLetter();
  }, 6000);
}
/* ==========================================
        LOVE LETTER
========================================== */

function showLetter() {
  togetherScene.classList.remove("fadeIn");

  togetherScene.classList.add("fadeOut");

  setTimeout(() => {
    togetherScene.style.display = "none";

    letterSection.style.display = "flex";

    letterSection.classList.add("fadeIn");

    typeWriter();
  }, 800);
}

/* ==========================================
        TYPEWRITER EFFECT
========================================== */

const fullLetter = `
Every day with you becomes a memory worth keeping.

You make ordinary moments feel magical.

Thank you for loving me.

Thank you for choosing me.

Thank you for making my life brighter.

I don't know what tomorrow holds,

but I know I want you beside me.

Let's continue making beautiful memories together.

❤️
`;

let index = 0;

function typeWriter() {
  const text = document.getElementById("letterText");

  text.innerHTML = "";

  index = 0;

  const typing = setInterval(() => {
    if (index >= fullLetter.length) {
      clearInterval(typing);

      return;
    }

    if (fullLetter[index] === "\n") {
      text.innerHTML += "<br>";
    } else {
      text.innerHTML += fullLetter[index];
    }

    index++;
  }, 35);
}

/* ==========================================
        CONTINUE BUTTON
========================================== */

continueBtn.addEventListener("click", () => {
  letterSection.classList.remove("fadeIn");

  letterSection.classList.add("fadeOut");

  setTimeout(() => {
    letterSection.style.display = "none";

    showDatePlanner();
  }, 700);
});

/* ==========================================
        DATE PLANNER
========================================== */

function showDatePlanner() {
  dateSection.style.display = "flex";

  dateSection.classList.add("fadeIn");

  confetti({
    particleCount: 120,

    spread: 90,

    origin: { y: 0.6 },
  });
}

/* ==========================================
        GALLERY BUTTON
========================================== */

galleryBtn.addEventListener("click", () => {
  dateSection.classList.remove("fadeIn");

  dateSection.classList.add("fadeOut");

  setTimeout(() => {
    dateSection.style.display = "none";

    showGallery();
  }, 700);
});

/* ==========================================
        GALLERY
========================================== */

function showGallery() {
  gallerySection.style.display = "flex";

  gallerySection.classList.add("fadeIn");

  const photos = document.querySelectorAll(".galleryImg");

  photos.forEach((photo, i) => {
    photo.style.opacity = "0";

    photo.style.transform = "translateY(80px) scale(.8)";

    setTimeout(() => {
      photo.style.transition = ".8s";

      photo.style.opacity = "1";

      photo.style.transform = "translateY(0) scale(1)";
    }, i * 400);
  });
}
/* ==========================================
        ENDING
========================================== */

endingBtn.addEventListener("click", () => {
  gallerySection.classList.remove("fadeIn");
  gallerySection.classList.add("fadeOut");

  setTimeout(() => {
    gallerySection.style.display = "none";

    endingSection.style.display = "flex";

    endingSection.classList.add("fadeIn");

    finalCelebration();
  }, 700);
});

/* ==========================================
        FINAL CELEBRATION
========================================== */

function finalCelebration() {
  const duration = 5000;

  const end = Date.now() + duration;

  const timer = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(timer);
      return;
    }

    confetti({
      particleCount: 8,
      angle: 60,
      spread: 80,
      origin: { x: 0 },
    });

    confetti({
      particleCount: 8,
      angle: 120,
      spread: 80,
      origin: { x: 1 },
    });
  }, 180);
}

/* ==========================================
        FLOATING SPARKLES
========================================== */

setInterval(() => {
  if (endingSection.style.display !== "flex") return;

  const sparkle = document.createElement("div");

  sparkle.className = "sparkle";

  sparkle.innerHTML = Math.random() > 0.5 ? "✨" : "💖";

  sparkle.style.left = Math.random() * 100 + "vw";

  sparkle.style.top = Math.random() * 100 + "vh";

  sparkleContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1200);
}, 500);

/* ==========================================
        FLOATING MEMORIES
========================================== */

const galleryImages = document.querySelectorAll(".galleryImg");

galleryImages.forEach((img, index) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1) rotate(3deg)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1) rotate(0deg)";
  });
});

/* ==========================================
        KEYBOARD SHORTCUTS
========================================== */

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (proposalPage.style.display === "flex") {
      yesBtn.click();
    }
  }
});

/* ==========================================
        PREVENT IMAGE DRAG
========================================== */

document.querySelectorAll("img").forEach((img) => {
  img.draggable = false;
});

/* ==========================================
        PRELOAD IMAGES
========================================== */

[
  "images/me.jpg",
  "images/barasha.jpg",
  "images/together.jpg",
  "images/couple1.jpg",
  "images/barasha1.jpg",
  "images/barasha2.jpg",
  "images/barasha3.jpg",
  "images/barasha4.jpg",
].forEach((src) => {
  const image = new Image();

  image.src = src;
});

/* ==========================================
        PRELOAD MUSIC
========================================== */

[perfectMusic, introMusic, collideMusic].forEach((audio) => {
  audio.load();
});

/* ==========================================
        CONSOLE MESSAGE ❤️
========================================== */

console.clear();

console.log(
  "%c❤️ For Barasha ❤️",
  "font-size:32px;color:#ff2d75;font-weight:bold;",
);

console.log("%cMade with Love 💖", "font-size:18px;color:#ff5c93;");
