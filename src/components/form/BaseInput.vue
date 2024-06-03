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

const emit = defineEmits(['input', 'reset'])

// SET attr

const attrs = useAttrs()

// SET Function

const updateValue = () => {
    const objToSend = {
        value: props.data.type === 'checkbox' ? event.target.checked : event.target.value,
        name: props.data.name,
        type: props.data.type,
        activator: props.data.activator
    }
    emit('input', objToSend)
}


</script>

<template>
  <!-- data.class serve per settare la classe bootstrap, per le check/radio serve check per gli altri group -->

  <div class="base-input">
    <div
      :class="data.type === 'checkbox' ? 'form-check' : ''"
    >
      <label
        v-if="data.title"
        :class="`form-${data.class}-label`"
        :for="data.name"
      >{{ data.title }}</label>
      <!-- nel caso ci fossero delle options faccio loop e mostro. di solito è per radio o select -->
      <template v-if="data.options">
        <!-- se è una select -->
        <div v-if="data.type === 'select'">
          <label
            class="custom-file-label"
            :for="data.id"
          >{{ data.label }}</label>
          <select
            class="form-select"
            @change="updateValue"
          >
            <option
              v-for="(option, i) in data.options"
              :key="i"
              :selected="(i === 0)"
              :value="option.value"
            >
              {{ option.value }}
            </option>
          </select>
        </div>
        <!-- se non è una select ma ha cmq delle options -->
        <div
          v-for="(option, i) in data.options"
          v-else 
          :key="i"
          :class="`form-${option.class}`"
        >
          <label
            v-if="option.title"
            :class="`form-${option.class}-label`"
            :for="option.name"
          >{{ option.title }}</label>
          <input
            :id="option.value"
            :name="option.name"  
            :type="option.type"
            :placeholder="option.placeholder"
            :class="option.class === 'group' ? 'form-control' : 'form-check-input'"
            :value="option.value"
            v-bind="attrs"
            @input="updateValue"
          >
        </div>
      </template>
   
      <!-- se non sono presenti options input di primo livello -->

      <template v-else-if="data.type === 'file'">
        <!-- inizializzo solo se type è file -->
        <div
          class="form-group"
        >
          <label
            class="custom-file-label"
            :for="data.id"
          >{{ data.label }}</label>
          <input
            :id="data.id"
            :type="data.type"
            class="custom-file-input form-control"
            @change="updateValue"
          >
        </div>
      </template>
      <!-- input di default -->
      <template v-else>
        <input
          :id="data.name"  
          :name="data.name"  
          :type="data.type"
          :placeholder="data.placeholder"
          :class="data.class === 'group' ? 'form-control' : 'form-check-input'"
          :value="data.value"
          v-bind="attrs"
          @input="updateValue"
        >
      </template>
   
      <small class="form-text text-muted">{{ data.notice }}</small>
    </div>
  </div>
</template>
