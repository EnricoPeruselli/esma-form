<script setup>
// import FormWrapper from '@/components/form/FormWrapper.vue'
const props = defineProps({
  textOptions: {
    type: Object,
    default: () => ({
        type: 'p',
        class: 'text'
    })
  },
})
</script>

<template>
  <component
    :is="textOptions.type"
    :class="textOptions.class"
  >
    <slot />
  </component>
</template>