import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

const store: StoreOptions<any> = {
    modules: {},
    actions: {},
    mutations: {},
    state: {},
    getters: {},
};

export default new Vuex.Store<any>(store);
