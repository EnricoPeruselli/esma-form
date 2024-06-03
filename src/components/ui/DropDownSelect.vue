<script setup>

import { useSlots, useAttrs } from 'vue'


// SET prop

const props = defineProps({
    data: {
      type: Object,
      default: () => {}
    },
})

// SET emit 

const emit = defineEmits(['action'])

// SET attr

const attrs = useAttrs()

// SET Function

const updateValue = (value) => {
    emit('action', value)
}


</script>

<template>
  <!-- data.class serve per settare la classe bootstrap, per le check/radio serve check per gli altri group -->

  <div
    :class="{dark: data.dark}"
    class="card drop-down-select"
  >
    <div>
      <template v-if="data.options">
        <!-- se è una select -->
        <select
          class="form-select"
          @change="updateValue"
        >
          <option
            value=""
            disabled
            selected
          >
            {{ data.placeholder }}
          </option>
          <option
            v-for="(option, i) in data.options"
            :key="i"
            :value="option.value"
          >
            {{ option.value }}
          </option>
        </select>
      </template>
    </div>
  </div>
</template>
