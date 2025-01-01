document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const dotsNav = document.querySelector(".carousel-dots");
    const dots = Array.from(dotsNav.children);

    let currentSlideIndex = 0;

    const updateCarousel = (index) => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * slideWidth}px)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    };

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlideIndex = index;
            updateCarousel(currentSlideIndex);
        });
    });

    // Optional: Auto-slide functionality
    setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateCarousel(currentSlideIndex);
    }, 4000);
});
