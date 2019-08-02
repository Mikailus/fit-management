<template>
    <v-expand-transition>
        <v-list two-line v-show="expand">
            <template v-for="n in 4">
                <v-list-item :key="n">
                    <v-list-item-content>
                        <v-list-item-title>
                            <div class="title-container">
                                <span>Food name</span>
                                <span>123 g</span>
                            </div>
                        </v-list-item-title>
                        <div class="nutritients-container">
                            <v-list-item-subtitle>
                                Calories
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Carbs
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Fat
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Protein
                            </v-list-item-subtitle>
                        </div>
                    </v-list-item-content>
                </v-list-item>
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


