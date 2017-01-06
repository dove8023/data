/* 首页相关路由处理 */

const fs = require("fs");
const path = require("path");


module.exports = (Router) =>{

	/* GET home page. */
	Router.get('/', function(req, res, next) {
		res.render('index');
	});

	return Router;
}
