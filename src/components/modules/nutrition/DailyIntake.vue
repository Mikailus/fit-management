<template>
    <div v-if="intake">
        <daily-intake-summary :intake="intake"></daily-intake-summary>
        <daily-intake-meal v-for="meal in intake.meals" :key="meal.id" :meal="meal"></daily-intake-meal>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import moment, { Moment } from 'moment';
import { mapState } from 'vuex'

import { NutritionAPI } from '../../../api/nutrition';

import DailyIntakeMeal from './DailyIntakeMeal.vue';
import DailyIntakeSummary from './DailyIntakeSummary.vue';
import { IDailyIntake } from '../../../models/nutrition';

@Component({
  components: {
    'daily-intake-meal': DailyIntakeMeal,
    'daily-intake-summary': DailyIntakeSummary
  },
  computed: {
    ...mapState('nutritionModule', ['intake'])
  }
})
export default class DailyIntake extends Vue {
  @Prop({default: undefined}) day!: Moment;

  @Watch('$route', {immediate: true})
  async onRouteChange({params}: {params: any}) {
    this.$store.dispatch('nutritionModule/getDailyIntake', this.$route.params.day);
  }

}
</script>

<style lang="scss" scoped>

</style>