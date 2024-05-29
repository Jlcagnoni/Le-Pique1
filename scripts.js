document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".photos img");

    images.forEach(function(image) {
        image.addEventListener("click", function() {
            alert("¡Has hecho clic en una imagen de Casa de picadas!");
        });
    });
});