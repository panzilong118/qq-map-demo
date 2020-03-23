<template>
  <div class="home">
    <h1>This is an home page</h1>
    <div id="map"></div>
  </div>

</template>

<script>
import TMap from 'TMap';
import TextBox from './textBox';
import eventBus from '@/utils/eventBus';

export default {
  data() {
    return {
    };
  },
  created() {
    eventBus.$on('hello', (data) => {
      console.log(data, '<---data');
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  methods: {
    initMap() {
      // 定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
      this.map = new TMap.Map('map', {
        center: new TMap.LatLng(39.916527, 116.397128),
        pitch: 0,
        zoom: 12
      });
      this.initTextBox();
    },
    initTextBox() {
      const infoWindowContent = `
        <div class="info-window">区域ID <span class="info-window-text">1234</span></div>
        <div class="info-window">区域名称 <span class="info-window-text">回龙观</span></div>`;
      this.infoWindowLayer = new TextBox({
        map: this.map,
        position: new TMap.LatLng(39.910690, 116.457369),
        content: infoWindowContent
      });
    }
  }
};
</script>


<style lang="stylus" scoped>
.home
  height: 100%;
  position relative

#map
  height: 100%;

</style>
