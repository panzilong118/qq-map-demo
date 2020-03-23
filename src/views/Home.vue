<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App111"/>
    <el-button>默认按钮</el-button>
    <div class="block-1">

    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { getohStatistic } from '@/api/home';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  mounted() {
    this.initStatistic();
    this.testLog();
  },
  methods: {
    async initStatistic() {
      this.data = await getohStatistic({});
      console.log(this.data, '<---this.data');
    },
    testLog() {
      this.$log.info('this.$loginfo');
      this.$log.warn('this.$logwarn');
      this.$log.error('this.$logerror');
      // Vue.$log.info('info');
      // Vue.$log.warn('warn');
      // Vue.$log.error('error');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~variable'

.block-1
  width 5rem
  height 3rem
  background $color-primary
  margin 0 auto
  border 5px solid $color-danger

</style>
