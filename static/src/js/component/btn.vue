<template>
    <div class="btns">
        <button class="btn btn-default flexible_btn" v-for="item in flexible_btn" v-html="item.content"></button>
    </div>
</template>
<style>
    .flexible_btn{margin: 0 5px;padding: 0;box-sizing: border-box;}
    .flexible_btn a{text-decoration: none;color: #333;padding: 6px 12px;display: block;}
    .flexible_btn a:hover{text-decoration: none;color: #333;}
    .btns{
        display: inline-block;
    }
</style>
<script>
/*
 * 组件说明
 * 名称：万能按钮组件
 * 数据来源：flexible_btn
 * 详细：为导出、查看全部或者其他的自定义行为的按钮提供基础，组件内预置了一个导出的函数，后台配置信息可以在customMethods中写函数的字符串，前端直接用eval解析
 */

let Vue = require("Vue");

export default {
    data (){
        return {
            flexible_btn : []
        }
    },
    props : {
        config: {
            type : Object,
            required: true,
            default(){
                return {
                    flexible_btn : []
                }
            }
        },
    },
    watch : {
        config : {
            handler(newVal , oldVal){
                this.flexible_btn = this.config.flexible_btn || [];
            },
            deep : true
        }
    },
    mounted(){

        
    },
    methods : {

    },
    updated(){
        
    }
}

</script>