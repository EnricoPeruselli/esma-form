<script setup>
// import FormWrapper from '@/components/form/FormWrapper.vue'
const props = defineProps({
    titleOptions: {
    type: Object,
    default: () => ({
        type: 'h3',
        class: 'title'
    })
  },
})
</script>

<template>
  <component :is="titleOptions.type" :class="titleOptions.class">
    <slot></slot>
  </component>
</template>