<script setup>
import { ref, onMounted } from 'vue'
import { withBase } from 'vitepress'
import Typed from 'typed.js';

const support = ref([{
  name: 'Type Strong',
  color:'red'
},{
  name: 'No bundler required',
  color:'red'
},{
  name: 'Flexible',
  color:'red'
},{
  name: 'Feature Rich',
  color:'red'
},{
  name: 'Fully tree shakable',
  color:'red'
}])

const dom = ref(null)
onMounted(()=>{
  var typed = new Typed(dom.value, {
    strings: ["npm install easi-jssdk", "yarn add easi-jssdk"],
    typeSpeed: 30,
    loop: true,
    backDelay:2000
  });
})
</script>

<section>
  <div class="grid gap-4 grid-cols-20 h-screen overflow-hidden">
    <span v-for="item in 20" class="bg-gray-50"></span>
  </div>
  <div class="fixed top-96 left-1/2 max-w-full transform -translate-x-1/2 flex justify-center flex-col items-center">
    <h3 class="m-0 md:text-72 font-extralight tracking-widest font-sans text-32 sm:text-52">EASI SDK</h3>
    <div class="w-240 mt-20 sm:mt-40 md:80  items-center p-10 bg-gray-50 border-2 border-gary-200 rounded-full hover:ring-green-500 hover:ring-opacity-50">
      <span class="mr-10 text-gray-400">$</span>
      <span class="text-gray-700" ref="dom">{{typewriter}}</span>
    </div>
    <div class="tags max-w-screen-md flex flex-wrap my-30 justify-center">
      <i class="text-12 text-gray-50 not-italic py-5 px-10 rounded-full border mx-10 mb-20" :class="`border-${item.color}-600 bg-${item.color}-600`" v-for="item in support">
        {{item.name}}
      </i>
    </div>
  </div>
  <div class="absolute top-36 left-1/2 transform -translate-x-1/2">
    <img class="w-56" :src="withBase('images/logo1.svg')" />
  </div>
</section>

<style lang="scss" scoped>
// &::before{
//   content: "";
//   display: block;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   position:absolute;
//   background: hsla(0,0%,100%,.8);
//   backdrop-filter: saturate(180%) blur(20px);
// }
</style>