<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'

const sponsors = [
  {
    name: 'bit',
    img: withBase('/images/bit.svg'),
    url: 'https://bit.dev/?from=element-ui',
    slogan: 'Share Code',
  },
  {
    name: 'renren.io',
    img: withBase('/images/renren.png'),
    url: 'https://www.renren.io/?from=element-ui',
    slogan: 'Rapid development platform',
    className: 'renren',
  },
]
</script>

<div class="home-page">
  <img class="logo" src="/images/logo.svg" alt="" srcset="" />
</div>

<footer class="footer">

</footer>

<style lang="scss" scoped>
.home-page{
  .logo{
    margin:0 auto;
  }
}
</style>
