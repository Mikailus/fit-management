import localForage from 'localforage';
import { PluginObject, VueConstructor } from 'vue';

export const LocalForage: PluginObject<void> = {
    install(Vue: VueConstructor) {
        const nutritionDatabase = localForage.createInstance({name: 'nutritionDatabase'});
        Vue.prototype.$lf = {
            nutritionDatabase,
        };
    },
  };
