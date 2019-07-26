<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Navigation/>
    <Loader v-if="isLoading"/>
  </v-app>
</template>

<script type="ts">

import Navigation from '@/components/modules/Navigation.vue';
import Loader from './components/Loader.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Navigation,
    Loader
  },
  computed: {
    ...mapState(['isLoading'])
  },
  data () {
    return {
      //
    }
  }
}
</script>
