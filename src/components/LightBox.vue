<template>
  <div v-if="selectedImage" class="lightbox">
    <div class="content">
      <img :src="selectedImage.src" @click="close" />
      <p class="title">{{ selectedImage.title }}</p>
      <button @click="close" class="close-button">Close image</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectedImage() {
      return this.$store.state.selectedImage;
    },
  },
  methods: {
    close() {
      this.$store.commit('close');
    },
  },
};
</script>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.content {
  background: rgb(218, 209, 209);
  padding: 20px;
  border-radius: 4px;
  text-align: center;
}

.lightbox img {
  max-width: 100%;
  max-height: 70vh;
}

.image-title {
  font-size: 20px;
  font-weight: bold;
}

.close-button {
  background: #1a0705;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.close-button:hover {
  background: #c0392b;
}
</style>
