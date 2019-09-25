<template>
  <v-expand-transition>
    <v-list two-line v-show="expand">
      <template v-for="(food, index) in foods">
        <v-list-item :key="index">
          <v-list-item-content>
            <v-list-item-title>
              <div class="title-container">
                <span class="constrained">{{ food.name }}</span>
                <span>
                  {{ food.numberOfPortions * food.portion | cutDigits }} {{food.portionUnit ? food.portionUnit : 'g'}}
                </span>
              </div>
            </v-list-item-title>
            <div class="subtitle-container">
              <v-list-item-subtitle>
                <div class="subtitle-container--vertical">
                  <span>Calories:</span>
                  <span>
                      {{ food.numberOfPortions * food.caloriesPerPortion | cutDigits }} kcal
                  </span>
                </div>
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <div class="subtitle-container--vertical">
                  <span>Carbs:</span>
                  <span>
                      {{ food.numberOfPortions * food.carbsPerPortion | cutDigits }} g
                    </span>
                </div>
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <div class="subtitle-container--vertical">
                  <span>Fat:</span>
                  <span>
                      {{ food.numberOfPortions * food.fatPerPortion | cutDigits }} g
                  </span>
                </div>
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <div class="subtitle-container--vertical">
                  <span>Protein:</span>
                  <span>
                      {{ food.numberOfPortions * food.proteinPerPortion | cutDigits }} g
                  </span>
                </div>
              </v-list-item-subtitle>
            </div>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-expand-transition>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

import { cutDigits } from '@/filters';

import { Food } from '@/models/nutrition';

@Component({
  filters: {
    cutDigits: cutDigits
  }
})
export default class DailyIntakeFoods extends Vue {
  @Prop({ default: false }) expand!: boolean;
  @Prop({ default: [] }) foods!: Food[];
}
</script>

<style lang="scss" scoped>
  @import '../../../../styles/list';

  .constrained {
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>


