// Get URL params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Assign title
if (urlParams.has('friendly-name')) {
  const friendlyName = urlParams.get('friendly-name');
  document.title = `${friendlyName}`;
}

// Try to assign model to the model-viewer
var checkExist = setInterval(function() {
  const modelViewer = document.querySelector('model-viewer');
  if (modelViewer) {
    if (urlParams.has('filename')) {
      const filename = urlParams.get('filename');
      modelViewer.setAttribute('src', `models-android/${filename}.glb`);
      modelViewer.setAttribute('ios-src', `models-ios/${filename}.usdz`);
      modelViewer.setAttribute('poster', `thumbnails/${filename}.jpg`);
    }
    if (urlParams.has('friendly-name')) {
      const friendlyName = urlParams.get('friendly-name');
      modelViewer.setAttribute('alt', `${friendlyName}`);
    }
    clearInterval(checkExist);
  }
}, 500);
