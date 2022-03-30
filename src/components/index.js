import Vue from 'vue';

function importAll(r) {
  r.keys().forEach(key => {
    const name = key.match(/\/(\w+?)\.vue$/)[1];
    Vue.component(name, r(key).default);
  });
}

//全局注册所有组件
importAll(require.context('./', true, /\.vue$/));
