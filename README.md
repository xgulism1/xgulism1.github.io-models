# xgulism1.github.io

## Testing versions on Android:

### Scripts (no longer needed):
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
### Tests (not relevant anymore):

* version 1.2.1 is the last working version
* version 1.3.0 works only for some models
* later versions (up to and including 1.6.0) does not work

### Working script (version 1.6.0):
* redirected script: https://unpkg.com/@google/model-viewer@1.6.0/dist/model-viewer.min.js

```
<!-- Import the component -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
```
