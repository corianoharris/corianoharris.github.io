document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  updateCopyrightYear();
  setupTextFade('.fade-in-out');
});

function initializeNavigation() {
  const nav = document.querySelector(".nav");
  const navOpenBtn = document.querySelector(".navOpenBtn");
  const navCloseBtn = document.querySelector(".navCloseBtn");
  const navLinks = document.querySelectorAll(".nav-links");

  navOpenBtn.addEventListener("click", () => nav.classList.add("openNav"));
  navCloseBtn.addEventListener("click", () => nav.classList.remove("openNav"));

  navLinks.forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("openNav"));
  });
}

function updateCopyrightYear() {
  const copyrightYear = document.querySelector(".copyright-year");
  copyrightYear.textContent = new Date().getFullYear();
}

function setupTextFade(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  const config = {
    threshold: 0.1,
    fadeInDuration: '0.5s',
    fadeOutDuration: '0.5s',
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.style.transition = `opacity ${entry.isIntersecting ? config.fadeInDuration : config.fadeOutDuration} ease-${entry.isIntersecting ? 'in' : 'out'}`;
      entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
    });
  }, { threshold: config.threshold });

  elements.forEach(element => {
    element.style.opacity = 0;
    observer.observe(element);
  });
}

// background animation

let particles = [];
let brushStrokes = [];
let lastMouseX = 0;
let lastMouseY = 0;

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    background(10);

    // Initialize particles with 2% larger sizes
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            size: random(2.04, 5.1), // Increased by 2% from (2, 5)
            speedX: random(-0.51, 0.51), // Increased by 2% from (-0.5, 0.5)
            speedY: random(-0.51, 0.51), // Increased by 2% from (-0.5, 0.5)
            color: color(random(200, 255), random(50, 150), random(50, 150), 150)
        });
    }
}

function draw() {
    // Fade background
    background(255, 255, 255, 255);

    // Update and draw particles
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        noStroke();
        fill(p.color);
        circle(p.x, p.y, p.size);
    });

    // Draw brush strokes
    brushStrokes.forEach((stroke, index) => {
        stroke.life -= 0.5;
        if (stroke.life <= 0) {
            brushStrokes.splice(index, 1);
            return;
        }

        stroke.points.forEach((point, i) => {
            if (i === 0) return;
            let prev = stroke.points[i - 1];
            
            stroke(255, 255, 255, stroke.life);
            strokeWeight(stroke.weight * (stroke.life / 100) * 1.02); // Increased by 2%
            line(prev.x, prev.y, point.x, point.y);
        });
    });

    // Interactive brush effect on mouse movement
    if (mouseIsPressed) {
        let speed = dist(mouseX, mouseY, lastMouseX, lastMouseY);
        let angle = atan2(mouseY - lastMouseY, mouseX - lastMouseX);
        
        for (let i = 0; i < 5; i++) {
            let randomOffset = random(-20.4, 20.4); // Increased by 2% from (-20, 20)
            let x = mouseX + cos(angle + PI/2) * randomOffset;
            let y = mouseY + sin(angle + PI/2) * randomOffset;
            
            fill(random(200, 255), random(50, 150), random(50, 150), 100);
            noStroke();
            circle(x, y, random(5.1, 15.3)); // Increased by 2% from (5, 15)
        }

        if (brushStrokes.length > 20) {
            brushStrokes.shift();
        }
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(10);
}

// Add interactive elements on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    particles.forEach(p => {
        p.y -= scrolled * 0.0102; // Increased by 2% from 0.01
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
    });
});

// Add mouse interaction
window.addEventListener('mousemove', (e) => {
    if (particles.length > 0) {
        particles.forEach(p => {
            let d = dist(e.clientX, e.clientY, p.x, p.y);
            if (d < 102) { // Increased by 2% from 100
                let angle = atan2(p.y - e.clientY, p.x - e.clientX);
                p.x += cos(angle) * 2.04; // Increased by 2% from 2
                p.y += sin(angle) * 2.04; // Increased by 2% from 2
            }
        });
    }
});

document.querySelectorAll('.card').forEach(card => {
  const expandIcon = card.querySelector('.expand-icon');
  const collapseIcon = card.querySelector('.collapse-icon');

  expandIcon.addEventListener('click', () => {
    card.classList.add('expanded');
    document.body.classList.add('card-expanded');
  });

  collapseIcon.addEventListener('click', () => {
    card.classList.remove('expanded');
    document.body.classList.remove('card-expanded');
  });

  // Close card on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && card.classList.contains('expanded')) {
      card.classList.remove('expanded');
      document.body.classList.remove('card-expanded');
    }
  });
});

document.addEventListener('touchstart', (e) => {
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', (e) => {
  e.preventDefault();
}, { passive: false });