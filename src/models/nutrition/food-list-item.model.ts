export interface FoodListItem {
    brand_name: string;
    item_name: string;
    nutrient_name: string;
    nutrient_uom: string;
    nutrient_value: number;
    nutrients: BasicNutrient[] | null;
    resource_id: string;
    serving_qty: number;
    serving_uom: string;
    thumbnail: string;
}

interface BasicNutrient {
    attr_id: number;
    value: number;
    unit: string;
    name: string;
    usda_tag: string;
}
