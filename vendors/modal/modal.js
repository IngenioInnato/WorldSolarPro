// https://www.w3docs.com/snippets/javascript/how-to-create-a-modal-dialog-box-with-css-and-javascript.html
var modal = document.querySelector(".modal");
var trigger = document.querySelectorAll(".btn-play");
var closeButton = document.querySelector(".close-button");
var modalVideo = document.querySelector('.modal__video')

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
    modalVideo.setAttribute('src', '')
  }
}
trigger.forEach(el => {
  el.addEventListener("click", (e) => {
    var videoURL = e.target.dataset.video;
    videoURL += '?&autoplay=1&mute=1';
    modalVideo.setAttribute('src', videoURL);
    toggleModal();
    e.preventDefault;
  });
});
// closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);