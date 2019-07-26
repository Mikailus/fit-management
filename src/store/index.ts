import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex);

const store: StoreOptions<any> = {
    modules: {},
    actions,
    state: {
        isLoading: false,
        loadingPoll: 0
    },
    getters: {
        isLoading: (state: any) => state.isLoading,
      },
    mutations
};

export default new Vuex.Store<any>(store);
