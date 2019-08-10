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

    <div class="full-width header">
      <v-tabs
        v-model="active"
        dark
        centered
        :grow="true"
        background-color="green"
        slider-color="yellow"
        class="full-height">

        <v-tabs-slider></v-tabs-slider>
        <router-link
          v-for="(day, index) in days"
          :key="index"
          :to="{name: 'intake', params: {day: day.format('YYYY-MM-DD')}}"
          tag="div">
          <v-tab
            class="centered"
            ripple>
            {{ day.format("ddd, DD-MM") }}
          </v-tab>
        </router-link>
        <v-tabs-items v-model="active" @change="onSwipe">
          <v-tab-item
            v-for="(day, index) in days"
            :key="index"
            >
            <div v-if="index === centerTabPosition">
              <router-view></router-view>
            </div>
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
    this.generateDays(moment(new Date(this.$route.params.day)));
  }

  public onDatePickerChange(strDate: string) {
    this.openDatePicker = false;
    this.generateDays(moment(strDate));
  }

  public onSwipe(tabNumber: number) {
    this.$router.push({name: 'intake', params: {day: this.days[tabNumber].format('YYYY-MM-DD')}});
  }

  private generateDays(centerDate: Moment) {
    this.days = [
      moment(centerDate).subtract(1, 'day'),
      centerDate,
      moment(centerDate).add(1, 'day'),
    ];
  }

  @Watch('$route')
  private onRouteChange({params}: {params: any}) {
    this.generateDays(moment(new Date(params.day)));
    this.picker = this.days[this.centerTabPosition].format("YYYY-MM-DD");
    // Hack for having always highlighted second tab
    setTimeout(() => this.active = this.centerTabPosition, 0);
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

  .centered {
    margin: 0 auto;
  }
</style>

<style>
  .v-tab {
    margin: 0 !important;
  }
</style>