


const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("glass-panel", "py-3");
        navbar.classList.remove("bg-transparent", "py-6");
    } else {
        navbar.classList.add("bg-transparent", "py-6");
        navbar.classList.remove("glass-panel", "py-3");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, 
        rootMargin: "0px", 
        threshold: 0.1, 
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    document.querySelectorAll(".fade-section").forEach((section) => {
        observer.observe(section);
    });

    
    const yearContainer = document.getElementById("year");
    if (yearContainer) {
        yearContainer.textContent = new Date().getFullYear();
    }
});



window.scrollCarousel = function (direction) {
    const carousel = document.getElementById("music-carousel");
    if (carousel) {
        
        const scrollAmount =
            window.innerWidth < 768 ? window.innerWidth * 0.85 : 824;
        carousel.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior:
                "smooth" ,
        });
    }
};
