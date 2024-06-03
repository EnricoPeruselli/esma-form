<script setup>
import {reactive, ref} from 'vue'


const props = defineProps({
    switchOptions: {
        type: Object,
        default: () => ({
            class: '',
            text: '',
            details: '',
            emit: ''
        })
    },
})

const emit = defineEmits(['scwitchEmit'])

let booleanValue = false

const emitSwitch = () => {
    emit('scwitchEmit', {emit: props.switchOptions.emit, value: booleanValue = !booleanValue})
}


</script>

<template>
  <section class="the-big-ja-switch">
    <label
      :class="switchOptions.class"
      class="switch"
    >
      <input
        type="checkbox"
        @click="emitSwitch"
      >
      <span class="slider round" />
    </label>
    <div class="switch-details">
      <p>{{ switchOptions.text }}</p>
      <span>{{ switchOptions.subtitle }}</span>
    </div>
  </section>
</template>