<script setup>
import { computed, ref } from "vue";
import { useMobile } from "@/composables/useMobile.js";
import TeleportModal from "@/components/TeleportModal.vue";
// import BaseModal from "@/components/BaseModal.vue";

const isModalVisible = ref(false);

// isMobile is true when user is on a mobile device
const { isMobile } = useMobile();

const checkMobile = computed(() => {
  return isMobile();
});
</script>

<template>
  <main class="container">
    <h1>App</h1>

    <!-- <BaseModal :is-visible="isModalVisible" @hidemodal="isModalVisible = false">
    </BaseModal> -->

    <Teleport to="body" :disabled="checkMobile">
      <TeleportModal
        :is-visible="isModalVisible"
        @hidemodal="isModalVisible = false"
      >
      </TeleportModal>
    </Teleport>

    <button @click="isModalVisible = true">Show Modal</button>
  </main>
</template>

<style scoped>
button {
  width: fit-content;
}
</style>
