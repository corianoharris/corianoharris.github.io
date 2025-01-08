document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  updateCopyrightYear();
  setupTextFade('.fade-in-out');
  updateCounters();
  sortEventCards();
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

  // Calculate and update counters
  function updateCounters() {
    const cards = document.querySelectorAll('.card');
    // const eventCards = document.querySelectorAll('.event-card');
    const webCards = document.querySelectorAll('.card[data-category="web"]');
    const uxCards = document.querySelectorAll('.card[data-category="ux"]');
    // const talkCards = document.querySelectorAll('.event-card[data-category="talk"]');
    // const hostCards = document.querySelectorAll('.event-card[data-category="host"]');
    
    document.querySelector('input[value="all-products"]')
      .parentElement.querySelector('.count').textContent = cards.length;

      // document.querySelector('input[value="all-events"]')
      // .parentElement.querySelector('.count-events').textContent = eventCards.length;
    
    document.querySelector('input[value="web"]')
      .parentElement.querySelector('.count').textContent = webCards.length;
    
    document.querySelector('input[value="ux"]')
      .parentElement.querySelector('.count').textContent = uxCards.length;

    // document.querySelector('input[value="talk"]')
    //   .parentElement.querySelector('.count-events').textContent = talkCards.length;

    // document.querySelector('input[value="host"]')
    //   .parentElement.querySelector('.count-events').textContent = hostCards.length;
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
    document.querySelector('.container').classList.add('expanded-mode');
  });

  collapseIcon.addEventListener('click', () => {
    card.classList.remove('expanded');
    document.body.classList.remove('card-expanded');
    document.querySelector('.container').classList.remove('expanded-mode');
  });

  // Close card on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && card.classList.contains('expanded')) {
      card.classList.remove('expanded');
      document.body.classList.remove('card-expanded');
    }
  });
});


document.querySelectorAll(".card").forEach((card) => {
  // const desc = card.querySelector(".card-desc");
  const shortDesc = card.querySelector(".short-desc");
  const toggleButton = card.querySelector(".toggle-desc-btn");

  if (shortDesc.textContent.length > 30) {
    const fullText = shortDesc.textContent;
    const truncatedText = fullText.slice(0, 30);

    shortDesc.textContent = truncatedText;

    toggleButton.addEventListener("click", () => {
      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        shortDesc.textContent = truncatedText;
        toggleButton.textContent = "...more";
      } else {
        shortDesc.textContent = fullText;
        toggleButton.textContent = "...less";
      }

      toggleButton.setAttribute("aria-expanded", !isExpanded);
    });
  } else {
    toggleButton.style.display = "none"; // Hide toggle button if text is short
  }
});

document.querySelectorAll(".mindset-text").forEach((text) => {
  // const desc = card.querySelector(".card-desc");
  const shortMindsetDesc = text.querySelector(".short-mindset-desc");
  const toggleMindsetButton = text.querySelector(".toggle-mindset-desc-btn");

  if (shortMindsetDesc.textContent.length > 500) {
    const fullText = shortMindsetDesc.textContent;
    const truncatedText = fullText.slice(0, 500);

    shortMindsetDesc.textContent = truncatedText;

    toggleMindsetButton.addEventListener("click", () => {
      const isExpanded = toggleMindsetButton.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        shortMindsetDesc.textContent = truncatedText;
        toggleMindsetButton.textContent = "...more";
      } else {
        shortMindsetDesc.textContent = fullText;
        toggleMindsetButton.textContent = "...less";
      }

      toggleMindsetButton.setAttribute("aria-expanded", !isExpanded);
    });
  } else {
    toggleMindsetButton.style.display = "none"; // Hide toggle button if text is short
  }
});

  // Handle filtering
  document.querySelectorAll('input[name="filter"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const filter = e.target.value;
      const cards = document.querySelectorAll('.card');
      
      cards.forEach(card => {
        if (filter === 'all-products' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  document.querySelectorAll('input[name="filter-events"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const filter = e.target.value;
      const cards = document.querySelectorAll('.event-card');
      
      cards.forEach(card => {
        if (filter === 'all-events' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

// nav links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    links.forEach(l => l.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});

  function sortEventCards() {

  // Select the container and all event cards
const eventContainer = document.querySelector("#events");
const eventCards = [...document.querySelectorAll(".event-card")];

// Sort event cards by their data-date attribute
eventCards.sort((a, b) => {
  const dateA = new Date(a.getAttribute("data-date"));
  const dateB = new Date(b.getAttribute("data-date"));
  return dateB - dateA; // Most recent first
});

// Append sorted event cards back to the container
eventCards.forEach((card) => eventContainer.appendChild(card));

}


