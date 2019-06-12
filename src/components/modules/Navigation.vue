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
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
          class="menu-button"
        >
          <v-icon>menu</v-icon>
          <v-icon>close</v-icon>
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
    .v-speed-dial {
        position: absolute;
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

