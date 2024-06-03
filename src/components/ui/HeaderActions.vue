<script setup>
import BaseText from '@/components/ui/BaseText.vue'

const props = defineProps({
  actionsOptions: {
    type: Object,
    default: () => ({
      actions: [],
      class: ''
    })
  },
})

const emit = defineEmits(['actions'])
// const emit = defineEmits({name: 'actions', value: String})

const emitEvent = (event, value) => {
    emit(event, value)
}



</script>

<template>
  <section class="d-flex">
    <div
      v-for="(action, i) in actionsOptions.actions"
      :key="i"
      class="header-options"
      @click="emitEvent('actions', action.action)"
    >
      <font-awesome-icon
        v-if="action.icon"
        :icon="`fa-solid fa-circle-${action.icon}`"
      />
      
      <BaseText v-if="action.text">
        {{ action.text }}
      </BaseText>
    </div>
  </section>
</template>