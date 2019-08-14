import axios, { AxiosRequestConfig } from 'axios';
import localForage from 'localforage';
import { showLoader } from '@/shared/decorators';

import { appKey, appID } from '../../credentials';
import { IDailyIntake, ISearchItem, IHeaders } from '../models/nutrition';

import { dailyIntake } from '@/mocks/daily-intake';

enum API_ENDPOINTS {
    SEARCH = 'https://api.nutritionix.com/v2/search',
    ITEM = 'https://api.nutritionix.com/v2/item'
}

export class NutritionAPI {
    private static localForageStore: LocalForage;

    constructor() {
        NutritionAPI.localForageStore = localForage.createInstance({name: 'nutritionDatabase'});
        NutritionAPI.localForageStore.setItem('2019-08-13', dailyIntake('2019-08-13'));
        NutritionAPI.localForageStore.setItem('2019-08-14', dailyIntake('2019-08-14'));
    }

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

    @showLoader
    public async getMock(day: string): Promise<IDailyIntake> {
        return NutritionAPI.localForageStore.getItem(day);
    }
}
