import { GetterTree } from 'vuex';

import { RootState, NutritionState } from '@/models/store';
import { FoodInfo, FoodNutrient, Meal } from '@/models/nutrition';

export const getters: GetterTree<NutritionState, RootState> = {
    cachedDailyIntake: (state: NutritionState) => (day: string) => {
        return state.intakes[day];
    },
    foodInfo: (state: NutritionState) => (id: string): FoodInfo | undefined => {
        return state.foodInfoArray.length > 0
            ? state.foodInfoArray.find((foodInfo: FoodInfo) => foodInfo.resource_id === id)
            : undefined;
    },
    getMealFromCurrentDay: (state: NutritionState) => (mealName: string): Meal | null => {
        if (state.currentIntake.meals) {
            const mealIndex = state.currentIntake.meals.findIndex((mealItem: Meal) =>
                mealItem.name.toLowerCase() === mealName.toLowerCase()
            );

            if (typeof mealIndex === 'number') {
                return state.currentIntake.meals[mealIndex];
            }
        }

        return null;
    },
    foodNutrients: (
            state: NutritionState,
            getters: any) =>
            (id: string): {[key: string]: FoodNutrient | undefined} | null => {
                const foodInfo = getters.foodInfo(id);

                if (!foodInfo) {
                    return null;
                }

                const nutrients: FoodNutrient[] = foodInfo.label.nutrients;

                return {
                    protein: nutrients
                        .find((nutrient: FoodNutrient) =>
                            !!nutrient.name && (nutrient.name.toLowerCase() === 'protein')),
                    fat: nutrients
                        .find((nutrient: FoodNutrient) =>
                            !!nutrient.name && nutrient.name.toLowerCase() === 'total fat'),
                    carbs: nutrients
                        .find((nutrient: FoodNutrient) =>
                            !!nutrient.name && nutrient.name.toLowerCase() === 'total carbohydrate'),
                    calories: nutrients
                        .find((nutrient: FoodNutrient) =>
                        !!nutrient.name && nutrient.name.toLowerCase() === 'calories'),
                };
            },
};
