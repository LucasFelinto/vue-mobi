<template>
  <div class="container">
    <div class="title-container">
      <h1 class="title">Membros</h1>
    </div>

    <div class="card-container">
      <div class="card" v-for="(member, index) in members" :key="index">
        <div class="icon">
          <icon-user iconColor="" />
        </div>
        <div class="data">
          <p><strong>Nome</strong>: {{ member.name }}</p>
          <p><strong>Nascimento</strong>: {{ formatDate(member.age) }}</p>
          <p><strong>Genero</strong>: {{ member.gender }}</p>
          <a
            href=""
            :id="member.id"
            @click.prevent="deleteMember($event.target.id, index)"
            >remover</a
          >
        </div>
      </div>
    </div>

    <form action="">
      <form-input label="Nome" v-model="name" />
      <select name="" class="select" v-model="gender">
        <option value="" disabled>Selecione um genero</option>
        <option value="MASCULINO">MASCULINO</option>
        <option value="FEMENINO">FEMENINO</option>
      </select>
      <form-input label="Data de nascimento" v-model="age" />

      <div @click.prevent="addMember()">
        <button-submit class="submit">
          Enviar
          <span v-if="loading"></span>
          <icon-spinner v-else class="spinner" />
        </button-submit>
      </div>
    </form>
  </div>
</template>

<script>
import FormInput from '../FormInput';
import ButtonSubmit from '../ButtonSubmit';
import iconUser from '../icons/iconUser';
import iconPlus from '../icons/iconPlus';
import iconSpinner from '../icons/iconSpinner';
import api from '../../services/api';

export default {
  name: 'Members',
  data() {
    return {
      ImmobileId: this.$router.currentRoute.params.id,
      members: [],
      loading: true,
      name: '',
      age: '',
      gender: '',
      id: '',
    };
  },
  components: {
    FormInput,
    ButtonSubmit,
    iconUser,
    iconPlus,
    iconSpinner,
  },
  methods: {
    async getAllMember() {
      const request = await api.get(`immobiles/${this.ImmobileId}`);
      const { members, id } = request.data;
      this.members = members;
      this.id = id;
    },
    formatDate(date) {
      const format = new Date(...date.split('-'));
      return format
        .toLocaleString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })
        .split('/')
        .reverse()
        .join('/');
    },
    async deleteMember(id, memberIndex) {
      await api.delete(`immobiles/${this.ImmobileId}/members/${id}`);
      this.members = this.members.filter((member, index) => {
        return index !== memberIndex;
      });
    },
    async addMember() {
      this.loading = false;
      const request = await api.post(`immobiles/${this.ImmobileId}/members`, {
        name: this.name,
        age: this.age,
        gender: this.gender,
      });
      this.loading = true;
      this.getAllMember();
      console.log(request);
    },
    formatString(string) {
      return string.toLowerCase().replace('');
    },
  },
  mounted() {
    this.getAllMember();
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  margin-bottom: 50px;
}

form > * {
  margin: 10px 0px;
}

.select {
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

.container {
  padding-top: 50px;
  margin-left: 10px;
  font-size: 12px;

  margin: 0 auto;
}

.title-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.card {
  min-width: 300px;
  background-color: var(--white);
  border-radius: 4px;

  display: flex;
  padding: 15px;
}

.icon {
  display: flex;
  align-items: center;
}

.icon > svg {
  width: 25px;
  margin-right: 20px;
}

.data {
  display: flex;
  flex-direction: column;
}

.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 10px 0;

  justify-content: center;
}

.icon-plus {
  width: 50px;
  margin-left: 10px;

  position: fixed;
  bottom: 100px;
  right: 20px;
}

.spinner {
  width: 25px;
  margin-top: 3px;
  animation: spinner 2s infinite linear;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 800px) {
  .container > div {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    grid-gap: 10px;
  }
}
</style>
