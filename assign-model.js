var checkExist = setInterval(function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const modelViewer = document.querySelector('model-viewer');

  if (urlParams.has('filename')) {
    const filename = urlParams.get('filename');

    if (modelViewer != null) {
      modelViewer.setAttribute('src', `models-android/${filename}.glb`);
      modelViewer.setAttribute('ios-src', `models-ios/${filename}.usdz`);
      modelViewer.setAttribute('poster', `thumbnails/${filename}.jpg`);
    }
  }

  if (urlParams.has('friendly-name')) {
    const friendlyName = urlParams.get('friendly-name');

    if (modelViewer != null) {
      modelViewer.setAttribute('alt', `${friendlyName}`);
    }

    document.title = `${friendlyName}`;
  }
  
  if (modelViewer != null) {
      clearInterval(checkExist);
  }
  
}, 500);
