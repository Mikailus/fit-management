<template>
  <div>
    <div  v-for="(notification, index) of notifications"
          class="toast-overflow"
          :style="{top: (index*60+ 20) +'px'}"
          :key="notification.id">
      <ToastElement :notification="notification"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex';
import ToastElement from './ToastElement.vue';

@Component({
  components: {
    ToastElement
  },
  computed: {
    ...mapState('toastModule', ['notifications'])
  }
})
export default class Toaster extends Vue {
}
</script>

<style lang="scss" scoped>
  .toast-overflow {
    position: absolute;
    right: 30px;
    z-index: 9999;
    transition: all 1s ease-in-out;
  }
</style>
