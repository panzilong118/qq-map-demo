<template>
  <div class="container">
    <info-header></info-header>
    <div class="content-container">
      <info-nav></info-nav>
      <div class="main-box">
        <router-view></router-view>
        <info-footer></info-footer>
      </div>
    </div>
  </div>
</template>

<script>
import InfoHeader from './Header.vue';
import InfoNav from './Nav.vue';
import InfoFooter from './Footer.vue';

export default {
  name: 'app',
  components: {
    InfoHeader,
    InfoNav,
    InfoFooter
  },
};
</script>

<style lang="stylus" scoped>
.container
  height 100%

.content-container
  display flex
  height 100%

.main-box
  flex 1
  display relative
</style>
