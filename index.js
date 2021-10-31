function inject(echarts) {
  (echarts.prototype || echarts).update = update;
}

function update(option) {
  this.clear();
  this.setOption(option);
}

export { inject };
