<template>
  <v-subheader class="summary-container">
    <h2>Total intake today</h2>
    <table class="full-width">
      <colgroup>
        <col span="1" width="25%">
        <col span="1" width="25%">
        <col span="1" width="25%">
        <col span="1" width="25%">
      </colgroup>
      <thead>
        <th>Calories</th>
        <th>Carbs</th>
        <th>Fat</th>
        <th>Protein</th>
      </thead>
      <tbody>
        <tr>
          <td class="centered-text">{{ summary.calories | cutDigits }} kcal</td>
          <td class="centered-text">{{ summary.carbs | cutDigits }} g</td>
          <td class="centered-text">{{ summary.fat | cutDigits }} g</td>
          <td class="centered-text">{{ summary.protein | cutDigits }} g</td>
        </tr>
      </tbody>
    </table>
  </v-subheader>
</template>


<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import moment, { Moment } from 'moment';
import DailyIntake from '../components/modules/nutrition/DailyIntake.vue';
import { IDailyIntake, Meal, Food } from '../../../models/nutrition';
import { cutDigits } from '../../../filters';

@Component({
  filters: {
    cutDigits: cutDigits
  },
})
export default class DailyIntakeSummary extends Vue {
  @Prop({default: undefined}) intake!: IDailyIntake;

  get summary() {
    return this.intake.meals.reduce((prev, meal) => {
      return {
        calories: prev.calories + calculateTotalIntakeForFood(meal.foods).calories,
        carbs: prev.carbs + calculateTotalIntakeForFood(meal.foods).carbs,
        fat: prev.fat + calculateTotalIntakeForFood(meal.foods).fat,
        protein: prev.protein + calculateTotalIntakeForFood(meal.foods).protein
      }
      ;
    }, {
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0
  }
    )
  }
}

function calculateTotalIntakeForFood(foods: Food[]) {
  return foods.reduce((prev, food) => {
    return {
      calories: prev.calories + food.caloriesPerPortion * food.numberOfPortions,
      carbs: prev.carbs + food.carbsPerPortion * food.numberOfPortions,
      fat: prev.fat + food.fatPerPortion * food.numberOfPortions,
      protein: prev.protein + food.proteinPerPortion * food.numberOfPortions,
    }
  }, {
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0
  });
}
</script>

<style lang="scss" scoped>
  .summary-container {
    display: flex;
    flex-direction: column;
    height: 80px;
  }

  .centered-text {
    text-align: center;
  }

  .full-width {
    width: 100%;
  }
</style>