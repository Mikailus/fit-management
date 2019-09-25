import { FoodDetails } from '@/models/nutrition';

export interface FoodInfo {
    brand: FoodBrand;
    id: string;
    name: string;
    label: FoodDetails;
    resource_id: string;
}

interface FoodBrand {
    id: string;
    logo: string;
    name: string;
    website: string;
}
