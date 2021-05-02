# xgulism1.github.io

### Scripts (needed):
* https://unpkg.com/@webcomponents/webcomponentsjs@2.5.0/webcomponents-loader.js
* https://unpkg.com/intersection-observer@0.12.0/intersection-observer.js
* https://unpkg.com/resize-observer-polyfill@1.5.1/dist/ResizeObserver.js
* https://unpkg.com/focus-visible@5.2.0/dist/focus-visible.min.js
* https://unpkg.com/@google/model-viewer@1.6.0/dist/model-viewer.min.js

```
<!-- 🚨 REQUIRED: Web Components polyfill to support Edge and Firefox < 63 -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>

<!-- 💁 OPTIONAL: Intersection Observer polyfill for better performance in Safari and IE11 -->
<script src="https://unpkg.com/intersection-observer/intersection-observer.js"></script>

<!-- 💁 OPTIONAL: Resize Observer polyfill improves resize behavior in non-Chrome browsers -->
<script src="https://unpkg.com/resize-observer-polyfill/dist/ResizeObserver.js"></script>

<!-- 💁 OPTIONAL: The :focus-visible polyfill removes the focus ring for some input types -->
<script src="https://unpkg.com/focus-visible/dist/focus-visible.min.js" defer></script>

<!-- 🚨 REQUIRED: The model-viewer component -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>

<!-- Assigns model based on URL parameters -->
<script src="scripts/assign-model.js"></script>

<!-- On iOS, opens the iOS AR Quick Look App immediatelly -->
<script src="scripts/ios-redirect.js"></script>
```

### Tests (not relevant anymore):

#### 2021-05-02:

```
<!-- The following libraries and polyfills are recommended to maximize browser support -->

<!-- 🚨 REQUIRED: Web Components polyfill to support Edge and Firefox < 63 -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"></script>

<!-- 💁 OPTIONAL: Intersection Observer polyfill for better performance in Safari and IE11 -->
<script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>

<!-- 💁 OPTIONAL: Resize Observer polyfill improves resize behavior in non-Chrome browsers -->
<script src="https://unpkg.com/resize-observer-polyfill@1.5.0/dist/ResizeObserver.js"></script>

<!-- 💁 OPTIONAL: The :focus-visible polyfill removes the focus ring for some input types -->
<script src="https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js" defer></script>

<!-- Import the component -->
<script type="module" src="https://unpkg.com/@google/model-viewer@1.2.1/dist/model-viewer.min.js"></script>
<script nomodule src="https://unpkg.com/@google/model-viewer@1.2.1/dist/model-viewer-legacy.js"></script>
```

* version 1.2.1 is the last working version
* version 1.3.0 works only for some models
* later versions (up to and including 1.6.0) does not work

