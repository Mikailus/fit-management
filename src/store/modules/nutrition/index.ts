import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const nutritionModule = {
    namespaced: true,
    state: {
        intakes: {},
        currentIntake: null,
    },
    mutations,
    actions,
    getters,
};
