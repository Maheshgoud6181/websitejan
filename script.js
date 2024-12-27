// Event data
const events = [
  {
    date: "FEBRUARY 17, 2025",
    time: "12:00 PM",
    description:
      "Evolvere Society is a collaborative community at NIT Durgapur focused on Biotechnology and research. We aim to promote innovation, critical thinking, and skill-building through projects, events, and knowledge-driven activities.",
    imageUrl: "images/prions.png",
  },
  {
    date: "JANUARY 17, 2025",
    time: "12:00 PM",
    description:
      "Evolvere Society is a collaborative community at NIT Durgapur focused on Biotechnology and research. We aim to promote innovation, critical thinking, and skill-building through projects, events, and knowledge-driven activities.",
    imageUrl: "images/prions.png",
  },
];

const carouselInner = document.getElementById("carousel-inner");

events.forEach((event, index) => {
  const carouselItem = document.createElement("div");
  carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");

  carouselItem.innerHTML = `
<div class="event-details">
<div class="event-image">
  <img src="${event.imageUrl}" alt="Event Image">
</div>
<div class="date-box">
  <p id="date">${event.date}</p>
  <p>${event.time}</p>
</div>
<div class="event-description">
  <h3>DETAILS</h3>
  <p>${event.description}</p>
</div>
</div>
`;

  carouselInner.appendChild(carouselItem);
});

let currentIndex = 0;
const carouselItems = document.querySelectorAll(".carousel-item");
const totalItems = carouselItems.length;

document.getElementById("prevBtn").addEventListener("click", () => {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
  carouselItems[currentIndex].classList.add("active");
});

document.getElementById("nextBtn").addEventListener("click", () => {
  carouselItems[currentIndex].classList.remove("active");
  currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
  carouselItems[currentIndex].classList.add("active");
});

// Function to detect if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Add event listener for scrolling
window.addEventListener("scroll", function () {
  const facultyHeading = document.querySelector(".faculty-heading");

  // Check if the element is in the viewport
  if (isElementInViewport(facultyHeading)) {
    facultyHeading.classList.add("visible"); // Trigger the animation by adding the class
  }
});
