import App from './App.vue'
// import router from './router'
import TDesign from 'tdesign-vue-next';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia';
import routes from '~pages'

// import 'tdesign-vue-next/es/style/index.css';
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import { registerStore } from '@/stores';

console.log(import.meta.env)

declare interface window {
  __POWERED_BY_QIANKUN__: boolean,
}

let instance: any = null;
let router: any = null;

function render(props = {}) {
  const { container } = props as any;
  router = createRouter({
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app-vue' : '/'),
    routes
  })
  const pinia = createPinia();

  instance = createApp(App);
  instance.use(router).use(pinia).use(TDesign);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

renderWithQiankun({
  mount(props) {
    console.log('mount', props.store);

    registerStore(props);
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount() {
    console.log('unmount');
    instance.unmount();
    instance = null;
    router = null;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
