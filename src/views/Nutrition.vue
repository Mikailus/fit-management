<template>
<div>
  <v-toolbar dark color="green">
    <v-icon>fastfood</v-icon>
    <v-toolbar-title class="white--text">Nutrition</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>date_range</v-icon>
    </v-btn>
  </v-toolbar>

  <v-tabs
    v-model="active"
    color="green"
    dark
    slider-color="yellow"
  >
    <v-tab
      v-for="(day, index) in days"
      :key="index"
      ripple
    >
      {{ day }}

    </v-tab>
    <v-tabs-items v-model="active">
      <v-tab-item
        v-for="n in days.length"
        :key="n"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>

</div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';

@Component({
  components: {
  },
})
export default class Nutrition extends Vue {
  active: number = 2;
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  days: string[] = [];
  created() {
    this.days = [
      moment().subtract(2, 'day').format("ddd, DD-MM"),
      moment().subtract(1, 'day').format("ddd, DD-MM"),
      moment(new Date()).format("ddd, DD-MM"),
      moment().add(1, 'day').format("ddd, DD-MM"),
      moment().add(2, 'day').format("ddd, DD-MM")
    ]

  }
  next() {
    this.active = (this.active < (this.days.length - 1) ? this.active + 1 : 0);
  }

}
</script>

<style lang="scss">

</style>