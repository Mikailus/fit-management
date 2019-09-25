import { IDailyIntake, FoodInfo } from '@/models/nutrition';
export interface NutritionState {
    intakes: {[day: string]: IDailyIntake};
    currentIntake: IDailyIntake;
    foodInfoArray: FoodInfo[];
}
