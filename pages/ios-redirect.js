// Test if this is iOS
// @see https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
function isIOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

if (isIOS) {
  // Use interval to check if model-viewer exists and try to start the iOS AR Quick Look immediatelly
  var checkExist = setInterval(function() {
    modelViewer = document.querySelector("model-viewer");
    if (modelViewer != null) {
      // Start the iOS AR Quick Look
      modelViewer.activateAR();
      clearInterval(checkExist);
    }
  }, 500);
}
