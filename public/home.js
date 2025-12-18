// Background animation
document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img4.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img6.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img8.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img1.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img10.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img11.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img15.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img16.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img17.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img18.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img19.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img2.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img20.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img21.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img22.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img23.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img24.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img25.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img26.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img27.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img3.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img5.jpg",
        "https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/morocco/img9.jpg"
    ];
    const sliders = document.querySelectorAll('.bg');
    let current = 0;

    sliders.forEach((slider, index) => {
        slider.style.backgroundImage = `url(${backgrounds[index]})`;
    });

    sliders[0].classList.add('active');

    setInterval(() => {
        sliders[current].classList.remove('active');
        current = (current + 1) % sliders.length;
        sliders[current].classList.add('active');
    }, 5000);

    // Smooth scroll for Explore Tours button
    const exploreBtn = document.getElementById('exploreBtn');
    exploreBtn.addEventListener('click', () => {
        document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
    });
});

   document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.box-image');
            const dots = document.querySelectorAll('.dot');
            let currentIndex = 0;
            let interval;
            // Function to change image
            function changeImage(index) {
                // Remove active class from all images and dots
                images.forEach(img => img.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                // Add active class to selected image and dot
                images[index].classList.add('active');
                dots[index].classList.add('active');
                currentIndex = index;
            }
            // Auto slide function
            function autoSlide() {
                let nextIndex = (currentIndex + 1) % images.length;
                changeImage(nextIndex);
            }
            // Start auto slide
            function startSlide() {
                interval = setInterval(autoSlide, 5000);
            }
            // Initialize
            startSlide();
            // Add click event to dots
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    clearInterval(interval);
                    const index = parseInt(this.getAttribute('data-index'));
                    changeImage(index);
                    startSlide();
                });
            });
            // Pause on hover
            const headerContainer = document.querySelector('.box-container');
            headerContainer.addEventListener('mouseenter', function() {
                clearInterval(interval);
            });
            headerContainer.addEventListener('mouseleave', function() {
                startSlide();
            });
        });