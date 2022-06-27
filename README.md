# Vue Modal Component

Two modal component with transitions using Vue's teleport feature.

Created using [Vue 3](https://vuejs.org/) and [PicoCSS](https://picocss.com/) which is a CSS framework based on Semantic HTML5 with accessibility in mind.

## Benefits of teleport

Teleport makes sure modal is the closed element in terms of depth because it is injected to just before the body end tag.

Compare *BaseModal* component with *TeleportModal*; when clicking on `Show Modal` button, **aria-busy loading** indicator is awefully visible on *BaseModal*. But on *TeleportModal* thanks to Vue's Teleport feature, `Show Modal` button loading will be rendered behind the `modal-wrapper` since it has a backdrop filter (blur) effect, so there is no unexpected behaviour.

<!-- ![Preview](./screenshot/Vue-Modal-Component.gif) -->
