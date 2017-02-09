<template>
    <div>
        <m v-for="item in api" v-bind:data="item"></m>
    </div>
</template>
<script>
    let Vue = require("Vue");
    let store=require("../store");

    //单个视图界面
    let Main = require("./main.vue");

    module.exports = {
        data(){
            return {
                gg : "GG si mi da.",
                path:"",
                api:[]
            }
        },
        components : {
            "m" : Main
        },
        methods:{
            go(){
                store.commit("increment");
            },
            change(to , from , next){
                this.path = to.path;
                this.api = store.state.pageConfig[to.path];
            }
        },
        created(){
            setTimeout(()=>{
                this.change(this.$route);
            } , 1000);
        },
        watch : {
            '$route' : 'change'
        }
    };
</script>