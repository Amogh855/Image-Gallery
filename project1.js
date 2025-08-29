const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

// Open lightbox
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Next/Prev navigation
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryImages.length - 1;
  if (currentIndex >= galleryImages.length) currentIndex = 0;
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Bonus: Filter function
function filterSelection(category) {
  const images = document.querySelectorAll(".gallery img");
  if (category === "all") {
    images.forEach(img => img.style.display = "block");
  } else {
    images.forEach(img => {
      img.style.display = img.classList.contains(category) ? "block" : "none";
    });
  }
}