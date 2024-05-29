document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Показати модальне вікно
    var modal = document.getElementById("modal");
    modal.style.display = "block";

    // Згенерувати QR-код
    var qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = ""; // Очистити попередній QR-код, якщо він є

    var url = window.location.origin + "/ScheduleDemo/public/UniShedule.apk";
    console.log(url);
    // Використовуємо бібліотеку QRCode.js для генерації QR-коду
    new QRCode(qrCodeContainer, url);
  });

// Закрити модальне вікно при натисканні на X
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  });

// Закрити модальне вікно при натисканні за його межами
window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
