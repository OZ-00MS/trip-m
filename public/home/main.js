// Background animation
document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        "https://picsum.photos/1200/800?random=1",
        "https://picsum.photos/1200/800?random=2",
        "https://picsum.photos/1200/800?random=3",
        "https://picsum.photos/1200/800?random=4",
        "https://picsum.photos/1200/800?random=5"
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