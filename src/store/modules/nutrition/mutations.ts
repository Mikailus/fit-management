import { MutationTree } from 'vuex';

export const mutations: MutationTree<any> = {
    cacheDailyIntake(state: any, payload: {day: string, intake: any}) {
        state.intakes[payload.day] = payload.intake;
    },
    getDailyIntake(state: any, payload: {day: string}) {
        state.currentIntake = state.intakes[payload.day];
    },
};
