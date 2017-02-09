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
                        "value":"ITEM"
                    },{
                        "key":"SKU","value":"SKU"
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
