document.addEventListener('DOMContentLoaded', function () { //le script s'exécute lorsque le DOM est entièrement chargé

    // Carrousel

    let currentSlide = 0;
    const slides = document.querySelectorAll('#carousel .img-container img'); //on sélectionne toutes les images dans la balise avec l'ID carousel et la classe img-container.

    function showSlide(index) {       //Affiche la slide correspondant à l'index passé en paramètre et masque les autres
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) { //si on est sur la slide 1, on passe à la suivante la slide 2
            currentSlide++;
        } else {
            currentSlide = 0;            //sinon (si on est à la slide 2), on revient à la slide 1 (index=0)
        }
        showSlide(currentSlide);
    }

    function prevSlide() {
        if (currentSlide > 0) {      // si on est pas à la slide 1, on va à la slide précédente
            currentSlide--;
        } else {
            currentSlide = slides.length - 1; // sinon on revient à la dernière slide
        }
        showSlide(currentSlide);
    }

    // Ajout des gestionnaires d'événements
    const nextArrow = document.querySelector('.next-arrow'); // on récupère les sélecteurs requis dans des variables qu'on utilise
    const prevArrow = document.querySelector('.prev-arrow'); // dans les gestionnaires d'événement

    nextArrow.addEventListener('click', nextSlide); // si on clique sur l'icône next, on appelle la fonction nextSlide
    prevArrow.addEventListener('click', prevSlide); // si on clique sur l'icône prev, on appelle la fonction prevSlide



    //Sliders

    let currentSlider = 0;
    const sliders = document.querySelectorAll('.slider')
    const prevIcon = document.querySelector('.prev-icon i');
    const nextIcon = document.querySelector('.next-icon i');

    function showSlider(index) {
        sliders.forEach((slider, i) => {
            if (i === index) {
                slider.style.display = 'flex';
            } else {
                slider.style.display = 'none';
            }
        });
    }

    function activeIcon(icon) { // on inverse les couleurs du fond et de la fèche de l'icône pour montrer son état actif
        icon.style.backgroundColor = 'rgb(146, 37, 37)';
        icon.style.color = 'white';
    }

    function resetIconStyles() { // on redonne à l'icône son état d'origine
        prevIcon.style.backgroundColor = '';
        prevIcon.style.color = '';
        nextIcon.style.backgroundColor = '';
        nextIcon.style.color = '';
    }

    function nextSlider() {
        activeIcon(nextIcon);              // appel de activeIcon quand on clique sur nextIcon
        setTimeout(resetIconStyles, 250); // rappel à l'état d'origine de l'icône mais avec un délai de 250ms.
        if (currentSlider < sliders.length - 1) {
            currentSlider++;
        } else {
            currentSlider = 0;
        }
        showSlider(currentSlider);
    }

    function prevSlider() {                  
        activeIcon(prevIcon);              // appel de activeIcon quand on clique sur prevIcon
        setTimeout(resetIconStyles, 250); // rappel à l'état d'origine de l'icône mais avec un délai de 250ms.
        if (currentSlider > 0) {
            currentSlider--;
        } else {
            currentSlider = sliders.length - 1;
        }
        showSlider(currentSlider);
    }

    nextIcon.addEventListener('click', nextSlider);
    prevIcon.addEventListener('click', prevSlider);
})