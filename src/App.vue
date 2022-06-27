<script setup>
import { ref } from "vue";
import TeleportModal from "@/components/TeleportModal.vue";
// import BaseModal from "@/components/BaseModal.vue";

const isModalVisible = ref(false);
</script>

<template>
  <main class="container">
    <h1>App</h1>

    <!-- <BaseModal :is-visible="isModalVisible" @hidemodal="isModalVisible = false">
    </BaseModal> -->

    <TeleportModal
      :is-visible="isModalVisible"
      @hidemodal="isModalVisible = false"
    >
    </TeleportModal>

    <button :aria-busy="isModalVisible" @click="isModalVisible = true">
      Show Modal
    </button>
  </main>
</template>

<style scoped>
button {
  width: fit-content;
}
</style>
