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
          <td class="centered-text">1233 kcal</td>
          <td class="centered-text">123 g</td>
          <td class="centered-text">321 g</td>
          <td class="centered-text">345 g</td>
        </tr>
      </tbody>
    </table>
  </v-subheader>
</template>


<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import moment, { Moment } from 'moment';
import DailyIntake from '../components/modules/nutrition/DailyIntake.vue';

@Component({
  components: {
  },
})
export default class DailyIntakeSummary extends Vue {
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