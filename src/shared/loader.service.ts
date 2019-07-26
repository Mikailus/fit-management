import store from '../store/index';

export class LoaderService {
    showLoader() {
        store.dispatch('showLoader');
    }

    hideLoader() {
        store.dispatch('hideLoader');
    }
}