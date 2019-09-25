<template>
<div>
  <v-toolbar dark color="grey">
    <v-icon>home</v-icon>
    <v-toolbar-title class="white--text">Home</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>settings</v-icon>
    </v-btn>
  </v-toolbar>

</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { NutritionAPI } from '../api/nutrition';

@Component({})
export default class Home extends Vue {
}
</script>
