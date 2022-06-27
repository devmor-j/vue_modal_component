<script setup>
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
</script>

<template>
  <Transition name="modal-fade" :css="showTransition">
    <div class="modal-wrapper" v-if="isVisible">
      <div class="modal" role="dialog">
        <header>
          <slot name="header">
            <h2>Modal Header</h2>
          </slot>
          <button @click="$emit('hidemodal')" aria-label="Close modal">
            &times;
          </button>
        </header>

        <section>
          <slot name="body">
            <h3>Modal Content</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              provident eaque officiis excepturi? Eum eaque officia perspiciatis
              inventore tempora labore.
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

.modal button {
  font-size: 4ex;
  line-height: 1;
  user-select: none;
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
