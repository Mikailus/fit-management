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
        class="full-height"
        v-model="active"
        color="green"
        dark
        centered
        @change="onActiveTabChange"
        slider-color="yellow">
        <v-tab
          v-for="(day, index) in days"
          :key="index"
          ripple
        >
          {{ day.format("ddd, DD-MM") }}

        </v-tab>
        <v-tabs-items v-model="active">
          <v-tab-item
            v-for="n in days.length"
            :key="compDays[n]"
          >
            <daily-intake :day="days[1]"></daily-intake>
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
  },
})
export default class Nutrition extends Vue {
  active: number = 1;
  days: Moment[] = [];
  picker = moment(new Date()).format("YYYY-MM-DD");
  openDatePicker = false;
  compDays: string[] = [];
  created() {
    this.days = [
      moment().subtract(1, 'day'),
      moment(new Date()),
      moment().add(1, 'day'),
    ]
  }

  onDatePickerChange(val: string) {
    setTimeout(() => this.active = 1, 0);
    this.days = [
      moment(val).subtract(1, 'day'),
      moment(val),
      moment(val).add(1, 'day'),
    ]

    this.compDays = this.days.map(day => day.format("ddd, DD-MM"));
  }

  onActiveTabChange(val: number) {
    this.picker = this.days[val].format("YYYY-MM-DD");
    this.onDatePickerChange(this.picker);
  }
}
</script>

<style lang="scss" scoped>
  .date-picker-wrapper {
    position: absolute;
    z-index: 10;
    top: 0;
    height: 100%;
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