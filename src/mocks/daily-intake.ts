import uuid from 'uuid';

import { IDailyIntake } from '@/models/nutrition';
export const dailyIntake = (day: string): IDailyIntake => {
    console.log('Mock for daily intake,', day);
    return {
        id: uuid(),
        day,
        meals: [
            {
                id: '1',
                name: 'Breakfast',
                foods: [
                    {
                        id: '123',
                        name: 'Tuna',
                        caloriesPerPortion: 134,
                        carbsPerPortion: 45,
                        fatPerPortion: 33,
                        proteinPerPortion: 46,
                        portion: 100,
                        numberOfPortions: 1.47,
                    },
                    {
                        id: '122',
                        name: 'Cheese',
                        caloriesPerPortion: 164,
                        carbsPerPortion: 49,
                        fatPerPortion: 53,
                        proteinPerPortion: 36,
                        portion: 100,
                        numberOfPortions: 1.87,
                    },
                    {
                        id: '133',
                        name: 'Ham',
                        caloriesPerPortion: 234,
                        carbsPerPortion: 67,
                        fatPerPortion: 53,
                        proteinPerPortion: 66,
                        portion: 100,
                        numberOfPortions: 1.27,
                    },
                ],
            },
            {
                id: '2',
                name: 'Lunch',
                foods: [
                    {
                        id: '1',
                        name: 'Potatoes',
                        caloriesPerPortion: 134,
                        carbsPerPortion: 45,
                        fatPerPortion: 33,
                        proteinPerPortion: 46,
                        portion: 100,
                        numberOfPortions: 1.47,
                    },
                    {
                        id: '2',
                        name: 'Chicken',
                        caloriesPerPortion: 164,
                        carbsPerPortion: 49,
                        fatPerPortion: 53,
                        proteinPerPortion: 36,
                        portion: 100,
                        numberOfPortions: 1.87,
                    },
                    {
                        id: '3',
                        name: 'Salad',
                        caloriesPerPortion: 234,
                        carbsPerPortion: 67,
                        fatPerPortion: 53,
                        proteinPerPortion: 66,
                        portion: 100,
                        numberOfPortions: 1.27,
                    },
                ],
            },
            {
                id: '3',
                name: 'Dinner',
                foods: [
                    {
                        id: '45',
                        name: 'Bread',
                        caloriesPerPortion: 134,
                        carbsPerPortion: 45,
                        fatPerPortion: 33,
                        proteinPerPortion: 46,
                        portion: 100,
                        numberOfPortions: 1.47,
                    },
                    {
                        id: '56',
                        name: 'Chicken',
                        caloriesPerPortion: 164,
                        carbsPerPortion: 49,
                        fatPerPortion: 53,
                        proteinPerPortion: 36,
                        portion: 100,
                        numberOfPortions: 1.87,
                    },
                    {
                        id: '67',
                        name: 'Olives',
                        caloriesPerPortion: 234,
                        carbsPerPortion: 67,
                        fatPerPortion: 53,
                        proteinPerPortion: 66,
                        portion: 100,
                        numberOfPortions: 1.27,
                    },
                ],
            },
        ],
    }as any;
};