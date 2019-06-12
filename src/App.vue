<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Navigation/>
  </v-app>
</template>

<script type="ts">

import Navigation from '@/components/modules/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation
  },
  data () {
    return {
      //
    }
  }
}
</script>
