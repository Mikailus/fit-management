export interface FoodDetails {
    nutrients: FoodNutrient[];
    serving: FoodServing;
}

export interface FoodNutrient {
    attr_id: string;
    name: string;
    unit: string;
    usda_tag: string;
    value: number;
}

interface FoodServing {
    qty: number;
    uom: string;
    per_container: any;
    metric: FoodMetricServing;
}

interface FoodMetricServing {
    qty: number;
    uom: string;
}
