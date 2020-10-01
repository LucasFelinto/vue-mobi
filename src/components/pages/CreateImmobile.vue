<template>
  <div class="container">
    <h1 class="title">Cadastrar imóveis</h1>
    <p v-show="msg" class="alert-success">{{ msg }}</p>
    <form action="">
      <form-input label="Endereço" v-model="address" />
      <form-input label="Número" v-model="number" />
      <div @click.prevent="createImmobile()">
        <button-submit>
          <span v-if="loading">Enviar</span>
          <icon-spinner v-else class="spinner" />
        </button-submit>
      </div>
    </form>
  </div>
</template>

<script>
import FormInput from '../FormInput';
import ButtonSubmit from '../ButtonSubmit';
import api from '../../services/api';
import iconSpinner from '../icons/iconSpinner';

export default {
  name: 'CreateImmobile',
  data() {
    return {
      number: '',
      address: '',
      result: [],
      msg: null,
      loading: true,
    };
  },
  components: {
    FormInput,
    ButtonSubmit,
    iconSpinner,
  },
  methods: {
    async createImmobile() {
      this.loading = false;
      const request = await api.post('/immobiles', {
        address: this.address,
        number: this.number,
      });
      if (request.status === 201) {
        this.msg = 'Imóvel cadastrado com sucesso';
        this.loading = true;
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.container {
  padding-top: 50px;
  padding-left: 20px;
  margin: 0 auto;

  transform: translateX(-20px);
}

.container .spinner {
  width: 25px;
  margin-top: 3px;
  animation: spinner 2s infinite linear;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
