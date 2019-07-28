<template>
  <v-app>
    <Toaster />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Navigation/>
    <Loader v-if="isLoading"/>
  </v-app>
</template>

<script type="ts">

import Navigation from '@/components/modules/Navigation.vue';
import { mapState } from 'vuex';
import Loader from './components/Loader.vue';
import Toaster from './components/Toast.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Loader,
    Toaster
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
