import { MutationTree } from 'vuex';

import { RootState } from '@/models/store/root-state.interface';

export const mutations: MutationTree<RootState> = {
    showLoading(state: RootState) {
        state.isLoading = state.loadingPoll > 0;
    },
    hideLoading(state: RootState) {
        state.isLoading = state.loadingPoll !== 0;
    },
    increaseLoadingPoll(state: RootState) {
        state.loadingPoll += 1;
    },
    decreaseLoadingPoll(state: RootState) {
        state.loadingPoll -= 1;
    },
};
