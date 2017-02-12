/* 首页相关路由处理 */

const fs = require("fs");
const path = require("path");
const Config = require("../config/");

module.exports = (Router) =>{

	/* GET home page. */
	Router.get('/', function(req, res, next) {
		res.render('index');
	});

    Router.get("/getConfig" , (req , res , next)=>{
        res.json(Config);
    });

    Router.get("/performance/error_One" , (req , res , next)=>{
        console.log(req.query);
        res.json({
            components : {
                date_picker : {
                    show : true,
                    defaultDate : 1
                },
                flexible_btn:[
                    {"content":"<a href=\"javascript:void(0)\">导出</a>","preMethods":["excel_export"]}
                ],
                filter_select:[{
                    "title":"类型",
                    "filter_key":"filter_key",
                    "groups":[{
                        "key":"ITEM",
                        "value":"ITEM汉字"
                    },{
                        "key":"SKU","value":"SKU汉字"
                    }]
                },{
                    "title":"指标",
                    "filter_key":"filter_key2",
                    "groups":[{
                        "key":"a",
                        "value":"ITEM汉字aaa"
                    },{
                        "key":"b","value":"SKU汉字bbb"
                    }]
                }]
            }
        })
    });

    Router.get("/performance/error_Two" , (req , res , next)=>{
        res.send("ok , Two");
    });

	return Router;
}
