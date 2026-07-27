"use strict";

/* ==========================================================
   WANDERLY
   MAIN JAVASCRIPT
========================================================== */

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const header = document.querySelector("header");

const navLinks = document.querySelectorAll(".nav-links a");

const hero = document.querySelector("#hero");

const searchBtn = document.querySelector(".hero-search-btn");

const newsletterForm = document.querySelector(".newsletter-form");

const contactForm = document.querySelector(".contact-form");

const faqItems = document.querySelectorAll(".faq-item");

const statNumbers = document.querySelectorAll(".stat-card h2");

const galleryItems = document.querySelectorAll(".gallery-item");

const destinationCards = document.querySelectorAll(".destination-card");

const reviewCards = document.querySelectorAll(".review-card");

/* ==========================================================
   STICKY NAVBAR
========================================================== */

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,.98)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }

    else{

        header.style.background = "rgba(255,255,255,.92)";

        header.style.boxShadow = "none";

    }

});

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

navLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        const href = this.getAttribute("href");

        if(!href.startsWith("#")) return;

        e.preventDefault();

        const section = document.querySelector(href);

        if(section){

            section.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================================
   HERO BUTTON
========================================================== */

if(searchBtn){

    searchBtn.addEventListener("click",()=>{

        alert("Searching for amazing destinations... ✈️");

    });

}

/* ==========================================================
   NEWSLETTER
========================================================== */

if(newsletterForm){

newsletterForm.addEventListener("submit",function(e){

    e.preventDefault();

    const email=this.querySelector("input").value.trim();

    if(email===""){

        alert("Please enter your email.");

        return;

    }

    alert("Thanks for subscribing! 🎉");

    this.reset();

});

}

/* ==========================================================
   CONTACT FORM
========================================================== */

if(contactForm){

contactForm.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Your message has been sent successfully!");

    this.reset();

});

}

/* ==========================================================
   CARD HOVER EFFECT
========================================================== */

destinationCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

/* ==========================================================
   REVIEW HOVER
========================================================== */

reviewCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

/* ==========================================================
   ANIMATED COUNTERS
========================================================== */

const animateCounter = (counter) => {

    const text = counter.innerText;

    const target = parseInt(text.replace(/[^0-9]/g, ""));

    if (isNaN(target)) return;

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 200));

    const prefix = text.match(/^[^0-9]+/)?.[0] || "";

    const suffix = text.match(/[^0-9]+$/)?.[0] || "";

    const update = () => {

        current += increment;

        if (current >= target) {

            counter.innerText = prefix + target + suffix;

            return;

        }

        counter.innerText = prefix + current + suffix;

        requestAnimationFrame(update);

    };

    update();

};

const statsObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

statNumbers.forEach(stat => {

    statsObserver.observe(stat);

});

/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealElements = document.querySelectorAll(

    ".destination-card, .feature-card, .experience-card, .category-card, .gallery-item, .review-card, .contact-card"

);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = "all .8s ease";

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .2

});

revealElements.forEach(element => {

    revealObserver.observe(element);

});

/* ==========================================================
   SCROLL PROGRESS BAR
========================================================== */

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";

progressBar.style.top = "0";

progressBar.style.left = "0";

progressBar.style.height = "4px";

progressBar.style.background = "#2F80ED";

progressBar.style.width = "0%";

progressBar.style.zIndex = "99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const height = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================================================
   SCROLL TO TOP BUTTON
========================================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";

topButton.style.right = "30px";

topButton.style.bottom = "30px";

topButton.style.width = "55px";

topButton.style.height = "55px";

topButton.style.borderRadius = "50%";

topButton.style.border = "none";

topButton.style.background = "#2F80ED";

topButton.style.color = "#fff";

topButton.style.fontSize = "22px";

topButton.style.cursor = "pointer";

topButton.style.display = "none";

topButton.style.zIndex = "9999";

topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================================
   HERO PARALLAX
========================================================== */

window.addEventListener("scroll", () => {

    if (!hero) return;

    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;

});

/* ==========================================================
   GALLERY EFFECT
========================================================== */

galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "scale(1.03)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "scale(1)";

    });

});
/* ==========================================================
   DARK MODE
========================================================== */

const themeButton = document.querySelector(".theme-btn");

function enableDarkMode() {

    document.body.classList.add("dark-mode");

    localStorage.setItem("theme", "dark");

}

function disableDarkMode() {

    document.body.classList.remove("dark-mode");

    localStorage.setItem("theme", "light");

}

if (localStorage.getItem("theme") === "dark") {

    enableDarkMode();

}

if (themeButton) {

    themeButton.addEventListener("click", () => {

        if (document.body.classList.contains("dark-mode")) {

            disableDarkMode();

        } else {

            enableDarkMode();

        }

    });

}

/* ==========================================================
   FAQ ACCORDION
========================================================== */

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    const question = item.querySelector("h3");

    if (!answer || !question) return;

    answer.style.display = "none";

    question.style.cursor = "pointer";

    question.addEventListener("click", () => {

        const opened = answer.style.display === "block";

        faqItems.forEach(faq => {

            const p = faq.querySelector("p");

            if (p) {

                p.style.display = "none";

            }

        });

        answer.style.display = opened ? "none" : "block";

    });

});

/* ==========================================================
   TOAST NOTIFICATION
========================================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";

    toast.style.bottom = "25px";

    toast.style.left = "50%";

    toast.style.transform = "translateX(-50%)";

    toast.style.background = "#222";

    toast.style.color = "#fff";

    toast.style.padding = "15px 25px";

    toast.style.borderRadius = "12px";

    toast.style.boxShadow = "0 15px 35px rgba(0,0,0,.25)";

    toast.style.zIndex = "999999";

    toast.style.opacity = "0";

    toast.style.transition = ".3s";

    document.body.appendChild(toast);

    requestAnimationFrame(() => {

        toast.style.opacity = "1";

    });

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}

/* ==========================================================
   REPLACE ALERTS
========================================================== */

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        if (email === "") {

            showToast("Please enter an email address.");

            return;

        }

        showToast("Newsletter subscription successful! 🎉");

        this.reset();

    });

}

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        showToast("Your message has been sent successfully!");

        this.reset();

    });

}

/* ==========================================================
   KEYBOARD SHORTCUTS
========================================================== */

document.addEventListener("keydown", e => {

    if (e.key === "/") {

        e.preventDefault();

        const destinationInput = document.querySelector(".search-item input");

        if (destinationInput) {

            destinationInput.focus();

        }

    }

    if (e.key.toLowerCase() === "t") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/* ==========================================================
   IMAGE LAZY LOADING
========================================================== */

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const img = entry.target;

        img.style.transition = ".6s";

        img.style.opacity = "1";

        imageObserver.unobserve(img);

    });

});

images.forEach(img => {

    img.style.opacity = ".6";

    imageObserver.observe(img);

});

/* ==========================================================
   RANDOM TRAVEL QUOTES
========================================================== */

const quotes = [

    "Travel is the only thing you buy that makes you richer. 🌍",

    "Collect moments, not things. ✈️",

    "Adventure begins where plans end. 🏔️",

    "The world is too big to stay in one place. 🌎",

    "Life is short. Explore more. ❤️"

];

setInterval(() => {

    console.log(

        quotes[Math.floor(Math.random() * quotes.length)]

    );

}, 10000);

/* ==========================================================
   PAGE LOADED
========================================================== */

window.addEventListener("load", () => {

    showToast("Welcome to Wanderly! 🌍");

    console.log("Wanderly loaded successfully.");

});
