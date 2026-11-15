const portfolioCard = document.querySelector('.portfolio-card');
    const flipButtons = document.querySelectorAll('.flip-btn');

    flipButtons.forEach(button => {
        button.addEventListener('click', () => {
            portfolioCard.classList.toggle('is-flipped');
        });
    });