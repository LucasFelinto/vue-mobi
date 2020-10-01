<template>
  <div>
    <nav class="nav">
      <div class="wrapper">
        <router-link to="/">
          <icon-home icon-color="white"></icon-home>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import iconHome from './icons/iconHome';

export default {
  name: 'SideMenu',
  components: {
    iconHome,
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  /* height: 40;px; */
  padding: 20px 0;
  background-color: var(--ash-gray);

  z-index: 9999;

  position: fixed;
  bottom: 0;
}

.nav > .wrapper {
  display: flex;
  justify-content: start;
}

.nav svg {
  width: 40px;
  margin-left: 20px;
}

.active {
  background-color: red;
  padding: 50px;
}

@media (min-width: 800px) {
  .nav {
    position: static;
    width: 90px;
    height: 100vh;
    padding-top: 100px;
  }
}
</style>
