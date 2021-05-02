/* Test if this is iOS */
var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
if (isIOS) {
  /* Use interval to check if model-viewer exists and try to start the iOS AR Quick Look immediatelly */
  var checkExist = setInterval(function() {
    modelViewer = document.querySelector("model-viewer");
    if (modelViewer != null) {
      /* Start the iOS AR Quick Look */
      modelViewer.activateAR();
      clearInterval(checkExist);
    }
  }, 500);
}
