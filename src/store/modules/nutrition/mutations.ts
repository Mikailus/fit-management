import { MutationTree } from 'vuex';

import { NutritionState } from '@/models/store';
import { FoodInfo, IDailyIntake } from '@/models/nutrition';

export const mutations: MutationTree<NutritionState> = {
    cacheDailyIntake(state: NutritionState, payload: {day: string, intake: IDailyIntake}) {
        state.intakes[payload.day] = payload.intake;
    },
    getDailyIntake(state: NutritionState, payload: {day: string}) {
        state.currentIntake = state.intakes[payload.day] || {};
    },
    getFoodInfo(state: NutritionState, payload: FoodInfo) {
        state.foodInfoArray.push(payload);
    },
    clearFoodInfoArray(state: NutritionState) {
        state.foodInfoArray = [];
    },
};
