import {Commit, Dispatch, ActionTree } from 'vuex/types';

import { NutritionAPI } from '@/api/nutrition';

import { IDailyIntake, FoodInfo, Food } from '@/models/nutrition';
import { RootState, NutritionState } from '@/models/store';

export const actions: ActionTree<NutritionState, RootState> = {
    async getDailyIntake(
        {dispatch, commit, getters}: {
            dispatch: Dispatch,
            commit: Commit,
            getters: any,
        },
        payload: string) {
            if (getters.cachedDailyIntake(payload)) {
                commit('getDailyIntake', {
                    day: payload,
                });
            } else {
                try {
                    const intake: IDailyIntake = await new NutritionAPI().getMock(payload) || {} as IDailyIntake;
                    commit('cacheDailyIntake', {
                        day: payload,
                        intake,
                    });
                    commit('getDailyIntake', {
                        day: payload,
                    });
                    return intake;
                } catch (error) {
                    dispatch('toastModule/displayNotification', {
                        text: 'Error occured',
                        color: 'red',
                    });
                    throw (error);
                }
            }
    },
    async updateCurrentDailyIntake(
        {state, commit, dispatch}: {
            state: NutritionState,
            commit: Commit,
            dispatch: Dispatch,
        },
        payload: {
            mealName: string,
            food: Food,
        }) {
                try {
                    const updatedDailyIntake: IDailyIntake =
                        await new NutritionAPI().
                            updateCurrentDailyIntake(state.currentIntake, payload.mealName, payload.food);
                    commit('cacheDailyIntake', {
                        day: updatedDailyIntake.day,
                        intake: updatedDailyIntake,
                    });
                    commit('getDailyIntake', {
                        day: updatedDailyIntake.day,
                    });
                    dispatch('toastModule/displayNotification', {
                        text: 'Food updated',
                        color: 'green',
                    });
                    return updatedDailyIntake;
                } catch (error) {
                    dispatch('toastModule/displayNotification', {
                        text: 'Error occured',
                        color: 'red',
                    });
                    throw (error);
                }
    },
    async getFoodInfo({commit, getters}: {commit: Commit, getters: any}, payload: string): Promise<FoodInfo> {
        const cachedFoodInfo: FoodInfo = getters.foodInfo(payload);

        if (cachedFoodInfo) {
            return Promise.resolve(cachedFoodInfo);
        }

        return new NutritionAPI()
            .getFoodItem(payload)
            .then((v: FoodInfo) => {
                commit('getFoodInfo', v);
                return v;
            });
    },
    async clearFoodInfoArray({commit}: {commit: Commit}) {
        commit('clearFoodInfoArray');
    },
};
