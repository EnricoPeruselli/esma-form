<script setup>

import {reactive, ref} from 'vue'

const props = defineProps({
  listTabsOptions: {
    type: Object,
    default: () => ({
      items: [],
      class: ''
    })
  },
})

const emit = defineEmits(['listEmit'])

const activeIndex = ref(0)

const emitEventList = (event, value, i) => {
    activeIndex.value = i 
    emit(event, value)
}

</script>

<template>
  <ul
    class="base-list list-tabs"
    :class="listTabsOptions.class"
  >
    <li
      v-for="(option, i) in listTabsOptions.items"
      :key="i"
      :class="{'active': i === activeIndex}"
      class="list-tabs-item card"
      @click="emitEventList('listEmit', option.actions, i)"
    >
      {{ option.name }}
    </li>
    <slot />
  </ul>
</template>