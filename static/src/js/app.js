/**
 * author@Mr.He
 * time  @20161128
 *content@后台添加模块页面入口文件
*/

let Vue = require("Vue");
// let Vuex = require("Vuex");
let $ = require("jQuery");

$(()=>{
    $('#side-menu').metisMenu({
        preventDefault: true,
    });
});

let VueRouter = require('vue-router');
Vue.use(VueRouter);
// // Vue.use(Vuex);


//先定义，优先奏效
const routes = [
    {
        path : "/foo" ,
        component : {
            template: '<h2>Foo , Foo</h2>'
        }
    },
    {
        path : "/bar" , 
        component : {
            template : "<h2>Bar , Bar</h2>"
        }
    },
    {
        path : "*",
        component : {
            template : "<h2> GG </h2>"
        }
    }
];

let router = new VueRouter({
    routes
});

router.beforeEach((to , from , next) => {
    console.log(to);

    next();
});


const app = new Vue({
    router
}).$mount("#app");







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