<template>
    <div class="filter_select" v-show="Arr.length != 0">
        <div class="filter_group" id="filter_group_0_0">
            <div class="group" v-for="item in Arr"> 
                <strong>{{item.title}}：</strong>
                <div class="btn_group">
                    <button @click="onclick($event , item.filter_key , obj.key)" v-for="(obj , index) in item.groups" v-bind:class="{active:index==0}">{{obj.value}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.filter_select {
    font-size: 0;
    margin: 0 0 12px;
    display: inline-block;
}

.filter_select .filter_group {
    display: inline-block;
    vertical-align: middle;
    margin-right: 25px;
}

.filter_select .filter_group .group {
    display: inline-block;
    vertical-align: middle;
    margin-left: 25px;
    position: relative;
}

.filter_select .filter_group .group:first-child {
    margin-left: 0;
}

.filter_select .filter_group .group>strong {
    font-size: 12px;
    display: inline-block;
    vertical-align: middle;
}

.filter_select .filter_group .group .btn_group {
    font-size: 0;
    display: inline-block;
    vertical-align: middle;
}

.filter_select .filter_group .group .btn_group:hover button {
    border-color: #bbb;
}

.filter_select .filter_group .group .btn_group button {
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #cacaca;
    color: #333;
    padding: 4px 12px;
    background: #fff;
    font-size: 12px;
    outline: none;
    margin-left: -1px;
    transition: all ease 0.2s;
    -webkit-transition: all ease 0.2s;
}

.filter_select .filter_group .group .btn_group button:hover {
    background: #f5f5f5;
}

.filter_select .filter_group .group .btn_group button:first-child {
    border-radius: 2px 0 0 2px;
    margin-left: 0;
}

.filter_select .filter_group .group .btn_group button:last-child {
    border-radius: 0 2px 2px 0;
}

.filter_select .filter_group .group .btn_group button.active {
    background: #3389d4;
    border: 1px solid #3389d4;
    color: #fff;
}

.filter_select .filter_group .group .btn_group select {
    font-size: 12px;
    outline: none;
    padding: 0;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
    height: 27px;
    line-height: 27px;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}

.filter_select .filter_group .group .btn_group select option {
    font-size: 12px;
}

.filter_select .filter_group .group .btn_group .cell_select {
    display: inline-block;
    vertical-align: middle;
    margin-left: 25px;
}

.filter_select .filter_group .group .btn_group .cell_select:first-child {
    margin-left: 0;
}

.multi_option_show .panel-body ul {
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    height: 408px;
}

.multi_option_show .panel-body ul li {
    cursor: pointer;
    background: #fff;
    transition: all ease 0.2s;
    -webkit-transition: all ease 0.2s;
    padding: 0 8px;
    line-height: 32px;
}

.multi_option_show .panel-body ul li:hover {
    background: rgba(0, 0, 0, 0.1);
}

.multi_option_show .panel-body ul li.active {
    background: #3389d4;
    color: #fff;
}
</style>
<script>

    let $ = require("jQuery");
    export default {
        data(){
            return {
                Arr : []
            }
        },
        props : {
            config : {
                require : true,
                type    : Object
            },
            change : Function
        },
        watch : {
            config(newVal , oldVal){
                this.Arr = this.config.filter_select || [];
            }
        },
        methods : {
            onclick (ev , key , value){
                let that = $(ev.target);
                if(that.hasClass("active"))
                    return;

                that.parent().find("button").removeClass("active");
                that.addClass("active");
                console.log(that.html() , key , value);
                this.$emit("change" , key , value);
            }
        },
        updated(){
            //更新结束,传递默认参数
            if(!this.config.filter_select){
                return;
            }
            
            let Arr = [];
            for(let item of this.config.filter_select){
                let obj = {};
                obj[item.filter_key] = item.groups[0].key;
                Arr.push(obj);
            }
            this.$emit("ready" , Arr);
        },
        mounted(){
        }
    }
</script>