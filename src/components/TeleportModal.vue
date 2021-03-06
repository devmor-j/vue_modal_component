<script setup>
import { computed, ref, watch } from "vue";
import { useMobile } from "@/composables/useMobile.js";
import { useClickOutside } from "@/composables/useClickOutside.js";

defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  showTransition: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(["closemodal"]);

// isMobile is true when user is on a mobile device
const { isMobile } = useMobile();

const checkMobile = computed(() => {
  return isMobile();
});

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
  <!-- disable teleport on mobile devices -->
  <Teleport to="body" :disabled="checkMobile">
    <Transition name="modal-fade" :css="showTransition">
      <div class="modal-wrapper" v-if="isVisible" ref="clickOutsideTarget">
        <div class="modal" role="dialog">
          <header>
            <slot name="header">
              <h2>Modal Header</h2>
            </slot>
            <button
              @click="$emit('closemodal')"
              aria-label="Close modal"
              class="secondary"
              data-modal="close"
            >
              &times;
            </button>
          </header>

          <section>
            <slot name="body">
              <h3>Modal Content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat provident eaque officiis excepturi? Eum eaque officia
                perspiciatis inventore tempora labore.
              </p>
            </slot>
          </section>

          <div>
            <slot name="footer">
              <p>Footer</p>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
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
  transition-duration: 0.3s;
  transition-property: opacity, transform;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
