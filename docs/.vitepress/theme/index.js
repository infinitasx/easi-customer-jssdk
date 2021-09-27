import ElementPlus from 'element-plus';
import Layout from '../vitepress/Layout.vue';
import Demo from '../vitepress/Demo.vue';
import 'element-plus/theme-chalk/index.css';
import 'highlight.js/styles/arduino-light.css';
import '../scss/index.scss';
import 'normalize.css';
import DefaultTheme from 'vitepress/dist/client/theme-default';

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.component('Demo', Demo);
  },
};
