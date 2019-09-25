import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { RootState } from '@/models/store/root-state.interface';
import { actions } from './actions';
import { mutations } from './mutations';
import { toastModule } from './modules/toast';
import { nutritionModule } from './modules/nutrition';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {toastModule, nutritionModule},
    actions,
    state: {
        isLoading: false,
        loadingPoll: 0,
    },
    getters: {
        isLoading: (state: RootState) => state.isLoading,
      },
    mutations,
};

export default new Vuex.Store<RootState>(store);
