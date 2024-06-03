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
    class="header-list navbar-nav mr-auto"
    :class="listOptions.class"
  >
    <li
      v-for="(option, i) in listOptions.items"
      :key="i"
      class="nav-item-list"
    >
      <a
        v-if="option.subitem"
        id="navbarDropdown"
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {{ option.text }}
      </a>
      <router-link
        v-else
        :to="option.link"
      >
        {{ option.text }}
      </router-link>
      <div
        v-if="option.subitem"
        class="dropdown-menu"
        aria-labelledby="navbarDropdown"
      >
        <router-link
          v-for="(subitem, i) in option.subitem"
          :key="i"
          :to="subitem.link"
          class="dropdown-item"
        >
          {{ subitem.text }}
        </router-link>
      </div>
    </li>
    <slot />
  </ul>
</template>