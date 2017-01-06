/**
 * author@Mr.He
 * time  @20161128
 *content@后台添加模块页面入口文件
*/

let Vue = require("Vue");
// let Vuex = require("Vuex");
let $ = require("jQuery");

console.log(Vue.version );

$('#side-menu').metisMenu({
    preventDefault: true,
});

let Profile = Vue.extend({
    data(){
        return {
            message : "hello world"
        }
    }
});

new Profile().$mount("#addMoudle");


// let VueRouter = require('vue-router');
// Vue.use(VueRouter);
// Vue.use(Vuex);

// let router = new VueRouter();

// const app = Vue.extend({
//     // components : {
//     //     "side-bar" : SideBar
//     // },
//     // store : store,
//     data : {
//         message : "hello world",
//         DATA    : {}
//     },
//     methods : {
//         gg(){
//             alert(1234);
//         }
//     }
// });


// router.start(app , "#addMoudle");