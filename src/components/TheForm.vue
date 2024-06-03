<script setup>
import FormWrapper from '@/components/form/FormWrapper.vue'
const props = defineProps({
  formData: {
    type: Object,
    default: () => {}
  },
  formRules: {
    type: Object,
    default: () => {}
  },
})
</script>

<template>
  <FormWrapper
    :form-rules="formRules"
    :form-data="formData"
  />
</template>