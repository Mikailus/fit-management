import {Commit, Dispatch, ActionTree } from 'vuex/types';

import { RootState } from '@/models/store/root-state.interface';

export const actions: ActionTree<RootState, RootState> = {
    async showLoader({dispatch, commit}: {dispatch: Dispatch, commit: Commit}) {
        await dispatch('increaseLoadingPoll');
        commit('showLoading');
    },
    async hideLoader({dispatch, commit}: {dispatch: Dispatch, commit: Commit}) {
        await dispatch('decreaseLoadingPoll');
        commit('hideLoading');
    },
    async increaseLoadingPoll({commit}: {dispatch: Dispatch, commit: Commit}) {
        commit('increaseLoadingPoll');
    },
    async decreaseLoadingPoll({commit}: {dispatch: Dispatch, commit: Commit}) {
        commit('decreaseLoadingPoll');
    },
};
