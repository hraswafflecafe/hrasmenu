document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector(".logo");

    // Logo animasyonunu başlat
    logo.classList.add("animate");

    // Logo animasyonu tamamlandıktan sonra yeni sayfaya yönlendir
    logo.addEventListener("animationend", function() {
        setTimeout(function() {
            window.location.href = "images.html";
        }, 1000); // Animasyon süresi kadar bekleyerek sayfayı yönlendir
    });
});
