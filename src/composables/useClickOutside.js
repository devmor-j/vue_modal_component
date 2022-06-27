import { onMounted, ref } from "vue";

export function useClickOutside() {
  const isTargetSelected = ref(false);

  const onClickOutside = (target) => {
    onMounted(() => {
      window.addEventListener("click", (event) => {
        // for more info about composedPath, checkout mdn
        // https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
        isTargetSelected.value = target.value === event.composedPath()[0];
      });
    });

    return isTargetSelected;
  };

  return {
    onClickOutside,
  };
}
