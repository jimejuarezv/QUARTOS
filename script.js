document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close');

    // Agrega el evento para cada imagen de la galería
    images.forEach((image) => {
        image.addEventListener('click', function() {
            modalImage.src = this.src; // Asigna la imagen clicada a la ventana modal
            modalDescription.textContent = this.alt; // Usa el texto alternativo de la imagen como descripción
            modal.style.display = "flex"; // Muestra la ventana modal
        });
    });

    // Cierra la ventana modal al hacer clic en el botón de cerrar
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Cierra la ventana modal si se hace clic fuera del contenido modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
