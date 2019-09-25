<template>
  <div class="overflow">
    <grid-loader :color="color"></grid-loader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GridLoader from 'vue-spinner/src/GridLoader.vue'

@Component({
  components: {
    'grid-loader': GridLoader
  },
})
export default class Loader extends Vue {
  color: string = '#000';

  created() {
    this.color = this.getColor();
  }

  getColor(): string {
    const path: string = this.$router.currentRoute.path;
    if (path.includes('home')) { return '#9E9E9E' }
    else if (path.includes('nutrition')) { return '#4CAF50' }
    else if (path.includes('training')) { return '#F44336' }
    else if (path.includes('calendar')) { return '#FFC107' }
    else if (path.includes('weather')) { return '#00BCD4' }
    return '#000';
  }
}
</script>

<style lang="scss">

.overflow {
  position: absolute;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
}
</style>