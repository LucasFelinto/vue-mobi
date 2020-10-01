<template>
  <div class="c">
    <input
      required
      autocomplete=""
      type="text"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
    <label for="">{{ label }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  name: 'SideMenu',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
  },
  methods: {},
};
</script>

<style scoped>
.c {
  position: relative;
}

.c > input {
  width: 100%;
  height: 48px;
  padding: 15px 10px 0px 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  background-color: #ededed;

  border: none;
  border-radius: 5px;
  border-bottom: 2px solid var(--celtic-blue);
}

.c > label {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  display: block;

  position: absolute;
  color: #999999;
  /* top: 0; */
  left: 15px;
  bottom: 20px;
  z-index: 99;

  /* transform: translateY(-50%); */

  transition: all 0.3s ease;
}

input:focus,
input:valid {
  border-bottom: 2px solid var(--black);
}

input:focus + label,
input:valid + label {
  font-size: 11px;
  top: 5px;
}
</style>
