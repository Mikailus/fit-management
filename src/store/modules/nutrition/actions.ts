import {Commit, Dispatch, ActionTree } from 'vuex/types';
import { NutritionAPI } from '@/api/nutrition';
import { IDailyIntake } from '@/models/nutrition';

export const actions: ActionTree<any, any> = {
    async getDailyIntake(
        {dispatch, commit, getters}: {dispatch: Dispatch, commit: Commit, getters: any},
        payload: string) {
            if (getters.cachedDailyIntake(payload)) {
                commit('getDailyIntake', {
                    day: payload,
                });
            } else {
                new NutritionAPI()
                    .getMock(payload)
                        .then((v: IDailyIntake) => {
                            commit('cacheDailyIntake', {
                                day: payload,
                                intake: v,
                            });
                            commit('getDailyIntake', {
                                day: payload,
                            });
                        });
            }
    },
};
