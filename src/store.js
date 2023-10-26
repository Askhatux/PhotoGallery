import { createStore } from 'vuex';
// using store for images
export default createStore({
  state: {
    images: [
        { src: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'John Doe', id: 1 },
        { src: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=1812&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Lillian Rios', id: 2 },
        { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',title: 'Franco Bruce', id: 3 },
        { src: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Moses Mccarthy', id: 4 },
        { src: 'https://images.unsplash.com/photo-1605379399843-5870eea9b74e?auto=format&fit=crop&q=80&w=1798&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Clay Steele', id: 5 },
        { src: 'https://images.unsplash.com/photo-1629757509637-7c99379d6d26?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Solomon Bright', id: 6 },
        { src: 'https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Izabelle Gay', id: 7 },
        { src: 'https://plus.unsplash.com/premium_photo-1678566111483-f45ad346d50a?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Parker Stevens', id: 8 },
    ],
    selectedImage: null,
  },
  mutations: {
    selectImage(state, image) {
      state.selectedImage = image;
    },
    close(state) {
      state.selectedImage = null;
    },
  },
});

