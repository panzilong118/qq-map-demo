<template>
  <div class="home">
    <h1>This is an home page</h1>
    <div id="map"></div>
  </div>

</template>

<script>
/* eslint-disable */
import TMap from 'TMap';
import TextBox from './textBox';
import html2canvas from 'html2canvas';
// import eventBus from '@/utils/eventBus';
import { circle } from '@turf/turf';
import { dotData } from '@/mocks/rt_city_loc';

export default {
  data() {
    return {
    };
  },
  created() {
    // eventBus.$on('hello', (data) => {
    //   console.log(data, '<---data');
    // });
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap();
      // this.tests();
      // this.turf();
      this.initDot();
    });
  },
  methods: {
    initMap() {
      // 定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
      this.map = new TMap.Map('map', {
        center: new TMap.LatLng(39.916527, 116.397128),
        pitch: 0,
        mapStyleId: 'style2',
        zoom: 12
      });
      // this.initTextBox();
    },
    initDot() {
      //初始化散点图并添加至map图层
      new TMap.visualization.Dot({
          faceTo: "screen",//散点固定的朝向
          styles: {
              redCircle: {  // 定义一个红色圆形样式
                  type: 'circle',
                  fillColor: '#FF0000',
              }
          }
      })
      .addTo(this.map)
      .setData(dotData);//设置数据
    },
    turf() {
      var center = [116.353025, 39.945016];
      var radius = 0.5;
      var options = {steps: 10, units: 'kilometers', properties: {foo: 'bar'}};
      var circleResult = circle(center, radius, options);
      console.log(JSON.stringify(circleResult), '<---circleResult');
    },
    tests() {
      html2canvas(document.body).then(function(canvas) {
        console.log(canvas, '<---canvas');
        document.body.appendChild(canvas);
      });
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
