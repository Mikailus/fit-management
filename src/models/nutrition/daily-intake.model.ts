import { Meal } from './meal.model';

export interface IDailyIntake  {
    id: string;
    day: Date;
    meals: Meal[];
}
