console.log("test123");

window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
});

(() => {
  console.log('This function runs now');
})();

// Test if this is iOS
var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
console.log(isIOS);
//if (isIOS) {
  // Use interval to check if model-viewer exists and try to start the iOS AR Quick Look immediatelly
  var checkExist = setInterval(function() {
    modelViewer = document.querySelector("model-viewer");
    if (modelViewer != null) {
      // Start the iOS AR Quick Look
      console.log('activateAR');
      modelViewer.activateAR();
      //clearInterval(checkExist);
    }
  }, 5000);
//}
