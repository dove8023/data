/**
 * author@Mr.He
 * time  @20161128
 *content@后台添加模块页面入口文件
*/

let Vue = require("Vue");
let Vuex = require("Vuex");
let $ = require("jQuery");
let APP = require("./component/App.vue");
let store = require("./store");

let VueRouter = require('vue-router');

Vue.use(VueRouter);


//先定义，优先奏效
const routes = [
    {
        path : "/#/foo" ,
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
        component : APP
    }
];

let router = new VueRouter({
    routes : routes
});

router.beforeEach((to , from , next) => {

    // console.log("to" , to.path);
    // console.log("=============");
    
    if(to.path == "/foo"){
        alert("Not limit");
        next(false);
    }else{
        next();
    }
    
   

});

let SideBar = require("./component/sideBar.vue");

const app = new Vue({
    el : "#app",
    router : router,
    components : {
        "side-bar" : SideBar
    }
});




