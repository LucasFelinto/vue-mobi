<template>
  <div id="app">
    <side-menu />
    <router-view />
  </div>
</template>

<script>
import SideMenu from './components/SideMenu';
import iconMenu from './components/icons/iconMenu';
import './css/globalStyles.css';

export default {
  name: 'App',
  data() {
    return {
      msg: 'Lucas',
    };
  },
  components: {
    SideMenu,
    iconMenu,
  },
  methods: {
    activeMenu() {
      this.active = !this.active;
    },
  },
};
</script>

<style>
#app {
  display: flex;
}

.v-enter-active,
.v-enter-leave {
  transition: opacity 0.2s;
}

.v-enter {
  opacity: 0;
}

@media (min-width: 800px) {
  .menu-burger {
    display: none;
  }
}
</style>
