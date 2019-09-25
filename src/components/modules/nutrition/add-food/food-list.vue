<template>
  <v-list two-line>
    <template v-for="(food, index) in foods">
      <food-list-item :key="index" :food="food"></food-list-item>
    </template>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import FoodListItem from './food-list-item.vue';

import { FoodListItem as FoodListItemModel } from '@/models/nutrition';

@Component({
  components: {
    'food-list-item': FoodListItem
  }
})
export default class FoodList extends Vue {
  @Prop({ default: [] }) foods!: FoodListItemModel[];

  beforeDestroy() {
    this.$store.dispatch('nutritionModule/clearFoodInfoArray');
  }
}
</script>

<style lang="scss" scoped>
</style>