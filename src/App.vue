<template>
  <div id="app">
    <header>
      <h1>Image Gallery</h1>
    </header>
    <image-list />
    <light-box />
  </div>
</template>

<script>
import ImageList from './components/ImageList.vue';
import LightBox from './components/LightBox.vue';

export default {
  components: {
    ImageList,
    LightBox,
  },
};
</script>

<style>
#app {
  background: url('https://images.unsplash.com/photo-1532210317995-cc56d90177d9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center fixed;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
header {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 18px;
}

h1 {
  color: white;
  font-size: 27px;
}
</style>
