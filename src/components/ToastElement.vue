<template>
    <div class="snackbar-wrapper">
        <transition name="scale-transition" appear>
            <v-snackbar
                :absolute="true"
                :value="true"
                :top="true"
                :color="notification.color">
                {{ notification.text }}
            </v-snackbar>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { ToastNotification } from '@/models/toast-notification.interface';

@Component({
})
export default class ToastElement extends Vue {
  @Prop() notification!: ToastNotification;
}
</script>

<style lang="scss">
  .v-snack__wrapper {
      border-radius: 7px;
  }
  .snackbar-wrapper {
      position: relative;
      width: 170px;
  }
</style>


