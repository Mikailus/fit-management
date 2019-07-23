<template>
    <div>
        <daily-intake-summary></daily-intake-summary>
        <daily-intake-meal></daily-intake-meal>
        <daily-intake-meal></daily-intake-meal>
        <daily-intake-meal></daily-intake-meal>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import moment, { Moment } from 'moment';

import { NutritionAPI } from '../../../api/nutrition';

import DailyIntakeMeal from './DailyIntakeMeal.vue';
import DailyIntakeSummary from './DailyIntakeSummary.vue';

@Component({
  components: {
    'daily-intake-meal': DailyIntakeMeal,
    'daily-intake-summary': DailyIntakeSummary
  },
})
export default class DailyIntake extends Vue {
    @Prop({default: undefined}) day!: Moment;
}
</script>

<style lang="scss" scoped>

</style>