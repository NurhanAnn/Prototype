const video = document.getElementById('camera-stream');
const captureButton = document.getElementById('capture-button');
const canvas = document.getElementById('captured-image');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
  .then(stream => {
    video.srcObject = stream;
    video.play();
    captureButton.addEventListener('click', captureImage);
  });

function captureImage() {
  const context = document.getElementById('captured-image').getContext('2d');
  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}