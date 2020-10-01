<template>
  <div class="container">
    <div class="wrapper" style="margin-bottom: 20px">
      <div class="container-actions">
        <h1 class="title">Imóveis</h1>
        <button v-show="next" id="next" @click="handleClickNext($event)">
          proximo
        </button>

        <button v-show="prev" id="prev" @click="handleClickPrev($event)">
          voltar
        </button>
      </div>
      <router-link to="/immobile/create">
        <icon-plus iconColor="#4c6ef5" />
      </router-link>
    </div>
    <div class="card-container">
      <card
        v-for="(immobile, index) in immobiles"
        :key="index"
        :address="immobile.address"
        :number="immobile.number"
        :members="immobile.members"
        :id="immobile.id"
      />
    </div>
  </div>
</template>

<script>
import iconHome from '../icons/iconHome';
import iconPlus from '../icons/iconPlus';
import api from '../../services/api';
import Card from '../Card';

export default {
  name: 'Imovies',
  components: {
    iconHome,
    iconPlus,
    Card,
  },
  data() {
    return {
      immobiles: null,
      uri: '',
      paganete: 1,
      links: [],
      next: null,
      prev: null,
    };
  },
  methods: {
    async getImmobiles(page = 1) {
      const reqeust = await api.get(`/immobiles?paginate=true&page=${page}`);
      const { data, links } = reqeust.data;
      this.immobiles = data;
      this.links = links;
      this.prev = !!this.links.prev;
      this.next = !!this.links.next;
    },
    handleClickNext() {
      this.paganete += 1;
      this.getImmobiles(this.paganete);
    },
    handleClickPrev() {
      this.paganete -= 1;
      this.getImmobiles(this.paganete);
    },
  },
  mounted() {
    this.getImmobiles(this.paganete);
  },
};
</script>

<style scoped>
.container {
  padding-top: 50px;

  max-width: 800px;
  margin: 0 auto;
}

.container-actions > button {
  cursor: pointer;
  background-color: var(--white);
  padding: 5px 10px;
  border-radius: 5px;
}

.card-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 0;
  margin-bottom: 99px;

  max-height: 80vh;
  overflow-y: scroll;
}

.container-actions {
  display: block;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper svg {
  width: 50px;
  margin-left: 10px;

  position: fixed;
  bottom: 100px;
  right: 20px;
}

.title {
  font-size: 32px;
}

.card {
  width: 100%;
  height: 92px;

  display: grid;
  grid-gap: 0 10px;
  grid-template-columns: auto 131px auto;
  grid-template-rows: repeat(2, auto);

  padding: 8px;

  background-color: var(--white);
  border-radius: 7px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
}

.card > .icon {
  width: 54px;
  height: 54px;

  align-self: center;

  background-color: var(--pink);
  box-sizing: content-box;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  grid-row: 1 / 3;
}

.card > .icon svg {
  width: 32px;
}

.address > .title {
  font-size: 12px;
}

.address > .street {
  font-size: 12px;
}

@media (min-width: 900px) {
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    width: 50vw;
  }
}
</style>
