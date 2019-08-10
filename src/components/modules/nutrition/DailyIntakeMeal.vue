<template>
    <div>
        <daily-intake-meal-header :name="meal.name" :expand="expand" @toggleTab="expand = $event"></daily-intake-meal-header>
        <daily-intake-foods :foods="meal.foods" :expand="expand"></daily-intake-foods>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import DailyIntakeMealHeader from './DailyIntakeMealHeader.vue';
import DailyIntakeFoods from './DailyIntakeFoods.vue';
import { Meal } from '../../../models/nutrition';

@Component({
  components: {
      dailyIntakeMealHeader: DailyIntakeMealHeader,
      dailyIntakeFoods: DailyIntakeFoods
  },
})
export default class DailyIntakeMeal extends Vue {
    @Prop({default: undefined}) meal!: Meal;
    expand: boolean = true;

    @Watch('meal', {immediate: true})
    onMealChange(newMeal: Meal, oldMeal: Meal) {
      this.expand = true;
    }
}
</script>

<style lang="scss" scoped>
</style>


