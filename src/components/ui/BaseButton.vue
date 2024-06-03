<script setup>


const props = defineProps({
    buttonOptions: {
        type: Object,
        default: () => ({
            class: 'btn',
            emit: 'button'
        })
    },
})

const emit = defineEmits(['button'])

const emitButton = () => {
    emit(props.buttonOptions.emit)
}


</script>

<template>
  <button
    :class="buttonOptions.class"
    @click="emitButton"
  >
    <slot />
  </button>
</template>