(function () {
  const heroData = [
    {
      heading: "Gamified Learning Experience",
      description:
        "Our platform enhances engagement through game-based learning strategies, making education exciting and effective.",
    },
    {
      heading: "Interdisciplinary Approach",
      description:
        "We integrate various fields of study, fostering creative problem-solving and a holistic understanding of engineering concepts.",
    },
    {
      heading: "Immersive Virtual Tours",
      description:
        "Explore real-world scenarios and environments with our immersive virtual tours, providing hands-on learning like never before.",
    },
    {
      heading: "Immersive 3D and AR Content",
      description:
        "Our immersive 3D and augmented reality content brings complex engineering concepts to life, enhancing understanding and retention.",
    },
    {
      heading: "Hands-on Learning Projects",
      description:
        "Our platform offers interactive projects that bridge theory and practical application, fostering real-world engineering skills.",
    },
  ];

  let currentSlide = 0;
  const titleElement = document.querySelector(".hero-title");
  const descriptionElement = document.querySelector(".hero-description");

  function updateSlide() {
    if (titleElement && descriptionElement) {
      titleElement.textContent = heroData[currentSlide].heading;
      descriptionElement.textContent = heroData[currentSlide].description;
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % heroData.length;
    updateSlide();
  }

  // Initial update
  updateSlide();

  // Set up the interval
  setInterval(nextSlide, 3000);
})();

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Interactive course cards
document.querySelectorAll(".card-hover").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove("shadow-lg");
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
    navbar.classList.add("shadow-lg");
  }

  lastScroll = currentScroll;
});

// Mobile menu functionality
const mobileMenu = document.createElement("div");
mobileMenu.className = "md:hidden";
mobileMenu.innerHTML = `
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transform transition-transform duration-300 translate-x-full" id="mobile-menu">
        <div class="fixed right-0 top-0 w-64 h-full bg-white shadow-lg">
            <div class="p-4">
                <button class="float-right text-gray-600" id="close-menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div class="mt-8">
                <a href="#home" class="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Home</a>
                <a href="#features" class="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Features</a>
                <a href="#courses" class="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Courses</a>
                <a href="#about" class="block px-4 py-2 text-gray-800 hover:bg-indigo-50">About</a>
                <div class="px-4 py-2">
                    <button class="w-full bg-indigo-600 text-white px-4 py-2 rounded-md">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
`;

document.body.appendChild(mobileMenu);

// // Mobile menu toggle
// document.querySelector(".hamburger").addEventListener("click", () => {
//   document.getElementById("mobile-menu").classList.remove("translate-x-full");
// });

// document.getElementById("close-menu").addEventListener("click", () => {
//   document.getElementById("mobile-menu").classList.add("translate-x-full");
// });

// // Close mobile menu when clicking outside
// document.getElementById("mobile-menu").addEventListener("click", (e) => {
//   if (e.target.id === "mobile-menu") {
//     document.getElementById("mobile-menu").classList.add("translate-x-full");
//   }
// });

// Lazy loading for images
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => imageObserver.observe(img));
});





