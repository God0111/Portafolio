document.addEventListener("DOMContentLoaded", function () {
    // Manejar las estrellas de puntuación
    const stars = document.querySelectorAll('.stars button');
    let rating = 0;

    // Añadir evento de clic a cada estrella
    stars.forEach(star => {
        star.addEventListener('click', function () {
            rating = parseInt(star.getAttribute('data-value'));
            updateStarRating();
        });
    });

    // Actualizar el color de las estrellas basándose en la puntuación seleccionada
    function updateStarRating() {
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= rating) {
                star.style.color = '#ff007f'; // Color rosa para las estrellas seleccionadas
            } else {
                star.style.color = '#333333'; // Color gris para las estrellas no seleccionadas
            }
        });
    }

    // Funcionalidad para enviar la reseña
    const reviewForm = document.querySelector('form');
    const reviewTextArea = document.getElementById('review');
    const reviewsContainer = document.querySelector('.reviews-container');

    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que la página se recargue

        const reviewText = reviewTextArea.value.trim();

        if (reviewText && rating > 0) {
            // Crear una nueva reseña
            const newReview = document.createElement('div');
            newReview.classList.add('review');
            newReview.innerHTML = `
                <p><strong>⭐️${'⭐️'.repeat(rating)} - </strong>${reviewText}</p>
            `;

            // Agregar la reseña al contenedor de reseñas
            reviewsContainer.appendChild(newReview);

            // Limpiar el formulario después de enviarlo
            reviewTextArea.value = '';
            rating = 0;
            updateStarRating();
        } else {
            alert("Por favor, complete la reseña y seleccione una puntuación.");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("whatsapp-button");
    const chat = document.getElementById("whatsapp-chat");
    let offsetX, offsetY, isDragging = false;

    button.style.position = "fixed"; // Asegura que el botón siempre esté visible
    chat.style.position = "fixed"; // El chat también se mantiene fijo

    button.addEventListener("click", () => {
        chat.classList.toggle("hidden");
    });

    button.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - button.getBoundingClientRect().left;
        offsetY = e.clientY - button.getBoundingClientRect().top;
        button.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;
            
            // Evita que el botón se salga de la pantalla
            const maxX = window.innerWidth - button.clientWidth;
            const maxY = window.innerHeight - button.clientHeight;
            x = Math.max(0, Math.min(x, maxX));
            y = Math.max(0, Math.min(y, maxY));
            
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
            chat.style.left = `${x}px`;
            chat.style.top = `${y - 70}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        button.style.cursor = "grab";
    });
});
