<template>
  <div>
    <food-search @search="search"></food-search>
    <food-list :foods="foods"></food-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import { NutritionAPI } from '@/api/nutrition';

import FoodSearch from '@/components/modules/nutrition/add-food/food-search.vue';
import FoodList from '@/components/modules/nutrition/add-food/food-list.vue';

import { FoodListItem } from '@/models/nutrition/food-list-item.model';


@Component({
  components: {
    'food-search': FoodSearch,
    'food-list': FoodList
  }
})
export default class AddFood extends Vue {
  foods: FoodListItem[] = [];
  private nurtitionAPI: NutritionAPI = new NutritionAPI();

  search(foodName: string) {
    this.nurtitionAPI.getFoodItems(foodName)
      .then((v: FoodListItem[]) => {
        this.foods = v;
      });
  }
}
</script>

<style lang="scss" scoped>
</style>