<script setup>
import { ref, watch } from "vue";
import { useClickOutside } from "@/composables/useClickOutside.js";

defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["closemodal"]);

// when clicked on this target, emits to close modal
const clickOutsideTarget = ref(null);

const { onClickOutside } = useClickOutside();

// returns a ref that can be watched, so when user clicks on target,
// modal is closed; of course the target is the modal-wrapper.
const isClickedOutside = onClickOutside(clickOutsideTarget);

watch(isClickedOutside, (newValue) => {
  if (newValue === true) {
    emits("closemodal");
  }
});
</script>

<template>
  <Transition name="modal-fade">
    <div class="modal-wrapper" v-if="isVisible" ref="clickOutsideTarget">
      <div class="modal" role="dialog">
        <header>
          <slot name="header">
            <h2>Modal Header</h2>
          </slot>
          <button
            @click="$emit('closemodal')"
            class="secondary"
            aria-label="Close modal"
            data-modal="close"
          >
            &times;
          </button>
        </header>

        <hr />

        <section>
          <slot name="body">
            <h3>Modal Body</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              provident eaque officiis excepturi? Eum eaque officia perspiciatis
              inventore tempora labore.
            </p>
          </slot>
        </section>

        <hr />

        <div>
          <slot name="footer">
            <p>Modal Footer</p>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-wrapper {
  background: rgb(0 0 100 / 0.25);
  backdrop-filter: blur(0.75rem);
  position: absolute;
  inset: 0;
  display: flex;
}

.modal {
  width: min(24rem, 100%);
  height: fit-content;
  margin: auto;
  padding: 1rem 2rem;
  border-style: solid;
  border-width: 3px;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
}

.modal header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal button[data-modal="close"] {
  font-size: 4ex;
  line-height: 1;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  opacity: 1;
  transform: scale(1);
  /* to enforce transitions for users with reduced-motion */
  /* add one !important to any transition property */
  /* note that picocss respects reduced-motion by default */
  transition-duration: 0.2s;
  transition-property: opacity, transform;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
