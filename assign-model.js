const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('model')) {
  const modelName = urlParams.get('model-name')
  const modelAlt = urlParams.get('model-alt')
  
  const modelViewer = document.querySelector('model-viewer');
  modelViewer.setAttribute('src', `models-android/${modelName}.glb`);
  modelViewer.setAttribute('ios-src', `models-ios/${modelName}.usdz`);
  modelViewer.setAttribute('poster', `thumbnails/${modelName}.jpg`);
  modelViewer.setAttribute('alt', `${modelAlt}`);
  document.title = `${modelAlt}`;
}
