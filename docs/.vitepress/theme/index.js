import ElementPlus from 'element-plus';
import EasiLayout from '../vitepress/EasiLayout.vue';
import EasiDemo from '../vitepress/EasiDemo.vue';
import 'element-plus/theme-chalk/index.css';
import 'highlight.js/styles/atom-one-dark.css';
import '../scss/index.scss';
import 'normalize.css';
import DefaultTheme from 'vitepress/dist/client/theme-default';

export default {
  ...DefaultTheme,
  Layout: EasiLayout,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.component('Demo', EasiDemo);
  },
};
