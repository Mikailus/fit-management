import { Commit, Dispatch } from 'vuex/types';
import { ToastNotification } from '@/models/toast-notification.interface';

export const toastModule = {
    namespaced: true,
    state: {
        notifications: [],
    },
    mutations: {
        displayNotification(state: any, payload: ToastNotification) {
            state.notifications = [...state.notifications, {...payload, id: Symbol()}];
        },
        removeNotification(state: any) {
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
