import App from './App.vue'
// import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

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

  console.log('render', routes);

  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

renderWithQiankun({
  mount(props) {
    console.log('mount');
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
