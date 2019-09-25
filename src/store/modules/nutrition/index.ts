import { Module } from 'vuex';

import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

import { RootState, NutritionState } from '@/models/store';
import { IDailyIntake } from '@/models/nutrition';

export const nutritionModule: Module<NutritionState, RootState> = {
    namespaced: true,
    state: {
        intakes: {},
        currentIntake: {} as IDailyIntake,
        foodInfoArray: [],
    },
    mutations,
    actions,
    getters,
};
