require('./bootstrap');
import './assets/css/styles.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

const V3App = createApp(App)
V3App
  .use(router)
  .use(store)
V3App.mount('#app');


// new Vue({
//   el: '#app',
//   store,
//   router,
//   render: h => h(App),
//   created() {
//     this.$store.commit(types.RESET_LOADING_PROGRESS);
//     this.$store.dispatch('getAllCategories');
//     this.$store.dispatch('getAllPages');
//   },
// });