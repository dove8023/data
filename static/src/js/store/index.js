let Vue = require("Vue");
let Vuex= require("Vuex");

Vue.use(Vuex);

let state = {
    count : 1,
    pageConfig : {}
}

let mutations = {
    increment(state , num){
        state.count++;
    },
    pageAdd(state , arr){
        state.pageConfig[arr[0]] = arr[1];
    }
}

module.exports = new Vuex.Store({
    state,
    mutations
});