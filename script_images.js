document.addEventListener("DOMContentLoaded", function() {
    // Resimlerin yüksekliklerini kontrol ederek body'nin minimum yüksekliğini ayarla
    var images = document.querySelectorAll(".image-container img");
    var bodyHeight = Math.max(...Array.from(images).map(img => img.clientHeight));
    document.body.style.minHeight = bodyHeight + "px";
});
