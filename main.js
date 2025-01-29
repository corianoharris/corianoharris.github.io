document.addEventListener("DOMContentLoaded", () =>
{
  initializeNavigation();
  updateCopyrightYear();
  setupTextFade('.fade-in-out');
  sortEventCards();
  activeEventCard();
  projectCardFocusManagement.init();
});

function initializeNavigation()
{
  const nav = document.querySelector(".nav");
  const navOpenBtn = document.querySelector(".navOpenBtn");
  const navCloseBtn = document.querySelector(".navCloseBtn");
  const navLinks = document.querySelectorAll(".nav-links");

  navOpenBtn.addEventListener("click", () => nav.classList.add("openNav"));
  navCloseBtn.addEventListener("click", () => nav.classList.remove("openNav"));

  navLinks.forEach((link) =>
  {
    link.addEventListener("click", () => nav.classList.remove("openNav"));
  });
}

function updateCopyrightYear()
{
  const copyrightYear = document.querySelector(".copyright-year");
  copyrightYear.textContent = new Date().getFullYear();
}

function setupTextFade(selector, options = {})
{
  const elements = document.querySelectorAll(selector);
  const config = {
    threshold: 0.1,
    fadeInDuration: '0.5s',
    fadeOutDuration: '0.5s',
    ...options
  };

  const observer = new IntersectionObserver((entries) =>
  {
    entries.forEach(entry =>
    {
      entry.target.style.transition = `opacity ${entry.isIntersecting ? config.fadeInDuration : config.fadeOutDuration} ease-${entry.isIntersecting ? 'in' : 'out'}`;
      entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
    });
  }, { threshold: config.threshold });

  elements.forEach(element =>
  {
    element.style.opacity = 0;
    observer.observe(element);
  });
}

// background animation

let particles = [];
let brushStrokes = [];
let lastMouseX = 0;
let lastMouseY = 0;

function setup()
{
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');
  background(10);

  // Initialize particles with 2% larger sizes
  for (let i = 0; i < 100; i++)
  {
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

function draw()
{
  // Fade background
  background(255, 255, 255, 255);

  // Update and draw particles
  particles.forEach(p =>
  {
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
  brushStrokes.forEach((stroke, index) =>
  {
    stroke.life -= 0.5;
    if (stroke.life <= 0)
    {
      brushStrokes.splice(index, 1);
      return;
    }

    stroke.points.forEach((point, i) =>
    {
      if (i === 0) return;
      let prev = stroke.points[i - 1];

      stroke(255, 255, 255, stroke.life);
      strokeWeight(stroke.weight * (stroke.life / 100) * 1.02); // Increased by 2%
      line(prev.x, prev.y, point.x, point.y);
    });
  });

  // Interactive brush effect on mouse movement
  if (mouseIsPressed)
  {
    let speed = dist(mouseX, mouseY, lastMouseX, lastMouseY);
    let angle = atan2(mouseY - lastMouseY, mouseX - lastMouseX);

    for (let i = 0; i < 5; i++)
    {
      let randomOffset = random(-20.4, 20.4); // Increased by 2% from (-20, 20)
      let x = mouseX + cos(angle + PI / 2) * randomOffset;
      let y = mouseY + sin(angle + PI / 2) * randomOffset;

      fill(random(200, 255), random(50, 150), random(50, 150), 100);
      noStroke();
      circle(x, y, random(5.1, 15.3)); // Increased by 2% from (5, 15)
    }

    if (brushStrokes.length > 20)
    {
      brushStrokes.shift();
    }
  }

  lastMouseX = mouseX;
  lastMouseY = mouseY;
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
  background(10);
}


// Add interactive elements on scroll
window.addEventListener('scroll', () =>
{
  const scrolled = window.scrollY;
  particles.forEach(p =>
  {
    p.y -= scrolled * 0.0102; // Increased by 2% from 0.01
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;
  });
});

// Add mouse interaction
window.addEventListener('mousemove', (e) =>
{
  if (particles.length > 0)
  {
    particles.forEach(p =>
    {
      let d = dist(e.clientX, e.clientY, p.x, p.y);
      if (d < 102)
      { // Increased by 2% from 100
        let angle = atan2(p.y - e.clientY, p.x - e.clientX);
        p.x += cos(angle) * 2.04; // Increased by 2% from 2
        p.y += sin(angle) * 2.04; // Increased by 2% from 2
      }
    });
  }
});


document.querySelectorAll(".mindset-text").forEach((text) =>
{
  // const desc = card.querySelector(".card-desc");
  const shortMindsetDesc = text.querySelector(".short-mindset-desc");
  const toggleMindsetButton = text.querySelector(".toggle-mindset-desc-btn");

  if (shortMindsetDesc.textContent.length > 500)
  {
    const fullText = shortMindsetDesc.textContent;
    const truncatedText = fullText.slice(0, 500);

    shortMindsetDesc.textContent = truncatedText;

    toggleMindsetButton.addEventListener("click", () =>
    {
      const isExpanded = toggleMindsetButton.getAttribute("aria-expanded") === "true";

      if (isExpanded)
      {
        shortMindsetDesc.textContent = truncatedText;
        toggleMindsetButton.textContent = "...more";
      } else
      {
        shortMindsetDesc.textContent = fullText;
        toggleMindsetButton.textContent = "...less";
      }

      toggleMindsetButton.setAttribute("aria-expanded", !isExpanded);
    });
  } else
  {
    toggleMindsetButton.style.display = "none"; // Hide toggle button if text is short
  }
});

// nav links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link =>
{
  link.addEventListener('click', function ()
  {
    // Remove 'active' class from all links
    links.forEach(l => l.classList.remove('active'));

    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});


function sortEventCards() {
  // Select the container and all event cards with the 'events-card' class
  const eventContainer = document.querySelector("#events");
  const eventCards = [...document.querySelectorAll(".event-card")];

  // Log the initial order for debugging
  console.log("Initial order:", eventCards.map((card) => card.getAttribute("data-date")));

  // Sort event cards by their data-date attribute
  eventCards.sort((a, b) => {
    const dateA = new Date(a.getAttribute("data-date"));
    const dateB = new Date(b.getAttribute("data-date"));

    // Check for invalid dates
    if (isNaN(dateA) || isNaN(dateB)) {
      console.error("Invalid date format:", {
        dateA: a.getAttribute("data-date"),
        dateB: b.getAttribute("data-date"),
      });
      return 0; // Do not reorder invalid dates
    }

    // Sort by date (most recent first)
    return dateB - dateA;
  });

  // Log the sorted order for debugging
  console.log("Sorted order:", eventCards.map((card) => card.getAttribute("data-date")));

  // Clear the container and append sorted event cards
  eventContainer.innerHTML = ""; // Remove existing cards
  eventCards.forEach((card) => eventContainer.appendChild(card));
}



const activeEventCard = () =>
{

  const slider = document.querySelector(".slider");
  const cards = document.querySelectorAll(".card");

  // Update active card based on the scroll position
  slider.addEventListener("scroll", () =>
  {
    const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

    cards.forEach((card) =>
    {
      const cardStart = card.offsetLeft;
      const cardEnd = cardStart + card.offsetWidth;

      if (sliderCenter >= cardStart && sliderCenter <= cardEnd)
      {
        card.classList.add("active");
      } else
      {
        card.classList.remove("active");
      }
    });
  });

  // Add click event to update active card when all cards are visible
  cards.forEach((card) =>
  {
    card.addEventListener("click", () =>
    {
      // Remove active class from all cards
      cards.forEach((c) => c.classList.remove("active"));

      // Add active class to the clicked card
      card.classList.add("active");
    });
  });

};




// project card user tab experience

function projectCardFocusManagement() {
  // Focus management for radio buttons and card content
  function handleTabNavigation(event) {
    if (event.key === "Tab" && !event.shiftKey) {
      const activeElement = document.activeElement;
      const radioButtons = document.querySelectorAll('.three-d-bullet');
      const radioButtonsArray = Array.from(radioButtons);
      
      // Get the currently active card
      const activeCard = document.querySelector('.three-d-item[style*="display: block"]');
      
      // If we're on any tag in the active card's tags section
      if (activeElement.closest('.tags') && 
          activeElement.closest('.three-d-item') === activeCard) {
        
        // Get all tags in the current card
        const currentCardTags = Array.from(activeCard.querySelectorAll('.tags p'));
        const lastTagInCard = currentCardTags[currentCardTags.length - 1];
        
        // If we're on the last tag
        if (activeElement === lastTagInCard) {
          event.preventDefault();
          
          // Find the current radio button
          const currentRadio = document.querySelector('.three-d-bullet:checked');
          const currentIndex = radioButtonsArray.indexOf(currentRadio);
          
          // Calculate next radio index, wrapping around to the start if necessary
          const nextIndex = (currentIndex + 1) % radioButtonsArray.length;
          
          // Focus and check the next radio button
          radioButtonsArray[nextIndex].focus();
          radioButtonsArray[nextIndex].checked = true;
          
          // Trigger change event to update card display
          const changeEvent = new Event('change');
          radioButtonsArray[nextIndex].dispatchEvent(changeEvent);
        }
      }
    }
  }

  // Handle radio button changes to show/hide cards
  function handleRadioChange(radio) {
    const type = radio.getAttribute('data-type');
    
    // Hide all cards first
    document.querySelectorAll('.three-d-item:not(.empty-card)').forEach(card => {
      card.style.display = 'none';
    });
    
    // Show the selected card
    const selectedCard = document.querySelector(`.three-d-item[data-type="${type}"]:not(.empty-card)`);
    if (selectedCard) {
      selectedCard.style.display = 'block';
    }
  }

  // Initialize display and event listeners
  function init() {
    // Add keydown event listener
    document.addEventListener("keydown", handleTabNavigation);
    
    // Add change event listeners to radio buttons
    document.querySelectorAll('.three-d-bullet').forEach(radio => {
      radio.addEventListener('change', () => handleRadioChange(radio));
    });
    
    // Initialize initial display
    const checkedRadio = document.querySelector('.three-d-bullet:checked');
    if (checkedRadio) {
      handleRadioChange(checkedRadio);
    }
  }

  // Run initialization
  init();
}






