<template>
  <div class="home">
    <div id="map"></div>
  </div>

</template>

<script>
/* eslint-disable */
import TMap from 'TMap';
import TextBox from './textBox';
import html2canvas from 'html2canvas';
// import eventBus from '@/utils/eventBus';
// import { circle } from '@turf/turf';
import { dotData } from '@/mocks/rt_city_loc';
import { getRegionListD } from '@/mocks/getRegionList';
import { shoudujichangD } from '@/mocks/shoudujichang';
import { beijingxizhanD } from '@/mocks/beijingxizhan';
import { beijingnanzhanD } from '@/mocks/beijingnanzhan';
import { dongzhimenD } from '@/mocks/dongzhimen';
import { libafangD } from '@/mocks/libafang';
import { qingheD } from '@/mocks/qinghe';
import { sihuiD } from '@/mocks/sihui';
import { songjiazhuangD } from '@/mocks/songjiazhuang';
import { tiantongyuanbeiD } from '@/mocks/tiantongyuanbei';
import { xiyuanD } from '@/mocks/xiyuan';
import { xizhimenD } from '@/mocks/xizhimen';
import { yinglanguojiD } from '@/mocks/yinglanguoji';
import { hademenD } from '@/mocks/hademen';
import { wangfuD } from '@/mocks/wangfu';
import { andingmenD } from '@/mocks/andingmen';
import { shilipuD } from '@/mocks/shilipu';
import { taiyanggongD } from '@/mocks/taiyanggong';

const spotMarker = require('assets/red_marker.png');

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
      // this.initArc();
      // this.initPolygon();
      // this.tests();
      // this.turf();
      // this.initDot();
      this.initPolygonMocks();
    });
  },
  methods: {
    initMap() {
      // 定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
      this.map = new TMap.Map('map', {
        center: new TMap.LatLng(39.916527, 116.397128),
        pitch: 0,
        mapStyleId: 'style1',
        zoom: 12
      });
      // this.initTextBox();
    },
    initPolygonMocks() {
      const arrPolygon = shoudujichangD.split(/[\n]/);
      const firstRow = arrPolygon[0];
      const firstRowArr = firstRow.split(/[\s]/);
      this.name = firstRowArr[0];
      const centerLoc = firstRowArr[1];
      const arrCenterLoc = centerLoc.split(',');
      this.centerLocation = new TMap.LatLng(arrCenterLoc[1], arrCenterLoc[0]);
      const geometries = [];
      arrPolygon.forEach((item, idx) => {
        const row = item.split(/[\s]/);
        const ne = row[2];
        const neArr = ne.split(',');
        const nePath = new TMap.LatLng(neArr[1], neArr[0]);
        const sw = row[3];
        const swArr = sw.split(',');
        const swPath = new TMap.LatLng(swArr[1], swArr[0]);
        const nwPath = new TMap.LatLng(neArr[1], swArr[0]);
        const wePath = new TMap.LatLng(swArr[1], neArr[0]);
        const path = [nePath, wePath, swPath, nwPath];
        const obj = {
          id: `p_${idx}`,
          styleId: 'polygon',
          paths: path
        };
        geometries.push(obj);
      });
      //初始化polygon
      var polygon = new TMap.MultiPolygon({
          id: 'polygon-layer', //图层id
          map: this.map, //显示多边形图层的底图
          styles: { //多边形的相关样式
              'polygon': new TMap.PolygonStyle({
                  'color': '#3777FF', //面填充色
                  'showBorder':true, //是否显示拔起面的边线
                  'borderColor': '#00FFFF', //边线颜色
                  'borderWidth': 1
              })
          },
          geometries
        });
        this.initName();
        this.initMarker();
    },
    initMarker() {
      const marker = [{
        id: 'marker',
        styleId: 'marker',
        position: this.centerLocation,
        properties: {
          title: 'marker'
        }
      }];
      this.multiMarkerLayer = new TMap.MultiMarker({
        id: 'marker-layer-stop',
        map: this.map,
        styles: {
          marker: new TMap.MarkerStyle({
            width: 39,
            height: 49,
            anchor: { x: 18, y: 60 },
            src: spotMarker
          })
        },
        geometries: marker
      });
    },
    initName() {
      //初始化label
        var label = new TMap.MultiLabel({
            id: 'label-layer',
            map: this.map,
            styles: {
                'label': new TMap.LabelStyle({
                    'color': '#000', //颜色属性
                    'size': 20, //文字大小属性
                    'offset': { x: 0, y: 0 }, //文字偏移属性单位为像素
                    'angle': 0, //文字旋转属性
                    'alignment': 'center', //文字水平对齐属性
                    'verticalAlignment': 'middle' //文字垂直对齐属性
                })
            },
            geometries: [{
                'id': 'label', //点图形数据的标志信息
                'styleId': 'label', //样式id
                'position': this.centerLocation, //标注点位置
                'content': this.name, //标注文本
                'properties': { //标注点的属性数据
                    'title': 'label'
                }
            }]
        });
    },
    initPolygon() {
      console.log(getRegionListD, '<----getRegionListD');
      const geometries = getRegionListD.map((item, idx) => {
        const arrPoi = item.polygon.split(';');
        const path = arrPoi.map((i) => {
          const poi = i.split(',');
          return new TMap.LatLng(poi[0], poi[1]);
        });
        const obj = {
          id: `p_${idx}`,
          styleId: 'polygon',
          paths: path
        };
        return obj;
      });
      //初始化polygon
      var polygon = new TMap.MultiPolygon({
          id: 'polygon-layer', //图层id
          map: this.map, //显示多边形图层的底图
          styles: { //多边形的相关样式
              'polygon': new TMap.PolygonStyle({
                  'color': '#3777FF', //面填充色
                  'showBorder':false, //是否显示拔起面的边线
                  'borderColor': '#00FFFF' //边线颜色
              })
          },
          geometries
        });
    },
    initArc() {
      // 创建弧线图
      var arc = new TMap.visualization.Arc({
          pickStyle: function(arcLine) { // 样式映射函数
              var red = {
                  color: '#DD0000',
                  animateColor:'#FF0000'
              };
              var blue = {
                  color: '#0000DD',
                  animateColor: '#FF0000'
              };
              return arcLine.id == 'red' ? red : blue;
          },
          mode: 'horizontal',
          animatable: true,
      }).addTo(this.map); // 通过addTo()添加到指定地图实例

      // 设置数据，若需要更新数据则再次调用setData方法即可
      arc.setData([
          {
              id: 'red',
              from: { lat: 40.040934, lng: 116.272677 }, // 弧线起点
              to: { lat: 38.040934, lng: 116.272677 }  // 弧线终点
          },
          {
              id: 'blue',
              from: { lat: 38.040934, lng: 116.272677 },
              to: { lat: 40.040934, lng: 116.272677 }
          }
      ]);
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
