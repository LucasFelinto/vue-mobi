<template>
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="bars"
    class="svg-inline--fa fa-bars fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      :fill="iconColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'iconMenu',
  props: {
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
  methods: {},
};
</script>

<style scoped>
svg {
  width: 25px;

  position: absolute;
  top: 15px;
  left: 95%;

  transform: translateX(-30px);
  cursor: pointer;
}
</style>
