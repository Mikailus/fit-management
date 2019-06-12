<template>
<div>
  <v-toolbar dark color="red">
    <v-icon>fitness_center</v-icon>
    <v-toolbar-title class="white--text">Training</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>date_range</v-icon>
    </v-btn>
  </v-toolbar>

</div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class Training extends Vue {

}
</script>

<style lang="scss">

</style>