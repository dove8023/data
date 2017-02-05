<template>
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li>
                    <a href="#/foo">foo</a>
                </li>
                <li>
                    <a href="#/bar">bar</a>
                </li>
                <li v-for="item in CONFIG">
                    <a href="#!#">
                        <i v-bind:class="item.className"></i>
                        {{item.name}}
                        <span class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level collapse">
                        <li v-for="link in item.path">
                            <a v-bind:href="'#' + link.path">{{link.name}}</a>
                        </li>
                    </ul>
                </li>                
            </ul>
        </div>
        {{count}}
    </div>

</template>

<script>
    let Vue = require("Vue");
    let $   = require("jQuery");
    let store=require("../store");
    let config_DATA = {
        CONFIG : {}
    };

    let SideBar = Vue.extend({
        data(){
            return config_DATA
        },
        filters : {
            hrefs(value){
                return 234;
            }
        },
        beforeCreate(){
            let _this = this;
            $.ajax({
                url : "/getConfig",
                type:"get",
                success(result){
                    Vue.set(config_DATA , "CONFIG" , result);
                    for(let key in result){
                        let arr = [].concat(result[key].path , result[key].routers);
                        for(let item of arr){
                            store.commit("pageAdd" , [item.path , item.defaultData]);
                        }
                    }
                    Vue.nextTick(()=>{
                        $('#side-menu').metisMenu({
                            preventDefault: true,
                        });
                    });
                }    
            });
        },
        computed : {
            count(){
                return this.$store.state.count
            }
        },
        store
    });


    module.exports = SideBar;
</script>