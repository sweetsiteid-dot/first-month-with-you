// OPEN GIFT

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    opening.style.opacity = "0";

    setTimeout(() => {
        opening.style.display = "none";
        main.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

    music.play().catch(() => {
        console.log("Autoplay blocked");
    });

});

// SLIDESHOW

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 3500);

// ENVELOPE

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        letter.classList.add("show");

        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 700);

});

// FADE IN ELEMENTS

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".hero, .slider, .letter-section, .closing").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "1s ease";

    observer.observe(el);

});

// PRELOAD IMAGES

window.addEventListener("load", () => {

    const images = [
        "foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg",
        "foto5.jpg"
    ];

    images.forEach(src => {

        const img = new Image();
        img.src = src;

    });

});

// HEARTS EFFECT

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.opacity = "0.8";
    heart.style.transition = "all 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 200}px) rotate(360deg)`;

        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(createHeart, 2500);
