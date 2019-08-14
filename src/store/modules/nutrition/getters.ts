import { GetterTree } from 'vuex';

export const getters: GetterTree<any, any> = {
    cachedDailyIntake: (state: any) => (day: string) => {
        return state.intakes[day];
    },
};
