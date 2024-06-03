<script setup>
const props = defineProps({
  listOptions: {
    type: Object,
    default: () => ({
      items: [],
      class: ''
    })
  },
})

</script>

<template>
  <ul
    class="base-list"
    :class="listOptions.class"
  >
    <li
      v-for="(option, i) in listOptions.items"
      :key="i"
    >
      {{ option }}
    </li>
    <slot />
  </ul>
</template>