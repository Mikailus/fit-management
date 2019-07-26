import axios, { AxiosRequestConfig } from 'axios';
import { showLoader } from '@/shared/decorators';

import IHeaders from '../models/nutrition/headers.model';
import ISearchItem from '../models/nutrition/search-item.model';
import { appKey, appID } from '../../credentials';

enum API_ENDPOINTS {
    SEARCH = 'https://api.nutritionix.com/v2/search',
    ITEM = 'https://api.nutritionix.com/v2/item'
}

export class NutritionAPI { 
    private get headers(): IHeaders {
        return {
            'x-app-id': appID,
            'x-app-key': appKey,
        };
    }

    @showLoader
    public async getSearchItems(query: string): Promise<ISearchItem[]> {
        const config: AxiosRequestConfig = {
            params: {
                q: query,
            },
            headers: this.headers,
        };
        return axios.get(API_ENDPOINTS.SEARCH, config).then((result: any) => result.data.results);
    }

    @showLoader
    public async getItem(id: string): Promise<any> {
        const config: AxiosRequestConfig = {
            headers: this.headers,
        };
        return axios.get(`${API_ENDPOINTS.ITEM}/${id}`, config);
    }
}
