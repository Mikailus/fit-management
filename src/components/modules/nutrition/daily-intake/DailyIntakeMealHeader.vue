<template>
  <v-toolbar height="40" flat dark color="rgba(76, 175, 80, .85)">
    <v-toolbar-title class="meal-title">{{ name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="$emit('toggleTab', !expand)">
      <v-icon :class="expand ? 'rotated' : ''">expand_more</v-icon>
    </v-btn>

    <router-link
      :to="{name: 'add-food', params: {meal: name.toLowerCase()}}"
      tag="div">
      <v-btn
        v-show="expand"
        color="rgba(76, 175, 80, .85)"
        dark
        small
        absolute
        bottom
        left
        fab
        class="food-search">
        <v-icon>add</v-icon>
      </v-btn>
    </router-link>
  </v-toolbar>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class DailyIntakeMealHeader extends Vue {
  @Prop({ default: false }) expand!: boolean;
  @Prop({ default: '' }) name!: string;
}
</script>

<style lang="scss" scoped>
  .food-search {
    .v-btn__content  {
      padding-top: 18px;
    }
  }

  .meal-title {
    z-index: 5;
  }

  .rotated {
    transform: rotateZ(180deg);
  }
</style>


