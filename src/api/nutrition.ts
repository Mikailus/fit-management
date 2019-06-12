import axios, { AxiosRequestConfig } from 'axios';

import IHeaders from '../models/nutrition/headers.model';
import ISearchItem from '../models/nutrition/search-item.model';

const appKey: string = 'c532964ba75dd29c3677acb76304d140';
const appID: string = '049a1bb4';

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

    public getSearchItems(query: string): Promise<ISearchItem[]> {
        const config: AxiosRequestConfig = {
            params: {
                q: query,
            },
            headers: this.headers,
        };
        return axios.get(API_ENDPOINTS.SEARCH, config).then((result: any) => result.data.results);
    }

    public getItem(id: string): Promise<any> {
        const config: AxiosRequestConfig = {
            headers: this.headers,
        };
        return axios.get(`${API_ENDPOINTS.ITEM}/${id}`, config);
    }
}
