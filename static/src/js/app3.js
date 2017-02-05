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

let Main = require("./component/main.vue");

let Test = {
    
}



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
        component : Main
        // component : {
        //     template : "<h2>GG , si si.</h2>"
        // }
    }
];

let router = new VueRouter({
    // routes: routes
    routes
});

router.beforeEach((to , from , next) => {
    console.log(to);
    next();
});


Vue.component('todo-item' , {
    template:"<p>todo -============- item.</p>"
});

Vue.component("child" , {
    props : ["message"],
    template : "<div>123OK<slot>没有内容了</slot></div>",
    methods : {
        increment : function(){
            this.$emit("increment");
        }
    }
});

const app = new Vue({
    router:router,
    data  : {
        Arr: [1,2,3,4,5],
        what : "WHAT",
        Count : 0
    },
    methods : {
        CountAdd(){
            this.Count++;
            console.log(this.Count);
        }
    },
    watch : {
        what : function(newVal , oldVal){
            console.log(newVal , oldVal);
        }
    },
    created : function(){
        console.log(123 , this.what);
    }
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