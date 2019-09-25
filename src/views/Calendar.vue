<template>
<div>
  <v-toolbar dark color="amber">
    <v-icon>calendar_today</v-icon>
    <v-toolbar-title class="white--text">Calendar</v-toolbar-title>

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
export default class Calendar extends Vue {

}
</script>

<style lang="scss">

</style>