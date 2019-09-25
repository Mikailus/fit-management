<template>
  <div v-if="foodNutrients">
    <div class="food-info">
      <div>
        <span>Protein: </span>
        <span>{{ foodNutrients.protein.value * portion | cutDigits}}{{ foodNutrients.protein.unit }}</span>
      </div>
      <div>
        <span>Fat: </span>
        <span>{{ foodNutrients.fat.value * portion | cutDigits }}{{ foodNutrients.fat.unit }}</span>
      </div>
      <div>
        <span>Carbs: </span>
        <span>{{ foodNutrients.carbs.value * portion | cutDigits }}{{ foodNutrients.carbs.unit }}</span>
      </div>
    </div>
    <v-form v-if="showMore" class="portion-form">
      <v-text-field
        v-model="portion"
        label="Number of portions"
        type="number">
        </v-text-field>
      <v-icon color="green" class="add-food-icon" @click="addFoodToCurrentDailyIntake">
        add
      </v-icon>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import { cutDigits } from '@/filters/CutDigits.filter';

import { FoodNutrient, Food, FoodInfo } from '@/models/nutrition';

@Component({
  filters: {
    cutDigits
  },
  computed: {
    ...mapGetters('nutritionModule', {getFoodNutrients: 'foodNutrients'})
  }
})
export default class FoodListItemInfo extends Vue {
  @Prop({ default: null }) foodInfo!: FoodInfo;
  @Prop({ default: false }) showMore!: boolean;
  @Prop({ default: 1 }) quantity!: number;

  getFoodNutrients!: Function;
  foodNutrients: {[key: string]: {value: number, unit: string} } | null = null;
  portion = this.quantity;

  @Watch('foodInfo') onFoodInfoChange() {
    if (this.showMore) {
      this.foodNutrients = this.getFoodNutrients(this.foodInfo.resource_id);
    } else {
      this.foodNutrients = null;
    }
  }

  addFoodToCurrentDailyIntake() {
    if (!this.foodNutrients) { 
      return;
    }
    const food: Food = {
      id: this.foodInfo.resource_id,
      name: this.foodInfo.name,
      caloriesPerPortion: this.foodNutrients.calories.value,
      carbsPerPortion: this.foodNutrients.carbs.value,
      fatPerPortion: this.foodNutrients.fat.value,
      proteinPerPortion: this.foodNutrients.protein.value,
      portion: this.foodInfo.label.serving.qty,
      portionUnit: this.foodInfo.label.serving.uom,
      numberOfPortions: this.portion,
    }
    this.$store.dispatch('nutritionModule/updateCurrentDailyIntake', {mealName: this.$route.params.meal, food});
  }
}
</script>

<style lang="scss" scoped>
  .portion-form {
    display: flex;
    padding: 0 20px;
  }

  .add-food-icon {
    margin-left: 10px;
  }

  .food-info {
    display: flex;
    justify-content: space-between;
    padding: 0 60px 0 20px;
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
  }
</style>