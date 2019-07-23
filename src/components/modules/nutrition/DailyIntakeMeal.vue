<template>
    <div>
        <daily-intake-meal-header :expand="expand" @toggleTab="expand = $event"></daily-intake-meal-header>
        <daily-intake-foods :expand="expand"></daily-intake-foods>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import DailyIntakeMealHeader from './DailyIntakeMealHeader.vue';
import DailyIntakeFoods from './DailyIntakeFoods.vue';

@Component({
  components: {
      dailyIntakeMealHeader: DailyIntakeMealHeader,
      dailyIntakeFoods: DailyIntakeFoods
  },
})
export default class DailyIntakeMeal extends Vue {
    expand: boolean = true;
}
</script>

<style lang="scss" scoped>
</style>


