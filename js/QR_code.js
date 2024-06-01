document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    DownloadApp(window.innerWidth <= 768);
  });

document
  .getElementById("downloadNowButton")
  .addEventListener("click", function () {
    DownloadApp(true);
  });

const DownloadApp = (isMobile) => {
  console.log(isMobile);

  var url = window.location.origin + "/ScheduleDemo/public/UniShedule.apk";

  if (isMobile) {
    window.location.href = url;
  } else {
    var modal = document.getElementById("modal");
    modal.classList.toggle("is-hidden");

    var qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = "";

    new QRCode(qrCodeContainer, url);
  }
};

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    var modal = document.getElementById("modal");
    modal.classList.toggle("is-hidden");
  });

window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.classList.toggle("is-hidden");
  }
});
