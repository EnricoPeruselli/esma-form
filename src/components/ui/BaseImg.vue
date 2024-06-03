<script setup>
// import FormWrapper from '@/components/form/FormWrapper.vue'
const props = defineProps({
    imgOptions: {
    type: Object,
    default: () => ({
        src: '',
        class: 'simple-img'
    })
  },
})
</script>

<template>
  <img
    class="simple-img"
    :src="imgOptions.src"
    :class="imgOptions.class"
  >
</template>