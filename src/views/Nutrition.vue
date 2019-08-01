<template>
  <div class="view-container">
    <v-toolbar dark color="green">
      <v-icon>fastfood</v-icon>
      <v-toolbar-title class="white--text">Nutrition</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="openDatePicker = !openDatePicker">
        <v-icon>date_range</v-icon>
      </v-btn>
    </v-toolbar>

    <div class="full-height full-width header">
      <v-tabs
        v-model="active"
        dark
        color="green"
        slider-color="yellow"
        centered
        class="full-height"
        @change="onActiveTabChange">
        <v-tab
          v-for="(day, index) in days"
          :key="index"
          ripple>
          {{ day.format("ddd, DD-MM") }}
        </v-tab>
        <v-tabs-items>
          <v-tab-item
            v-for="(day, index) in days"
            :key="index">
            <daily-intake v-if="index === centerTabPosition" :day="days[centerTabPosition]"></daily-intake>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>

      <transition name="slide-y-transition">
        <div v-if="openDatePicker" class="date-picker-wrapper">
          <v-date-picker v-model="picker" color="green" :full-width="true" @input="onDatePickerChange"></v-date-picker>
        </div>
      </transition>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import moment, { Moment } from 'moment';

import DailyIntake from '../components/modules/nutrition/DailyIntake.vue';

@Component({
  components: {
    'daily-intake': DailyIntake,
  }
})
export default class Nutrition extends Vue {
  centerTabPosition: number = 1;
  active: number = this.centerTabPosition;
  days: Moment[] = [];
  picker = moment(new Date()).format("YYYY-MM-DD");
  openDatePicker = false;
  created() {
    this.generateDays(moment(new Date()));
  }

  onDatePickerChange(strDate: string) {
    this.openDatePicker = false;
    this.generateDays(moment(strDate));
  }

  onActiveTabChange(tabNumber: number) {
    const newDate = moment(this.days[tabNumber]);
    this.generateDays(newDate);
    this.picker = this.days[this.centerTabPosition].format("YYYY-MM-DD");
    
    // Hack for having always highlighted second tab
    setTimeout(() => this.active = this.centerTabPosition, 0);
  }

  generateDays(centerDate: Moment) {
    this.days = [
      moment(centerDate).subtract(1, 'day'),
      centerDate,
      moment(centerDate).add(1, 'day'),
    ];
  }
}
</script>

<style lang="scss" scoped>
  .date-picker-wrapper {
    position: absolute;
    z-index: 10;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .view-container {
    height: 100vh;
  }

  .full-height {
    height: 100%;
  }

  .full-width {
    width: 100%;
  }

  .header {
    position: relative;
  }
</style>