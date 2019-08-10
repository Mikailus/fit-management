import { Commit, Dispatch } from 'vuex/types';
import { NutritionAPI } from '../../api/nutrition';

export const nutritionModule = {
    namespaced: true,
    state: {
        intake: undefined,
    },
    mutations: {
        getDailyIntake(state: any, payload: any) {
            state.intake = payload;
        },
    },
    actions: {
        async getDailyIntake(
            {dispatch, commit}: {dispatch: Dispatch, commit: Commit},
            payload: string) {
                // call to API here
        },
    },
};
