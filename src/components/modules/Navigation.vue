<template>
  <v-card id="create">
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
      :fixed="true"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
          class="menu-button"
        >
          <v-icon v-if="!fab">menu</v-icon>
          <v-icon v-else>close</v-icon>
        </v-btn>
      </template>
        <v-btn
            fab
            dark
            small
            color="cyan"
            class="menu-button-item"
        >
            <router-link to="/weather">
                <v-icon style="color: #FFF">cloud</v-icon>
            </router-link>
        </v-btn>
        <v-btn
            fab
            dark
            small
            color="amber"
        >
            <router-link to="/calendar">
                <v-icon style="color: #FFF">calendar_today</v-icon>
            </router-link>
        </v-btn>
        <v-btn
            fab
            dark
            small
            color="red"
        >
            <router-link to="/training">
                <v-icon style="color: #FFF">fitness_center</v-icon>
            </router-link>
        </v-btn>
        <v-btn
            fab
            dark
            small
            color="green"
        >
            <router-link to="/nutrition">
                <v-icon style="color: #FFF">fastfood</v-icon>
            </router-link>
        </v-btn>

        <v-btn
            fab
            dark
            small
            color="grey"
        >
            <router-link to="/home">
                <v-icon style="color: #FFF">home</v-icon>
            </router-link>
        </v-btn>
    </v-speed-dial>
    <transition name="slide-y-reverse-transition">
      <div class="overlay" v-if="fab" @click="fab = !fab"></div>
    </transition>
  </v-card>
</template>

<script lang="ts">
  export default {
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
    }),
  }
</script>

<style lang="scss">
#create {
    z-index: 1000;
    .overlay {
      position: fixed;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: rgba(255, 255, 255, .5);
    }
    .v-btn--floating {
        position: relative;
    }
    .v-btn:focus {
        outline: none;
    }

    a {
      text-decoration: none;
    }
}
</style>

