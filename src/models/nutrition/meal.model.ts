import { Food } from './food.model';

export interface Meal {
    id: string;
    name: string;
    foods: Food[];
}
