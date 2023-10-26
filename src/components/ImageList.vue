<template>
  <div class="list">
    <div v-for="i in images" :key="i.id" class="card" @click="open(i)">
      <img :src="i.src" alt="photo" />
      <p>{{ i.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  methods: {
    open(i) {
      this.$store.commit('selectImage', i);
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  font-style:oblique;
}

.card {
  cursor: pointer;
  padding: 10px;
  border: 5px solid #521b1b;
  border-radius: 3px;
  transition: transform 0.1s;
  user-select: none;
  color: #000000;
  font-weight: bold;
}

.card:hover {
  transform: scale(1.07);
}

.card img {
  width: 250px;
  height: 200px;
  object-fit: cover;
}

.card p {
  text-align: center;
}
</style>
