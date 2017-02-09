<template>
    <div 
    class="btn-group date_picker" 
    :id = "ID"
    v-show="CONFIG.show"
    >
        <input type="text" class="form-control" />
        <span class="glyphicon glyphicon-calendar fa fa-calendar"></span>
    </div>
</template>
<style>
.date_picker{
    width: 200px;
}
.date_picker input{display: inline-block;vertical-align: middle;}
.date_picker span{font-size: 12px;margin-left: -20px;position: absolute;right: 5px;top: 50%;transform: translateY(-50%);-webkit-transform: translateY(-50%);}
.global_date {float: right;margin: 0 20px 10px 0;}
.global_date::after {content:'';clear:both;}
</style>
<script>

/*
 * 组件说明
 * 名称：时间控件
 * 数据来源：date_picker
 * 详细：date_picker.show -> 控制组件是否显示
        date_picker.defaultData -> 1:选择单天  7:任意选择
 */

var Vue = require('Vue');
var $ = require('jQuery');
let moment = require("moment");

let Today  = moment(new Date()).format('YYYY-MM-DD'),
    LastDay= moment(+new Date() - 1000*60*60*24).format('YYYY-MM-DD');

export default {
    data() {
        return {
            ID : "datePicker_" + Math.random().toString(32).substr(2,8),
            el : null,
            CONFIG : {
                defaultDate : 7,
                show : false
            }
        }
    },
    methods: {
    },
    props : {
        change: Function,
        config: {
            type : Object,
            required: true,
            default(){
                return {
                    date_picker : {
                        defaultDate : 7,
                        show : false
                    }
                }
            }
        }
    },
    watch : {
        config : {
            handler(newVal , oldVal){
                let _this = this;
                this.CONFIG = this.config.date_picker || {
                    defaultDate : 7,
                    show : false
                };
                let el = this.el;
                el.daterangepicker({
                    singleDatePicker: this.config.date_picker.defaultDate == 1 ? true : false,
                    showDayUnit : false,
                    showDropdowns: false,
                    startDate : LastDay,
                    endDate   : LastDay,
                    opens : "left",
                    "alwaysShowCalendars": true,
                    ranges : {
                        "昨天" : [
                            LastDay,
                            Today
                        ]
                    },
                    "locale": {
                        "format": "YYYY-MM-DD",
                        "separator": " 至 ",
                        "applyLabel": "确定",
                        "cancelLabel": "取消",
                        "customRangeLabel": "Custom",
                        "daysOfWeek": ["周日","周一","周二","周三","周四","周五","周六"],
                        "monthNames": ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
                        "firstDay": 1
                    }
                });

                el.on("apply.daterangepicker" , (ev , picker)=>{
                    _this.$emit("change" , "date" , {
                        "startDate" : picker.startDate.format('YYYY-MM-DD'),
                        "endDate"   : picker.endDate.format('YYYY-MM-DD')
                    });
                });
            },
            deep : true
        }
    },
    mounted(){
        this.el = $("#"+this.ID).find("input");
    }
};
</script>