import Vue from 'vue';
import App from './App.vue';
import VueDiscordMessage from '../src/index.js';

Vue.use(VueDiscordMessage);

Vue.config.productionTip = false;

new Vue({ render: h => h(App) }).$mount('#app');
