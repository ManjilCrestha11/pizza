const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const music = document.getElementById("valentine-music");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");

const bigGiftSlide = document.getElementById("big-gift-slide");
const threeGiftsSlide = document.getElementById("three-gifts-slide");
const bigGiftBtn = document.getElementById("big-gift-btn");

const polaroidMemories = [
    { src: "side1.jpg", text: "I will Love" }, { src: "side2.jpg", text: "You Forever" },
    { src: "strip1.jpg", text: "Sweet" }, { src: "strip2.jpg", text: "and Always" },
    { src: "strip3.jpg", text: "Us" }, { src: "side3.jpg", text: "and Always" },
    { src: "side4.jpg", text: "My Love😘" }
];

function createKiss() {
    const kiss = document.createElement("div");
    kiss.className = "kiss-particle";
    kiss.innerHTML = Math.random() > 0.5 ? "💋" : "❤️";
    kiss.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(kiss);
    setTimeout(() => kiss.remove(), 3000);
}

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    music.currentTime = 41; 
    music.play().catch(() => {});
    setTimeout(() => document.querySelector(".letter-window").classList.add("open"), 50);
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    document.getElementById("letter-buttons").style.display = "none";
    bigGiftSlide.style.display = "block";
});

bigGiftBtn.addEventListener("click", () => {
    bigGiftSlide.style.display = "none";
    threeGiftsSlide.style.display = "block";
});

document.getElementById("gift1").addEventListener("click", () => {
    renderCustomGallery();
    document.getElementById("polaroid-modal").style.display = "flex";
});

document.getElementById("gift2").addEventListener("click", () => {
    document.getElementById("flower-modal").style.display = "flex";
});

function closeFlower() {
    document.getElementById("flower-modal").style.display = "none";
}

document.getElementById("gift3").addEventListener("click", () => {
    document.getElementById("final-letter-container").style.display = "flex";
    if (!window.heartInterval) {
        window.heartInterval = setInterval(createKiss, 200);
    }
});

function closeFinalLetter() {
    document.getElementById("final-letter-container").style.display = "none";
    if (window.heartInterval) {
        clearInterval(window.heartInterval);
        window.heartInterval = null;
    }
}

function renderCustomGallery() {
    const left = document.getElementById("left-gallery");
    const center = document.getElementById("center-strip-gallery");
    const right = document.getElementById("right-gallery");
    left.innerHTML = ""; center.innerHTML = ""; right.innerHTML = "";
    center.classList.remove("printing");

    polaroidMemories.forEach((photo, index) => {
        if (index >= 2 && index <= 4) {
            const img = document.createElement("img");
            img.src = photo.src;
            img.className = "strip-img";
            center.appendChild(img);
        } else {
            const item = document.createElement("div");
            item.className = "polaroid-item red-theme";
            item.innerHTML = `<img src="${photo.src}"><p>${photo.text}</p>`;
            if (index < 2) left.appendChild(item); else right.appendChild(item);
        }
    });
    setTimeout(() => center.classList.add("printing"), 100);
}

document.querySelector(".close-polaroid").addEventListener("click", () => {
    document.getElementById("polaroid-modal").style.display = "none";
});
