<script setup>
import BaseText from '@/components/ui/BaseText.vue'

const props = defineProps({
  actionsOptions: {
    type: Object,
    default: () => ({
      actions: [],
      class: ''
    })
  },
})



</script>

<template>
  <section class="header-user">
    <font-awesome-icon
      icon="fa-solid fa-user"
      @click="emitUser"
    />
  </section>
</template>