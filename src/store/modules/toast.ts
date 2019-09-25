import { Commit, Dispatch, Module } from 'vuex/types';

import { ToastNotification } from '@/models/toast-notification.interface';
import { RootState, ToastState } from '@/models/store';

export const toastModule: Module<ToastState, RootState> = {
    namespaced: true,
    state: {
        notifications: [],
    },
    mutations: {
        displayNotification(state: ToastState, payload: ToastNotification) {
            state.notifications = [...state.notifications, {...payload, id: Symbol()}];
        },
        removeNotification(state: ToastState) {
            const notifications = [...state.notifications];
            notifications.shift();
            state.notifications = [...notifications];
        },
    },
    actions: {
        async displayNotification(
            {dispatch, commit}: {dispatch: Dispatch, commit: Commit},
            payload: ToastNotification) {
            commit('displayNotification', payload);
            new Promise(
                (resolve, reject) => setTimeout(() => resolve(), 4000))
            .then(() => dispatch('removeNotification'));
        },
        async removeNotification({commit}: {commit: Commit}) {
            commit('removeNotification');
        },
    },
};
