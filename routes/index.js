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

	return Router;
}
