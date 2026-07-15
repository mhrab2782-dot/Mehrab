// متن تایپ شونده
const texts = [
    "Football Lover ⚽",
    "Telegram : @mehrab_ramzi",
    "Rubika : @mehrab_ramzi",
    "Welcome To My Website"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
    const current = texts[textIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typing.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 80);
}

typeEffect();

// ساعت زنده
function updateClock() {
    const now = new Date();

    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    const clock = document.getElementById("clock");

    if (clock) {
        clock.textContent = `${h}:${m}:${s}`;
    }
}

setInterval(updateClock, 1000);
updateClock();

// لودینگ
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 700);

    }, 2000);
});

// موزیک
const music = document.querySelector("audio");

document.body.addEventListener("click", () => {
    if (music) {
        music.play().catch(() => {});
    }
}, { once: true });
