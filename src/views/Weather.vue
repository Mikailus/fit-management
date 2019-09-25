<template>
<div>
  <v-toolbar dark color="cyan">
    <v-icon>cloud</v-icon>
    <v-toolbar-title class="white--text">Weather</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>date_range</v-icon>
    </v-btn>
  </v-toolbar>

</div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({})
export default class Weather extends Vue {

}
</script>

<style lang="scss">

</style>