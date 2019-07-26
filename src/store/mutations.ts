export const mutations = {
    showLoading(state: any) {
        state.isLoading = state.loadingPoll > 0 ? true : false;
    },
    hideLoading(state: any) {
        state.isLoading = state.loadingPoll === 0 ? false : true;
    },
    increaseLoadingPoll(state: any) {
        state.loadingPoll += 1;
    },
    decreaseLoadingPoll(state: any) {
        state.loadingPoll -= 1;
    }
}