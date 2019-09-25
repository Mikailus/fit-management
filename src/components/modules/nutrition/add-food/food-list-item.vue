<template>
  <div :class="showMore ? 'expanded' : ''">
    <v-list-item 
      @click="onListItemCLick"
      v-ripple="{ class: `success--text` }">
      <v-list-item-content>
        <v-list-item-title>
          <div class="title-container">
            <span>{{ food.item_name }}</span>
            <span>{{ food.nutrient_value }} {{food.nutrient_uom}}</span>
          </div>
        </v-list-item-title>
        <div class="subtitle-container">
          <v-list-item-subtitle>
            <div v-if="food.serving_qty && food.serving_uom">
              <span>Potrion: </span>
              <span>{{ food.serving_qty }} {{ food.serving_uom }}</span>
            </div>
          </v-list-item-subtitle>
        </div>
      </v-list-item-content>
      <v-list-item-action>
        <v-icon
        v-if="!showMore"
        color="green">
          expand_more
        </v-icon>
        <v-icon v-else color="green">
          expand_less
        </v-icon>
      </v-list-item-action>
    </v-list-item>
    <food-list-item-info
      :quantity="quantity"
      :foodInfo="foodInfo"
      :showMore="showMore">
    </food-list-item-info>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import FoodListItemInfo from './food-list-item-info.vue';

import { FoodDetails, FoodNutrient, FoodInfo, FoodListItem as FoodListItemModel } from '@/models/nutrition';

@Component({
  components: {
    'food-list-item-info': FoodListItemInfo
  },
})
export default class FoodListItem extends Vue {
  @Prop({ default: [{serving_qty: null }] }) food!: FoodListItemModel;
  showMore = false;
  quantity = this.food.serving_qty;
  
  foodInfo: FoodInfo | null = null;

  @Watch('showMore') onShowMoreChange(val: boolean) {
    if(!val) { this.foodInfo = null; }
  }
  
  @Watch('food') onFoodInputChange() {
    this.foodInfo = null;
  }

  async onListItemCLick() {
    await !this.showMore && this.getMoreInfo();
    this.showMore = !this.showMore;
  }

  async getMoreInfo(): Promise<void> {
    this.foodInfo = await this.$store.dispatch('nutritionModule/getFoodInfo', this.food.resource_id);
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../../styles/list';

  .expanded {
    background-color: #F4F4F4;
  }

  .title-container {
    span {
      min-width: 65px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>