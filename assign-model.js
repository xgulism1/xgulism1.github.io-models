const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('model')) {
  const filename = urlParams.get('filename')
  const friendlyName = urlParams.get('friendly-name')
  
  const modelViewer = document.querySelector('model-viewer');
  modelViewer.setAttribute('src', `models-android/${filename}.glb`);
  modelViewer.setAttribute('ios-src', `models-ios/${filename}.usdz`);
  modelViewer.setAttribute('poster', `thumbnails/${filename}.jpg`);
  modelViewer.setAttribute('alt', `${friendlyName}`);
  document.title = `${friendlyName}`;
}
