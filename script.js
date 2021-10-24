"use-strict";
window.addEventListener('load', start);

function start() {
    // Custom cursor
    document.addEventListener('mousemove', trackMouseMove);
    document.addEventListener('click', mouseSize);
    // Welcome message
    initMessage();
    // Distributing the bubbles
    bubblesSpace();
    // Logo scroll
    document.getElementById('logo').addEventListener('click', function() {
        document.getElementById('message').scrollIntoView();
    });
}

// Make the anchor icon follow mouse movement
function trackMouseMove (element) {
    const anchor = document.getElementById('anchor');
    anchor.style.left = element.clientX + 'px';
    anchor.style.top = element.clientY + 'px';
}

// Make the anchor move on click
function mouseSize() {
    document.getElementById('anchor').classList.add('mouseAni');
    setTimeout(function() {
        document.getElementById('anchor').classList.remove('mouseAni');
    }, 1000);
}

// Create the welcome message
function initMessage() {
    const messageArray = ["W", "E", "L", "C", "O", "M", "E"];
    // Insert the message
    for(let i=0; i<messageArray.length; i++) {
        let letter = document.createElement("img");
        letter.src = 'assets/' + messageArray[i] + '.png'; 
        letter.classList.add("letter");
        letter.style.opacity = "0";
        document.getElementById("welcoming").appendChild(letter);
    }
    // Animate each letter
    gsap.to(".letter", {y: "400px", opacity: 1, duration: 1, stagger: 0.5});
}

// Distribute the bubbles
function bubblesSpace() {
    for(let i=1; i<=20; i++) {
        document.getElementById("b"+i).style.top = 100*i + "px";
        document.getElementById("b"+i).style.left = 4.5*i + "%";
    }
}

/**
 * GSAP SCROLL ANIMATIONS
 */

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({scroller: "body"});

/**
 * ABOUT ME SECTION ANIMATIONS
 */

let timeline = gsap.timeline({scrollTrigger: {
    trigger: ".helmet",
    toggleActions: "restart none none none"
}})
timeline.set(".helmet", {x: "-800px", opacity: 0})
.to(".helmet", {x: "-100px", opacity: 1, duration: 2});

let timeline2 = gsap.timeline({scrollTrigger: {
        trigger: ".introTitle",
        toggleActions: "restart none none none"
    }})
timeline2.set(".introTitle", {x: "800px", opacity: 0, duration: 2})
        .to(".introTitle", {x: "0px", opacity: 1, duration: 2});

gsap.to(".introDescription", {scrollTrigger: {trigger: ".introDescription", toggleActions: "restart none restart none"}, opacity: 1, duration: 7});


/**
 * SKILLS SECTION ANIMATIONS
 */

let timeline3 = gsap.timeline({scrollTrigger: {
    trigger: ".skillsTitle",
    toggleActions: "restart none none none"
}})
timeline3.set(".skillsTitle", {x: "-800px", opacity: 0})
        .to(".skillsTitle", {x: "0px", opacity: 1, duration: 2});

gsap.to(".skillsDescription", {scrollTrigger: {trigger: ".skillsDescription", toggleActions: "restart none restart none"}, opacity: 1, duration: 7});

let timeline4 = gsap.timeline({scrollTrigger: {
    trigger: ".skillGrid",
    toggleActions: "restart none none none"
}})
timeline4.set(".skill", {y: "500px", opacity: 0})
        .to(".skill", {y: "0px", opacity: 1, duration: 1, stagger: 0.2});

let timeline5 = gsap.timeline({scrollTrigger: {
    trigger: ".underwater",
    toggleActions: "restart none none none"
}})
timeline5.set(".underwater", {x: "800px", opacity: 0})
        .to(".underwater", {x: "100px", opacity: 1, duration: 2});



/**
 * PROJECTS SECTION ANIMATIONS
 */


let timeline6 = gsap.timeline({scrollTrigger: {
    trigger: ".projectsTitle",
    toggleActions: "restart none none none"
}})
timeline6.set(".projectsTitle", {x: "800px", opacity: 0})
        .to(".projectsTitle", {x: "0px", opacity: 1, duration: 2});

gsap.to(".projectsDescription", {scrollTrigger: {trigger: ".projectsDescription", toggleActions: "restart none restart none"}, opacity: 1, duration: 7});

let timeline7= gsap.timeline({scrollTrigger: {
    trigger: ".examples",
    toggleActions: "restart none none none"
}})
timeline7.set(".project", {y: "500px", opacity: 0})
         .to(".project", {y: "0px", opacity: 1, duration: 1, stagger: 0.2});

let timeline8 = gsap.timeline({scrollTrigger: {
    trigger: ".submarine",
    toggleActions: "restart none none none"
}})
timeline8.set(".submarine", {x: "-800px", opacity: 0})
         .to(".submarine", {x: "-200px", y: "0px", rotation: 0, opacity: 1, ease: "elastic", duration: 10});


/**
 * CONTACT
 */

gsap.to(".contactTitle", {scrollTrigger: {trigger: ".contactTitle", toggleActions: "restart none none none"}, opacity: 1, duration: 3});
gsap.to(".icon", {scrollTrigger: {trigger: ".contactTitle", toggleActions: "restart none none none"}, opacity: 1, duration: 3});
