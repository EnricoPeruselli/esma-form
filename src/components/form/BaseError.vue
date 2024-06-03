<script setup>

// SET prop

const props = defineProps({
    // è l'oggetto vuelidate, serve per mostrare i messaggi di errore
    error: {
      type: Object,
      default: () => {}
    }
})

</script>

<template>
  <small
    v-show="error"
    class="form-text d-block text-danger"
  >
    {{ error?.$errors[0]?.$message }}
  </small>
</template>
