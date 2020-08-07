import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// module 폴더(.)에 있는 모든 js 파일 로드, 하위폴더는 없으므로 false.
const requireModule = require.context('./modules', true, /\.\/\w+\/[A-Z]\w+\.js$/);
const modules = {};

requireModule.keys().forEach((filename) => {
  // module 폴더에 index.js 는 로드 파일이 아니므로 제외
  const isIndexJsFile = filename === './index.js';

  if (!isIndexJsFile) {
    // 모듈 네임 camelCase 치환
    const moduleName = filename.replace(/(.\/\w+\/|\.\/|\.js)/gi, '');
    // 모듈 추가
    console.log('filename', moduleName);
    modules[moduleName] = { namespaced: true, ...requireModule(filename)['default'] };
  }
});

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
});
