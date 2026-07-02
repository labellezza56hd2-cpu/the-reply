const button = document.getElementById("enter");

button.addEventListener("click", function () {

    const chapter = document.getElementById("chapter1");

    chapter.scrollIntoView({
        behavior: "smooth"
    });

    // Phát nhạc sau khi bắt đầu câu chuyện
    setTimeout(() => {

        music.play();

        playBtn.innerHTML = "⏸";

        isPlaying = true;

    }, 800);

});


// ==========================
// Scroll Reveal Animation
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 150) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
const fadeItems = document.querySelectorAll(".fade-item");

function revealItems(){

    fadeItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealItems);

revealItems();

// ==========================
// Hero Parallax
// ==========================

const hero = document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/35;

    const y=(window.innerHeight/2-e.clientY)/35;

    hero.style.backgroundPosition=`calc(50% + ${x}px) calc(50% + ${y}px)`;

});

// ==========================
// Music Player
// ==========================

const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");

let isPlaying = false;

playBtn.addEventListener("click", function () {

    if (!isPlaying) {

        music.play();

        playBtn.innerHTML = "⏸";

        isPlaying = true;

    } else {

        music.pause();

        playBtn.innerHTML = "▶";

        isPlaying = false;

    }

});

// ==========================
// Loading Screen
// ==========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList
            .add("hide");

    }, 2200);

});