import TMap from 'TMap';
import eventBus from '@/utils/eventBus';
/* eslint-disable */
// 定义文本显示框类
export default function CustomInfoWindow(options) {
  TMap.DOMOverlay.call(this, options);
}

CustomInfoWindow.prototype = new TMap.DOMOverlay();
// eslint-disable-next-line
CustomInfoWindow.prototype.onInit = function (options) {
  this.content = options.content;
  this.position = options.position;
};
// eslint-disable-next-line
CustomInfoWindow.prototype.createDOM = function () {
  const dom = document.createElement('div');
  // dom.innerText = this.content;
  const btn = '<button id="start-btn">起点</button>';
  dom.innerHTML = this.content + btn;
	// bt.onclick = handleClicked;
  // bt.addEventListener("click", handleClicked)
  console.log(this.content, '<---this.content');
  console.log(this.position, '<---this.position');
  console.log(handleClicked, '<---this.handleClicked');
  dom.style.cssText = [
    'position:absolute;',
    'padding: 20px;',
    'background: rgba(37,41,59,0.94);',
    'border: 1px solid #373D58;',
    'font-family: NotoSansCJKsc-Medium;',
    'font-size: 14px;',
    'color: #FFFFFF;',
    'line-height: 18px;'
  ].join(' ');
  return dom;
};

CustomInfoWindow.prototype.updateDOM = function() {
  if (!this.map) {
    return;
  }
  const bt = document.getElementById("start-btn");
  console.log(bt, '<---bt');
  bt.addEventListener("click", handleClicked)
  // 经纬度坐标转容器像素坐标
  let pixel = this.map.projectToContainer(this.position);
  console.log(this.content, '<---this.content');
  console.log(this.position, '<---this.position');
  // 使文本框中心点对齐经纬度坐标点
  let left = pixel.getX() - this.dom.clientWidth / 2 + 'px';
  let top = pixel.getY() - this.dom.clientHeight / 2 + 'px';
  console.log(left, top);
  console.log(this.dom);
  // this.dom.style.transform = `translate3d(${left}, ${top}, 0px)`;
  this.dom.style.top = top;
  this.dom.style.left = left;
  // this.emit('dom_updated');
};

function handleClicked(e, val) {
  console.log(e, '<---e');
  console.log(val, '<---val');
  eventBus.$emit('hello', false);
}
