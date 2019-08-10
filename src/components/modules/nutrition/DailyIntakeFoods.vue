<template>
    <v-expand-transition>
        <v-list two-line v-show="expand">
            <template v-for="(food, index) in foods">
                <v-list-item :key="index">
                    <v-list-item-content>
                        <v-list-item-title>
                            <div class="title-container">
                                <span>{{ food.name }}</span>
                                <span>{{ food.numberOfPortions * food.portion | cutDigits }} g</span>
                            </div>
                        </v-list-item-title>
                        <div class="nutrients-container">
                            <v-list-item-subtitle>
                                <div class="nutritional-value">
                                    <span>Calories:</span>
                                    <span>{{ food.numberOfPortions * food.caloriesPerPortion | cutDigits }} kcal</span>
                                </div>
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                <div class="nutritional-value">
                                    <span>Carbs:</span>
                                    <span>{{ food.numberOfPortions * food.carbsPerPortion | cutDigits }} g</span>
                                </div>
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                <div class="nutritional-value">
                                    <span>Fat:</span>
                                    <span>{{ food.numberOfPortions * food.fatPerPortion | cutDigits }} g</span>
                                </div>
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                <div class="nutritional-value">
                                    <span>Protein:</span>
                                    <span>{{ food.numberOfPortions * food.proteinPerPortion | cutDigits }} g</span>
                                </div>
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
import { Food } from '../../../models/nutrition';
import { cutDigits } from '../../../filters';

@Component({
    filters: {
        cutDigits: cutDigits
    }
})
export default class DailyIntakeFoods extends Vue {
    @Prop({default: false}) expand!: boolean;
    @Prop({default: []}) foods!: Food[];
}
</script>

<style lang="scss" scoped>
    .title-container {
        display: flex;
        justify-content: space-between
    }

    .nutrients-container {
        display: flex;
        width: 100%;
    }

    .nutritional-value {
        display: flex;
        flex-direction: column;
    }
</style>


