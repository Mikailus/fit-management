<template>
    <v-expand-transition>
        <v-list two-line v-show="expand">
            <template v-for="n in 4">
                <v-list-tile :key="n">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <div class="title-container">
                                <span>Food name</span>
                                <span>123 g</span>
                            </div>
                        </v-list-tile-title>
                        <div class="nutritients-container">
                            <v-list-tile-sub-title>
                                Calories
                            </v-list-tile-sub-title>
                            <v-list-tile-sub-title>
                                Carbs
                            </v-list-tile-sub-title>
                            <v-list-tile-sub-title>
                                Fat
                            </v-list-tile-sub-title>
                            <v-list-tile-sub-title>
                                Protein
                            </v-list-tile-sub-title>
                        </div>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-expand-transition>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class DailyIntakeFoods extends Vue {
    @Prop({default: false}) expand!: boolean;
}
</script>

<style lang="scss" scoped>
    .title-container {
        display: flex;
        justify-content: space-between
    }

    .nutritients-container {
        display: flex;
        width: 100%;
    }
</style>


