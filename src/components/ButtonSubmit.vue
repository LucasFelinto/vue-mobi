<template>
  <div>
    <button type="submit">
      {{ text }}
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonSubmit',
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
button {
  background-color: var(--celtic-blue);
  color: var(--white);
  font-family: 'Poppins', sans-serif;

  border: none;
  border-radius: 8px;

  width: 50%;
  height: 43px;

  margin-top: 20px;
  cursor: pointer;
}
</style>
