<template>
  <div class="container">
    <v-form @submit.prevent="search">
      <v-text-field
        v-model="foodName"
        label="Food name">
      </v-text-field>
      <v-btn
        :disabled="!valid"
        color="success"
        @click="search">
        Search
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import { NutritionAPI } from '@/api/nutrition';

@Component({})
export default class FoodSearch extends Vue {
  foodName: string = '';
  valid: boolean = false;

  @Watch('foodName') function(newVal: string, oldVal: string) {
    this.valid = newVal !== '' ? true : false;
  }

  search() {
    this.$store.dispatch('nutritionModule/clearFoodInfoArray');
    this.$emit('search', this.foodName);
  }

}
</script>

<style lang="scss" scoped>
  .container {
    padding: 15px;
  }
</style>