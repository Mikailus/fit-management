import axios, { AxiosRequestConfig } from 'axios';
import localForage from 'localforage';
import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';

import { API_ENDPOINTS } from './endpoints';
import { appKey, appID } from '../../credentials';

import { showLoader } from '@/shared/decorators';

import { basicDateFormat } from '@/utils/date-format';
import { IDailyIntake, IHeaders, FoodInfo, Food, Meal, FoodListItem } from '@/models/nutrition';

const db: LocalForage = localForage.createInstance({
  name: 'nutritionDatabase',
});

export class NutritionAPI {
  private static localForageStore: LocalForage = db;

  private get headers(): IHeaders {
    return {
      'x-app-id': appID,
      'x-app-key': appKey,
    };
  }

  @showLoader
  public async getFoodItems(query: string): Promise<FoodListItem[]> {
    const config: AxiosRequestConfig = {
      params: {
        q: query,
        offset: 40,
        limit: 40,
      },
      headers: this.headers,
    };
    return axios
      .get(API_ENDPOINTS.SEARCH_FOOD, config)
      .then((result: any) => result.data.results);
  }

  @showLoader
  public async getFoodItem(id: string): Promise<FoodInfo> {
    const config: AxiosRequestConfig = {
      headers: this.headers,
    };
    return axios.get(`${API_ENDPOINTS.FOOD_ITEM_INFO}/${id}`, config)
      .then((v: any) => {
        return {...v.data, resource_id: id};
      });
  }

  @showLoader
  public async getMock(day: string): Promise<IDailyIntake | null> {
    return NutritionAPI.localForageStore.getItem(day);
  }

  public async updateCurrentDailyIntake(currentIntake: IDailyIntake, mealName: string, food: Food)
    : Promise<IDailyIntake> {
      const clonedIntake: IDailyIntake = cloneDeep(currentIntake);
      const mealIndex = clonedIntake.meals && clonedIntake.meals
        .findIndex((mealItem: Meal) => mealItem.name.toLowerCase() === mealName.toLowerCase());
      if (typeof mealIndex === 'number') {
          clonedIntake.meals[mealIndex].foods.push(food);
      }
      return NutritionAPI.localForageStore
        .setItem(moment(currentIntake.day).format(basicDateFormat), clonedIntake)
        .then((v: IDailyIntake) => v );
  }
}
