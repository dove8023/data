<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading"> 
                    <strong>{{data.title}}</strong>
                    <div class="head_group_con clearfix navbar-right">
                        <m-date :config="pageComponents" @ready="componentReady" @change="reload"></m-date>
                        <m-btn :config="pageComponents" @ready="componentReady"></m-btn>
                    </div>
                </div>
                <div class="panel-body">
                    <m-filterbtn :config="pageComponents" @ready="componentReady"></m-filterbtn>
                    <div class="table_con table-responsive" id="table_1">
                        <table class="table table-bordered table-condensed table-hover" role="grid" aria-describedby="dataTables_info">
                            <thead>
                                <tr>
                                    <th>预计返利金额 <i style="opacity: 0.8;cursor: pointer" class="fa fa-question-circle-o"></i></th>
                                    <th>预计获利人次 <i style="opacity: 0.8;cursor: pointer" class="fa fa-question-circle-o"></i></th>
                                    <th>已取消返利金额 <i style="opacity: 0.8;cursor: pointer" class="fa fa-question-circle-o"></i></th>
                                    <th>返利到账金额 <i style="opacity: 0.8;cursor: pointer" class="fa fa-question-circle-o"></i></th>
                                    <th>预计返利订单数 <i style="opacity: 0.8;cursor: pointer" class="fa fa-question-circle-o"></i></th>
                                    <th>返利到账订单数 <i style="opacity: 0.8;cursor: pointer" class="fa fa-question-circle-o"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="0"> <span> 1,083.34 </span> </td>
                                    <td rowspan="0"> <span> 739 </span> </td>
                                    <td rowspan="0"> <span> 1,175.08 </span> </td>
                                    <td rowspan="0"> <span> 1,365.21 </span> </td>
                                    <td rowspan="0"> <span> 865 </span> </td>
                                    <td rowspan="0"> <span> 1,781 </span> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .panel-heading{
        line-height: 30px;
    }
</style>
<script>
    let Vue = require("Vue");
    let $   = require("jQuery");
    // let store=require("../store");
    let DatePicker = require("./datePicker.vue");
    let Btn        = require("./btn.vue");
    let FilterBtn  = require("./filterBtn.vue");


    //需要传递默认参数的组件
    let DefaultParam = ["date_picker" , "filter_select"];

    module.exports = {
        data(){
            return {
                path:"",
                api:[],
                argv : {},
                pageComponents : {},
                defaultParam : {
                    total : 0,    //总共默认参数个数
                    count : 0,    //就绪默认参数个数
                    defaultParam : ["date_picker" , "filter_select"]        //需要传递默认参数的组件
                }
            }
        },
        components : {
            "m-date" : DatePicker,
            "m-btn"  : Btn,
            "m-filterbtn" : FilterBtn
        },
        created(){
            // console.log(this.data.query_api);
            this.getData();
        },
        props : ["data"],
        methods:{
            getData(data){
                let _this = this;                
                $.ajax({
                    url : _this.data.query_api,
                    type: "get",
                    data : data || {},
                    success(result){
                        // console.log(result);
                        _this.pageComponents = result.components;
                        // _this.date_picker = Components.date_picker || {};
                    }
                });
            },
            getDataByParam(data){
                console.log("param" ,  data);
                let _this = this;
                $.ajax({
                    url : _this.data.query_api,
                    type: "get",
                    data : data || {},
                    success(result){
                        console.log(result);
                    }
                });
            },
            componentReady(arr){
                //所有子组件都执行，没有的给空
                if(arr && arr.length){
                    for(let item of arr){
                        this.argv[item.key] = item.value;
                    }
                }
                this.defaultParam.count++;
                if(this.defaultParam.count == this.$children.length){
                    console.log('default param reday' , this.argv);
                }
                
            },
            reload(key , value){
                this.argv[key] = value;
                this.getDataByParam(this.argv);
            },
        },
        mounted(){
            console.log(this);
        }
    };
</script>