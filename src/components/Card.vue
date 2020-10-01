<template>
  <div class="card">
    <div class="icon">
      <icon-home iconColor="white" />
    </div>
    <div class="address">
      <span class="title">Endreço:</span>
      <span class="street">{{ address }}</span>
    </div>
    <div class="info">
      <div class="number">Nº {{ number }}</div>
      <p>{{ members }} membros</p>
      <router-link :to="uri"> Ver detalhes </router-link>
    </div>
  </div>
</template>

<script>
import iconHome from '../components/icons/iconHome';

export default {
  name: 'Imovies',
  data() {
    return {
      uri: `/members/${this.id}`,
    };
  },
  components: {
    iconHome,
  },
  props: {
    address: {
      type: String,
    },
    number: {
      type: String,
    },
    members: {
      required: true,
    },
    id: {
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  min-height: 92px;

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
  fill: linear-gradient(180deg, #ffffff 0%, #ffc1df 100%);
}

.address > .title {
  font-size: 12px;
}

.address > .street {
  font-size: 12px;
}

.info {
  align-self: stretch;
  font-size: 13px;
}

.info > p {
  margin: 4px 0;
}
.number {
  margin-top: 3px;
}
</style>
